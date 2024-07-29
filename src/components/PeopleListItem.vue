<script setup lang="ts">
import { BREAKPOINTS } from '@/styles/variables'
import type { IUser } from '@/mockdata/users'
import { useWindowResize } from '@/composables/useWindowResize'
import { computed } from 'vue'
import { EMIT, ROUTE } from '@/constants'
import { useRouter } from 'vue-router'
import { copyToClipboard } from '@/helpers/strings'
import { useI18n } from 'vue-i18n'

const route = useRouter()
const { width } = useWindowResize()
const { t } = useI18n()

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
  emit(EMIT.remove, Number(props.user.id))
}

const copyPhone = () =>
  `${copyToClipboard(props.user.phoneCountryPrefix)} ${copyToClipboard(
    props.user.phoneNumber
  )}`
</script>

<template>
  <li @click="goToUserEditor" :class="['list-item', ...[dynamicClasses]]">
    <span class="avatar">
      <UserAvatar :src="user.image" />
    </span>

    <div v-if="width <= BREAKPOINTS.desktop" class="user-info-mobile">
      <div class="username">
        <span class="user-info-mobile__name">
          {{ props.user.displayName }}
        </span>
        <span class="xs user-info-mobile__role">{{ user.xc }}</span>
      </div>

      <div class="contact">
        <span
          v-tooltip="t('clickToCopyType', { type: t('email') })"
          v-if="width >= BREAKPOINTS.tabletSm"
          @click.stop="copyToClipboard(user.email)"
          class="email user-info-mobile__item"
        >
          {{ user.email }}
          <span class="divisor">|</span>
        </span>

        <span
          @click.stop="copyPhone()"
          class="phone phone__prefix user-info-mobile__item"
        >
          {{ user.phoneCountryPrefix }}
        </span>
        <span
          v-tooltip="t('clickToCopyType', { type: t('phoneNumber') })"
          class="phone"
          @click.stop="copyPhone()"
        >
          {{ user.phoneNumber }}
        </span>
      </div>
    </div>

    <div v-else class="user-info-larger-screen">
      <div class="user-name">
        <span class="user-name__display-name">{{
          props.user.displayName
        }}</span>
        <span class="">{{ props.user.fullName }}</span>
      </div>

      <span>{{ user.xc }}</span>

      <span
        v-tooltip="t('clickToCopyType', { type: t('email') })"
        @click.stop="copyToClipboard(user.email)"
      >
        {{ user.email }}
      </span>

      <span v-tooltip="t('clickToCopyType', { type: t('phoneNumber') })">
        <span class="phone phone__prefix" @click="copyPhone">
          {{ user.phoneCountryPrefix }}
        </span>

        <span
          class="phone"
          @click.stop="copyToClipboard(user.phoneNumber)"
          @click="copyPhone"
        >
          {{ user.phoneNumber }}
        </span>
      </span>
    </div>
    <span class="team-icon">
      <PeopleListItemTeamIcon :user="user" />
    </span>
    <span
      v-tooltip="t('deleteType', { type: t('user') })"
      class="remove-team-member"
      @click.stop="removeUser"
    >
      <carbon:trash-can class="w-4 h-4" />
    </span>
  </li>
</template>

<style lang="scss" scoped>
$phone-leter-spacing: 1px;

@mixin phone {
  .phone {
    font-weight: 300;
    letter-spacing: $phone-leter-spacing;
    &__prefix {
      margin-right: $margin-xs;
    }
  }
}

.list-item {
  font-size: $typography-1;
  max-width: 100%;
  display: flex;
  align-items: center;
  list-style-type: none;
  font-family: 'Space Grotesk', sans-serif;
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
  .user-info-mobile {
    flex: 7;
    display: flex;
    flex-direction: column;

    .username {
      .user-info-mobile {
        &__name {
          font-weight: 500;
        }
        &__role {
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
      @include phone;
    }

    .divisor {
      margin: 0 0.3rem;
    }
  }

  .user-info-larger-screen {
    flex: 7;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;

    .user-name {
      display: flex;
      flex-direction: column;
      &__display-name {
        font-weight: 500;
      }
    }

    .phone {
      font-weight: 300;
      letter-spacing: $phone-leter-spacing;
      &__prefix {
        margin-right: $margin-xs;
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
