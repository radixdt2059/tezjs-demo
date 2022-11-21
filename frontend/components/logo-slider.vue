<template>
  <section class="logo-slider py-9 md:py-14 lg:py-20">
    <div class="container mx-auto">
      <h2
        class="xl:text-4xl lg:text-3xl text-center md:text-3xl text-lg font-bold lg:mb-[50px] mb-5"
      >
        {{ data.title }}
      </h2>
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        :navigation="false"
        :slides-per-view="7"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mx-auto"
      >
        <swiper-slide
          v-for="(item, index) in data.imageCollection"
          :key="index"
          class="w-full"
        >
          <div class="h-full flex flex-col">
            <div class="cursor-pointer">
              <img
                :src="item.url"
                :width="item.width"
                :height="item.height"
                :alt="item.alternativeText"
                class="mx-auto"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";

export default {
  props: {
    data: Object,
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
            slidesPerView: 7,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            navigation: true
          },
          768: {
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 1,
          },
        },
      },
      modules: [Pagination, Navigation],
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
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style lang="scss">
.logo-slider {
  .swiper {
    overflow-y: auto;
    padding-bottom: 30px;

    .swiper-wrapper {
      justify-content: normal;
      @screen xl {
        justify-content: center;
        align-items: center;
      }
    }

    .swiper-slide img {
      max-width: 160px;
    }

    .swiper-pagination.swiper-pagination-bullets {
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
}
</style>
