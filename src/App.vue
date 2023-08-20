<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
            <SideBar/>
        </div>
        <div class="column is-three-quarter">
            <FormTask @save-task="saveTask" />
            <div class="list">
                <Task v-for="( task, index ) in tasks" :key="index" :task="task" />
                <Box v-if="isTasksEmpty">
                    <center>Empty tasks :&#60; </center>
                </Box>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import FormTask from './components/FormTask.vue';
import Task from './components/Task.vue';
import Box from './components/Box.vue';
import ITask from './interface/ITask';

export default defineComponent({
    name: 'App',
    components: {
        SideBar,
        FormTask,
        Task,
        Box,
    },
    computed: {
        isTasksEmpty() : boolean {
            return this.tasks.length === 0;
        }
    },
    data() {
        return {
            tasks: [] as ITask[],
        }
    },
    methods: {
        saveTask(task : ITask) {
            this.tasks.push(task);
        },
    }
});
</script>

<style>
.lista {
    padding: 1.25rem;
}
</style>
