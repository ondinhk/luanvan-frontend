<template>
    <section>
        <hr class="major" />
        <header class="major" id="the_most">
            <h2 class="mb-4">Hiện có {{ this.total }} khách sạn trong khu vực</h2>
        </header>
        <section>
            <div class="container">
                <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <div class="d-flex align-items-center mb-5">
                        <h3 class="mb-4 me-5">Sắp xếp theo:</h3>
                        <div>
                            <div class="d-flex">
                                <b-form-radio class="me-3" v-model="filterCommend" :aria-describedby="ariaDescribedby"
                                    name="filterRate" value="maxComment">
                                    <p class="h6 mt-1">Bình luận nhiều nhất</p>
                                </b-form-radio>
                                <b-form-radio class="me-3" v-model="filterCommend" :aria-describedby="ariaDescribedby"
                                    name="filterRate" value="maxRate">
                                    <p class="h6 mt-1">Điểm đánh giá cao nhất</p>
                                </b-form-radio>
                                <b-form-radio class="me-3" v-model="filterCommend" :aria-describedby="ariaDescribedby"
                                    name="filterRate" value="minCost">
                                    <p class="h6 mt-1">Giá tăng dần</p>
                                </b-form-radio>
                                <b-form-radio class="me-3" v-model="filterCommend" :aria-describedby="ariaDescribedby"
                                    name="filterRate" value="maxCost">
                                    <p class="h6 mt-1">Giá giảm dần</p>
                                </b-form-radio>
                            </div>
                        </div>
                    </div>
                </b-form-group>
            </div>
        </section>
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
    props: ['idLocation', 'size'],
    name: "Content_Location_",
    data() {
        return {
            total: 0,
            currentPage: 1,
            linkApi: "http://127.0.0.1:8090/api/hotel/getAllHotelsByLocation?",
            data: [],
            infoHotels: [],
            filterCommend: "maxComment",
        }
    },
    mounted() {
        this.getListHotels()
    },
    methods: {
        async getListHotels() {
            await axios
                .get(this.linkApi + "page=" + this.currentPage + "&size=" + this.size + "&idLocation=" + this.idLocation + "&filterCommend=" + this.filterCommend)
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
        },
        filterCommend() {
            this.getListHotels()
        }
    }
}
</script>
<style>
label {
    margin-bottom: 0;
}
</style>