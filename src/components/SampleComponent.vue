<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-6">
        {{ msg }}
      </v-col>
      <v-col cols="6" class="mb-6">
        Counter: {{ count }}
      </v-col>
      <v-col cols="6" class="mb-6">
        <v-btn @click="add">
          <v-icon>
            mdi-plus
          </v-icon>
          Add
        </v-btn>
      </v-col>
      <v-col cols="6" class="mb-6">
        NextCount: {{ NextCount }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SampleComponent extends Vue{
  // Props
  @Prop({ default: "Hello World" }) msg: string;

  // Data
  count = 0;

  // Computed
  get NextCount(): number{
    return this.count + 1;
  }

  // methods
  add(){
    this.count++;
  }

  // lifecycle hooks
  created(){
    console.log("[SampleComponent.vue] created");
  }
  mounted(){
    console.log("[SampleComponent.vue] mounted");
  }
  updated(){
    console.log("[SampleComponent.vue] updated");
  }
  destroyed(){
    console.log("[SampleComponent.vue] destroyed");
  }
}
</script>
