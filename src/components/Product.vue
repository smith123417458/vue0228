<template>
  <div>
    <!-- jumbotron -->

    
    <img src="https://www.ponyrent.com.tw/images/banner.jpg" >


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
 <br>
 <br>
    <div class="container">
      <div class="row">
        <!-- 左方產品分類 -->
        <div class="col-lg-3">
          <div class="list-group sticky-top mb-5">
            <a
              href="#"
              class="list-group-item list-group-item-action text-black font-weight-bold"
              :class="{'list-group-item-dark': nowCategory === 'car'}"
              @click.prevent="changeCategory('car')"
            >
             <i class="fas fa-car-side"></i>   car
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action text-black pl-5"
              :class="{'list-group-item-black': nowCategory === category}"
              v-for="category in this.$store.state.brands.car"
              :key="category"
              @click.prevent="changeCategory(category)"
            >{{category}}</a>
            <a
              href="#"
              class="list-group-item list-group-item-action text-black font-weight-bold"
              :class="{'list-group-item-dark': nowCategory === 'motorbike'}"
              @click.prevent="changeCategory('motorbike')"
            >
              <i class="fas fa-motorcycle"></i> motorbike
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action text-black pl-5"
              :class="{'list-group-item-dark': nowCategory === category}"
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
img{
  max-width: 100%;
  max-height: 100%;
  height: auto !important;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;

}
// .jumbotron 
//   // background: url(https://www.toyota.com.tw/C-HR_UPGRADE/images/kv_03.png)
//    background: url(https://www.ponyrent.com.tw/images/banner.jpg) 
  
//     no-repeat;
//     max-width: 100%;

//   //  background-position: center center;
//   //  background-size: cover;
// 
</style>
