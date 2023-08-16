<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">

        <StopWatch :time-in-seconds="timeInSeconds" />

        <button class="button" @click="init()" :disabled="timerOn">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>

        <button class="button" @click="final()" :disabled="!timerOn">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue'

export default defineComponent({
    name: 'TimerForm',
    components: {
        StopWatch
    },
    emits: ['timerEnds'],
    data() {
        return {
            timeInSeconds: 0,
            timer: 0,
            timerOn: false,
        }
    },
    methods: {
        init() {
            this.timerOn = true;
            this.timer = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
        },
        final() {
            this.timerOn = false;
            clearInterval(this.timer)
            this.$emit('timerEnds', this.timeInSeconds);
            this.timeInSeconds = 0;
        }
    }
})
</script>