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
}
</style>