<template>
    <div class="login-wrapper">
        <div class="left">
            <img src="@/assets/images/logo.jpg" alt="">
        </div>
        <div class="right">
            <div class="login">
                <component :is="currentPanel" />
                <div class="checkout" @click="checkout">{{currentPanel == 'login' ? $t('signupNow') : $t('loginNow')}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Login from './components/Login'
import Register from './components/Register'
export default {
    components: {Login, Register},
    data() {
        return {
            form: {
                account: '',
                password: '',
            },
            currentPanel: 'login'
        }
    },
    methods: {
        checkout() {
            this.currentPanel = this.currentPanel == 'login' ? 'register' : 'login'
        }
    }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; 
    .left{
        width: 30%;
        height: 100%;
        position: relative;
        img{
            width: 100px;
            height: 100px;
            position: absolute;
            top: 80px;
            left: 50px;
        }
    }
    .right{
        width: 54%;
        min-width: 740px;
        background: url('~@/assets/images/login-background.png')no-repeat center center /100% 100%;
        background-position: left bottom;
        height: 100%;
        position: relative;
        padding-right: 12%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        box-sizing: content-box;
        .login{
            width: 340px;
            height: auto;
            padding: 16px;
            background-color: #FFFFFF;
            border-radius: 4px;
            overflow: hidden;
            .checkout{
                width: 100%;
                margin-top: 18px;
                font-size: 12px;
                font-weight: 400;
                color: #409EFF;
                text-align: right;
                cursor: pointer;
            }
        }
    }
}
</style>