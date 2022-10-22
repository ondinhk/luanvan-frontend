<template>
    <div class="overflow-auto">
        <div class="mt-3">
            <b-pagination v-model="currentPage" :total-rows="rows" align="fill" :per-page="per_page">
            </b-pagination>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Pagination_',
    data() {
        return {
            rows: 88,
            perPage: 1,
            currentPage: 1,
            per_page: 10,
        }
    }
}
</script>