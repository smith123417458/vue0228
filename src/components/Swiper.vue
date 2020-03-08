<template>
  <div class="position-relative">
    <!-- swiper -->
    <swiper
      id="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="banner in banners"
        :key="banner"
      >
        <img 
        class 
        :src="banner"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper-intro p-2 d-none d-sm-block position-absolute">
        <!-- d-none d-sm-block   小尺寸以下會消失-->
      <!-- <div class='bglay p-3'>
       <h1 class="display-3">好運租車</h1>
      </div> -->

      <div class='bglay p-3'>
       <h1>FUN假去那玩
       <div class='typing'>我在好運租車等你!</div>
       </h1>
      </div>

     
    </div>
    <div class="scroll-icon position-absolute d-none d-xl-block">
      <p class="m-0">Scroll</p>
      <p class="text-center"><i class="fal fa-chevron-circle-down faa-falling animated faa-fast"></i></p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
 import '../../node_modules/swiper/css/swiper.css';

export default {
  data() {
    return {
      // ? 如果是從資料庫取得圖片再渲染，進入畫面會有跳動問題
      // ? 並且開始輪播的圖片不是從陣列的第一張開始播放
      // ? 但如果是一開始給予圖片，就不會跳動，並且可按照順序播放
      banners: [
        'https://images.zi.org.tw/incar/2019/06/27052146/1561584105-698381406bd400f3729c84322c86c226.jpg',
        // 'https://hotaicdn.azureedge.net/toyotaweb/BANNER_2019051013273645C4E06D.jpg',
        // 'https://www.lexus.com.tw/upload/bnr/201911/201911271404300871CF94.jpg',
        'https://scdn.slashgear.com/wp-content/uploads/2020/01/lamborghini-aventador-svj-roadster-04-1280x720.jpg',
        // 'https://www.lexus.com.tw/upload/bnr/201911/201911271346423EDM26UD.jpg',
        // 'https://images.zi.org.tw/incar/2019/06/25004224/1561394543-559c900da5ac650ef192e03cf2390e28.jpg',
        // 'https://hotaicdn.azureedge.net/toyotaweb/BANNER_201907301648331L6QQ6O2.jpg',
        'https://tcar.tv/public/upimgs/carnews/Lamborghini/Press/2020/202001/6/SMALL_554586.jpg',
        
      ],
      swiperOption: {
        loop: true,
        speed: 1500,
        //autoplay為swiper3升級到swiper4格式寫法
        autoplay:{
          stopOnLastSlide:true,
        } ,
        autoplayDisableOnInteraction: false,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },

};
</script>
<style lang="scss" scoped>
@import "../assets/scss/customMixins.scss";

#swiper {
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @include BS-xl {
      height: 50vh;
    }
  }
}
.swiper-intro {
  top: 7%;
  left: 0%;
  z-index: 10;
}

.scroll-icon {
  color: white;
  bottom: 5%;
  left: 50%;
  z-index: 10;
}
.bglay{
  background-color: rgba(255,255,255,.35);
 
}
h1 {
    color:black;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 10px;
    width: 345px;
    min-height: 90px;
    max-height: 100%;
    div{
      line-height: 1.4;
    }
    .typing {
      width: 9em;
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 3.5s steps(9, end);
      //  blink-caret 0.75s step-end infinite;
      overflow: hidden;
      letter-spacing: 0;
    }
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 9em;
      }
    }
    // @keyframes blink-caret {
    //   from,
    //   to {
    //     box-shadow: 2px 0 0 0 transparent;
    //   }
    //   50% {
    //     box-shadow: 2px 0 0 0;
    //   }
    // }
  }
</style>
