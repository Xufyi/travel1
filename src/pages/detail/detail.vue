<template>
	<div>
		<detail-banner 
			:sightName="sightName" 
			:bannerImg="bannerImg" 
			:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<detail-header></detail-header>
		
		<div v-if="!this.$store.state.isShowGallary">
			<div class="price_part border-bottom">
				<span class="price">{{price}}元</span>
				<span class="orginPrice">门市价{{orginPrice}}</span>
				<span class="btn">立即购买</span>
			</div>
			<div class="sales">
				<span class="one">支持立即退货</span>
				<span class="two">支持随时退货</span>
				<span class="num">限量{{sales}}</span>
			</div>
			<div class="info border-bottom">
				<h3 class="title border-bottom">店家信息</h3>
				<p class="name">{{storeName}}</p>
				<p class="name border-bottom">{{storeAddress}}</p>
				<p class="num">查看{{storeNum}}家分店</p>
			</div>
			<div class="remind">
				<h3 class="title border-bottom">购买须知</h3>
				<p class="validateTime">有效日期</p>
				<p>{{validateTime}}</p>
				<p class="useTime">使用日期</p>
				<p>{{useTime}}</p>
				<p class="rules">使用说明</p>
				<template v-for="(item,index) of rules">
					<p v-html="item"></p>
				</template>
			</div>
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";
	.price_part{
		padding: 0 5px 5px;
		.price{
			color:#ff9800;
			font-size: .6rem;
			line-height: .8rem;
		}
		.orginPrice{
			margin-left: 5px;
		}
		.btn{
			float: right;
			font-size: 14px;
			line-height: .7rem;
			margin-top: .1rem;
			width: 1.32rem;
			text-align: center;
			background: #ff9800;
			color: #fff;
		}
	}
	.sales{
		display: flex;
		flex-wrap:wrap;
		padding: .1rem;
		*{
			width: 50%;
			color:yellowGreen;
			line-height: .48rem;
		}
		.num{
			color:#000;
		}
	}
	.info{
		padding:.1rem;
		border-top: .1rem solid #efefef;
		.title{
			font-size: .4rem;
			font-weight: normal;
		}
		.name,.address{
			line-height: 30px;
		}
		.num{
			line-height: 34px;
			color: skyblue;
		}
	}
	.remind{
		border-top: 5px solid #efefef;
		padding:5px;
		.title{
			font-weight: normal;
			font-size:.4rem;
		}
		.validateTime,.useTime,.rules{
			font-size: .35rem;
			line-height: .6rem;
			position: relative;
			padding-left: .2rem;
			&::before{
				content: '';
				display: inline-block;
				width: .06rem;
				height:.35rem;
				background: $bgColor;
			    position: absolute;
			    top:.14rem;
			    left:0rem;
			    border-radius: .06rem;
			}
		}
		p{
			line-height: .56rem;
			margin-bottom: .1rem;
		}
	}
</style>

<script>
	import DetailBanner from "./components/banner.vue";
	import DetailHeader from "./components/header.vue";

	import axios from "axios";

	export default{
		name:'detail',
		components:{
			DetailBanner,
			DetailHeader,
		},
		data(){
			return {
				sightName:"",
				bannerImg:"",
				categoryList:"",
				gallaryImgs:"",
				price:'',
				orginPrice:"",
				sales:"",
				storeName:"",
				storeAddress:"",
				storeNum:"",
				validateTime:"",
				useTime:"",
				rules:""
			}
		},
		mounted(){
			// axios.get('static/mock/detail.json',{
			axios.get('https://xufyi.github.io/travel1/static/mock/detail.json',{
				params:{
					id:this.$route.params.id
				}
			})
			.then(({data} = data)=>{
				// console.log(data)
				this.sightName = data.data.sightName
				this.bannerImg = data.data.bannerImg
				this.categoryList = data.data.categoryList
				this.gallaryImgs = data.data.gallaryImgs
				this.price = data.data.price
				this.orginPrice = data.data.orginPrice
				this.sales = data.data.sales
				this.storeName = data.data.storeName
				this.storeAddress = data.data.storeAddress
				this.storeNum = data.data.storeNum
				this.validateTime = data.data.validateTime
				this.useTime = data.data.useTime
				this.rules = data.data.rules
			})
		}
	}
</script>


	

