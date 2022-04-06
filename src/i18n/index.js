import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locale/en.json'
import zhCN from './locale/zh-CN.json'
import zhHK from './locale/zh-HK.json'

Vue.use(VueI18n)

const messages = {
    en,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
}

// 通过选项创建 VueI18n 实例并导出
export default new VueI18n({
    locale: 'zh-CN', // 设置当前语言环境，默认中文简体
    messages, // 设置语言环境对应信息
})