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
import {updatePassword} from '@/api'
export default {
    data() {
        return {
            formConfig: [
                {label: this.$t('OldPassword'), prop: 'password', type: 'input'},
                {label: this.$t('NewPassword'), prop: 'newpwd', type: 'input'},
            ],
            form: {
                password: '',
                newpwd: '',
            },
        }
    },
    created() {
        var user = JSON.parse(window.localStorage.getItem('user'))
        this.form.username = user.username
    },
    methods: {
        changeInfo() {
            if(this.form.password && this.form.newpwd) {
                updatePassword(this.form).then(res=>{
                    if(res.code == '1'){
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        })
                    }else{
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    }
                })
            } else {
                this.$message({
                    message: this.$t('pleaseFillInTheInformation'),
                    type: 'warning'
                })
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