<template>
    <div class="content" v-loading="loading">
        <header class="header-title">商户解冻资金申诉材料</header>
        <el-scrollbar class="scrow">
            <el-form style="width: 100%;" :model="form" label-width="160">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="商户名">
                            <el-input v-model="form.storeName" placeholder="请输入商户名" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="商户号">
                            <el-input v-model="form.storeId" placeholder="请输入商户号" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="联系人姓名">
                            <el-input v-model="form.name" placeholder="请输入联系人姓名" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="联系人手机号" maxlength="20">
                            <el-input v-model="form.mobi" placeholder="请输入联系人手机号" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="法人/负责人">
                            <el-input v-model="form.workName" placeholder="请输入法人/负责人" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="身份证号码">
                            <el-input v-model="form.id" placeholder="请输入身份证号码" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="结算银行卡号">
                            <el-input v-model="form.bankId" placeholder="请输入结算银行卡号" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="开户姓名">
                            <el-input v-model="form.bankName" placeholder="请输入开户姓名" />
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="支付类型">
                            <el-select v-model="form.region" placeholder="请选择支付类型">
                                <el-option label="微信" value="微信" />
                                <el-option label="支付宝" value="支付宝" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="冻结资金交易编码">
                            <el-input v-model="form.ercode" placeholder="请输入冻结资金交易编码" />
                        </el-form-item>
                        <!-- <el-form-item label="支付时间">
                            <el-date-picker v-model="form.date" type="date" placeholder="请选择支付时间" />
                        </el-form-item> -->
                    </el-col>
                </el-row>

                <el-row>
                    <el-form-item label="身份证照片">
                        <div>
                            <Upload uploadText="上传身份证正面" spectDemo></Upload>
                        </div>
                        <div style="margin-left: 20px;">
                            <Upload uploadText="上传身份证反面" spectDemo></Upload>
                        </div>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="银行卡照片">
                        <div>
                            <Upload uploadText="上传银行卡正面" spectDemo></Upload>
                        </div>
                        <div style="margin-left: 20px;">
                            <Upload uploadText="上传银行卡反面" spectDemo></Upload>
                        </div>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="营业执照">
                        <div>
                            <Upload uploadText="上传营业执照" :spectStore="true"></Upload>
                        </div>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="门头照">
                        <div>
                            <Upload uploadText="上传门头照" :spectStore="true"></Upload>
                        </div>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="室内照">
                        <div>
                            <Upload uploadText="上传室内照" :spectStore="true"></Upload>
                        </div>
                    </el-form-item>
                </el-row>

            </el-form>
        </el-scrollbar>
        <div class="foot">
            <el-button style="padding: 20px 40px;" type="primary" @click="onSubmit">提交申诉</el-button>
        </div>
    </div>
    <el-dialog align-center v-model="dialogVisible" width="500px" center>
        <div class="successBox">
            <img class="success" src="/src/assets/success.svg" alt="">
            <div class="successText">提交成功</div>
            <div class="successContent">您的申诉材料已提交成功，请您根据冻结金额时长进行等待。具体情况会下发至贵公司邮箱。</div>
        </div>
    </el-dialog>
</template>

<script setup>

const Upload = defineAsyncComponent(() => import('/@/components/upload.vue'));

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const fileUpload = ref()
const url = ref('')
const state = reactive({
    idFile: '', // 身份证
    idFileDif: '',
    cardFile: '', //银行卡
    cardFileDif: '',
    businessFile: '', // 营业执照
    storeFile: '', // 店铺门头
    storeRoomFile: '', // 店铺内景
    ercode:''
})

const loading = ref(false)
const dialogVisible = ref(false)
const onSubmit = () => {
    console.log('submit!')
    loading.value = true
    setTimeout(() => {
        loading.value = false
        dialogVisible.value = true
    }, 1500)
}
</script>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // background-color: #F9FAFB;


    .scrow {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        // max-width: 900px;
        width: 100%;
        height: calc(100vh - 64px);
        // background-color: #fff;
    }

    .foot {
        padding: 20px 0;
        width: 100%;
        // box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
    }


    .header-title {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 4px;
        color: #323233;
        margin-bottom: 20px;

    }

    .card {
        width: 344px;
        height: 192px;
    }

    .cardTemplate {
        background: #F9FAFB;
        border: 2px dashed #D1D5DB;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

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
}

.success {
    width: 48px;
    height: 48px;
}

.successText {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #67C23A;
    margin: 12px 0 24px;
}

.successBox {
    text-align: center;
    padding: 0 50px 20px;
}

.successContent {
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0px;
    color: #606266;
}
</style>
