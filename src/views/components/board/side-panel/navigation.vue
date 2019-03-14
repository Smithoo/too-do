<template>
    <nav class="navigation">
        <ul>
            <li><router-link to="/board/all">All</router-link></li>
            <li v-for="pipeMeta in pipeMetas" :key="pipeMeta.id">
                <router-link :to="getPipeUrl(pipeMeta.id)">{{ pipeMeta.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        pipeMetas() {
            return this.$store.getters['board/pipeMetas'];
        },
    },
    methods: {
        getPipeUrl(pipeId) {
            return `/board/${pipeId}`;
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
