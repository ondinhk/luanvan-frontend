<template>
    <div>
        <Banner_ />
        <Locations_ :locations=this.locations />
        <Content_ />
    </div>
</template>
  
<script>
import Banner_ from '../components/Main/Banner_.vue'
import Locations_ from '../components/Main/Locations_.vue'
import Content_ from '../components/Main/Content_.vue'
import axios from 'axios'
export default {
    name: "Main_",
    components: { Banner_, Locations_, Content_ },
    data() {
        return {
            locations: []
        }
    },
    mounted() {
        this.getLocations()
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