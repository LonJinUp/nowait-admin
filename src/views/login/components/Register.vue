<template>
    <div class="register-wrapper">
         <h6 class="login-text">{{ $t("register") }}</h6>
        <div class="input-box" v-for="(item,index) in config" :key="index">
            <el-input :placeholder="item.placeholder" v-model="formData[item.key]" :type="item.type" clearable></el-input>
        </div>
        <el-button @click="register" class="btn" type="primary">{{ $t("register") }}</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                companyName: '',
                companyPeople: '',
                mobile: '',
                email: '',
                password: ''
            },
            config: [
                {placeholder: this.$t('companyName'), key: 'companyName', type: 'text'},
                {placeholder: this.$t('companyPeople'), key: 'companyPeople', type: 'text'},
                {placeholder: this.$t('pleaseEnterPhoneMumber'), key: 'mobile', type: 'text'},
                {placeholder: this.$t('companyEmail'), key: 'email', type: 'text'},
                {placeholder: this.$t('pleaseEnterPassword'), key: 'password', type: 'password'}
            ]
        };
    },
    methods: {
        register() {
            if(this.formData.companyName && this.formData.companyPeople && this.formData.mobile && this.formData.email && this.formData.password){

            }else{
                this.$message({
                    message: this.$t('pleaseEnterForm'),
                    type: 'warning'
                })
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.register-wrapper {
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