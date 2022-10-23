<template>
    <div id="sidebar">
        <div class="inner">
            <!-- <Search_ /> -->
            <Menu_ :locations=this.locations />
            <Recommend_ />
            <Info_ />
            <Footer_ />
        </div>
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
            locations: []
        }
    },
    components: { Info_, Footer_, Menu_, Recommend_ },
    mounted() {
        this.getLocations()
    },
    methods: {
        async getLocations() {
            await axios
                .get("http://127.0.0.1:8090/api/getAllLocations")
                .then(response => {
                    this.info = response;
                    this.locations = this.info.data;
                });
        }
    }
}
</script>