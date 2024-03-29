<template>
  <div
    class="h-full nav flex-none flex flex-col text-white shadow-lg shadow-slate-500"
  >
    <div
      class="h-24 text-4xl font-bold flex items-center justify-center w-full hover:opacity-90 hover:bg-slate-700"
      :class="index === 'home' && 'active'"
      @click="goPage('home')"
    >
      <el-icon><HomeFilled color="white" /></el-icon>
    </div>
    <div
      class="h-24 text-4xl font-bold flex items-center justify-center w-full hover:opacity-90 hover:bg-slate-700"
      :class="index === 'article' && 'active'"
      @click="goPage('article')"
    >
      <el-icon><Histogram color="Histogram" /></el-icon>
    </div>

    <div
      class="h-24 text-4xl font-bold flex items-center justify-center w-full hover:opacity-90 hover:bg-slate-700"
      :class="index === 'edit' && 'active'"
      @click="goPage('edit')"
    >
      <el-icon><Edit /></el-icon>
    </div>
  </div>
</template>


<script setup>
import { ElIcon } from "element-plus";
import { HomeFilled, Close, Histogram, Edit } from "@element-plus/icons-vue";
import { ref, unref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();


const index = ref(route.name);

const router = useRouter();
const goPage = (path) => {
  index.value = path;
  router.push(path);
};
</script>

<style lang="scss">
.nav {
  background-color: rgb(32, 41, 46);
  height: calc(100vh - 64px);
  width: 120px;
  overflow: hidden;
  box-sizing: border-box;
}

.active {
  background-color: rgb(51 65 85);
  position: relative;
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 5px;
    right: 0;
    bottom: 0;
    height: 100%;
    background-image: repeating-linear-gradient(
      135deg,
      hsl(204, 76%, 70%) 0px,
      hsl(204, 76%, 70%) 105px,
      hsl(249, 76%, 70%) 105px,
      hsl(249, 76%, 70%) 210px,
      hsl(294, 76%, 70%) 210px,
      hsl(294, 76%, 70%) 315px,
      hsl(339, 76%, 70%) 315px,
      hsl(339, 76%, 70%) 420px,
      hsl(24, 76%, 70%) 420px,
      hsl(24, 76%, 70%) 525px,
      hsl(69, 76%, 70%) 525px,
      hsl(69, 76%, 70%) 630px,
      hsl(114, 76%, 70%) 630px,
      hsl(114, 76%, 70%) 735px,
      hsl(159, 76%, 70%) 735px,
      hsl(159, 76%, 70%) 840px
    );
    z-index: 0;
  }
}
</style>