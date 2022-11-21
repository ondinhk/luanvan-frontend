<template>
    <section>
        <header class="major">
            <h2>Recommend</h2>
        </header>
        <div class="mini-posts">
            <article v-for="item in infoHotels" v-bind:key="item.id">
                <router-link class="image"
                    :to="{ name: 'Single_Page', params: { path: 'hotel' }, query: { idHotel: item.id } }">
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
            total: 0,
            currentPage: 1,
            size: 5,
            linkApi: "http://127.0.0.1:8090/api/hotel/getAllHotels?",
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
                .get(this.linkApi + "page=" + this.currentPage + "&" + "size=" + this.size)
                .then(response => {
                    this.info = response;
                    this.data = this.info.data;
                    this.total = this.data.totalElements
                    this.infoHotels = this.data.content
                });
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