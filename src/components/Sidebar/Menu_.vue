<template>
    <nav id="menu">
        <header class="major">
            <h2>Menu</h2>
        </header>
        <ul>
            <li>
                <router-link to="/">Trang chủ</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Search_Page', params: { path: 'search' } }">
                    Tìm kiếm
                </router-link>
            </li>
            <li>
                <span class="opener" :class="{ active: isActive }" @click="isActive = !isActive">Khu vực</span>
                <ul>
                    <li v-for="item in locations" v-bind:key="item.id">
                        <router-link
                            :to="{ name: 'Page_Location', params: { path: 'location' }, query: { idLocation: item.idLocation, filter: true } }">
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
            isActive: true
        }
    },
    props: ['locations'],
    watch: {
        '$route.query.idHotel': {
            handler: function () {
                this.isActive = false
            }
        },
        '$route.query.recommend': {
            handler: function () {
                let recommend = this.$route.query.recommend
                if (typeof recommend === "undefined") {
                    this.isActive = true
                }
            }
        }
    }
}
</script>
<style>
.active_link {
    color: red;
}
</style>