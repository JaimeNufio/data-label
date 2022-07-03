<template>

<!-- <div class="mx-auto max-w-xl"> -->
<div class="mx-auto  max-w-3xl">
  <DataDisplay data="" class="mt-5"></DataDisplay>

</div>


</template>

<script>
import DataDisplay from './DataDisplay.vue'
export default {
  components:{ DataDisplay},
  name: 'LandingPage',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
