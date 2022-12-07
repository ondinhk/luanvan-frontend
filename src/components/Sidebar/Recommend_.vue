<template>
    <section>
        <header class="major">
            <h2>Khách sạn tương tự</h2>
        </header>
        <MiniPost_ :infoHotels=this.infoHotels :key="this.idHotel" />
    </section>
</template>
  
<script>
import axios from 'axios'
import MiniPost_ from './MiniPost_.vue'
export default {
    name: 'Recomend_',
    components: { MiniPost_ },
    data() {
        return {
            recommend: false,
            isSearch: false,
            size: 8,
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
        this.idHotel = this.$route.query.idHotel
    },
    methods: {
        async getHotel() {
            await axios
                .get(this.linkApi + "?idHotel=" + this.idHotel)
                .then(response => {
                    this.description = response.data.description
                    this.idLocation = response.data.idLocation
                    this.idHotel = response.data.id
                    this.getRecommendHotels()
                });
        },
        async getRecommendHotels() {
            const input_user = { input: this.description, size: this.size, idLocation: this.idLocation };
            console.log(input_user)
            await axios.post("http://127.0.0.1:8090/api/machines/recommend/", input_user)
                .then(response => {
                    this.infoHotels = response.data
                });
        }
    },
    watch: {
        '$route.query.idHotel': {
            handler: function () {
                this.getHotel()
            }
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