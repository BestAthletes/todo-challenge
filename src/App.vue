<template>
  <v-app>
    <v-main>
      <SampleComponent msg="TODO: Create a todo list"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SampleComponent from './components/SampleComponent.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SampleComponent,
  },

  data: () => ({
    //
  }),
});
</script>
