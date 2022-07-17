<template>
    <div class="mt-4 mx-2">
        <div v-for="project in this.projects" :key="project.name">
            <Project :info="project"></Project>
        </div>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
    name: 'ProjectManagePage',
    components:{Project},
    props: {
    },

    data(){
        return {
            projects:[
                {
                    name:"A Project!",
                    type:"image",
                    dir:"",
                    dirDump:"F:/Porn",
                    action:'mv'
                },
                {
                    name:"Another Project!",
                    type:"tweet",
                    dir:""
                }
            ]
        }
    }
}
</script>

