<template>
    <div class="menu-wrapper">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#324155"
            text-color="#fff"
            router
            :default-active="$route.path"
            active-text-color="#409EFF">
            <el-submenu :index="index+''" v-for="(item,index) in menu" :key="index">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item  v-for="child in item.children" :key="child.path" :index="child.path">{{child.label}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [
                {
                    label: this.$t('account'),
                    children: [
                        {label: this.$t('ModifyData'), path: '/corporateInformation'},
                        {label: this.$t('changePassword'), path: '/corporateInformation/changePassword'},
                        {label: this.$t('PackagePurchase'), path: '/corporateInformation/packagePurchase'}
                    ]
                },
                {
                    label: this.$t('template'),
                    children: [
                        {label: this.$t('TemplateList'), path: '/template'}
                    ]
                },
                {
                    label:  this.$t('pendingList'),
                    children: [
                        {label: this.$t('allRecords'), path: '/pendingList'}
                    ]
                },
                // {
                //     label: '创建任务',
                //     children: [
                //         {label: '生成任务', path: ''},
                //         {label: '历史任务', path: ''}
                //     ]
                // },
                {
                    label: this.$t('FinancialManagement'),
                    children: [
                        {label: this.$t('rechargeRecord'), path: '/financialManagement'},
                        {label: this.$t('invoiceRecord'), path: '/invoiceRecord'}
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu-wrapper{
        width: 200px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        .el-menu-vertical-demo{
            height: 100%;
        }
    }
</style>