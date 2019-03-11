<template>
    <section class="add-column">
        <div class="add" v-if="mode === 'add'"
            @click="changeIntoEditMode">
            <div class="plus-wrap">
                <div class="plus-mark">
                    <div class="plus-bar horizontal"></div>
                    <div class="plus-bar vertical"></div>
                </div>
                <div class="add-text">
                    Add Column
                </div>
            </div>
        </div>
        <div class="edit" v-else>
            <div class="colomn-head">
                <div class="name">
                    <input type="text"
                        ref="input"
                        v-model="columnName"
                        @keydown.enter="addColumn"
                        @keydown.esc="changeIntoAddMode"
                        placeholder="column name"
                        />
                    <button type="button"
                        class="confirm"
                        @click="addColumn"
                        :disabled="addDisabled"
                    >
                        confirm
                    </button>
                    <button type="button"
                        class="cancel"
                        @click="changeIntoAddMode"
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const MODE = {
    ADD: 'add',
    EDIT: 'edit',
};

export default {
    data() {
        return {
            mode: MODE.ADD,
            columnName: '',
            addDisabled: false,
            isLoading: false,
        };
    },
    computed: {
        trimmedName() {
            return this.columnName.trim();
        },
    },
    watch: {
        columnName() {
            if (this.mode === MODE.ADD) {
                return;
            }

            const isDuplicatedName = this.columnName === 'aaa';
            if (isDuplicatedName) {
                this.addDisabled = true;
                this.$store.dispatch('ui/snackbar/show', { msg: 'Duplicated name!', style: 'error' });
            } else {
                this.addDisabled = false;
            }
        },
    },
    methods: {
        changeIntoAddMode() {
            this.mode = MODE.ADD;
            this.$refs.input.blur();
            this.columnName = '';
        },
        changeIntoEditMode() {
            this.mode = MODE.EDIT;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        addColumn() {
            if (!this.columnName) {
                this.$store.dispatch('ui/snackbar/show', { msg: 'No column name!', style: 'error' });
                return;
            }

            this.isLoading = true;
            // call add api
            const createColumn = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });

            createColumn
                .then(() => {
                    this.$store.dispatch('ui/snackbar/show', { msg: 'Add column success!' });
                    // this.$store.dispatch('data/addColumn', this.columnName);
                })
                .catch(() => {
                    this.$store.dispatch('ui/snackbar/show', { msg: 'Fail adding column!' });
                })
                .finally(() => {
                    this.isLoading = false;
                    this.changeIntoAddMode();
                });
        },
    },
};
</script>

<style scoped>
.add-column {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 240px;
    height: 100%;
    border: 3px dashed #cfcfcf;
    border-radius: 10px;
}
.add {
    height: 100%;
}
.add:hover {
    border-color: #b0b0b0;
}
.add {
    position: relative;
    height: 100%;
    cursor: pointer;
}
.plus-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.add:hover .plus-wrap {
    border-color: #b0b0b0;
}
.plus-mark {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    transform: rotate(0deg);
    transition: transform 0.2s;
}
.add:hover .plus-mark {
    transform: rotate(90deg);
}
.plus-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #cfcfcf
}
.add:hover .plus-bar {
    background-color: #b0b0b0;
}
.plus-bar.horizontal {
    width: 40px;
    height: 5px;
}
.plus-bar.vertical {
    width: 5px;
    height: 40px;
}
.add-text {
    text-align: center;
    color: #cfcfcf;
}
.add:hover .add-text {
    color: #b0b0b0;
}
.edit {
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
}
.colomn-head {
    padding-left: 6px;
}
h3 {
    color: #333333;
    font-size: 24px;
    letter-spacing: 2px;
    padding-bottom: 6px;
}
.edit .confirm:disabled {
    color: red;
}
.name input {
    width: 100px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    box-sizing: border-box;
}
.name button {
    width: 50px;
    height: 24px;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 12px;
    line-height: 24px;
    font-weight: 600;
    margin-left: 3px;
}
.name button.confirm {
    background-color: steelblue;
}
.name button.cancel {
    background-color: tomato;
}
</style>

