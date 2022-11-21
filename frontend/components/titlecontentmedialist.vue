<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ data: any }>()

</script>
<template>
<div class="mx-auto relative">
    <div class="py-24 w-full bg-no-repeat bg-auto bg-right">
        <div class='container mx-auto'>
        <div class="items-center flex flex-wrap -mx-4">
            <div class="w-full lg:w-3/6  px-4 order-2 text-[#242f51] lg:order-1 text-center lg:text-left">
                <h2 class="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold lg:mb-8 mb-3">{{data.title}}</h2>
                <p class="lg:text-lg font-medium text-[#616368] lg:mb-6 mb-4">{{data.description}}</p>
                <div class="flex flex-wrap">
                    <div class="md:w-2/4 w-full text-left p-4 lg:p-8 bg-white dark:bg-[#0F172A] h-full" v-for="(item, index) in data.titleContentMediaList1" :key="index" >
                        <div class="mb-6 mt-4 lg:mt-0">
                            <img :width="item.image.width" :height="item.image.height" :alt="item.image.alternativeText" v-tez-src="item.image.url">
                        </div>
                        <h5 class="dark:text-slate-100 font-bold">{{ item.title }}</h5>
                        <div class="dark:text-slate-100">
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                    
                </div>
                <a class=" block md:inline-block my-1 text-sm leading-5 transition-colors duration-200 cursor-pointer transform hover:text-[#2500f9]  hover:bg-white  hover:border-[#2500f9] border  md:mx-4 md:my-0 no-underline px-8 py-3 font-bold justify-center rounded-full bg-[#2500f9] text-white" > See all </a>
            </div>
            <div class="flex items-center justify-end w-full lg:w-3/6 px-4 lg:mb-0 order-1 lg:order-2 text-right">
                <!-- <img class="lg:mb-0 lg:mt-0 max-w-full h-auto" width="665" height="730" alt="banner_image" v-tez-src="'/images/features-mobile.webp'"> -->
                <img class="lg:mb-0 lg:mt-0 max-w-full h-auto" :width="data.image.width" :height="data.image.width" :alt="data.image.alternativeText" v-tez-src="data.image.url">
            </div>
        </div>
    </div>
    </div>
</div>

</template>
