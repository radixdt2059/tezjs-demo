<template>
    <section class="py-9 md:py-14 lg:py-20 bg-[#f5f5f5]">
      <div class="container mx-auto">
        <h2 class="xl:text-4xl lg:text-3xl text-center md:text-3xl text-lg font-bold lg:mb-5 mb-3">{{data.title}}</h2>
        <swiper
            :breakpoints="swiperOptions.breakpoints"
            :modules="modules"
            :slides-per-view="3"
            loop= "true"
            :space-between="50"
            :pagination="{ clickable: true }"
            @slideChange="onSlideChange"
            >
          <swiper-slide v-for="(item, index) in data.titleContentMediaList1" :key="index" class="w-full !lg:w-1/3 md:mt-8 !h-auto">
            <div class="h-full flex flex-col overflow-hidden cursor-grab bg-white border border-gray-100 rounded-xl p-[40px] pb-[30px]">
              <div class="cursor-pointer">
                <img
                  :src="item.image.url"
                  :width="item.image.width"
                  :height="item.image.height"
                  :alt="item.image.alternativeText"/>
              </div>
              <div class="flex-1 pt-4">
                <!-- <p class="mb-0">{{ item.title }}</p> -->
                <h5 class="dark:text-slate-100 md:text-xl text-base font-bold mb-3">{{ item.title }}</h5>
                <p class="mb-0 md:text-lg text-base">{{ item.description }}</p>
              </div>
              
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- Popup -->
            <!-- <ModalDialog
            @handle-modal-change="handleOpenModal"
            :showModal="showModal"
            :videoURl="videoURl"
        /> -->
    </section>
</template>
<script type="text/javascript">
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination } from "swiper";
  import "swiper/scss/pagination";
  import "swiper/scss";

  // Import Swiper styles
  export default {
    props:{
        data:Object,
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    
    data() {
      return {
        swiperOptions: {
          breakpoints: {
            1199: {
              slidesPerView: 3,
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 20,
              loop: true,

            },
            768: {
              slidesPerView: 2,
              
            },
            375: {
              slidesPerView: 1,
            },
          },
        },
        modules: [Pagination],
      };
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],    
      };
    },
  };
</script>
<style lang="scss">
.swiper
{
    overflow-y: auto;
    padding-bottom: 30px;
    .swiper-slide img {
        max-width: 75px;
    }
    .swiper-pagination.swiper-pagination-bullets
    {
        position: relative;
        bottom: -30px;

        .swiper-pagination-bullet {
            width: 13px;
            background-color: #2500f9;
            height: 13px;
            margin: 0 5px;
        }
    }
}


</style>
