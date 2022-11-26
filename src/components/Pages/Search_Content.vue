<template>
  <div class="posts">
    <!-- For item in DataAll -->
    <article v-for="item in infoHotels" v-bind:key="item.id">
      <router-link class="image name_locations" style="margin: 0;"
        :to="{ name: 'Single_Page', params: { path: 'hotel' }, query: { idHotel: item.id, recommend: true } }">
        <img :src="item.images[0]" alt="" class="image-item" style="margin: 0;" />
      </router-link>
      <div class="d-flex justify-content-between align-items-center">
        <router-link class="name_locations link_hotel"
          :to="{ name: 'Single_Page', params: { path: 'hotel' }, query: { idHotel: item.id, recommend: true } }">
          <h3 style="height: 65px">{{ item.name }}</h3>
        </router-link>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <h4>Điểm: </h4>
          <p><strong :class="{ 'text-success': item.rate >= 8.0 & item.number_reviews >= 100 }">{{
              item.rate
          }}</strong>
          </p>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <h4>Số lượt: </h4>
          <p :class="{ 'text-success': item.rate >= 8.0 & item.number_reviews >= 100 }">{{
              item.number_reviews
          }} lượt đánh giá</p>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <h4>Giá trung bình: </h4>
          <p class="text-end" :class="{ 'text-success': item.rate >= 8.0 & item.number_reviews >= 100 }">
            {{
                new Intl.NumberFormat(
                  'vi-VN',
                  { style: 'currency', currency: 'VND' })
                  .format(item.costOriginal)
            }} /Đêm</p>
        </div>
        <div>
          <div class="">
            <h4>Địa chỉ: </h4>
            <p>{{ item.address }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
  
<script>
export default {
  name: 'Search_Content',
  props: ['infoHotels'],
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>