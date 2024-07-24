<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { VALIDATION } from '@/constants'
import AppInput from '@/components/AppInput.vue'

const router = useRouter()

const formRef = ref(null)

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

  console.log(data)
  router.back()
}

const onCancel = () => {
  if (formRef.value) {
    // formRef.value.reset();
    router.push('./contact-list')
  }
}
</script>

<template>
  <FormKit
    type="form"
    ref="formRef"
    submit-label="Save"
    @submit="onSubmit"
    #default="{ value }"
  >
    <UserAvatar :src="formData.image" size="medium" />
    <AppInput />

    bananan
    <AppInput
      type="text"
      name="fullname"
      label="Fullname"
      v-model="formData.fullname"
    />
    <FormKit
      type="text"
      class="input"
      name="initials"
      label="Initials"
      v-model="formData.initials"
    />
    <FormKit
      type="text"
      class="input"
      name="display-name"
      label="Display name"
      v-model="formData.displayName"
    />
    <FormKit type="text" name="role" label="Role" v-model="formData.role" />
    <FormKit
      type="email"
      class="input"
      name="email"
      label="Email"
      v-model="formData.email"
      validation-visibility="live"
      :validation="VALIDATION.email"
    />
    <FormKit
      type="text"
      class="input"
      name="phoneCountryPrefix"
      label="Prefix"
      v-model="formData.phoneCountryPrefix"
      validation-visibility="live"
      :validation="'required'"
    />
    <FormKit
      type="text"
      class="input"
      name="phone-number"
      label="Phone Number"
      v-model="formData.phoneNumber"
      validation-visibility="live"
      :validation="VALIDATION.phoneNumber"
    />
    <FormKit
      type="text"
      class="input"
      name="street"
      label="Street"
      v-model="formData.street"
    />
    <FormKit type="text" name="city" label="City" v-model="formData.city" />
    <FormKit
      type="text"
      class="input"
      name="postal-code"
      label="Postal Code"
      v-model="formData.postalCode"
    />
    <FormKit
      type="text"
      class="input"
      name="country"
      label="Country"
      v-model="formData.country"
    />
    <pre wrap>{{ value }}</pre>
    <div class="form-actions">
      <button type="button" @click="onCancel" class="cancel-button">
        Cancel
      </button>
    </div>
  </FormKit>
</template>

<style scoped lang="scss">
// .input-outter {
//   background: purple;
//   border: 2px sooid blue;
// }

:deep(.input-inner) {
  background: orange;
  border: 2px sooid blue;
}
.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #d32f2f;
}
</style>
