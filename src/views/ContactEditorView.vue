<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { VALIDATION } from '@/constants'
import AppInput from '@/components/AppInput.vue'
import DoubleFieldFormContainer from '@/components/DoubleFieldFormContainer.vue'
import AppForm from '@/components/AppForm.vue'

const router = useRouter()

const initalState = {
  fullname: '',
  initials: '',
  displayName: '',
  role: '',
  email: '',
  phoneCountryPrefix: '',
  phoneNumber: '',
  street: '',
  city: '',
  postalCode: '',
  country: '',
  image: 'https://xsgames.co/randomusers/assets/avatars/male/24.jpg'
}

const formData = ref({ ...initalState })

const onSubmit = (data: typeof initalState) => {
  //TODO: Display a toast or other feedback to the user

  console.log(data.fullname)
  // router.back()
}

const onCancel = () => {
  // formRef.value.reset();
  router.push('./contact-list')
}
</script>

<template>
  <AppForm :data="initalState" @submit="onSubmit">
    <template #body="{ value }">
      <div class="profile-picture">
        <UserAvatar :src="formData.image" size="medium" />
      </div>

      <section class="form-fields-container">
        <DoubleFieldFormContainer>
          <AppInput
            name="fullname"
            label="Full name *"
            v-model="formData.fullname"
          />

          <AppInput
            name="initials"
            label="Initials"
            v-model="formData.initials"
          />
        </DoubleFieldFormContainer>

        <AppInput
          name="display-name"
          label="Display name"
          v-model="formData.displayName"
        />

        <AppInput name="role" label="Role" v-model="formData.role" />

        <AppInput
          type="email"
          name="email"
          label="Email"
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

        <AppInput name="street" label="Street" v-model="formData.street" />
        <DoubleFieldFormContainer>
          <AppInput name="city" label="City" v-model="formData.city" />
          <AppInput
            name="postal-code"
            label="Postal Code"
            v-model="formData.postalCode"
          />
        </DoubleFieldFormContainer>

        <AppInput
          type="text"
          class="input"
          name="country"
          label="Country"
          v-model="formData.country"
        />
      </section>
      <pre wrap>{{ value }}</pre>
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
