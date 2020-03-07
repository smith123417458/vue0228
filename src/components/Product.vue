<template>
  <div>
    <!-- jumbotron -->
    <div class="banner"></div>
     
    <!-- <img class="banner d-none d-sm-block" src="https://www.ponyrent.com.tw/images/banner.jpg" > -->


    <!-- <div class="jumbotron text-white">
      <div class="container text-right mt-5">
        <div class="row">
          <div class="col">
            <h2>好運租車 開幕回饋</h2>
            <p class="lead">
              即刻輸入優惠碼，享折扣價與額外
              <span class="font-weight-bold">享折扣價與額外</span>
            </p>
            <button class="btn btn-outline-light btn-sm" @click="showCoupon">立刻索取</button>
          </div>
        </div>
      </div>
    </div> -->







 
 <br>
 <br>
    <div class="container">
      <div class="row">
        <!-- 左方產品分類 -->
        <div class="col-lg-3">
          <!-- <div class="list-group sticky-top mb-5"> -->
          <div class="d-flex d-lg-block flex-wrap justify-content-between sticky-list">
            <a
              href="#"
               class="btn category-btn d-md-flex justify-content-center align-items-center p-3" 
              :class="{'active': nowCategory === 'car'}"
              @click.prevent="changeCategory('car')"
            >
              <i class="fas fa-car-side"></i>   car 
             <!-- <img src="https://picsum.photos/30/30/?random=1"> car -->
            </a>
            <a
              href="#"
               class="btn category-btn d-md-flex justify-content-center align-items-center p-3" 
              :class="{'active': nowCategory === category}"
              v-for="category in this.$store.state.brands.car"
              :key="category"
              @click.prevent="changeCategory(category)"
            >{{category}}</a>
            <a
              href="#"
             class="btn category-btn d-md-flex justify-content-center align-items-center p-3" 
              :class="{'active': nowCategory === 'motorbike'}"
              @click.prevent="changeCategory('motorbike')"
            >
              <i class="fas fa-motorcycle"></i> motorbike
            </a>
            <a
              href="#"
              class="btn category-btn d-md-flex justify-content-center align-items-center p-3" 
              :class="{'active': nowCategory === category}"
              v-for="category in this.$store.state.brands.motorbike"
              :key="category"
              @click.prevent="changeCategory(category)"
            >{{category}}</a>
          </div>
        </div>

        <!-- 右方產品 -->
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-4" v-for="item in allProducts" :key="item.id">
              <div class="card border-0 w-100 h-100 mb-5" style="width: 18rem;">
                <router-link class="mb-3" :to="`/product/${item.id}`">
                  <img
                    :src="item.imageUrl"
                    class="d-block card-img-top hvr-grow"
                  />
                </router-link>

                <div class="card-body">
                  <p class="card-text text-center m-0">
                    <router-link :to="`/product/${item.id}`" class="text-dark">
                      <span class="font-weight-bold hvr-underline-from-left"  
                      >{{item.title}}</span>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coupon: '',
    };
  },
  methods: {
    // 取得所有產品資訊
    getAllProducts() {
      this.$store.dispatch('getAllProducts');
    },
    changeCategory(selectedCategory) {
      this.$store.dispatch('changeCategory', selectedCategory);
    },
    // 取得優惠券資料
    getCouponCode() {
      const vm = this;
      const apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=1`;

      vm.$store.dispatch('updateLoading', true);
      axios.get(apiUrl).then((response) => {
        vm.coupon = response.data.coupons;
        vm.$store.dispatch('updateLoading', false);
      });
    },
    showCoupon() {
      this.$bus.$emit('sweet-alert-info', {
        icon: 'info',
        title: '複製優惠碼: V-Headphone',
      });
    },
  },
  computed: {
    allProducts() {
      const vm = this;
      // 監測 VueX，並過濾資料
      return vm.$store.state.allProducts
        .filter(item => (vm.$store.state.selectedCategory === item.type
          ? vm.$store.state.selectedCategory === item.type
          : vm.$store.state.selectedCategory === item.category))
        .reverse();
    },
    nowCategory() {
      return this.$store.state.selectedCategory;
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped>

.banner{
  background-image:url(https://www.ponyrent.com.tw/images/banner.jpg);
  // background-size: cover;
  // height: 400px;
  max-width: 100%;
  min-height: 310px;
  // max-height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  
}

@media(max-width:500px){
  .banner{
    // background: url(https://www.toyota.com.tw/C-HR_UPGRADE/images/kv_03.png);
    background: url(https://www.abcar.com.tw/skin/banner.jpg);

    background-size: cover;
    min-height: 310px;
    background-position: 50% 50%;
    max-height: 50vh;
  }
}
.sticky-list {
    @media (min-width: 992px) {
      position: sticky !important;
      top: 93px;
    }
  }
.category-btn {
    border-radius: 5px;
    border: 0.5px solid #ccc;
    margin-bottom: 2%;
    transition: all 0.5s;
    @media (max-width: 366px) {
      width: 49%;
    }
    @media (min-width: 367px) and (max-width: 991px) {
      width: 32%;}
    p { margin: 0;
      font-weight: bold;
      @media (min-width: 767px) {  padding-left: 20px;
      }
    }
    &:hover {border: 0.5px solid #c1170c;box-shadow: 0 1px 5px #c1170c;
    }
    &.active { border: 0.5px solid #0c5ac1;
      box-shadow: 0 2px 10px #180cc1;}
      }


//  .banner{
//      width: 100%;
//      height: 30vh;
//      object-fit: cover;
//  }
//   @media(max-width:500px){
//    .banner{ 
//      height: 50vh;
//    }
//   }



// .jumbotron 
//   // background: url(https://www.toyota.com.tw/C-HR_UPGRADE/images/kv_03.png)
//    background: url(https://www.ponyrent.com.tw/images/banner.jpg) 
  
//     no-repeat;
//     max-width: 100%;

//   //  background-position: center center;
//   //  background-size: cover;
// 
</style>
