<template>
    <nav class="navigation">
        <ul>
            <li><router-link to="/board/all">All</router-link></li>
            <li v-for="columnMeta in columnMetas" :key="columnMeta.id">
                <router-link :to="getColumnUrl(columnMeta.id)">{{ columnMeta.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        columnMetas() {
            return this.$store.getters['board/columnMetas'];
        },
    },
    methods: {
        getColumnUrl(columnId) {
            return `/board/${columnId}`;
        },
    },
};
</script>

<style scoped>
.navigation {
    margin-top: 20px;
}
ul li {
    background-color: #ffffff;
}
ul li:hover {
    background-color: #3f3f3f;
}
li a {
    padding: 10px 12px;
    display: block;
    width: 100%;
    height: 100%;
    color: #555555;
    box-sizing: border-box;
}
li:hover a {
    color: #ffffff;
}
li a.router-link-exact-active {
    background-color: #3f3f3f;
    color: #ffffff;
}
</style>
