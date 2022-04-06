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
export default {
    data() {
        return {
            formConfig: [
                {label: this.$t('CompanyName'), prop: 'name', type: 'input'},
                {label: this.$t('contactNumber'), prop: 'phone', type: 'input'},
                {label: this.$t('contactAddress'), prop: 'address', type: 'input'}
            ],
            form: {
                name: '',
                phone: '',
                address: ''
            },
        }
    },
    methods: {
        changeInfo() {
            if(this.form.name && this.form.phone && this.form.address) {
                
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