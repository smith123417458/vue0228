<template>
  <section id="event">
    <h3 class="h5 text-secondary text-center py-5">
      <span class="border-bottom">EVENT</span>
    </h3>

    <div class="bg-custom">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-6 text-light d-flex justify-content-center align-items-center"
            v-scroll-reveal="{origin: 'top'}"
            style="overflow: hidden"
          >
            <div class="event-information">
              <h3 class="display-4 my-4" > 當日租還．暢遊趣 </h3>
              <p class="mb-4">
               當日租還享平日55折，假日65折，限出車當日晚上8點前還車
              </p>
              <ul class="list-unstyled mb-5">
                <li>
                  <i class="fal fa-clock"></i>專案效期：2020.01.01~2020.12.31
                </li>
                <li>
                  當日租還暢遊趣，週一至週五享訂價55折，假日享訂價65折。</li>
              </ul>
              <p>
                <span class="font-weight-bold">限出車當日晚上8點前還車</span>，方可適用本專案。
              </p>
              <p>逾出車當日晚上8點還車，則需收取租賃車款之一日租金(平日75折；假日85折)</p>
            </div>

          </div>
          <div class="col-md-6 p-0">
            <div class="event-img"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/customMixins.scss";

.event-img {
  min-height: 450px;
  background: url(https://www.honda-taiwan.com.tw/UploadFiles/HondaCar/PC%20Banner_CR-V.jpg) no-repeat;
  background-size: cover;
}
</style>
