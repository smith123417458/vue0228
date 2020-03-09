<template>
  <div class="bg-custom pt-5">
    <div class="container text-light">
      <div class="row mb-5">
        <div class="col-12 col-md-12 col-lg-3 d-flex flex-column justify-content-between">
          <h2 class="mb-3">好運租車</h2>
          <div class="footer-btn text-right text-md-right text-lg-left mb-5 mb-lg-0">
            <a class="facebook h5 p-2" href="https://github.com/0445814/V-Headphone" title="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="twitter h5 p-2" href="https://github.com/0445814/V-Headphone" title="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="instagram h5 p-2" href="https://github.com/0445814/V-Headphone" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="youTube h5 p-2" href="https://github.com/0445814/V-Headphone" title="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a class="github h5 p-2" href="https://github.com/0445814/V-Headphone" title="Github">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div class="col-2 d-none d-md-block">
          <h4 class="h6 mb-4">車款選擇</h4>
          <ul class="navbar-nav">
            <li class="nav-item py-1" v-for="brand in brands.car" :key="brand">
              <a
                class="text-light hvr-underline-reveal"
                href="#"
                @click.prevent="goPage(brand)"
              >{{brand}}</a>
            </li>
            <li class="nav-item py-1" v-for="brand in brands.motorbike" :key="brand">
              <a
                class="text-light hvr-underline-reveal"
                href="#"
                @click.prevent="goPage(brand)"
              >{{brand}}</a>
            </li>
          </ul>
        </div>

        <div class="col-2 d-none d-md-block">
          <h4 class="h6 mb-4">接送服務</h4>
          <ul class="navbar-nav">
            <li class="nav-item py-1">
              <router-link class="text-light hvr-underline-reveal" to="/parallel_import">訂單提交</router-link>
            </li>
          </ul>
        </div>
        <div class="col-2 d-none d-md-block">
          <h4 class="h6 mb-1 mb-lg-4">租車優惠</h4>
          <ul class="navbar-nav">
            <li class="nav-item py-1">
              <router-link class="text-light hvr-underline-reveal" to="/warranty">注意事項</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-3 d-md-block">
          <h4 class="h6 mb-4">聯絡我們</h4>
          <ul class="navbar-nav">
            <li class="nav-item py-1">
              <i class="fal fa-envelope pr-1"></i> a0952987429@yahoo.com.tw
            </li>
            <li class="nav-item py-1">
              <i class="fas fa-mobile-alt pr-2"></i> 0935397742
            </li>
            <li class="nav-item py-1">
              <a
                class="text-white hvr-underline-reveal"
                href="https://www.cakeresume.com/s--8PmgyOkduauTGAlF5nuhaw--/ken-chang-673087"
              >
                <i class="fal fa-birthday-cake pr-1"></i> 盛建雄
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="h6 text-right">&copy; 2020 盛建雄 僅個人學習，無商業用途</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 前往所選擇的產品分類頁面
    goPage(selectedCategory) {
      this.$store.dispatch('changeCategory', selectedCategory);
      if (this.$route.path !== '/product') {
        this.$router.push('/product');
      }
      this.$bus.$emit('goTop');
    },
  },
  computed: {
    brands() {
      return this.$store.state.brands;
    },
  },
};
</script>

<style lang="scss">
.hvr-underline-reveal:before {
  background: gray;
}
</style>
