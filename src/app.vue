<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
html, body {
    position: relative;
    width: 100%;
    height: 100%;
}
#app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
