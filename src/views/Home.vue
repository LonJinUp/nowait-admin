<template>
    <div class="home-wrapper">
        <el-row :gutter="12">
            <el-col :span="8" v-for="item in numberConfig" :key="item.label">
                <el-card shadow="always">
					<div class="label">{{item.label}}</div>
					<div class="value">{{item.value}}</div>
				</el-card>
            </el-col>
        </el-row>
		{{$t('loginText')}}
    </div>
</template>
<script>
export default {
    data() {
        return {
			numberConfig: [
				{label: this.$t('todaytask'), value: '20'},
				{label: this.$t('numberOfTemplates'), value: '123'},
				{label: this.$t('totalNumberOfCustomers'), value: '2323'}
			]
		}
    },
};
</script>
<style lang="scss" scoped>
	.home-wrapper{
		width: 100%;
		.label{
			font-size: 18px;
			font-weight: bold;
			color: rgba(0,0,0,.45);
		}
		.value{
			text-align: center;
			width: 100%;
			font-weight: bold;
			font-size: 60px;
			color: #666;

		}
	}
</style>