<template>
    <section>
        <header class="major">
            <h2>Các địa danh</h2>
        </header>
        <div class="d-flex justify-content-start row">
            <div class="d-flex flex-column justify-content-center align-items-center col-3 mb-5"
                v-for="item in locations" v-bind:key="item.id">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image" :src="item.image"></b-img>
                <router-link class="name_locations"
                    :to="{ name: 'Page_Location', params: { path: 'location' }, query: { idLocation: item.idLocation, filter: true } }"
                    @click.native="$scrollToTop">
                    <h3> {{ item.name }}</h3>
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: "Locations_",
    props: ['locations'],
    data() {
        return {
            mainProps: { blankColor: '#777', width: 180, height: 180, class: 'm1' }
        }
    }
}
</script>
<style>
.name_locations {
    width: fit-content;
    margin-top: 20px;
    text-decoration: none;
}

.name_locations :hover {
    color: #f56a6a;
}
</style>