<template>
    <div class="side-bar">
        <header>
            <div class="is-flex is-align-items-center is-justify-content-center">
                <h1>
                    <img src="../assets/logo.png" alt="">
                </h1>
            </div>
        </header>
        <footer>
            <button class="trash">
                <i class="fa-solid fa-trash-can"></i>
            </button>

            <button type="button" class="btn btn-outline-light" @click="changeTheme">
                {{ textButton }}
            </button>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'SideBar',
    emits: ['changeTheme'],
    data() {
        return {
            darkMode: true,
        }
    },
    computed: {
        textButton () {
            if (this.darkMode) {
                return "Disable dark mode";
            }
            return "Enable dark mode";
        }
    },
    methods: {
        changeTheme() {
            this.darkMode =  !this.darkMode;
            this.$emit('changeTheme', this.darkMode);
        }
    }
});
</script>

<style scoped>

div.side-bar {
    background: #0d3b66;
}

header {
    padding: 1rem;
    width: 100%;
    height: 80vh;
    text-align: center;
}

footer {
    padding: 1rem;
    width: 100%;
    height: 20vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.trash {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin-bottom: 1.2rem;
}
.trash i {
    font-size: 1.6rem;
    color: red;
}

@media only screen and (max-width: 768px) {
    header, footer {
        padding: 2.5rem;
        height: auto;
    }
}
</style>