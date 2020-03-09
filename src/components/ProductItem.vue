<template>
  <div class="container mt-5">
    <br />
    <br />
    <br />
    <br />

    <div class="row mb-5">
      <div class="col-lg-6">
        <zoom-on-hover :img-normal="product.imageUrl" :scale="1.5"></zoom-on-hover>
      </div>
      <div class="col-lg-6 d-flex flex-column">
        <h2>{{ product.title }}</h2>

           <div class="h5 mt-4 mb-3"
            v-if="!product.price">NT{{ product.origin_price | currency }}</div>
            <div
              class="h6 text-secondary mt-4 bar"
              v-if="product.price"
            >原價 NT{{ product.origin_price | currency }}/天</div>
      
        <p class="h4 text-right text-danger" v-if="product.price">特價 NT {{ product.price | currency }}/天</p>

        <p class="border-bottom mb-5"></p>
        <p class="mb-5 font-weight-bold h4" style="line-height: 1.5">{{ product.description }}</p>
        <!-- <ul class="mb-5">
          <li class="mb-3" v-for="(content, key) in product.content" :key="key">{{ content }}</li>
        </ul> -->
       <p class="mb-5  h6" style="line-height: 1.0">{{product.content}}</p>

        <div class="row justify-content-between">

           <select name class="form-control my-3" v-model="qty">
              <option value="0" selected disabled>請選擇天數</option>
              <option :value="num" v-for="num in 10" :key="num">租 {{num}} {{product.unit}}</option>
            </select>


          
          <button type="button" class="btn btn-outline-dark" @click="addToCart(product.id)">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      qty: 1,
    };
  },
  methods: {
    // 取得單一產品細節
    getProduct() {
      const vm = this;
      const apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${this.$route.params.productId}`;
      vm.$store.dispatch('updateLoading', true);
      axios.get(apiUrl).then((response) => {
        vm.product = response.data.product;
        vm.$store.dispatch('updateLoading', false);
      });
    },
    addToCart(productId) {
      const vm = this;
      const apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: productId,
        qty: vm.qty,
      };
      vm.$store.dispatch('updateLoading', true);
      axios
        .post(apiUrl, {
          data: cart,
        })
        .then(() => {
          vm.$bus.$emit('sweet-alert', {
            icon: 'success',
            title: '已成功加入購物車',
          });
          vm.$store.dispatch('getCarts');
          vm.$store.dispatch('updateLoading', false); 
        });
    },
    decreaseQty() {
      if (this.qty !== 1) {
        this.qty -= 1;
      }
    },
    increaseQty() {
      this.qty += 1;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
.not-allowed {
  cursor: default;
}
.bar{
  text-decoration:line-through;
}
</style>
