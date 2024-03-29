<template>
  <div>
    <Header />
    <div class="flex main text-white">
      <Nav></Nav>
      <router-view></router-view>
    </div>
  </div>
</template>


<script setup>
import Header from "./Header/index.vue";
import Nav from "./Nav/index.vue";
</script>

<style>
.main {
  background-color: rgb(31, 40, 47);
}
</style>