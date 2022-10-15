<template>

  <div id="wrapper">
    <!-- Main -->
    <Main_ />
    <!-- Sidebar -->
    <Slider_ />
  </div>

</template>

<script>
import Slider_ from './components/Slider_.vue'
import Main_ from './components/Main_.vue'

export default {
  name: 'App',
  components: {
    Slider_,
    Main_,
  }
}
</script>

<style>

</style>
