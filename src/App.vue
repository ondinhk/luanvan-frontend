<template>
  <div id="wrapper">
    <div id="main">
      <div class="inner">
        <Header_ />
        <router-view />
      </div>
    </div>
    <Slider_ :locations=locations />
  </div>
</template>

<script>
import Slider_ from './components/Slider_.vue'
import axios from 'axios'
import Header_ from './components/Main/Header_.vue'

export default {
  name: 'App',
  data() {
    return {
      locations: []
    }
  },
  components: {
    Slider_,
    Header_
  },
  mounted() {
    this.getLocations()
  },
  methods: {
    async getLocations() {
      await axios
        .get("http://127.0.0.1:8090/api/getLocations")
        .then(response => {
          this.info = response;
          this.locations = this.info.data;
          console.log(this.locations);
        });
    }
  }
}
</script>
