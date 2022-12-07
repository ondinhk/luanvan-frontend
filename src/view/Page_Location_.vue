<template>
    <div>
        <Des_Location_ :idLocation=idLocation />
        <Content_Location_ :idLocation=idLocation :size="12" />
    </div>
</template>
  
<script>
import Des_Location_ from '../components/Pages/Des_Location_.vue';
import Content_Location_ from '../components/Pages/Content_Location_.vue';
export default {
    name: "Page_Location",
    data() {
        return {
            idLocation: this.$route.query.idLocation
        }
    },
    components: { Des_Location_, Content_Location_ },
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