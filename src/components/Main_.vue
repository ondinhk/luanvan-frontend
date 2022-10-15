<template>
    <div id="main">
        <div class="inner">
            <Header_ />
            <Banner_ />
            <Locations_ />
            <Content_ />
        </div>
    </div>
</template>
  
<script>
import Header_ from './Main/Header_.vue';
import Banner_ from './Main/Banner_.vue';
import Locations_ from './Main/Locations_.vue';
import Content_ from './Main/Content_.vue';
export default {
    name: "Body_",
    data() {
        return {};
    },
    computed: {},
    mounted() { },
    methods: {},
    components: { Header_, Banner_, Locations_, Content_ }
}
</script>