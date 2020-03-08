<template>
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <h2 class="text-center border-bottom pb-3 m-0">
        <span>填寫資訊</span>
      </h2>
       <button
        class="btn btn-outline-secondary btn-sm text-left rounded-0 mt-3 mb-5"
        @click="showCarts"
      > 
        訂單細節
         <i
          class="arrowIcon fal fa-arrow-circle-up ml-1"
          :class="{'arrowRotate': arrowRotate}"
        ></i> 
       </button> 
      <div class="carts">
        <table class="table">
          <thead>
            <th
              colspan="2"
              width="100"
            >品名</th>
            <th class="text-right">數量</th>
            <th class="text-right">總計</th>
          </thead>
         
          <tbody>
            <tr
              v-for="item in carts.carts"
              :key="item.id"
            >
              <td>
                <img
                  class="img-fluid"
                  width="56"
                  :src="item.product.imageUrl"
                  alt
                />
              </td>
              <td class="align-middle">
                {{item.product.title}}
                <p
                  class="text-success m-0"
                  v-if="item.final_total !== item.total"
                >已套用優惠券</p>
              </td>
              <td class="text-right align-middle">{{item.qty}}</td>
              <td class="text-right align-middle">
                <span v-if="item.final_total === item.total">{{item.total|currency}}</span>
                <span
                  v-else
                  class="text-success"
                >{{item.final_total|currency}}</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td
              colspan="3"
              class="text-right text-success"
              v-if="carts.total !== carts.final_total"
            >折扣價</td>
            <td
              colspan="3"
              class="text-right"
              v-else
            >總計</td>

            <td
              class="text-right text-success"
              v-if="carts.total !== carts.final_total"
            >{{ carts.final_total | currency}}</td>
            <td
              class="text-right"
              v-else
            >{{ carts.total | currency }}</td>
          </tfoot> 
        
        </table>
      </div>
       <form
        class="border-bottom mb-5"
        @submit.prevent="createOrder"
      > 
        <div class="form-row">
          <div class="form-group col-md-6">
            <div class="input-group border-bottom">
              <div class="input-group-prepend">
                <div class="input-group-text bg-white border-0">
                  <i class="fal fa-user"></i>
                </div>
              </div>
              <input
                type="text"
                name="name"
                class="form-control border-0"
                placeholder="您的真實姓名"
                v-model="form.user.name"
                
              />
            </div>
           
          
          </div>
          <div class="form-group col-md-6">
            <div class="input-group border-bottom">
              <div class="input-group-prepend">
                <div class="input-group-text bg-white border-0">
                  <i class="fal fa-mobile-alt"></i>
                </div>
              </div>
              <input
                type="tel"
                name="tel"
                class="form-control border-0"
                placeholder="手機或市話"
                v-model="form.user.tel"
               
              />
            </div>
           
          </div>
        </div>
        <div class="form-group">
          <div class="input-group border-bottom">
            <div class="input-group-prepend">
              <div class="input-group-text bg-white border-0">
                <i class="fal fa-envelope"></i>
              </div>
            </div>
            <input
              type="email"
              name="email"
              class="form-control border-0"
              placeholder="Email"
              v-model="form.user.email"
            
            />
          </div>
         
        </div>

        <div class="form-group">
          <div class="input-group border-bottom mb-4">
            <div class="input-group-prepend">
              <div class="input-group-text bg-white border-0">
                <i class="fal fa-home-lg"></i>
              </div>
            </div>
            <input
              type="text"
              name="address"
              class="form-control border-0"
              placeholder="請輸入住址"
              v-model="form.user.address"
            />
          </div>
         
        </div>
        <div class="text-right">
          <button
            type="submit"
            class="btn btn-outline-dark rounded-0 px-5 mb-5"
          >送出訂單</button>
        </div>
       </form> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
      },
      arrowRotate: false,
    };
  },
 methods: {
showCarts() {
      $('.carts').slideToggle();
      this.arrowRotate = !this.arrowRotate;
    },

computed: {
    carts() {
      return this.$store.state.carts;
    },
  },


 }
 
 
};
</script>

<style lang="scss" scoped>
.carts {
  display: none;
}

.arrowIcon {
  transition: all 0.5s;
}

.arrowRotate {
  transform: rotate(180deg);
  transition: all 0.5s;
}
</style>