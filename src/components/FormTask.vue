<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form to create new task">

                <input type="text" class="input" placeholder="What task will you start?">

            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">

                    <StopWatch :timeInSeconds="timeInSeconds"/>

                    <button class="button" @click="init()">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    
                    <button class="button" @click="final()">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue'

export default defineComponent({
    name: 'FormTask',
    components: {
        StopWatch
    },
    data() {
        return {
            timeInSeconds: 0,
            cronometro: 0
        }
    },
    methods: {
        init() {
            this.cronometro = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
        },
        final() {
            clearInterval(this.cronometro)
        }
    }
})
</script>