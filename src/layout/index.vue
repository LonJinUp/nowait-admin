<template>
    <div class="layout-wrapper">
        <left-menu />
        <div class="fixed-top flex-end">
            <div class="language">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{locale}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in locales" :key="item.value"> <span @click="changeLanguage(item.value)"> {{item.label}}</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="content">
            <router-view :key="this.$route.fullPath" />
        </div>
    </div>
</template>
<script>
import LeftMenu from "./components/LeftMenu";
export default {
    components: { LeftMenu },
    data() {
        return {
            locale: this.$i18n.locale, //使用i18n实例默认定义的语言
            locales: [
                {
                    value: "EN",
                    label: "English",
                },
                {
                    value: "zh-CN",
                    label: "中文简体",
                },
                {
                    value: "zh-HK",
                    label: "中文繁體",
                },
            ],
        };
    },
    methods: {
        changeLanguage(value) {
            this.locale = value
        },
    },
    watch: {
        locale(val) {
            this.$i18n.locale = val
        },
    },
};
</script>
<style lang="scss" scoped>
.layout-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-left: 200px;
    padding-top: 50px;
    .content {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 30px;
    }
    .fixed-top {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        padding-right: 30px;
    }
    .el-dropdown-link{
        cursor: pointer;
    }
}
</style>