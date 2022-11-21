<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ data: any }>()
    
</script>
<template>
<div class="mx-auto relative my-5">
    {{data.Title}}
    <!-- <div class='bg-[url("./images/home-banner.webp")] py-10 w-full bg-contain bg-center'> -->
        <div class="container mx-auto my-[100px]">
            <div class="items-center flex flex-wrap -mx-4">
                <div class="w-full lg:w-1/2 px-4 order-2 text-[#242f51] lg:order-1 text-center lg:text-left">
                    <p class="lg:text-2xl  md:text-lg font-medium lg:mb-6 mb-4">{{data.title}}</p>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="name">Name <sup class="text-red-500">*</sup></label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="name" type="text">
                        </div>
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="company">Company</label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="company" type="text">
                        </div>
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="company">Email <sup class="text-red-500">*</sup></label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="email" type="text">
                        </div>
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="company">Phone <sup class="text-red-500">*</sup></label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="phone" type="text">
                        </div>
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="company">Country <sup class="text-red-500">*</sup></label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="phone" type="text">
                        </div>
                        <div class="w-full px-4 pt-6 sm:w-1/2">
                            <label class="block text-gray-700 mb-2" for="company">Designation</label>
                            <input class="appearance-none rounded-md w-full py-2 px-3 border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" id="phone" type="text">
                        </div>
                        
                        <div class="w-full px-4 pt-6">
                            <label class="block text-gray-700 mb-2" for="company">Brief your Requirement <sup class="text-red-500">*</sup></label>
                            <textarea class="px-4 py-4 rounded-md w-full border border-solid border-[#242f51] focus:border-[#2500f9] focus:ring-[#2500f9] focus:ring-1 focus:outline-none text-sm lg:text-base" maxlength="2000"></textarea>
                        </div>
                        <div class="block px-4 mt-8 mb-4">
                            <a type="submit" value="submit" class="block cursor-pointer md:inline-block my-1 text-sm leading-5 transition-colors duration-200 transform hover:text-[#2500f9] hover:bg-white hover:border-[#2500f9] border md:my-0 no-underline px-7 py-3 font-bold justify-center rounded-full bg-[#2500f9] text-white" title="About us">Submit</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center w-full lg:w-1/2 px-4 lg:mb-0 order-1 lg:order-2 text-center">
                    <img class="lg:mb-0 lg:mt-0 max-w-full mx-auto h-auto" width="600" height="600" alt="banner_image" v-tez-src="'/images/contact-us.webp'">
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->
</template>