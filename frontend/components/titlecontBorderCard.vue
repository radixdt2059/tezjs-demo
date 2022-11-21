<template>
  <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
    <div
      class="text-left p-4 lg:p-8 bg-white dark:bg-slate-900 border border-solid border-[#CEE8F2] dark:border-[#334155] rounded-2xl hover:shadow-md h-full"
    >
    <p>{{ data }}</p>
      <!-- <h5 class="dark:text-slate-100 lg:mt-0">{{ data.titleContent3Col.title }}</h5> <p>{{data.titleContent3Col[0].title}}</p>
      <div class="dark:text-slate-100">
        <p>{{ data.description }}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default{
  props:{
    data:Object
  },
}
</script>
