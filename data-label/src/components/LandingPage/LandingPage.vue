<template>

<div class="m-3.5">
  Landing Page
  <DataDisplay data="CurrentElement"></DataDisplay>
  <ButtonRow></ButtonRow>

</div>


</template>

<script>
import DataDisplay from './DataDisplay.vue'
import ButtonRow from './ButtonRow.vue'
export default {
  components:{ DataDisplay, ButtonRow },
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
