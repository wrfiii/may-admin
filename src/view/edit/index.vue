<template>
  <div class="edit-box">
    <div class="save">
        <el-button @click="save" type="primary">保存</el-button>

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

const editor = new EditorJS({
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
              console.log(file);
            });
          },
        },
      },
    },
  },
  onChange: (e) => {
    // 可选 - 编辑器内容变化时的回调函数
    this.save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  },
});

const save = () => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data: ", outputData);
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
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
  .save{
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