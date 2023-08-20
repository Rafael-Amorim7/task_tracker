<template>
    <header>
        <div class="is-flex is-align-items-center is-justify-content-center">
            <h1>
                <img src="../assets/logo.png" alt="">
            </h1>
        </div>
        <button class="button" @click="changeTheme">
            {{ textButton }}
        </button>
    </header>
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
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>