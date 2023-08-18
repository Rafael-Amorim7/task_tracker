<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
            <SideBar/>
        </div>
        <div class="column is-three-quarter">
            <FormTask/>
            <div class="list">
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import FormTask from './components/FormTask.vue';
import Task from './components/Task.vue';

export default defineComponent({
    name: 'App',
    components: {
        SideBar,
        FormTask,
        Task,
    }
});
</script>

<style>
.lista {
    padding: 1.25rem;
}
</style>
