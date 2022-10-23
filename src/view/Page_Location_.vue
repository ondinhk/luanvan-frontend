<template>
    <div>
        <Des_Location_ :idLocation=idLocation />
        <Content_ />
    </div>
</template>
  
<script>
import Des_Location_ from '../components/Pages/Des_Location_.vue';
import Content_ from '../components/Main/Content_.vue';
export default {
    name: "Page_Location",
    data() {
        return {
            idLocation: this.$route.query.idLocation
        }
    },
    components: { Des_Location_, Content_ },
    mounted() {
        this.scrollToTop()
    },
    watch: {
        $route() {
            this.scrollToTop()
        }
    }
}
</script>