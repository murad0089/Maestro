<template>
    <div class="bg-[#313131] flex justify-between">
        <div class="flex items-center">
            <div class="m-3" >
                <img class="h-5" src="../assets/logo-img 1.svg" alt="">
            </div>
            <h2 class="px-3 py-3 text-base text-white font-semibold font-{Open Sans}">Architect</h2>
        </div>
        <Navbar></Navbar>
        <div class="bg-black h-auto w-12 flex justify-center items-center">
        <i class="fa fa-search text-sm cursor-pointer font-thin text-white" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default{

    name:'Header',
    components:{
        Navbar
    }

}
</script>
