<template>
    <div class="login-content-wrapper">
        <h6 class="login-text">{{ $t("loginText") }}</h6>
        <div class="input-box" v-for="(item,index) in config" :key="index">
            <el-input :placeholder="item.placeholder" v-model="formData[item.key]" :type="item.type" clearable></el-input>
        </div>
        <el-button @click="login" class="btn" type="primary">{{ $t("loginText") }}</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                mobile: '',
                password: ''
            },
            config: [
                {placeholder: this.$t('pleaseEnterPhoneMumber'), key: 'mobile', type: 'text'},
                {placeholder: this.$t('pleaseEnterPassword'), key: 'password', type: 'password'}
            ]
        };
    },
    methods: {
        login() {
            if(this.formData.mobile && this.formData.password){

            }else{
                this.$message({
                    message: this.$t('mobileAndPassword'),
                    type: 'warning'
                })
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.login-content-wrapper {
    .login-text {
        font-size: 18px;
        width: 100%;
        text-align: center;
        color: #111827;
    }
    .input-box {
        width: 100%;
        margin: 20px 0;
    }
    .btn{
        width: 100%;
    }
}
</style>