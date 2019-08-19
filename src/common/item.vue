<template>
	<router-link  
		tag="li"
		class="border-bottom item"
		:to="'/detail/'+itemData.id" 
	 >
		<img :src="itemData.imgUrl" alt="" class="img">
		<div class="itemRight">
			<p class="title">{{itemData.title}}</p>
			<p class="desc">{{itemData.desc}}</p>
			<p class="sales">月销:{{itemData.sales}}</p>
			<span class="price">￥{{itemData.price}}</span>
			<del class="originPrice">原价:{{itemData.originPrice}}</del>
			<button class="btn">查看详情</button>
		</div>
	</router-link >
	
</template>

<style lang="scss" scoped>
	@import "~styles/ellipsis.scss";
	.item{
		overflow: hidden;
		padding: .1rem;
		padding-bottom: 30%;
		height: 0;
		.img{
			width: 30%;
			overflow: hidden;				
		}
		.itemRight{
			float: right;
			width: 69%;
			line-height: .45rem;
			position: relative;
			.title{
				font-weight: bold;
				@include ellipsis();
				min-width: 0;
			}
			.desc{
				@include ellipsis();
				color:'#ff9300';
				min-width: 0;
				height: 100%;
				line-height: .6rem;
			}
			.sales{
				line-height: .4rem;
				color: #ff7400;
			}
			.price{
				color: #ff7400;
				font-weight: bolder;
				font-size: .35rem;
				line-height: .85rem
			}
			.btn{
				position: absolute;
				bottom:.2rem;
				right:.15rem;
				color: #fff;
				background: #ff7400;
				padding: .05rem; 
			}
		}
	}
</style>
<script>
	export default{
		data(){
			return {
				list:''
			}
		},
		props:['itemData'],
		mounted(){
			setTimeout(()=>{
			})
		}
	}
</script>

<!-- 暴露方式，去掉默认可以吗？ -->