<template>
    <footer>
        © {{ year }} Smithoo Lab
        <a href="https://github.com/smithoo/too-do" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style scoped>
footer {
    width: 100%;
    height: 20px;
    color: #9d9d9d;
    font-size: 11px;
    box-sizing: border-box;
    text-align: center;
}
footer a {
    margin-left: 6px;
    color: inherit;
}
footer a:hover {
    color: #5d5d5d;
    text-decoration: underline;
}
</style>
