<template>

<!-- <div class="mx-auto max-w-xl"> -->
<div class="mx-auto max-w-4xl">
  <DataDisplay data="" :info="this.$route.params" class="mt-5"></DataDisplay>

</div>


</template>

<script>
import DataDisplay from './DataDisplay.vue'

export default {
  components:{ DataDisplay},
  name: 'LabelingPage',
  props: {
    dir:{
      type: String,
      default() {
        return "/missing"
      }
    }
  },

  data(){
    return {
      projectDir:""
    }
  },

  mounted(){
    // this.projectDir = this.$route.params.dir
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
