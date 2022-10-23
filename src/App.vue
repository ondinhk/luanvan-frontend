<template>
  <div id="wrapper">
    <div id="main">
      <div class="inner">
        <Header_ />
        <router-view :key="$route.fullPath" />
      </div>
    </div>
    <Slider_ />
  </div>
</template>

<script>
import Slider_ from './components/Slider_.vue'
import Header_ from './components/Main/Header_.vue'

export default {
  name: 'App',
  components: {
    Slider_,
    Header_
  }
}
</script>
