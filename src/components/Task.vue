<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ task.description || 'Task' }}
            </div>

            <div class="column">
                <StopWatch :time-in-seconds="task.timeInSeconds" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopWatch from './StopWatch.vue';
import Box from './Box.vue';
import ITask from '@/interface/ITask';

export default defineComponent({
    name: 'TaskList',
    components: {
        StopWatch,
        Box,
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        },
    },
});
</script>