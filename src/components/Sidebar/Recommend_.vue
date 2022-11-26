<template>
    <section>
        <header class="major">
            <h2>Recommend</h2>
        </header>
        <div class="mini-posts">
            <article v-for="item in infoHotels" v-bind:key="item.id">
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
                <p>{{ item.address }}</p>
            </article>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'Recomend_',
    data() {
        return {
            recommend: false,
            isSearch: false,
            size: 6,
            linkApi: "http://127.0.0.1:8090/api/hotel/getHotel",
            data: [],
            infoHotels: [],
            idHotel: this.$route.query.idHotel,
            description: "",
            idLocation: ""
        }
    },
    computed: {},
    mounted() {
        this.recommend = this.$route.query.recommend
        if (this.recommend == true) {
            this.getHotel()
        }
    },
    beforeUpdate() {
        this.recommend = this.$route.query.recommend
        console.log(this.recommend)
    },
    methods: {
        async getHotel() {
            await axios
                .get(this.linkApi + "?idHotel=" + this.idHotel)
                .then(response => {
                    this.description = response.data.description
                    this.idLocation = response.data.idLocation
                    this.idHotel = response.data.id
                    console.log(this.idLocation)
                });
            this.sleep(2000).then(() => { this.getRecommendHotels(); })
        },
        async getRecommendHotels() {
            const input_user = { input: this.description, size: this.size, idLocation: this.idLocation };
            const response = await axios.post("http://127.0.0.1:8090/api/machines/recommend/", input_user);
            this.infoHotels = response.data;
            console.log(this.infoHotels)
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    watch: {
        idHotel() {
            console.log(this.idHotel)
            this.getHotel()
        }
    }
}
</script>
<style>
.fixed-content {
    top: 0;
    bottom: 0;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>