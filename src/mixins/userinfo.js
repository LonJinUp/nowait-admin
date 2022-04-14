import {getUserinfo} from '@/api'
export default {
    data() {
        return {
            userinfo: null
        }
    },
    methods: {
        getUserinfo() {
            let userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
            if (!userinfo) {
                window.location.hash = '#/login'
                return false
            }
            getUserinfo({qyid: userinfo.id}).then(res=>{
                if(res.code == 1) {
                    this.userinfo = res.data
                    window.localStorage.setItem('userinfo', JSON.stringify(res.data))
                }
            })
        }
    },
}