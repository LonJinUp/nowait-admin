<template>
    <div class="packagePurchase-wrapper">
        <el-row :gutter="12">
            <el-col :span="8" v-for="item in combo" :key="item.label">
                <el-card shadow="always">
					<div class="title">{{item.title}}</div>
					<div class="tips">{{item.tips}}</div>
                    <div class="value">{{item.value}}条</div>
                    <div class="price">{{item.price}}</div>
				</el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            combo: [
                {title: '基础套餐', tips: '套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍', value: '200', price: '￥100'},
                {title: '高级套餐', tips: '套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍', value: '500', price: '￥200'},
                {title: '豪华套餐', tips: '套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍套餐介绍', value: '900', price: '￥300'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .packagePurchase-wrapper{
        .title{
            font-size: 20px;
            font-weight: 600;
        }
        .tips{
            font-size: 14px;
            color: rgba(0,0,0,.45);
            font-weight: 200;
            margin-top: 16px;
        }
        .value{
            font-size: 30px;
            font-weight: bold;
            color: #666;
            text-align: center;
            margin: 30px 0;
        }
        .price{
            font-size: 18px;
            font-weight: bold;
            color: #ff6700;
            text-align: right;
        }

    }
</style>