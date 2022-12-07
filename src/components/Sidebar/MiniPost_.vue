<template>
    <div class="mini-posts">
        <article v-for="item in infoHotels" v-bind:key="item.id">
            <div v-if="item.id != idHotel">
                <router-link class="image"
                    :to="{ name: 'Single_Page', params: { path: 'hotel' }, query: { idHotel: item.id, recommend: true } }">
                    <img :src="item.images[0]" alt="" />
                </router-link>
                <p><strong>{{ item.name }} &nbsp;&nbsp; </strong>
                    <span class="text-success">
                        {{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency', currency: 'VND'
                            }).format(item.costOriginal)
                        }}
                    </span>
                </p>
                <div>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Điểm: </h5>
                        <p><strong :class="{ 'text-success': item.rate >= 8.0 & item.number_reviews >= 100 }">{{
                                item.rate
                        }}</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Số lượt: </h5>
                        <p :class="{ 'text-success': item.rate >= 8.0 & item.number_reviews >= 100 }">{{
                                item.number_reviews
                        }} lượt đánh giá</p>
                    </div>
                </div>
                <p>{{ item.address }}</p>
            </div>
        </article>
    </div>
</template>
  
<script>
export default {
    name: 'MiniPost_',
    props: ['infoHotels'],
    data() {
        return {
            idHotel: this.$route.query.idHotel
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>