<template>
	<!-- 加载更多 -->
		<!-- 当others数组长度为0时不渲染 -->
	<div class="loadMore">
		<span class="other">查看其他{{xfyLength}}条信息</span>
		<span class="arrow ">
			<span class="white"></span>
		</span>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/arrow.scss";
	@import "~styles/varibles.scss";
	.loadMore{
		text-align: center;
		color: $bgColor;
		border-bottom: 1px solid #ccc;
		line-height: 40px;
		font-size: 18px;
		.arrow{
			@include arrow(8px,$bgColor,top);
			position: relative;
			top: 0px;
			left: 4px;
			.white{
				@include arrow(6px,#fff,top);
				position: absolute;
				top: -8px;
				left: -6px;
			}
		}	
	}
</style>

<script>
	export default{
		data(){
			return{
			}
		},
		//other中数组长度
		props:["xfyLength"]
	}
</script>