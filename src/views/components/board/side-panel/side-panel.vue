<template>
    <aside>
        <add-button/>
        <hr/>
        <navigation/>
        <hr/>
        <tags/>
    </aside>
</template>

<script>
import AddButton from './add-button';
import Navigation from './navigation';
import Tags from './tags';

export default {
    components: {
        AddButton,
        Navigation,
        Tags,
    },
};
</script>

<style scoped>
aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #fff;
    transform: translateX(0px);
    transition: transform 0.3s;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #ddd;
    padding-top: 75px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    z-index: 900;
}
aside.sideOff {
    transform: translateX(-300px);
}
hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1.2em 0;
    padding: 0;
}
</style>
