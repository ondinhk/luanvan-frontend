<template>
    <div id="sidebar" :class="{ 'inactive': open_silder === false }">
        <div class="inner">
            <!-- <Search_ /> -->
            <Menu_ :locations=this.locations />
            <Recommend_ v-show="this.$route.query.recommend" :key="this.open_recommends" />
            <Info_ />
            <Footer_ />
        </div>
        <a href="#sidebar" class="toggle" @click="open_silder = !open_silder"></a>
    </div>
</template>
  
<script>
import Info_ from './Sidebar/Info_.vue';
import Footer_ from './Main/Footer_.vue';
import Menu_ from './Sidebar/Menu_.vue';
import Recommend_ from './Sidebar/Recommend_.vue';
import axios from 'axios'

export default {
    name: "Slider_",
    data() {
        return {
            locations: [],
            open_silder: true,
            open_recommends: false,
        }
    },
    components: { Info_, Footer_, Menu_, Recommend_ },
    mounted() {
        this.getLocations()
    },
    beforeUpdate() {
        this.open_recommends = this.$route.query.recommend
    },
    methods: {
        async getLocations() {
            await axios
                .get("http://127.0.0.1:8090/api/location/getAllLocations")
                .then(response => {
                    this.info = response;
                    this.locations = this.info.data;
                });
        }
    }
}
</script>