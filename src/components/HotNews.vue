<template>
    <div class="flex flex-col justify-center items-center">
        <p class="text-[#18B4CF] text-lg font-bold text-center m-9 p-1">HOT NEWS</p>
        <div class="grid  gap-4 justify-center mb-16 w-60 lg:w-[800px] lg:grid-cols-4">
            <div :class="gridStyle(index)" class="self-stretch" v-for="(hotel,index) in hotels">

                <router-link :to="{ name: 'Hotel', params: { id: hotel.id }}">
                <div class="bg-[#F9F7F7] flex flex-col lg:flex-row h-full" v-if="index==0||index==7">
                    <img :class="imgStyle(index)" class="h-36" :src="require(`../assets/HotNews/${hotel.img}`)"  alt="">

                    <div>
                        <p class="text-right font-semibold text-sm p-2">{{hotel.title}}</p>
                        <p class="text-right text-[#5B6469] text-xs p-2">{{hotel.content}}</p>
                    </div>
                    
                </div>
                <div class="bg-[#F9F7F7] flex flex-col" v-if="index>0&&index<7">
                    <img class="h-36" :src="require(`../assets/HotNews/${hotel.img}`)"  alt="">
                    <p class="text-right font-semibold text-sm p-2">{{hotel.title}}</p>
                    <p class="text-right text-[#5B6469] text-xs p-2">{{hotel.content}}</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {data} from '../assets/Data/Hotels'
export default{
    
    data(){
        return{
            hotels:data
        }
    },
    methods:{
        gridStyle: function(index){
            if(index==0||index==7){
                console.log('0==7');
                return 'lg:col-span-3'
            }else if(index==1||index==6){
                console.log("0>x>7");
                return ''
            }else{
                console.log(index);
                return 'lg:col-span-2'
                
            }
        },
        imgStyle: function(index){
             if(index==0||index==7){
                return 'h-44'
            }else{
                return 'h-36'
            }
        },
    },
    name:"Container"
}
</script>