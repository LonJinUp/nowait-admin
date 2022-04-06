<template>
    <div class="corporateInformation-wrapper">
        <el-row :gutter="12">
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{$t('changePassword')}}</span>
                    </div>
                    <el-form :model="form">
                        <el-form-item :label="item.label" v-for="item in formConfig" :key="item.prop">
                            <el-input v-model="form[item.prop]" clearable type="password"></el-input>
                        </el-form-item>
                    </el-form>
                      <el-button type="primary" @click="changeInfo" class="btn">{{$t('submit')}}</el-button>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formConfig: [
                {label: this.$t('OldPassword'), prop: 'oldPassword', type: 'input'},
                {label: this.$t('NewPassword'), prop: 'newPassword', type: 'input'},
                {label: this.$t('Repeatpassword'), prop: 'repeatpassword', type: 'input'}
            ],
            form: {
                oldPassword: '',
                newPassword: '',
                repeatpassword: ''
            },
        }
    },
    methods: {
        changeInfo() {
            if(this.form.oldPassword && this.form.newPassword && this.form.repeatpassword) {
                
            } else {
                // this.$message({
                //     message: this.$t('pleaseFillInTheInformation'),
                //     type: 'warning'
                // })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.corporateInformation-wrapper {
    .btn{
        width: 80%;
        display: block;
        margin: 0 auto;
    }
}
</style>