<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ data: any }>()
    
</script>
<template>
<div class="mx-auto relative bg-[#f5f5f5] py-24">
        <div class="container mx-auto">
            <div class="-mx-4">
                <div class="lg:w-9/12 w-full  px-4 text-[#242f51] text-center mx-auto">
                    <h1 class="lg:text-4xl md:text-3xl text-2xl font-bold lg:mb-8 mb-6">
                      {{data.title}}
                    </h1>
                    <p class="lg:text-lg font-medium text-[#616368] lg:mb-6 mb-4">{{data.description}}</p>
                    <div class="flex-auto flex space-x-3 justify-center">
                        <tez-link href="/about-us" class="cursor-pointer px-6 py-2 flex items-center font-bold justify-center transition-colors rounded-full bg-[#2500f9] text-white hover:text-[#2500f9] border hover:bg-white hover:border-[#2500f9]">Learn More</tez-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->
</template>