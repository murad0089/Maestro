<template>
<div class="bg-[#F2F2F2] flex flex-col items-center p-5">
    <p class="text-[#18B4CF] text-2xl font-bold text-center p-10">Most Popular Posts</p>
    <div class="grid  max-w-4xl gap-8 p-7 justify-center lg:grid-flow-col" >
        <div class="w-fit flex flex-col space-y-10" v-for="(n,i) in 3">  
            <router-link :to="{ name: 'Post', params: { id: posts[i*2].id }}">
            <div>
                <img :src="require(`../assets/PopularPosts/${posts[i*2].img}`)"  alt="">
                <p class="w-full text-lg font-bold text-center bg-white p-4">{{posts[i*2].title}}</p>
            </div>
            </router-link>
            <router-link :to="{ name: 'Post', params: { id: posts[i*2+1].id  }}">
            <div class="">
                <img :src="require(`../assets/PopularPosts/${posts[i*2+1].img}`)" alt="">
                <p class="w-full text-lg font-bold text-center bg-white p-4">{{posts[i*2+1].title}}</p>
            </div>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import {posts} from '../assets/Data/PopularPosts'
export default{

    name:'PopularPosts',
    data(){
        return{
            posts:posts,
            count:3,
        }
    },
    created(){
        console.log(posts[0].img);
    }
}
</script>