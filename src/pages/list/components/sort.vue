<template>
	<ul class="nav">
		<li  v-for="(item,index) in sort" @click="itemSort(item.id)">
			<span class="text">{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	@import "~styles/arrow.scss";
	.nav{
		display: flex;
		border-bottom: 1px solid #ccc;
		line-height: 30px;
		li{
			flex:1;
			border-right: 1px solid #ccc;
			text-align: center;
			font-size: 13px;
			&:last-child{
				border-right: none;
			}
			.arrow{
				@include arrow(6px,#000,top);
				position:relative;
				top: -1px;
				left: 2px;
			}
		}
	}
</style>

<script>
	export default{
		data(){
			return {
				sort:[
					//id用英文，方便注册事件 
					{text:'价格排序',id:'price'},
					{text:'销量排序',id:'sales'},
					{text:'好评排序',id:'evaluate'},
					{text:'优惠排序',id:'discount'}
				],
			}
		},
		methods:{
			itemSort(id){
				this.$emit("sort",id)
			}
		}
	}
</script>