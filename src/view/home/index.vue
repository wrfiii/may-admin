<template>
  <div class="box text-white flex-none p-10 pt-6">
    <div class="tab p-6   overflow-hidden" >
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

      <div class="p-2 flex-none " v-for="item in tableData" :key="item.id">
        <el-row :gutter="20" class="text-sm mb-1 flex-none">
          <el-col :span="2">{{item.id}}</el-col>
          <el-col :span="7"
           class=" truncate"
            >{{  item.content.replace(regex,'')}}</el-col
          >
          <el-col :span="4">
            <el-link
              type="success"
              href="https://www.bankeradao.com/about"
              target="_blank"
              >{{ item.link || `mayjs.com/${item.id}`}}</el-link
            >
          </el-col>
          <el-col :span="3">{{ dayjs(item.createdAt).format('YYYY/MM/DD HH:mm')}}</el-col>
          <el-col :span="3">{{dayjs(item.updatedAt).format('YYYY/MM/DD HH:mm')}}</el-col>
          <el-col :span="3">
            <el-button type="primary" class="mr-2" @click="editHander(item.id)" :icon="Edit" circle />

            <el-popconfirm title="Are you sure to delete this?" @confirm="confirmDel(item.id)">
                <template #reference>
                <el-button
                  type="danger"
                  class="!text-white"
                  :icon="Delete"
                  circle
                />
                </template>
            </el-popconfirm>
            
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
  ElPopconfirm,
  ElMessage
} from "element-plus";
import { useRouter } from "vue-router";
import postHttp, { uploadImag } from "@/utils/http";
import { reactive } from "vue";
import dayjs from 'dayjs'

const tableData = reactive([]);
const router = useRouter();
const regex = /<[^>]*>/g;

postHttp('/article').then(res=>{
  tableData.push(...res)
})

const addArtcle = () => {
  router.push("/artcle/edit");
};

const editHander = (id)=>{
  router.push('edit?id='+id)
}

const confirmDel = (id)=>{

    postHttp('/article/del/'+id).then(res=>{
        if(res.message === 'success'){
          ElMessage({
          message: "操作成功",
          type: "success",
        });
          tableData.splice(tableData.findIndex((item)=>item.id ===id),1 )
        }

    })
  
}

</script>


<style lang="scss">
.box {
  width: 100%;
}
.tab{
  width: calc(100vw - 120px);
}
</style>