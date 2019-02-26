<template>
    <div class="search">
        <input type="text" placeholder="search...">
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.search {
    position: absolute;
    top: 13px;
    left: 300px;
}
input {
    width: 320px;
    height: 32px;
    margin: 0;
    padding: 0 10px;
    font-size: 15px;
    box-sizing: border-box;
    border: none;
    border: solid 1px #ccc;
    border-radius: 2px;
}
</style>
