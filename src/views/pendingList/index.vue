<template>
    <div class="pendingList-wrapper">
         <el-button @click="dialogVisible=true">{{$t('CreateList')}}</el-button>
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
            width="500">
            </el-table-column>
            <el-table-column
            prop="quantity"
            :label="$t('quantity')">
            </el-table-column>
        </el-table>
        <div class="pagination flex-center">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>


         <!-- add -->
        <el-dialog :title="$t('addTemplate')" :visible.sync="dialogVisible" width="556px" :before-close="handleClose">
            <div class="add-template">
                <el-form ref="form" :model="form">

                    <el-form-item :label="$t('listName')">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>

                    <el-form-item :label="$t('listText')">
                        <el-input v-model="form.text" type="textarea" :rows="2"></el-input>
                    </el-form-item>

                    <el-form-item>
                       <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="form.fileList">
                            <el-button size="small" type="primary">{{$t('clickToUpload')}}</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">{{$t('Cancel')}}</el-button>
                <el-button type="primary" @click="dialogVisible = false">{{$t('Sure')}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            tableData: [
                {timer: '2018-01-01', name: '测试模板001', quantity: '1'},
                {timer: '2018-01-01', name: '测试模板001', quantity: '2'},
                {timer: '2018-01-01', name: '测试模板001', quantity: '3'},
                {timer: '2018-01-01', name: '测试模板001', quantity: '5'},
            ],
            form: {
                type: '1',
                name: '',
                text: '',
                fileList: []
            },
        }
    },
    methods: {
        handleClose() {
            this.dialogVisible = !this.dialogVisible
        },
        handlePreview() {

        },
        handleRemove() {

        },
        beforeRemove() {

        },
        handleExceed() {

        }
    }
}
</script>
<style lang="scss" scoped>
    .pendingList-wrapper{
        
    }
    .pagination{
        width: 100%;
        margin: 30px auto;
    }
    ::v-deep .el-select{
            width: 100%;
            
    }
</style>