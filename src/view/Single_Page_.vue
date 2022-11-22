<template>
  <div>
    <section>
      <header class="main mt-5">
        <h1>{{ this.data.name }}</h1>
        <div class="d-flex justify-content-between align-items-center" style="height=50px">
          <p class="m-0">{{ this.data.address }}</p>
          <strong>
            <h2 class="text-success">{{ new Intl.NumberFormat(
                'vi-VN',
                { style: 'currency', currency: 'VND' })
                .format(this.data.costOriginal)
            }} /Đêm</h2>
          </strong>
        </div>
      </header>

      <!-- Image -->
      <div id="carousel" style="width: 1200px;">
        <carousel>
          <slide v-for="item in images" v-bind:key="item.id">
            <img :src="item" alt="" class="img_galary">
          </slide>
        </carousel>
      </div>
      <!-- Describe -->
      <hr />
      <h2>Mô tả:
        <strong :class="{ 'text-success': this.data.rate >= 8 & this.data.number_reviews >= 100 }">
          {{ this.data.rate }} Điểm
        </strong>
      </h2>
      <p>
        <span :class="{ 'text-success': this.data.number_reviews >= 100 }">{{
            this.data.number_reviews
        }} lượt đánh giá</span>
      </p>
      <p>{{ this.data.description }}</p>
      <!-- facility -->
      <hr />
      <h2>Tiện ích khách sạn</h2>
      <div class=" d-flex row">
        <p class="col-4 d-flex justify-content-start align-items-center" v-for="item in facility" v-bind:key="item.id">
          <b-icon icon="star-fill" font-scale="1"></b-icon>
          <strong class="ms-3">{{ item }}</strong>
        </p>
      </div>
      <!-- location around -->
      <hr />
      <h2>Địa điểm gần khách sạn</h2>
      <div>
        <div class="d-flex row">
          <div class="col-4 d-flex justify-content-between align-items-center mb-3" v-for="item in locationsDistance"
            v-bind:key="item.id">
            <div class="d-flex justify-content-between align-items-center">
              <strong>
                <b-icon icon="camera" font-scale="1.5"></b-icon>
              </strong>
              <p class="m-1 text-secondary">{{ Object.keys(item)[0] }}</p>
            </div>
            <p class="m-0">{{ Object.values(item)[0] }} km</p>
          </div>
        </div>
      </div>
      <hr class="major" />

      <h2>Interdum sed dapibus</h2>
      <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
        venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
        auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque
        in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar
        mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque
        enim turpis, hendrerit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam
        tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
        ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non,
        bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In
        non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor
        imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
        Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at,
        elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>

      <hr class="major" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Singe_page_",
  data() {
    return {
      idHotel: this.$route.query.idHotel,
      data: [],
      facility: [],
      locationsDistance: [],
      images: [],
      reviews: []
    }
  },
  computed: {},
  mounted() {
    this.getHotel()
  },
  methods: {
    async getHotel() {
      await axios
        .get("http://127.0.0.1:8090/api/hotel/getHotel?idHotel=" + this.idHotel)
        .then(response => {
          this.data = response.data;
          this.facility = this.data.facility
          this.locationsDistance = this.data.locationsDistance
          this.images = this.data.images
          window.scrollTo(0, 0);
        });
    },
  }
}
</script>
<style>
.img_galary {
  widows: 100%;
  height: 400px;
  margin-left: 50px;
}

button {
  box-shadow: none !important;
}
</style>