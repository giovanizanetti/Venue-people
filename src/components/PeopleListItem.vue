<script setup lang="ts">
import { BREAKPOINTS } from '@/styles/variables'
import type { IUser } from '@/mockdata/users'
import { useWindowResize } from '@/composables/useWindowResize'
import { computed } from 'vue'
import { EMIT, ROUTE } from '@/constants'
import { useRouter } from 'vue-router'
import { copyToClipboard } from '@/helpers/strings'

const route = useRouter()

const { width } = useWindowResize()

const emit = defineEmits<{
  (e: typeof EMIT.remove, id: number): void
}>()

const props = defineProps<{
  user: IUser
  isFirst: boolean
  isLast: boolean
}>()

const dynamicClasses = computed((): string[] => {
  const classes: string[] = []
  if (props.isFirst) classes.push('list-item__first')
  if (props.isLast) classes.push('list-item__last')
  return classes
})

const goToUserEditor = () => {
  route.push({
    name: ROUTE.contactEditor,
    params: {
      id: props.user.id
    }
  })
}

const removeUser = async () => {
  emit(EMIT.remove, props.user.id)
}
</script>

<template>
  <li @click="goToUserEditor" :class="['list-item', ...[dynamicClasses]]">
    <span class="avatar">
      <UserAvatar :src="user.image" />
    </span>
    <div class="user-info">
      <div class="username">
        <span class="user-info__name">
          {{ props.user.displayName
          }}<span
            ><!--TODO: display user full name for large screens--></span
          ></span
        ><span class="xs user-info__position">{{ user.xc }}</span>
      </div>

      <div class="contact">
        <span @click.stop="copyToClipboard(user.email)" v-if="width >= BREAKPOINTS.tabletMd" class="email user-info__item"
          >{{ user.email }} <span class="divisor">|</span></span
        >
        <span class="phone phone__prefix user-info__item">{{
          user.phoneCountryPrefix
        }}</span
        ><span @click.stop="copyToClipboard(user.phoneNumber)">{{ user.phoneNumber }}</span>
      </div>
    </div>
    <span class="team-icon">
      <PeopleListItemTeamIcon :user="user" />
    </span>
    <span class="remove-team-member" @click.stop="removeUser">
      <carbon:trash-can class="w-4 h-4" />
    </span>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  border-bottom: $thin-light-1;
  border-left: $thin-light-1;
  border-right: $thin-light-1;
  background-color: $grey-light-1;
  height: 64px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &__first {
    border-top: $thin-light-1;
    @media screen and (min-width: $tablet-sm) {
      border-top-left-radius: $radius-sm;
      border-top-right-radius: $radius-sm;
    }
  }

  &__last {
    @media screen and (min-width: $tablet-sm) {
      border-bottom-left-radius: $radius-sm;
      border-bottom-right-radius: $radius-sm;
    }
  }

  .avatar {
    flex: 1.5;
    margin-top: 4px;
    text-align: center;
    @media screen and (min-width: $tablet-md) {
      flex: 0.5;
    }
    @media screen and (min-width: $tablet-md) {
      flex: 1;
    }
  }
  .user-info {
    flex: 7;
    display: flex;
    flex-direction: column;

    .username {
      .user-info {
        &__name {
          font-weight: 500;
        }
        &__position {
          font-weight: 300;
        }
      }
    }
    .xs {
      margin-left: $margin-xs;
    }
    .contact {
      display: flex;
      align-items: center;
      color: $grey-medium-1;
      .phone {
        font-weight: 300;
        &__prefix {
          margin-right: $margin-xs;
        }
      }
    }

    @media screen and (max-width: $desktop) {
      .divisor {
        margin: 0 0.5rem;
      }
    }
    @media screen and (min-width: $desktop) {
      flex: 10;
      flex-direction: row !important;
      .divisor {
        display: none;
      }
      &__item {
        margin: 0 2rem;
      }
    }
  }

  .team-icon {
    flex: 2;
    cursor: default;
    display: flex;
    justify-content: center;

    @media screen and (max-width: $tablet-sm) {
      margin-right: $margin-md;
    }

    @media screen and (min-width: $desktop) {
      flex: 0.5;
    }
  }

  .remove-team-member {
    flex: 1.5;
    display: flex;
    justify-content: center;
    margin-right: -0.5rem;

    @media screen and (min-width: $desktop) {
      flex: 1;
    }
  }
}
</style>
