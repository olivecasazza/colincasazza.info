<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  inheritAttrs: false,
})
export default class NavBar extends Vue {}
</script>
<template>
  <div class="app-view-port w-full h-max flex">
    <div
      class="justify-start space-x-4 text-4xl select-none text-center underline overflow-hidden pb-1"
    >
      <router-link class="link navbar-link underline-offset-2" to="/"
        >home</router-link
      >
      <router-link class="link navbar-link" to="/projects"
        >projects</router-link
      >
    </div>
  </div>
</template>
