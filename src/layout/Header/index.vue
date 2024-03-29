<template>
  <div
    class="h-16 shadow text-white pr-20 shadow-slate-950 header flex px-8 py-4 justify-between"
  >
    <div class="text-xl font-bold">mayjs</div>
    <div class="flex justify-between items-center">
      <div class="text-2xl mr-10 flex justify-between items-center">
        <el-icon><Message color="white" /></el-icon>
      </div>
      <div class="mr-2">
        <img
          src="../../assets/img/avatar.png"
          class="w-8 h-8 rounded-full"
          alt=""
        />
      </div>
      <div>mayjs</div>
      <div class=" ml-6">
        <el-button type="danger"  :icon="Close" circle  />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ElInput, ElButton } from "element-plus";

import { ElIcon } from "element-plus";
import { Message ,Close} from "@element-plus/icons-vue";
</script>


<style>
.header {
  background-color: rgb(39, 50, 56);
}
</style>