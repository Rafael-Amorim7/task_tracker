<template>
    <button class="button" :disabled="timerOn" @click="clicked">
        <span class="icon">
            <i :class="icon"></i>
        </span>
        <span>{{ text }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent  } from 'vue';

export default defineComponent({
    name: 'ButtonForm',
    emits: ['clicked'],
    props: {
        text: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        timerOn: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        clicked(): void {
            this.$emit('clicked')
        }
    }
});
</script>