<template>
  <div class="edit-box">
    <div class="save">
      <el-button @click="save" type="primary" v-loading="loading"
        >保存</el-button
      >
    </div>

    <div class="container">
      <div id="editorjs"></div>
    </div>
  </div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import { ElInput, ElButton } from "element-plus";
import postHttp, { uploadImag } from "@/utils/http";
import edjsHTML from "editorjs-html";
import { ElMessage } from "element-plus";

import { useRoute ,useRouter} from "vue-router";
import { reactive, ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter()

const loading = ref(false);

const edjsParser = edjsHTML();
const id = route.query?.id;
let isEdit = false;

let editor = null;

const editorHander = (data) => {
  editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holder: "editorjs",
    autofocus: true,
    tools: {
      // 配置工具
      header: {
        class: Header,
        inlineToolbar: true,
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      image: {
        class: Image,
        config: {
          uploader: {
            uploadByFile(file) {
              return new Promise((resolve, reject) => {
                // 执行图片上传逻辑
                const formData = new FormData();
                formData.append("file", file);
                uploadImag(formData).then((res) => {
                  resolve({ success: 1, file: { url: res.url } });
                });
              });
            },
          },
        },
      },
    },
    data: data || {},
  });
};

onMounted(async () => {
  if (!id) {
    editorHander();
    return;
  }

  isEdit = true;

  postHttp(`article/${id}`)
    .then((res) => {
      if (res && res[0]) {
        editorHander({
          blocks: JSON.parse(res[0].stringifyStr),
        });
      }
    })
    .catch(() => {
      editorHander();
    });
  return;
});

const getOutputData = () => {
  return editor.save().then((res) => res);
};

const save = async () => {
  if (isEdit) {
  }

  let outputData = await getOutputData();
  loading.value = true;
  let htmlStr = edjsParser.parse(outputData).join("");
  let stringifyStr = JSON.stringify(outputData.blocks);

  if (!isEdit) {
    postHttp("/article/create", {
      content: htmlStr,
      stringifyStr: stringifyStr,
    })
      .then((res) => {
        ElMessage({
          message: "保存成功",
          type: "success",
        });
        router.push('home')
      })
      .finaly(() => {
        loading.value = false;
      });
  } else {
    postHttp("/article/edit", {
      id: id,
      content: htmlStr,
      stringifyStr: stringifyStr,
    })
      .then((res) => {
        ElMessage({
          message: "保存成功",
          type: "success",
        });
        router.push('home')
      })
      .finaly(() => {
        loading.value = false;
      });
  }
};
</script>

<style lang="scss">
.edit-box {
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  padding: 20px;
  position: relative;
  .save {
    position: absolute;
    right: 20%;
    top: 10;
  }
  //   background-image: repeating-linear-gradient(90deg, hsla(196,0%,79%,0.06) 0px, hsla(196,0%,79%,0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, hsla(196,0%,79%,0.06) 0px, hsla(196,0%,79%,0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, hsla(196,0%,79%,0.09) 0px, hsla(196,0%,79%,0.09) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, hsla(196,0%,79%,0.09) 0px, hsla(196,0%,79%,0.09) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
}
.container {
  width: 820px;
  // bg
  background: white;
}
</style>