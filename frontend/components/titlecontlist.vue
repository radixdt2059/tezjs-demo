
<template>
<div class="mx-auto relative">
    <div class="py-24 w-full bg-no-repeat bg-auto bg-right">
        <div class='container mx-auto'>
        <div class="items-center flex flex-wrap -mx-4">
            <div class="w-full px-4 order-2 text-[#242f51] lg:order-1 text-center lg:text-left">
                <h2 class="xl:text-4xl lg:text-3xl md:text-2xl text-lg font-bold lg:mb-8 mb-3">{{data.title}}</h2>
                <p class="lg:text-lg font-medium text-[#616368] lg:mb-6 mb-4">{{data.description}}</p>
                <div class="flex flex-wrap">
                    <div v-for="item in data.titleContent3Col" :key="item.name" >
                      <titlecontBorderCard :data="titlecontBorderCard"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
  
import titlecontBorderCard from "./titlecontBorderCard.vue"

export default {
  components: {
    titlecontBorderCard
  },
  props:
  {
    data: Object
  },
}

</script>