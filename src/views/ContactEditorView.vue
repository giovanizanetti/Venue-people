<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ROUTE, VALIDATION } from '@/constants'
import AppInput from '@/components/AppInput.vue'
import DoubleFieldFormContainer from '@/components/DoubleFieldFormContainer.vue'
import AppForm from '@/components/AppForm.vue'
import { useUsers } from '@/stores/users'
import { storeToRefs } from 'pinia'
import type { IUser } from '@/mockdata/users'
import AppLoading from '@/components/AppLoading.vue'

const route = useRoute()
const router = useRouter()

const { loading } = storeToRefs(useUsers())

const formData = ref<null | IUser>(null)

getUser()

async function getUser() {
  const { id } = route.params
  const user = await useUsers().getUserById(Number(id))

  if (user) formData.value = user
}

const onSubmit = async (data: IUser) => {
  if (formData.value) {
    const data = await useUsers().updateUser(formData.value)
    if (data) router.push({ name: ROUTE.contactList })
  }

  //TODO: Display a toast or other feedback to the user

}

const onCancel = () => {
  // formRef.value.reset();
  router.push('./contact-list')
}
</script>

<template>
  <AppLoading v-if="loading" :loading="loading" />

  <AppForm v-if="formData" @submit="onSubmit" :loading="loading">
    <template #body>
      <div class="profile-picture">
        <UserAvatar :src="formData?.image" size="medium" />
      </div>

      <section class="form-fields-container">
        <DoubleFieldFormContainer>
          <AppInput
            name="fullname"
            label="Full name"
            v-model="formData.fullName"
          />

          <AppInput
            name="initials"
            label="Initials *"
            v-model="formData.initials"
          />
        </DoubleFieldFormContainer>

        <AppInput
          name="display-name"
          label="Display name"
          v-model="formData.displayName"
        />

        <AppInput name="role" label="Role" v-model="formData.xc" />

        <AppInput
          type="email"
          name="email"
          label="Email *"
          v-model="formData.email"
          :validation-visibility="formData.email?.length > 3 && 'live'"
          :validation="VALIDATION.email"
        />

        <AppInput
          name="phoneCountryPrefix"
          v-model="formData.phoneCountryPrefix"
          :validation-visibility="
            formData.phoneCountryPrefix?.length > 2 && 'live'
          "
          :validation="'required'"
        />
        <AppInput
          name="phone-number"
          v-model="formData.phoneNumber"
          :validation="VALIDATION.phoneNumber"
        />

        <AppInput
          name="addressLineOne"
          label="Street"
          v-model="formData.address.addressLineOne"
        />
        <AppInput
          name="addressLineTwo"
          v-model="formData.address.addressLineTwo"
          :style="{ marginTop: '-3rem' }"
        />

        <DoubleFieldFormContainer>
          <AppInput name="city" label="City" v-model="formData.address.city" />
          <AppInput
            name="postal-code"
            label="Postal Code"
            v-model="formData.address.postalCode"
          />
        </DoubleFieldFormContainer>

        <AppInput
          class="input"
          name="country"
          label="Country"
          v-model="formData.address.country"
        />
      </section>
      <!-- <pre wrap>{{ value }}</pre> -->
    </template>
  </AppForm>
</template>

<style scoped lang="scss">
.profile-picture {
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: $tablet-sm) {
    margin-left: -$margin-sm;
    flex: 1;
    margin: 1rem;
    margin-top: $margin-xl;
  }

  :deep(.avatar) {
    border: $thin-dark-1;
  }
}

.form-fields-container {
  flex: 5;
  margin-top: $margin-xl;
}
</style>
