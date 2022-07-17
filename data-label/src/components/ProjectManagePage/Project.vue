<template>
    <button @click="goToLabeling(info)" class="w-full mt-2 p-2 bg-gray-300 rounded-md text-left">
        <div class="font-bold text-xl">{{info.name.toUpperCase()}}</div>
        <div v-if="info.type=='image'" class="mt-2">Root Directory: <span class="italics">{{info.dir}}</span></div>
        <div class="text-xs">Type: {{info.type.toUpperCase()}}</div>
    </button>
</template>

<script>
export default {
    name: 'Project',
    props: {
        info:{
            type: Object,
            default(){
                return {
                name:" name",
                type:"type",
                dir:"",
                dirDump:""
            }}
        }
    },
    methods:{
        goToLabeling(info){
            this.$router.push({
                path:'/labeling',
                name:'Label',
                params:info
            })
        },
    }

}   


</script>