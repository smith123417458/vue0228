<template>
  <section
    id="intro"
    class="d-flex justify-content-center align-items-center text-center my-5"
    v-scroll-reveal="{origin: 'bottom'}"
  >
    <div class="p-1" >
      <h2 class="h2 typing mb-4">
        好運租車
        <span>優質可靠輕鬆行編全台</span>
      </h2>
      <p class="h2 mb-4 typing">線上/手機即可預約,輕鬆成行</p>
      <router-link class="btn btn-outline-dark" to="/product"><i class="fal fa-headphones mr-1"></i>瀏覽商品</router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/customMixins.scss";
#intro {
  height: 80vh;
  @include BS-xl {
    height: 40vh;
  }
}
.typing {
      width: 15em;
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 7.5s steps(15, end);
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
</style>
