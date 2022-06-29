<template>
  <div class="">
    <LandingPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Root',
  components: {
    LandingPage
  }
}
</script>

    LandingPage