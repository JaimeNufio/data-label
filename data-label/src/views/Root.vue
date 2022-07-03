<template>
  <div class="">
    <LandingPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage/LandingPage.vue'

export default {
  name: 'Root',
  components: {
    LandingPage
  }
}
</script>