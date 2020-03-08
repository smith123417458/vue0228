<template>
  <div>
    
    <Swiper />

    <Intro />

    <!-- 首頁卡片元件 -->
    <div id="product-type">
      <h3 class="h5 text-secondary text-center m-5">
        <span class="border-bottom">PRODUCTS</span>
      </h3>
      <div class="d-flex flex-wrap justify-content-center mb-5 pb-5" style="overflow: hidden;">
        <card
          data-image="https://i.imgur.com/r92U467.jpg"
          v-scroll-reveal="{origin: 'left'}"
        >
          <h3 slot="header" class="h2">好運租車</h3>
          <p slot="content" class="ml-5 mb-4">--最好的租車都在這裡</p>
          <div slot="footer" class="text-center">
            <button
              class="btn btn-outline-light btn-sm"
              type="button"
              @click="goPage('car')"
            >立即前往</button>
          </div>
        </card>
        <card
          data-image="https://i.imgur.com/hMV1R04.jpg"
          v-scroll-reveal="{origin: 'right'}"
        >
          <h3 slot="header" class="h2">好運機車</h3>
          <p slot="content" class="ml-4 mb-4">--優質可靠輕經行遍全台</p>
          <div slot="footer" class="text-center">
            <button class="btn btn-outline-light btn-sm" type="button"
             @click="goPage('motorbike')">立即前往</button>
          </div>
        </card>
      </div>
    </div>
 <Parallax />
    <Event />
     <FollowUs />
  </div>



  
</template>

<script>
export default {
  methods: {
    goPage(selectedCategory) {
      this.$store.dispatch('changeCategory', selectedCategory);
      this.$router.push('/product');
    },
  },

  components: {

    Swiper: () => import('@/components/Swiper'),

    Intro: () => import('@/components/Intro'),
  
    Parallax: () => import('@/components/Parallax'),
   
    Event: () => import('@/components/Event'),
    
    FollowUs: () => import('@/components/FollowUs'),

    card: () => import('@/components/PrdouctType'),
  },
};
</script>
