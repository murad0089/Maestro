<template>
    <div class="flex flex-col items-center p-12">
        <img class="h-96 w-96 " :src="require(`../assets/HotNews/${hotel[id-1].img}`)"  alt="">
        <p class="font-bold text-center text-2xl">{{hotel[id-1].title}}</p>
    </div>
</template>

<script>

import {data} from '../assets/Data/Hotels'

export default {

    name:'HotelRoute',
    data(){
        return{
            id:this.$route.params.id,
            hotel:data,
        }
    },
    created(){
        console.log(this.id);
    }

}
</script>