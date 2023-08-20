<template>
    <main class="columns is-gapless is-multiline dark-mode ">
        <div class="column is-one-quarter">
            <SideBar/>
        </div>
        <div class="column is-three-quarter content">
            <FormTask @save-task="saveTask" />
            <div class="list">
                <Task v-for="( task, index ) in tasks" :key="index" :task="task" />
                <Box v-if="isTasksEmpty">
                    <center>Empty tasks :( </center>
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
main {
    --primary-color: #302AE6;
    --secondary-color: #ADD8E6;
    --font-color: #424242;
    --bg-color: #fff;
    --heading-color: #292922;
}
main.dark-mode {
    --primary-color: #818cab;
    --secondary-color: #6764d3;
    --font-color: #e1e1ff;
    --bg-color: #161625;
    --heading-color: #818cab;
}
.content {
    background-color: var(--bg-color);
}
</style>
