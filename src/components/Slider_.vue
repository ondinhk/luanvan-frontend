<template>
    <div id="sidebar">
        <div class="inner">
            <!-- <Search_ /> -->
            <Menu_ :locations=locations />
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
// import Search_ from './Sidebar/Search_.vue';
import Recommend_ from './Sidebar/Recommend_.vue';
export default {
    name: "Slider_",
    props: ["locations"],
    components: { Info_, Footer_, Menu_, Recommend_ }
}
</script>