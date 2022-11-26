<template>
    <div class="mini-posts">
        <article v-for="item in infoHotels" v-bind:key="item.id">
            <div v-if="item.id != idHotel">
                <router-link class="image"
                    :to="{ name: 'Single_Page', params: { path: 'hotel' }, query: { idHotel: item.id, recommend: true } }">
                    <img :src="item.images[0]" alt="" />
                </router-link>
                <p><strong>{{ item.name }} &nbsp;&nbsp; </strong>
                    <span class="text-success">
                        {{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency', currency: 'VND'
                            }).format(item.costOriginal)
                        }}
                    </span>
                </p>
                <p>{{ item.address }}</p>
            </div>
        </article>
    </div>
</template>
  
<script>
export default {
    name: 'MiniPost_',
    props: ['infoHotels'],
    data() {
        return {
            idHotel: this.$route.query.idHotel
        }
    },
    computed: {},
    mounted() { },
    methods: {}
}
</script>