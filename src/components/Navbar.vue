<template>
  <nav
    class="navbar navbar-expand-xl p-0 fixed-top navDefault"
    :class="{ navActive }"
    @mouseenter="navMouseEnter"
    @mouseleave="navMouseLeave"
  >
    <button
      class="hamburger hamburger--collapse navbar-toggler border-0 d-xl-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      :class="{ 'is-active': isActive }"
      @click="isActive = !isActive"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1" id="navbarNav">
      <ul class="navbar-nav">
        <!-- 手機下登入與註冊 -->
        <li class="nav-item d-flex d-xl-none">
          <router-link class="nav-link border w-50 text-center" to="/signin"
            >會員登入</router-link
          >
           <router-link class="nav-link border w-50 text-center" to="/user/register"
            >註冊</router-link
          > 
        </li>

        <li class="nav-item">
          <a class="nav-link p-3 px-4" href="#" @click.prevent="goNewArrival">
            <span class="hvr-underline-from-left">新品上市</span>
          </a>
        </li>
        <!-- 瀏覽器下車款選擇 -->
        <li class="nav-item d-none d-xl-block">
          <a
            id="brand"
            class="nav-link p-3 px-4"
            href="#"
            @mouseenter="brandMouseEnter"
            @mouseleave="brandMouseLeave"
            @click="changeCategory('car')"
          >
            <span class="align-middle">車款選擇</span>
          </a>
        </li>

        <!-- 手機下的車款選擇 -->
        <li class="nav-item d-xl-none">
          <a class="nav-link p-3 px-4" href="#" @click.prevent="brandTouch">
            <span class="align-middle">車款選擇</span>
          </a>

          <ul id="brand-list-rwd" class="navbar-nav d-xl-none">
            <li
              class="nav-item"
              v-for="category in this.$store.state.brands.car"
              :key="category"
            >
              <a to="#" class="nav-link pl-5" @click.prevent="changeCategory(category)">{{
                category
              }}</a>
            </li>
            <li class="nav-item" v-for="category in this.$store.state.brands.motorbike" :key="category">
              <a to="#" class="nav-link pl-5" @click.prevent="changeCategory(category)">{{
                category
              }}</a>
            </li>
          </ul>
        </li>

       
       
        
      </ul>
    </div>

    <!-- 會員登入 -->
    <ul class="navbar-nav mr-xl-6 order-1 order-xl-2">
      <li class="nav-item">
        <router-link class="d-none d-xl-block py-3 px-4" to="/signin">
          <i class="fal fa-user-circle"></i>
        </router-link>
      </li>
     

      <!-- 購物車按鈕 -->
      <li class="nav-item">
        <router-link class="position-relative d-block py-3 px-4" to="/cart">
          <i class="fal fa-shopping-cart"></i>
          <p
            class="position-absolute text-center text-white bg-danger rounded-circle"
            style="top:10%; right:25%; font-size: 12px; min-width: 17px"
            v-if="this.$store.state.carts.carts.length"
          >
            {{ this.$store.state.carts.carts.length }}
          </p>
        </router-link>
      </li>
    </ul>

    <!-- 代理品牌清單 -->
    <div
      id="brand-list"
      class="position-absolute bg-white w-100"
      style="top: 58px; box-shadow: 0px 3px 3px 0px silver;"
      @mouseenter="brandMouseEnter"
      @mouseleave="brandMouseLeave"
    >
      <div class="container-fluid px-6 pt-5">
        <div class="row w-100">
          <div class="col-7">
            <div class="row w-100 mb-5">
              <div class="col-2">
                <h2 class="h4 text-center font-weight-bold m-0">car</h2>
                <router-link class="d-block text-center" to="/product">
                  <img
                    class
                    src="https://images.zi.org.tw/incar/2019/06/27052146/1561584105-698381406bd400f3729c84322c86c226.jpg"
                    width="100"
                  />
                </router-link>
              </div>
              <div class="col-5 d-flex align-items-center">
                <a
                  class="d-block text-black p-3 px-4"
                  href="#"
                  v-for="category in this.$store.state.brands.car"
                  :key="category"
                  @click.prevent="changeCategory(category)"
                >
                  <span class="hvr-underline-reveal">{{ category }}</span>
                </a>
              </div>
            </div>

            <div class="row w-100">
              <div class="col-2">
                <h2 class="h4 text-center font-weight-bold m-0">motorbike</h2>
                <a class="d-block text-center" href="#" @click="changeCategory('motorbike')">
                  <img
                    src="https://i.imgur.com/aYw53up.jpg"
                    width="100"
                  />
                </a>
              </div>
              <div class="col-5 d-flex align-items-center">
                <a
                  class="d-block text-black p-3 px-4"
                  href="#"
                  v-for="category in this.$store.state.brands.motorbike"
                  :key="category"
                  @click.prevent="changeCategory(category)"
                >
                  <span class="hvr-underline-reveal">{{ category }}</span>
                </a>
              </div>
            </div>
          </div>

          <a
            class="col-5"
            style="background: url(https://i.imgur.com/52Uyvxs.jpg); background-size: cover; background-position: center center;"
            href="#"
            @click.prevent="changeCategory('car')"
          >
            <p
              class="h1 text-white mt-2"
              style=" text-shadow: 2px 2px 8px black"
            >
             好運租車
            </p>
           
          </a>
        </div>
        <div class="row w-100">
          <div class="col">
            <p class="text-secondary text-center mt-5 w-100">好運租車</p>
          </div>
        </div>
      </div>
    </div>

    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // 漢堡選單啟用樣式
      isActive: false,
      // LOGO 圖片(黑、白)
      LOGO: 'https://i.imgur.com/oiGjEDP.png',
      logoWhite: 'https://i.imgur.com/oiGjEDP.png',
      logoBlack: 'https://i.imgur.com/uAIISWn.png',
      // 依據 navbar 的高度，決定顯示黑、白 LOGO
      navHeight: 0,
      /**
       * 決定 navbar 背景是否啟動，對 <nav> 加入 navActive 樣式
       * 啟動: 白色背景、黑色文字
       * 不啟動: 反之
       */
      navActive: false,
    };
  },

  watch: {
    /**
     *  監聽路由變動，決定切換 LOGO 圖片與 navbar 樣式。
     * */
    $route() {
      const vm = this;
      const { path } = this.$route;

      // 當路由發生變動時，將畫面滾動至頂部，但若是回首頁則不需要
      // * 也可以使用 router 的 scrollBehavior 方法
      if (path !== '/') {
        vm.$bus.$emit('goTop');
      }

      // 將 navbar 的 menu 關閉
      $('.navbar-collapse').collapse('hide');
      $('#brand-list').slideUp();

      vm.isActive = false;

      // 判斷當前頁面路徑，調整 navbar 的 樣式
      if (path !== '/' && path !== '/product') {
        vm.navActive = true;
      } else {
        vm.navActive = false;
        vm.LOGO = vm.logoBlack;
      }
    },
  },

  methods: {
    // 視窗滾動或是改變路由則切換 navbar 樣式
    windowScroll() {
      const vm = this;
      const navTopHeight = Math.floor($('nav').offset().top);

      vm.navHeight = navTopHeight;

      const { path } = this.$route;

      // 當 navbar 距離 top 的距離大於 0 或等於 0 時，改變樣式
      if (vm.navHeight > 0) {
        vm.navActive = true;
        vm.LOGO = vm.logoBlack;

        // 只有在 /# 與 /product 路由，滾動至最上層會有背景透明樣式
      } else if (vm.navHeight === 0 && (path === '/product' || path === '/')) {
        vm.navActive = false;
        vm.LOGO = vm.logoWhite;
      }
    },
    // 在 hover 時，改變 LOGO 圖示(白或黑)
    navMouseEnter() {
      this.navActive = true;
      this.LOGO = this.logoBlack;
    },
    navMouseLeave() {
      const navTopHeight = Math.floor($('nav').offset().top);
      const { path } = this.$route;

      if (navTopHeight === 0 && (path === '/product' || path === '/')) {
        this.navActive = false;
        this.LOGO = this.logoWhite;
      }
    },
    // navbar 代理品牌的 hover 事件
    brandMouseEnter() {
      $('#brand-list')
        .stop()
        .slideDown(500);
    },
    brandMouseLeave() {
      $('#brand-list')
        .stop()
        .slideUp(300);
    },
    brandTouch() {
      $('#brand-list-rwd')
        .stop()
        .slideToggle(300);
    },
    // 滾動至錨點
    goNewArrival() {
      const vm = this;
      // 點擊新品上市，滾動至錨點
      return vm.$route.path === '/'
        ? vm.scrollToAnchor('#new-arrival')
        : vm.$router.push('/').then(() => {
          vm.scrollToAnchor('#new-arrival');
        });
    },
    scrollToAnchor(anchor) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor).offset().top,
          },
          1000,
        );
    },
    // 決定 /product 顯示哪個產品分類
    changeCategory(selectedCategory) {
      const vm = this;
      vm.$store.dispatch('changeCategory', selectedCategory).then(() => {
        // 當前若不是 /product 路由，則轉址
        if (vm.$route.path !== '/product') {
          vm.$router.push('/product');
        }
        // 轉址後須將 menu 關閉
        $('.navbar-collapse').collapse('hide');
        this.isActive = false;
      });
    },
  },
  created() {
    // 綁定 scroll 監聽事件
    window.addEventListener('scroll', this.windowScroll, false);

    // 取得購物車資訊
    this.$store.dispatch('getCarts');
  },

  mounted() {
    // * 這是防止使用者在滾動下 F5 刷新頁面，卻沒有加入 navActive 樣式
    // TODO 應該有其他方法可以做到 F5 刷新也能啟動鉤子
    // ! 必須寫在 mounted 才有效。
    const { path } = this.$route;
    if (path !== '/' && path !== '/product') {
      vm.navActive = true;
      this.LOGO = 'https://i.imgur.com/uAIISWn.png';
    }
  },
};
</script>

<style lang="scss" scoped>
// 漢堡插件
@import "~hamburgers/_sass/hamburgers/hamburgers.scss";
@import "@/assets/scss/customMixins.scss";

// navbar 預設樣式
.navDefault {
  a,
  .navbar-nav a {
    color: white;
  }
  .hamburger-inner,
  .hamburger-inner::after,
  .hamburger-inner::before {
    background: white;
  }
  transition: all 0.5s;
}

// 當畫面滾動、或在非 /#、/product 路由時加入的樣式
.navActive {
  a,
  .nav-item a {
    color: black;
  }
  .hamburger-inner,
  .hamburger-inner::after,
  .hamburger-inner::before {
    background: black;
  }
  background: white;
  @include box-shadow;
}

// brand-list
#brand-list {
  display: none; // 預設隱藏
  @include BS-xl {
    display: none;
  }
}

#brand-list-rwd {
  display: none;
}

// Hover.css
.hvr-underline-from-left:before {
  background: gray;
}
li:hover {
  .hvr-underline-from-left:before {
    right: 0;
  }
}

#brand-list a:hover {
  .hvr-underline-reveal:before {
    transform: translateY(0);
  }
}
</style>
