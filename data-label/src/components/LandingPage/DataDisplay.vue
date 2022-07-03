<template>
<div>

    Data Display

    <div class="p-5 bg-blue-200 rounded-md text-left">
        <div>
            <div class="font-bold mb-3">
                Tweet From: <span class="text-white">@{{datum.user.username}}</span>
            </div>
        </div>
        <div>
            <div class="text-left font-bold">
                {{datum.title}}
            </div>
            <div class="text-left">
                {{datum.corpus}}
            </div>
        </div>
        <div class="mb-5">
            <font-awesome-icon icon="fa-solid fa-heart" />
        </div>
    </div>

</div>   
</template>

<script>
export default {
    name: 'DataDisplay',
    props: {
        datum: {
            type: Object,
            default() {
            return {
                type: "Tweet",
                title: "Sample Tweet",
                Date: "11/22/1997",
                corpus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus mauris, blandit eget bibendum non, efficitur nec nunc. Vestibulum luctus dui sit amet velit accumsan porttitor. Nunc vitae posuere mi. Ut sollicitudin eleifend mattis. Vivamus sodales commodo ligula vel.",
                likes: "10",
                retweets: "1",
                replies: "5",
                permalink: "",
                user: {
                    handle: "@Handle",
                    username: "UserName",
                    followers: "100k",
                    following: "10k",
                    permalink: "",
                },
            }
           }
        }
    },

    data(){
        return{
        }
    },


    methods: {
         std (array) {
            const n = array.length
            const mean = array.reduce((a, b) => a + b) / n
            return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
        }
    },


}



</script>

<style scoped>

</style>