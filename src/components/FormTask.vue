<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">

                <input
                    type="text"
                    class="input"
                    placeholder="What task will you start?"
                    v-model="description"
                    />

            </div>
            <div class="column">
                <Timer @timer-ends="finalizeTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timer from './Timer.vue'

export default defineComponent({
    name: 'FormTask',
    components: {
        Timer
    },
    emits: ['saveTask'],
    data() {
        return {
            description: '',
        }
    },
    methods: {
        finalizeTask(elapsedTime: number) : void {
            this.$emit('saveTask', {
                timeInSeconds: elapsedTime,
                description: this.description,
            });
        }
    }
});
</script>