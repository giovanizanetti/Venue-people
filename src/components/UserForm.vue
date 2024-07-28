<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE, VALIDATION } from '@/constants'
import { useUsers } from '@/stores/users'
import { storeToRefs } from 'pinia'
import type { IUser } from '@/mockdata/users'
import AppInput from '@/components/AppInput.vue'
import DoubleFieldFormContainer from '@/components/DoubleFieldFormContainer.vue'
import AppForm from '@/components/AppForm.vue'
import AppLoading from '@/components/AppLoading.vue'
import PhoneNumberInput from './PhoneNumberInput.vue'

const props = withDefaults(
  defineProps<{
    user?: IUser | null
  }>(),
  {
    user: null
  }
)
const initialState: IUser = {
  fullName: '',
  displayName: '',
  initials: '',
  email: '',
  phoneNumber: '',
  phoneCountryPrefix: '+31',
  teamIds: [],
  image: '',
  address: {
    id: 7, //TODO: CHANGE
    addressLineOne: '',
    addressLineTwo: '',
    city: '',
    country: '',
    postalCode: '',
    state: null
  },
  isEmployee: true,
  xc: '',
  userPermissions: []
}

const router = useRouter()
const { loading } = storeToRefs(useUsers())
const formData = ref<null | IUser>(null)

onMounted(async () =>
  props.user
    ? (formData.value = props.user)
    : (formData.value = { ...initialState })
)

const onSubmit = async () => {
  if (!formData.value) return
  const isNewUser = !props.user

  let data

  if (isNewUser) {
    data = useUsers().addUser(formData.value)
  } else {
    data = await useUsers().updateUser(formData.value)
  }

  if (data) router.push({ name: ROUTE.contactList })

  //TODO: Display a toast or other feedback to the user if I have time
}

const onCancel = () => {
  formData.value = props.user
  router.push({ name: ROUTE.contactList })
}
</script>

<template>
  <AppLoading v-if="loading" :loading="loading" />

  <AppForm
    v-if="formData"
    @submit="onSubmit"
    :loading="loading"
    @cancel="onCancel"
  >
    <template #body="{ value }">
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
            :validation-visibility="'live'"
            :validation="VALIDATION.required"
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
          :validation-visibility="'live'"
          :validation="VALIDATION.email"
        />

        <PhoneNumberInput
          :phoneNumber="formData.phoneNumber"
          :phoneCountryPrefix="formData.phoneCountryPrefix"
          @phone-number-change="
            (value) => formData && (formData.phoneNumber = value)
          "
          @prefix-change="
            (value) => formData && (formData.phoneCountryPrefix = value)
          "
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
  margin-left: -5px;
  margin-top: $margin-xl;
}
</style>
