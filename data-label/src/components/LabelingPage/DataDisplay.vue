<template>
<div class="">
    <!-- <div class="text-left font-bold text-2xl mb-1">
        Tweet:
    </div> -->
    <div class="">
    
    <div v-if="datum.type == 'Tweet'" class=" flex flex-col p-5 bg-blue-200 rounded-md text-left ">
        <div class="pt-2 flex mb-1">
            <div class="aspect-square ">
                <img class="rounded-full overflow-hidden bg-black icon" src="https://static.miraheze.org/pgrwiki/0/0d/Dialogue-2B-Icon.png"/>
            </div>
            <div class="font-bold flex flex-col ml-3">
                <span class="text-white text-xl">{{datum.user.handle}}</span>
                <span class="text-black">{{datum.user.username}}</span>
            </div>
        </div>
        <div class="p-2">
            <div class="">
                <div class="text-left">
                    {{datum.corpus}}
                </div>
            </div>
            <div class="flex mt-2 ">
                <div class=" mr-5 "><i class="fa-solid fa-heart  mt-0.5 mr-1"></i> {{datum.likes}}</div>
                <div class=" mr-5"><i class="fa-solid fa-comment  mr-1"></i> {{datum.replies}}</div>
                <div class=" mr-5"><i class="fa-solid fa-arrow-right-arrow-left mr-1"></i> {{datum.retweets}}</div>
            </div>
            <div class="mt-3">
                <span class="font-bold mr-1">Date:</span>{{datum.timestamp}}
            </div>
        </div>
    </div>
    
    <div v-if="datum.type == 'image'" class="overflow-hidden rounded-md text-left">
        <div>{{datum.filenname}}</div>
        <div class="flex text-5xl justify-center ">
            <div @click="()=>{this.changeIndex(-1)}" class="my-auto p-2 bg-blue-500 rounded-lg border-2 border-black">
                <i class="fa-solid fa-caret-left m-2"></i>
            </div>
            <img class="h-full w-80 object-scale-down mx-5 overflow-hidden  rounded-xl"  :src="imageLocation"/>
            <button @click="()=>{changeIndex(1)}" class="my-auto p-2 bg-blue-500 rounded-lg border-2 border-black">
                <i class="fa-solid fa-caret-right m-2"></i>
            </button>
        </div>
</div>

    <ButtonRow @classify="handleClassify" @shuffle="shuffleArray" :addedLabels="CalculatedOptions" class="mt-3"></ButtonRow>


    </div>
</div>   
</template>

<script>
    import ButtonRow from './ButtonRow.vue'
    import axios from 'axios'

    export default {
    components:{ ButtonRow},
    props: {
        datum: {
            type: Object,
            default() {
            return {
                type:'image'
            }
            // {
            //     type: "Tweet",
            //     title: "Sample Tweet",
            //     timestamp: "11/22/1997",
            //     corpus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus mauris, blandit eget bibendum non, efficitur nec nunc. Vestibulum luctus dui sit amet velit accumsan porttitor. Nunc vitae posuere mi. Ut sollicitudin eleifend mattis. Vivamus sodales commodo ligula vel.",
            //     likes: "100,000,000",
            //     retweets: "100,000,000",
            //     replies: "500,000,000",
            //     permalink: "",
            //     user: {
            //         handle: "@Handle",
            //         username: "UserName",
            //         followers: "100,000",
            //         following: "10k",
            //         permalink: "",
            //     },
            // }
           }
        },
        dir:{
            type: String,
            default(){
                return 'ah'
            }
        }
    },

    data(){
        return{
            fileObject:{
            },
            imageLocation:"",
            index:0,
            images:{
                all:['']
            },
            classes:[],
            CalculatedOptions:[]
        }
    },

    methods: {
         std (array) {
            const n = array.length
            const mean = array.reduce((a, b) => a + b) / n
            return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
        },

        shuffleArray() {
            let array = this.images.all
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            this.index+=1
        },

        changeIndex(delta){
            let newIndex = this.index+delta
            if (newIndex >= this.images.length ){
                newIndex = 0
            }else if (newIndex < 0){
                newIndex = this.images.length -1
            }
            this.index = newIndex
        },

        handleClassify(e){
            
        }
    },

    watch: {
        index: {
            immediate:true,
            handler() {

                if (this.imagePath){
                    this.imageLocation = axios.getUri({
                    url:'http://localhost:3000/fetchimage',
                    params:{url:this.imagePath}
                })
                }else{
                    this.imageLocation = ""
                }

            }
        }
    },

    computed:{
        imagePath:{
            get(){
                
                if (this.images.all[this.index]) return this.$route.params.dir+"/"+this.images.all[this.index]
                return ''
            }
        }
    },

    async mounted() {
        console.log("Mounted saw prop dir as: ",this.$route.params.dir)
        await axios.get('http://localhost:3000/images',
            {params: { url: this.$route.params.dir}}
        ).then(res => {
            this.images.all = res.data['images']
            this.index +=1
            // this.imageSrc = this.images.all[this.index]
        });

        await axios.get('http://localhost:3000/folders',
            {params: { url: this.$route.params.dirDump}}
        ).then(res => {
            console.log(res.data)
            this.classes = res.data.classes
            this.classes.forEach(e=>{
                this.CalculatedOptions.push(
                {
                    text:e,
                    value: e,
                    color: 'green',
                    force: '900'
                },
                )
                // console.log(e)
            })
            // this.imageSrc = this.images.all[this.index]
        });
    }


}

</script>

<style scoped>
.icon{
    max-width: 50px;
}

.forceSize{

}

</style>