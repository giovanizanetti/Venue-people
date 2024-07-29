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
import { generateImage } from '@/mockdata/users'
import { useI18n } from 'vue-i18n'
import { capitalize } from 'vue'
import { useToast } from 'vue-toast-notification'

const toast = useToast()

const { t } = useI18n()

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
  image: generateImage(),
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

  let message

  if (isNewUser) {
    data = await useUsers().addUser(formData.value)
    message = 'User updated succcessfully'
  } else {
    data = await useUsers().updateUser(formData.value)
    message = 'User created succcessfully'
  }
  toast.open({
    message,
    position: 'top-right'
  })

  if (data) router.push({ name: ROUTE.contactList })
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
    :loading="loading"
    @submit="onSubmit"
    @cancel="onCancel"
  >
    <template #body>
      <div class="profile-picture">
        <UserAvatar :src="formData?.image" size="medium" />
        <carbon:edit class="w-4 h-4 icon" />
      </div>

      <section class="form-fields-container">
        <DoubleFieldFormContainer>
          <AppInput
            name="fullname"
            :label="t('fullName')"
            v-model="formData.fullName"
          />

          <AppInput
            name="initials"
            :label="capitalize(`${t('initials')} *`)"
            :validation="VALIDATION.required"
            v-model="formData.initials"
          />
        </DoubleFieldFormContainer>

        <AppInput
          name="display-name"
          :label="capitalize(t('displayName'))"
          v-model="formData.displayName"
        />

        <AppInput
          name="role"
          :label="capitalize(t('role'))"
          v-model="formData.xc"
        />
        <DoubleFieldFormContainer :maxBreakpointColumn="600">
          <AppInput
            type="email"
            name="email"
            :label="capitalize(`${t('email')} *`)"
            v-model="formData.email"
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
        </DoubleFieldFormContainer>

        <AppInput
          name="addressLineOne"
          :label="capitalize(t('street'))"
          v-model="formData.address.addressLineOne"
        />

        <AppInput
          name="addressLineTwo"
          v-model="formData.address.addressLineTwo"
          :style="{ marginTop: '-3rem' }"
        />

        <DoubleFieldFormContainer>
          <AppInput
            name="city"
            :label="capitalize(t('city'))"
            v-model="formData.address.city"
          />
          <AppInput
            name="postal-code"
            :label="capitalize(t('postalcode'))"
            v-model="formData.address.postalCode"
          />
        </DoubleFieldFormContainer>

        <AppInput
          class="input"
          name="country"
          :label="capitalize(t('country'))"
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
  position: relative;

  .icon {
    top: 2rem;
    right: 1rem;
    background: $white-1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 1px solid black;
  }

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
