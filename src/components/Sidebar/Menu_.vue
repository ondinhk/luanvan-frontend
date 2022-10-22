<template>
    <nav id="menu">
        <header class="major">
            <h2>Menu</h2>
        </header>
        <ul>
            <li>
                <router-link to="/">Trang chủ</router-link>
            </li>
            <li><a href="generic.html">Google Map</a></li>
            <li><a href="elements.html">Tìm kiếm</a></li>
            <li>
                <span class="opener" :class="{ active:isActive }" @click="isActive = !isActive">Khu vực</span>
                <ul>
                    <li v-for="item in locations" v-bind:key="item.id">
                        <router-link :to="{ path: '/location', query: { idLocation: item.idLocation}}">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'Menu_',
    data() {
        return {
            isActive: false
        }
    },
    props: ['locations']
}
</script>