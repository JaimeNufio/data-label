<template>
<div>

    <div v-if="showNumbers" class=" flex flex-wrap justify-center overflow-y-scroll">
        <div :class="`m-0.5 my-2 `" v-for="option in options" :key="option.value">
            <!-- Numbers -->
            <button 
                @click="classify(option.value)"
                :class="`border-2 border-black min-w-100 text-white font-bold py-2 px-4 rounded bg-${option.color}-${option.force-200} hover:bg-${option.color}-${option.force}`"
                value="option.value">{{option.value}}</button>
        </div>
    </div>

    <div v-if="showEmojis" class=" flex flex-wrap justify-center overflow-y-scroll">
        <div :class="`m-0.5 my-2 `" v-for="emoji in emojis" :key="emoji.id">
            <!-- Numbers -->
            <button 
                :class="`border-2 border-black min-w-100 text-white font-bold py-2 px-4 rounded bg-${option.color}-${option.force-200} hover:bg-${option.color}-${option.force}`"
                value="emojis.icon">({{emojis.icon}})</button>
        </div>
    </div>


    <div class="flex justify-center">
        <div class="flex m-0.5 my-2">
            <button @click="shuffle()" class="w-40 font-bold text-xl bg-green-500 hover:bg-green-700 py-2 px-4 rounded border-2 border-black">
                <i class="fa-solid fa-arrows-rotate"></i>
            </button>  
        </div> 
        <div class="flex m-0.5 my-2">
            <button class="w-40 font-bold text-xl bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded border-2 border-black">
                <i class="fa-solid fa-plus"></i>
            </button>  
        </div> 
    </div>


   <div v-if="addLabel" class="mt-5 p-5 bg-blue-100 rounded-lg min-h-50">
        <div class="text-left font-bold">
            Add New Label
        </div>
        <div class="text-left">
            Add a new label, incase the data requires a cornercase variable. Value can be a number or a string.
        </div>
        <div class="mt-2">
            <div class="mb-2">
                <label class="mr-5">Label:</label>
                <input v-model="newLabel" />
            </div>    
            <div class="mb-2">
                <label class="mr-5" >Value:</label>
                <input class="border-1-black" v-model="newValue" />
            </div>   
            <button class="rounded-lg bg-green-500 hover:bg-green-700 p-3 mt-5 text-white border-black border-2" @click="addNewBtn">Add New Option</button>
        </div>
    </div>   
  
</div>   
</template>

<script>
export default {
    name: 'ButtonRow',
    emits: ['shuffle','move'],
    props: {
        addedLabels:{
            type:Array,
            default(){return []}
        },
    },

    data(){
        return{
            newLabel:"",
            newValue:"",
            showNumbers: true,
            options:[]
            // showEmojis: true,
            // emojiList: '🤬😡😠😒😑😦🙁😐🙂😀😄😄😁😆🤣😂'
        }
    },

    watch:{
        // options:{
        //     get(){
            
        //     return set
        //     }
        // },
        // emojis(){
        //     let obj = []
            
        //     [..."🤬😡😠😒😑😦🙁😐🙂😀😄😄😁😆🤣😂"].forEach( (e,i) => {
        //         let x = ({
        //             icon: this.emojiList[i],
        //             id:i
        //         })
        //         console.log(x)
        //         obj.push(x)
        //     })
        //     return obj
        // }
    },

    methods: {

        shuffle(){
            this.$emit('shuffle','1')
        },

        classify(className){
            if (this.$router.params.action == 'mv'){
                this.$emit('move',className)
            }
        }

        // addNewBtn() {

        //     //naive check on new label
        //     if (!this.newLabel || !this.newValue) return 

        //     //filter to see if button w/ that value already exists
        //     if (this.options.some(e => e['value'] == this.newValue)) return

        //     this.addedLabels.push({
        //         text:this.newLabel,
        //         value:this.newValue,
        //         color:'green',
        //         force:'700'
        //     })

        //     this.newLabel = ""
        //     this.newValue = ""
        // },
        
    },

    mounted(){
        let set = [
                {
                    text:'Extra Negative',
                    value: -3,
                    color: 'red',
                    force: '900'
                },
                {
                    text:'Fairly Negative',
                    value: -2,
                    color: 'red',
                    force: '800'  
                },
                {
                    text:'Little Negative',
                    value: -1,
                    color: 'red',
                    force: '700'
                },
                {
                    text:'Neutral',
                    value: 0,
                    color: 'green',
                    force: '700'
                },
                {
                    text:'Little Positive',
                    value: 1,
                    color: 'blue',
                    force: '700'
                },
                {
                    text:'Fairly Positive',
                    value: 2,
                    color: 'blue',
                    force: '800' 
                },
                {
                    text:'Extra Positive',
                    value: 3,
                    color: 'blue',
                    force: '900'   
                },
            ]
            set = this.$props.addedLabels
            console.log(set)
            this.options = set
    }

}



</script>

<style scoped>

</style>