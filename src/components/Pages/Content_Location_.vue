<template>
    <section>
        <hr class="major" />
        <header class="major" id="the_most">
            <h2>Hiện có {{ this.total }} khách sạn</h2>
        </header>
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
        <!-- Paging -->
        <div class="overflow-auto">
            <div class="mt-3">
                <b-pagination v-model="currentPage" :total-rows="total" align="fill" :per-page="size" last-number>
                </b-pagination>
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios'
export default {
    props: ['idLocation'],
    name: "Content_Location_",
    data() {
        return {
            total: 0,
            currentPage: 1,
            size: 12,
            linkApi: "http://127.0.0.1:8090/api/hotel/getAllHotelsByLocation?",
            data: [],
            infoHotels: [],
        }
    },
    computed: {},
    mounted() {
        this.getListHotels()
    },
    methods: {
        async getListHotels() {
            await axios
                .get(this.linkApi + "page=" + this.currentPage + "&" + "size=" + this.size + "&" + "idLocation=" + this.idLocation)
                .then(response => {
                    this.info = response;
                    this.data = this.info.data;
                    this.total = this.data.totalElements
                    this.infoHotels = this.data.content
                });
        }
    },
    watch: {
        currentPage() {
            this.getListHotels()
            document.getElementById("the_most").scrollIntoView()
        }
    }
}
</script>