<template>
  <el-upload :limit="1" accept=".png,.jpg,.jpeg," :class="{ hidden: dialogImageUrl, spectDemo: spectDemo,spectStore:spectStore }"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false" list-type="picture-card"
    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-change="onChange">
    <div class="">
      <img v-if="spectDemo" src="/src/assets/cardIcon.svg" alt="" class="card-icon">
      <img v-if="spectStore" :src="uploadText != '上传营业执照' ? storeImg : cardImg" alt="" class="card-business-icon">
      <div class="card-text">{{ uploadText }}</div>
    </div>
  </el-upload>
  <!-- 预览 wrap -->
  <el-dialog v-model="dialogVisible" width="600px">
    <img class="preview-img" :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import storeImg from "/@/assets/store.svg";
import cardImg from "/@/assets/card.svg";
const props = defineProps({
  uploadText: {
    type: String,
    default: ''
  },
  uploadFileList: {
    typeof: Array,
    default: [],
    required: true
  },
  spectDemo: {
    type: Boolean,
    default: false
  },
  spectStore: {
    type: Boolean,
    default: false
  },
  // fileNum: {
  //   type: Number,
  //   default: 0
  // },
})
const fileNum = ref(0)

const emits = defineEmits(['remove'])

const handleRemove = (file) => {
  fileNum.value = 0
  dialogImageUrl.value = ''
  // emits('remove', file);
};

const onChange = (file) => {
  dialogImageUrl.value = file.url
}

// dialog
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};
</script>

<style scoped lang="scss">
.el-dialog {
  .preview-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /**保持宽高比，会有白边 */
  }

}

/* 设置隐藏文件选择框 */
.hidden {
  :deep(.el-upload--picture-card) {
    display: none !important;
  }
}

.card-icon {
  width: 37px;
  height: 36px;
}

.card-business-icon {
  width: 22px;
  height: 36px;
}

.card-text {
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0px;
  color: #6B7280;
}


.spectDemo {
  :deep(.el-upload-list__item) {
    object-fit: cover;
    width: 170px !important;
    height: 100px !important;
  }

  :deep(.el-upload-list--picture-card) {
    width: 170px !important;
    height: 100px !important;
  }


  :deep(.el-upload--picture-card) {
    width: 170px !important;
    height: 100px !important;
  }

}

.spectStore {
  :deep(.el-upload-list__item) {
    object-fit: cover;
    width: 300px !important;
    height: 150px !important;
  }

  :deep(.el-upload-list--picture-card) {
    width: 300px !important;
    height: 150px !important;
  }


  :deep(.el-upload--picture-card) {
    width: 300px !important;
    height: 150px !important;
  }

}

:deep(.el-upload-list--picture-card .el-upload-list__item){
margin: 0 0 !important;
}
</style>
