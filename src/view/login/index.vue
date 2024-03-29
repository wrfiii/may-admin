<template>
  <div class="login-page w-full h-full flex justify-center items-center">
    <div
      class="login-box text-white text-center p-12 flex flex-col items-center"
    >
      <div class="text-xl mb-12">欢迎回来</div>
      <div class="flex items-center mb-8 w-full">
        <label for="" class="flex-none mr-2 text-sm">账号:</label>
        <el-input v-model="acc" />
      </div>
      <div class="flex items-center w-full">
        <label for="" class="flex-none mr-2 text-sm">密码:</label>
        <el-input v-model="pwd" type="password" show-password />
      </div>
      <div class="mt-9 w-full">
        <el-button
          type="primary"
          :loading="loading"
          class="w-full"
          @click="login"
        >
          登 录
        </el-button>
      </div>
    </div>
    
  </div>
</template>


<script  setup >
import { ref, unref } from "vue";
import { ElInput, ElButton } from "element-plus";
import {useRouter} from 'vue-router'
import postHttp from "@/utils/http";

const loading = ref(false);

const pwd = ref("");
const acc = ref("");
const router = useRouter();
const login = async () => {
  loading.value = true;
  try {
    const res = await postHttp("/", { acc: acc.value, pwd: pwd.value });
    console.log(res.message ==="success",'res.message ==="success"')
    if(res.message ==="success"){
         router.push('/home')
    }
    console.log(res);
  } catch (error) {
  } finally {
    loading.value = false;
  }
};
</script>  


<style lang="scss">
.login-page {
  background-color: rgb(52, 45, 60);
}

.login-box {
  width: 400px;
  background-color: rgb(48, 41, 56);
  position: relative;
}

.lg-view {
  width: 100%;
  height: 100%;
}
</style>