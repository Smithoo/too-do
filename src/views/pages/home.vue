<template>
    <div class="home">
        Home
        <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        </div>
        <check-box
            value="a"
            v-model="selected">
            A
        </check-box>
        <check-box
            value="b"
            v-model="selected">
            B
        </check-box>
        <div>
            selected: {{ selected }}
        </div>
    </div>
</template>

<script>
import CheckBox from '@/views/common/check-box.vue';

export default {
    components: {
        CheckBox,
        // RadioButton,
    },
    data() {
        return {
            selected: [],
            checkedNames: [],
        };
    },
};
</script>
