<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUsers } from '@/stores/users'
import AppLoading from './AppLoading.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE } from '@/constants'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toast-notification'

const toast = useToast()

const { t } = useI18n()

const { users, loading, success } = storeToRefs(useUsers())
const router = useRouter()

onMounted(async () => await useUsers().fetchUsers())

const isFirst = (index: number) => index == 0
const isLast = (index: number) => users.value.length == index + 1

const removeUser = async (id: number) => {
  useUsers().deleteUser(id)
  toast.open({
    message: 'User deleted successfully',
    position: 'top-right',
    type: 'success'
  })

  reloadKey.value++ //Workaround for the reactivity
}

const reloadKey = ref(0)

const goToAddUserForm = () => router.push({ name: ROUTE.addUser })
</script>

<template>
  <AppLoading v-if="!success" :loading="loading" />

  <template v-if="success">
    <div class="users-wrapper">
      <AppHeading text="People" />
      <ul v-if="success && users?.length">
        <PeopleListItem
          v-for="(user, index) in users"
          :key="Number(user.id) + reloadKey"
          :user="user"
          :isLast="isLast(index)"
          :isFirst="isFirst(index)"
          @remove="removeUser"
        />
      </ul>

      <span v-if="!users?.length" class="message">{{ t('noPeopleYet') }}</span>
      <AppAddButton
        :tooltip="t('addNewType', { type: t('user') })"
        class="add"
        type="user"
        @click.stop="goToAddUserForm"
      />
    </div>
  </template>
</template>
<style lang="scss" scoped>
.users-wrapper {
  margin: 0;

  .heading {
    display: flex;
    align-items: center;
    @media screen and (max-width: $tablet-sm) {
      justify-content: center;
    }
  }

  .add:deep(.add) {
    margin-top: -0.5px;

    @media screen and (max-width: $tablet-sm) {
      justify-content: center;
    }
  }
  .message {
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
}
</style>
