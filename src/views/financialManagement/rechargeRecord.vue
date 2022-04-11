<template>
    <div class="recharge-record-wrapper">
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
                prop="paymentmethod"
                :label="$t('paymentmethod')"
                width="180">
                </el-table-column>
                <el-table-column
                prop="money"
                :label="$t('money')">
                </el-table-column>
                <el-table-column>
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">申请开发票</el-button>
                </template>
    </el-table-column>
            </el-table>
            <div class="pagination flex-center">
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                {timer: '2018.3.1', paymentmethod: '现金', money: '14'},
                {timer: '2018.3.1', paymentmethod: '现金', money: '22'},
                {timer: '2018.3.1', paymentmethod: '现金', money: '33'},
                {timer: '2018.3.1', paymentmethod: '现金', money: '44'},
            ],
        }
    },
    methods: {
       
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