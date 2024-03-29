<template>
  <div class="box text-white p-10 pt-6">
    <div class="tab w-full p-6">
      <div class="p-2">
        <el-row :gutter="20" class="text-sm mb-1">
          <el-col :span="2">ID</el-col>
          <el-col :span="7">文章标题</el-col>
          <el-col :span="4">文章链接</el-col>
          <el-col :span="3">创建时间</el-col>
          <el-col :span="3">更新时间</el-col>
          <el-col :span="3">操作</el-col>
        </el-row>
      </div>

      <div class="p-2">
        <el-row :gutter="20" class="text-sm mb-1">
          <el-col :span="2">1</el-col>
          <el-col :span="7"
            >【裏情報屋】Twitterでは言えない仮想通貨&エアドロの話</el-col
          >
          <el-col :span="4">
            <el-link
              type="success"
              href="https://www.bankeradao.com/about"
              target="_blank"
              >https://www.bankeradao.com/about</el-link
            >
          </el-col>
          <el-col :span="3">2024/3/29 22:45</el-col>
          <el-col :span="3">2024/3/29 22:48</el-col>
          <el-col :span="3">
            <el-button type="primary" class="mr-2" :icon="Edit" circle />
            <el-button
              type="danger"
              class="!text-white"
              :icon="Delete"
              circle
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Timer, Edit, Delete } from "@element-plus/icons-vue";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElPopover,
  ElRow,
  ElCol,
  ElLink,
} from "element-plus";
import { useRouter } from "vue-router";

const tableData = [];
const router = useRouter();

const addArtcle = () => {
  router.push("/artcle/edit");
};
</script>


<style lang="scss">
.box {
  width: 100%;
}
</style>