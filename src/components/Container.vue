<template>
<div>
    <Hero></Hero>
    <PopularPosts></PopularPosts>
    <PopularClients></PopularClients>
    <TopRated></TopRated>
    <HotNews></HotNews>
</div>
</template>

<script>
import Hero from './Hero.vue';
import PopularPosts from './PopularPosts.vue';
import PopularClients from './PopularClients.vue';
import TopRated from './TopRated.vue';
import HotNews from './HotNews.vue';


export default{
    components:{
    Hero,
    PopularPosts,
    PopularClients,
    TopRated,
    HotNews
},
    name:"Container"
}
</script>