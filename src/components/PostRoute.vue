<template>
     <div class="flex flex-col items-center p-12">
        <img class="h-96 w-96 " :src="require(`../assets/PopularPosts/${posts[id-1].img}`)"  alt="">
        <p class="font-bold text-center text-2xl">{{posts[id-1].title}}</p>
    </div>
</template>

<script>
import {posts} from '../assets/Data/PopularPosts'
export default{
    name:'PostRoute',
    data(){
        return{
            posts:posts,
            id:this.$route.params.id,
        }
    },
    created(){
        console.log(this.id);
    }
}
</script>