<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BoxList",
});
</script>

<style scoped>
.box {
    background-color: var(--secondary-color);
    color: var(--font-color);
    width: 95%;
    margin: auto;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, .5);
}
</style>