<template>
    <div class="template-wrapper">
        <el-button @click="dialogVisible=true">{{$t('addTemplate')}}</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="item.label" :name="item.id" v-for="item in tab" :key="item.id"></el-tab-pane>
        </el-tabs>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="timer"
            :label="$t('date')"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            :label="$t('templateName')"
            width="180">
            </el-table-column>
            <el-table-column
            prop="status"
            :label="$t('status')">
            </el-table-column>
        </el-table>
        <div class="pagination flex-center">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>

       <!-- add -->
        <el-dialog :title="$t('addTemplate')" :visible.sync="dialogVisible" width="556px" :before-close="handleClose">
            <div class="add-template">
                <el-form ref="form" :model="form">

                    <el-form-item :label="$t('templateType')">
                        <el-select v-model="form.type" placeholder="">
                            <el-option :label="$t('textTemplate')" value="1"></el-option>
                            <el-option :label="$t('picturesAndText')" value="2"></el-option>
                            <el-option :label="$t('ComprehensiveTemplate')" value="3"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item :label="$t('templateName')">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>

                    <el-form-item :label="$t('TemplateText')">
                        <el-input v-model="form.text" type="textarea" :rows="2"></el-input>
                    </el-form-item>

                    <el-form-item v-if="form.type == 2">
                        <img width="100%" :src="form.images" alt="">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                             <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">{{$t('Cancel')}}</el-button>
                <el-button type="primary" @click="sure">{{$t('Sure')}}</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import {addTemplate} from '@/api'
export default {
    data() {
        return {
            activeName: '0',
            dialogVisible: false,
            tab: [
                {label: this.$t('passed'), id: '0'},
                {label: this.$t('underApproval'), id: '1'}
            ],
            tableData: [
                {timer: '2018-01-01', name: '测试模板001', status: '审核中'},
                {timer: '2018-01-01', name: '测试模板001', status: '审核中'},
                {timer: '2018-01-01', name: '测试模板001', status: '审核中'},
                {timer: '2018-01-01', name: '测试模板001', status: '审核中'},
            ],
            form: {
                type: '1',
                title: '',
                text: '',
                images: ''
            },
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleClose() {
            this.dialogVisible = !this.dialogVisible
        },
        handlePictureCardPreview() {

        },
        handleRemove() {

        },
        // 添加模版点击确定
        sure() {
            addTemplate(this.form).then(res => {
                if(res.code==1){
                    this.$message({
                        type: 'success',
                        message: res.msg
                    })
                    this.dialogVisible = false
                }else{
                    this.$message({
                        type: 'error',
                        message: res.msg
                    })
                }    
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .pagination{
        width: 100%;
        margin: 30px auto;
    }
    ::v-deep .el-select{
            width: 100%;
            
    }
  
</style>