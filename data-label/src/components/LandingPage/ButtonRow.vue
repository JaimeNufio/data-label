<template>
<div>
    ButtonRow
   <div v-for="option in options" :key="option.value">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="option.value">{{option.text}} ({{option.value}})</button>
   </div>
   <div class="p-5">
        <div>
            <label>Label</label>
            <input v-model="newLabel" />
        </div>    
        <div>
            <label >Value</label>
            <input v-model="newValue" />
        </div>   
    <button @click="addNewBtn">Add New Option</button>
   </div>
    
</div>   
</template>

<script>
export default {
    name: 'ButtonRow',
    props: {
        customOptions:{
            type:Array,
            default(){return []}
        }
    },

    data(){
        return{
            newLabel:"",
            newValue:"",
            addedLabels:[]
        }
    },

    computed:{
        options(){
            return [
                {
                    text:'Extra Negative',
                    value: -3,
                },
                            {
                    text:'Fairly Negative',
                    value: -2,
                },
                {
                    text:'Little Negative',
                    value: -1,
                },
                {
                    text:'Neutral',
                    value: 0,
                },
                {
                    text:'Extra Positive',
                    value: 3,
                },
                {
                    text:'Fairly Positive',
                    value: 2,
                },
                {
                    text:'Little Positive',
                    value: 1,
                },
            ].concat(this.addedLabels)
        }
    },

    methods: {
        addNewBtn() {

            //naive check on new label
            if (!this.newLabel || !this.newValue) return 

            //filter to see if button w/ that value already exists
            if (this.options.some(e => e['value'] == this.newValue)) return

            this.addedLabels.push({text:this.newLabel,value:this.newValue})
        },
        
    },


}



</script>

<style scoped>

</style>