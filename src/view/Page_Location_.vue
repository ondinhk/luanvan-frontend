<template>
    <div>
        <Banner_ />
        <Des_Location_ />
        <Content_ />
    </div>
</template>
  
<script>
import Des_Location_ from '@/components/Pages/Des_Location_.vue';
import Content_ from '@/components/Main/Content_.vue';
import Banner_ from '@/components/Main/Banner_.vue';
export default {
    name: "Page_Location",
    components: { Des_Location_, Content_, Banner_ }
}
</script>