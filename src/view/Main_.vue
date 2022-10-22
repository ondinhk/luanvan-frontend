<template>
    <div>
        <Banner_ />
        <Locations_ :locations=locations />
        <Content_ />
        <Pagination_ />
    </div>
</template>
  
<script>
import Banner_ from '../components/Main/Banner_.vue';
import Locations_ from '../components/Main/Locations_.vue';
import Content_ from '../components/Main/Content_.vue';
import Pagination_ from '../components/Main/Content/Pagination_.vue';
export default {
    name: "Main_",
    props: ['locations'],
    components: { Banner_, Locations_, Content_, Pagination_ }
}
</script>