<template>
  <nav class="bottom-menu">
    <ul class="inner-container">
      <img class="logo" width="40" height="40" src="../assets/Constell-logo.png" />
      <span>
        <li>
          <mdi:content-paste class="w-5 h-5" />
        </li>
        <li>
          <mdi:account-circle le class="w-5 h-5" background />
        </li>
      </span>
      <span>
        <li>
          <mdi:euro class="w-5 h-5" />
        </li>
        <li @click="goToHomePage">
          <mdi:home class="w-5 h-5" />
        </li>
      </span>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHomePage = () => {
  router.push('/')
}
</script>
<style lang="scss" scoped>
.bottom-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: $grey-light-1;
  height: 60px;
  border: $thin-light-1;
  margin-top: 10rem;
  z-index: 2;

  .inner-container {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    li:hover {
      color: $grey-medium-1;
      cursor: pointer;
    }

    span {
      display: flex;
      justify-content: space-between;
      width: 6rem;
    }

    .logo {
      position: absolute;
      top: -1.3rem;
      background: white;
      width: 50px;
      height: 48px;
      padding: 15px;
      border-radius: 50%;
      border: solid black 1px;
    }
  }
}
</style>
