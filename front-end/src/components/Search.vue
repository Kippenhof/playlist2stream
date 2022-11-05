<template>
    <div>
        <input type="text" placeholder="Your Video" v-model="query" />
        <br />
        {{ query }}
    </div>
</template>
<script>
    import { ref } from 'vue'

    export default {
        name: 'VueSearch',
        setup() {
            const query = ref('')
            return{
                query,
            }
        },
    }
</script>