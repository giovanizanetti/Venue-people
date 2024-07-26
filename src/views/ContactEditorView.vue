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
    <section class="form-body">
      <div class="profile-picture">
        <UserAvatar :src="formData.image" size="medium" />
      </div>

      <section class="form-fields-container">
        <div class="field-section-multiple">
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
        </div>

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
        <!--TODO: Check input group-->
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
        <!---->
        <AppInput name="street" label="Street" v-model="formData.street" />
        <div class="field-section-multiple">
          <AppInput name="city" label="City" v-model="formData.city" />
          <AppInput
            name="postal-code"
            label="Postal Code"
            v-model="formData.postalCode"
          />
        </div>

        <AppInput
          type="text"
          class="input"
          name="country"
          label="Country"
          v-model="formData.country"
        />
      </section>
    </section>
    <pre wrap>{{ value }}</pre>
    <section class="form-actions">
      <button type="button" @click="onCancel" class="cancel-button">
        Cancel
      </button>
    </section>
  </FormKit>
</template>

<style scoped lang="scss">
.form-body {
  display: flex;
  flex-direction: column;
  margin: $margin-sm;

  // $tablet-sm

  @media screen and (min-width: $mobile) {
    margin: $margin-md;
  }

  @media screen and (min-width: $tablet-sm) {
    flex-direction: row;
    .profile-picture {
      flex: 1;
      margin-top: $margin-xl;
    }
    .form-fields-container {
      flex: 5;
      margin-top: $margin-xl
    }
  }

  .profile-picture {
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (man-width: $mobile) {
      margin-top: -$margin-sm;
    }
    :deep(.avatar) {
      border: $thin-dark-1;
    }
  }
  .form-fields-container {
    .field-section-multiple {
      display: flex;
      justify-content: center;
      margin-bottom: -$margin-sm;
      & > :first-child {
        margin-right: $margin-sm;
        @media screen and (min-width: $mobile) {
          // margin-right: $margin-md;
        }
      }
    }
  }
}

:deep(.formkit-form) {
  // margin: $margin-xxl $margin-lg;
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
