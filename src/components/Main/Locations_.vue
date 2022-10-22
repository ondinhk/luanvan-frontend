<template>
    <section>
        <header class="major">
            <h2>Explore Vietnam</h2>
        </header>
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-column justify-content-center align-items-center" v-for="item in locations"
                v-bind:key="item.id">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image" :src="item.image"></b-img>
                <a href="" class="name_locations">
                    <h3>{{ item.name }}</h3>
                </a>
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