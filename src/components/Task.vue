<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ task.description }}
            </div>

            <div class="column">
                <StopWatch :time-in-seconds="task.timeInSeconds" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopWatch from './StopWatch.vue';
import ITask from '@/interface/ITask';

export default defineComponent({
    name: 'TaskList',
    components: {
        StopWatch
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        },
    },
});
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>