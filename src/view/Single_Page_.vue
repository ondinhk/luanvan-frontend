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
      <h2>Vị trí trên bản đồ</h2>
      <Map_ v-if="flag" :location="location" />
      <hr class="major" />
    </section>
  </div>
</template>

<script>
import Map_ from '@/components/Main/Map_.vue';
import axios from 'axios'

export default {
  name: "Singe_page_",
  components: { Map_ },
  data() {
    return {
      idHotel: this.$route.query.idHotel,
      data: [],
      facility: [],
      locationsDistance: [],
      images: [],
      reviews: [],
      location: [],
      option: {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: { address: this.address, language: 'vi' },
        headers: {
          'X-RapidAPI-Key': 'ddf8ccf95amsh44b86fdc10b47a8p1fe214jsnbc9761949c4f',
          'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
      },
      flag: false
    }
  },
  mounted() {
    this.getHotel();
  },
  methods: {
    async getHotel() {
      await axios
        .get("http://127.0.0.1:8090/api/hotel/getHotel?idHotel=" + this.idHotel)
        .then(response => {
          this.data = response.data
          this.facility = response.data.facility
          this.locationsDistance = response.data.locationsDistance
          this.images = response.data.images
          this.option.params.address = response.data.address
          document.title = response.data.name
          this.getLocation()
          window.scrollTo(0, 0);
        });
    },
    async getLocation() {
      await axios(this.option)
        .then(res => {
          this.location = res.data.results[0].geometry.location
          this.flag = true
        })
        .catch(err => console.log(err))
    }
  },
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