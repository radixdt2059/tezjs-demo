<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ data: any }>()
    
</script>
<template>
<div class="mx-auto relative">
    <!-- <div class='bg-[url("./images/home-banner.webp")] py-10 w-full bg-contain bg-center'> -->
        <div class="container mx-auto">
            <div class="items-center flex flex-wrap -mx-4">
                <div class="w-full lg:w-3/6 xl:w-2/5 px-4 order-2 text-[#242f51] lg:order-1 text-center lg:text-left">
                    <p class="lg:text-2xl  md:text-lg font-medium lg:mb-6 mb-4">#1 Editiors Choice App of 2020</p>
                    <h1 class="xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold lg:mb-8 mb-6">
                      {{data.title}}
                    </h1>
                    <p class="lg:text-lg font-medium text-[#616368] lg:mb-6 mb-4">{{data.description}}</p>

                    <div class="flex-auto flex space-x-3">
                        <button class="px-6 py-2 flex items-center font-bold justify-center transition-colors rounded-full bg-[#2500f9] text-white hover:text-[#2500f9] border hover:bg-white hover:border-[#2500f9]" type="submit">Try for free</button>
                        <button class="px-6 py-2 flex items-center font-bold justify-center rounded-full border-none text-[#2500f9]" type="button">Watch demo video</button>
                    </div>
                </div>
                <div class="flex items-center w-full lg:w-3/6 xl:w-3/5 px-4 lg:mb-0 order-1 lg:order-2 text-center">
                    <img class="lg:mb-0 lg:mt-0 max-w-full mx-auto h-auto" :width="data.image.width" :height="data.image.width" :alt="data.image.alternativeText" v-tez-src="data.image.url">
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->
</template>