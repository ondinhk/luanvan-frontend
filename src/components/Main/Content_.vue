<template>
    <section>
        <header class="major" id="the_most">
            <h2>The Most</h2>
        </header>
        <div class="posts">
            <!-- For item in DataAll -->
            <article v-for="item in infoHotels" v-bind:key="item.id">
                <a href="#" class="image"><img :src="item.images[0]" alt="" class="image-item" /></a>
                <h3>{{ item.name}}</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                    <!-- <li><a href="#" class="button">More</a></li> -->
                </ul>
            </article>

        </div>
        <div class="overflow-auto">
            <div class="mt-3">
                <b-pagination v-model="currentPage" :total-rows="rows" align="fill" :per-page="size" last-number>
                </b-pagination>
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios'
export default {
    name: "Content_",
    data() {
        return {
            rows: 0,
            currentPage: 1,
            size: 6,
            linkApi: "http://127.0.0.1:8090/api/getListHotels?",
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
                    this.rows = this.data.totalElements
                    this.infoHotels = this.data.content
                });
        }
    },
    watch: {
        currentPage() {
            this.getListHotels()
        }
    }
}
</script>