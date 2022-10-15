<template>
    <div id="sidebar">
        <div class="inner">
            <Search_ />
            <Menu_ />
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
import Search_ from './Sidebar/Search_.vue';
import Recommend_ from './Sidebar/Recommend_.vue';
export default {
    name: "Slider_",
    data() {
        return {};
    },
    computed: {},
    mounted() { },
    methods: {},
    components: { Info_, Footer_, Menu_, Search_, Recommend_ }
}
</script>