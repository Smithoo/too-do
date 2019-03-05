<template>
    <aside :class="{ on: isOpen }">
        <div class="side-menu">
            <div class="side-wrap">
                <add-button/>
                <hr/>
                <navigation/>
                <hr/>
                <tags/>
            </div>
        </div>
        <button class="toggleBtn"
            type="button"
            @click="isOpen = !isOpen">
            <i class="material-icons md-12">arrow_right</i>
        </button>
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
    data() {
        return {
            isOpen: true,
        };
    },
};
</script>

<style scoped>
aside {
    flex: none;
    position: relative;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
}
aside .side-menu {
    position: relative;
    height: 100%;
    overflow: hidden;
    width: 0px;
    transition: width 0.4s;
}
aside.on .side-menu {
    width: 200px;
}
.side-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    overflow-y: scroll;
}
hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
.toggleBtn {
    position: absolute;
    top: 50%;
    right: -16px;
    transform: translateY(-50%);
    width: 16px;
    height: 120px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-left: 0;
}
aside i {
    font-size: 16px;
    transform: rotate(0deg);
}
aside.on i {
    transform: rotate(180deg);
}
</style>
