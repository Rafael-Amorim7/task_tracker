<template>
    <Box>
        <div class="columns">
            <div class="column is-9">
                {{ task.description || 'Task' }}
            </div>

            <div class="column is-2">
                <StopWatch :time-in-seconds="task.timeInSeconds" />
            </div>
            <div class="column is-1">
                <button class="remove" @click="removeTask(index)">
                    <i class="fa fa-remove"></i>
                </button>
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
    emits: ['removeTask'],
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    methods: {
        removeTask(index : number) {
            this.$emit('removeTask', index);
        }
    }
});
</script>

<style>
.remove {
    background: none;
    border: none;
    cursor: pointer;
}
.remove i {
    font-size: 1.6rem;
    color: red;
}
</style>