<template>
    <div>
        <p class="text-[#18B4CF] text-2xl font-bold text-center p-10">Top Rated</p>
        <div class="overflow-auto whitespace-nowrap" >
            <div class=" inline-block" v-for="picture in pictures">
                <img class="" :src="require(`../assets/TopRated/${picture.img}`)"  alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {pictures} from '../assets/Data/TopRated'
    export default{
    name:"TopRated",
    data(){
        return{
            pictures:pictures
        }
    }
}
</script>