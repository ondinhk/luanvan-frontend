<template>
    <div>
        <Search_ />
    </div>
</template>
  
<script>
import Search_ from '@/components/Sidebar/Search_.vue';

export default {
    name: "Search_Page",
    data() {
        return {};
    },
    computed: {},
    mounted() {
        document.title = "Tìm kiếm"
    },
    methods: {},
    components: { Search_ }
}
</script>