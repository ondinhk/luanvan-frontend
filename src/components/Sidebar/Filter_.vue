<template>
    <section>
        <header class="major">
            <h2 class="mb-4">Chọn lọc theo:</h2>
        </header>
        <div>
            <h3>Giá tiền</h3>
            <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="cost" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                    <p class="h6">Dưới 1.000.000 VND</p>
                </b-form-radio>
                <b-form-radio v-model="cost" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                    <p class="h6">Từ 1.000.000 VND - 3.000.000 VND</p>
                </b-form-radio>
                <b-form-radio v-model="cost" :aria-describedby="ariaDescribedby" name="some-radios" value="C">
                    <p class="h6">Trên 4.000.000 VND</p>
                </b-form-radio>
            </b-form-group>
            <h3>Đánh giá </h3>
            <b-form-group label="" v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="rate" :aria-describedby="ariaDescribedby" name="some-radios" value="comment">
                    <p class="h6">Bình luận nhiều nhất</p>
                </b-form-radio>
                <b-form-radio v-model="rate" :aria-describedby="ariaDescribedby" name="some-radios" value="numberRate">
                    <p class="h6">Điểm đánh giá cao nhất</p>
                </b-form-radio>
            </b-form-group>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Filter_',
    components: {},
    data() {
        return {
            selected: ''
        }
    },
    computed: {},
    mounted() {
    },
    beforeUpdate() {
    },
    methods: {
    },
    watch: {
    }
}
</script>
<style>

</style>