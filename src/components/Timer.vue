<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">

        <StopWatch :time-in-seconds="timeInSeconds" />

        <Button @clicked="init" icon="fas fa-play" text="Start" :timerOn="timerOn" />
        <Button @clicked="final" icon="fas fa-stop" text="Stop" :timerOn="!timerOn" />

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue'
import Button from './Button.vue'

export default defineComponent({
    name: 'TimerForm',
    components: {
        StopWatch,
        Button,
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