<template>
    <section id="banner">
        <span class="image object">
            <img :src="this.location.image" alt="" />
        </span>
        <div class="content">
            <header>
                <h1>{{ this.location.name }}</h1>
            </header>
            <p>{{ this.location.describe }}</p>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios'
export default {
    props: ['idLocation'],
    name: 'describe_location',
    data() {
        return {
            location: []
        }
    },
    mounted() {
        this.getLocation()
    },
    methods: {
        async getLocation() {
            await axios
                .get("http://127.0.0.1:8090/api/location/getLocation?idLocation=" + this.idLocation)
                .then(response => {
                    this.info = response;
                    this.location = this.info.data;
                });
        }
    }

}
</script>
