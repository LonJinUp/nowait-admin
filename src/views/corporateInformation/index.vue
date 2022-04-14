<template>
    <div class="corporateInformation-wrapper">
        <el-row :gutter="12">
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{$t('modifyInformation')}}</span>
                    </div>
                    <el-form :model="form">
                        <el-form-item :label="item.label" v-for="item in formConfig" :key="item.prop">
                            <el-input v-model="form[item.prop]" clearable></el-input>
                        </el-form-item>
                    </el-form>
                      <el-button type="primary" @click="changeInfo" class="btn">{{$t('submit')}}</el-button>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {changeUserinfo} from '@/api'
import userinfo from '@/mixins/userinfo'
export default {
    mixins : [userinfo],
    data() {
        return {
            formConfig: [
                {label: this.$t('CompanyName'), prop: 'name', type: 'input'},
                {label: this.$t('contactNumber'), prop: 'contract', type: 'input'},
                {label: this.$t('contactAddress'), prop: 'address', type: 'input'}
            ],
            form: {
                name: '',
                contract: '',
                address: ''
            },
        }
    },
    created() {
     
        var user = JSON.parse(window.localStorage.getItem('user'))
        this.form.username = user.username
        this.form.password = user.password
        this.getUserinfo()
    },
    watch: {
        userinfo(val) {
            console.log(val)
            this.form.name = val.name || ''
            this.form.contract = val.contract || ''
            this.form.address = val.address || ''
             this.form.qyid = userinfo.id
        }
    },

    methods: {
        changeInfo() {
            if(this.form.name && this.form.contract && this.form.address) {
                changeUserinfo(this.form).then(res => {
                    if(res.code == '1'){
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        })
                        this.getUserinfo()
                    }else{
                        this.$message({
                            message: res.msg,
                            type: 'warning'
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