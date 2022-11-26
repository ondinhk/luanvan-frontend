<template>
    <!-- <form method="post" action="#" autocomplete="off">
            <input type="text" name="query" id="query" placeholder="Tìm kiếm" />

        </form> -->
    <div class="mt-5">
        <b-form @submit="onSubmit">
            <h2>Bạn muốn tìm ?</h2>
            <b-form-input id="input-1" v-model="search" type="text" placeholder="Ví dụ: khách sạn gần Đà Lạt..."
                required>
            </b-form-input>
            <b-button id="button_submit" type="submit" variant="danger">Tìm kiếm</b-button>
        </b-form>
        <h2 v-show="status == 200">Có {{ number_hotel }} khách sạn: {{ search }}</h2>
        <Search_Content :infoHotels=this.recommend v-show="status == 200" />
    </div>
</template>
  
<script>
import axios from 'axios'
import Search_Content from '../Pages/Search_Content.vue'
export default {
    name: "Search_",
    data() {
        return {
            search: "",
            size: 22,
            isSearch: true,
            recommend: [],
            status: 404,
            number_hotel: 0,
            idLocation: '',
        };
    },
    computed: {},
    mounted() { },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.postSearch();
        },
        async postSearch() {
            const input_user = { input: this.search, size: this.size, idLocation: this.idLocation };
            const response = await axios.post("http://127.0.0.1:8090/api/machines/recommend/", input_user);
            console.log(response);
            this.recommend = response.data;
            this.status = response.status;
            this.number_hotel = this.recommend.length;
        }
    },
    components: { Search_Content },
    watch: {
        search() {
            this.status = 404
        }
    }
}
</script>
<style>
#button_submit {
    margin-top: 20px;
    box-shadow: inset 0 0 0 1px #f56a6a !important;
}
</style>