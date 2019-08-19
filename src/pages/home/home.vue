<template>
	<div>
		<Header :city="city" ></Header>
		<Swiper :list="swiperList"></Swiper>
		<Icon :list="iconList"></Icon>
		<Recommend :list="recommendList"></Recommend>
		<Weekend :list="weekendList"></Weekend>
	</div>
</template>
<script>
	import 	Header from "./components/header";
	import 	Swiper from "./components/swiper";
	import 	Icon from "./components/icon";
	import 	Recommend from "./components/recommend";
	import 	Weekend from "./components/weekend";
	import 	axios from "axios";
	import {mapState} from "vuex";
	

	export default{
		name:"Home",
		components:{
			Header,
			Swiper,
			Icon,
			Recommend,
			Weekend
		},
		data (){
			return {
				city:'',
				iconList:'',
				swiperList:'',
				recommendList:'',
				weekendList:'',
				arr:[1,2,3,4],
				lastCity:""
			}
		},
		methods:{
			getHomeInfo(){
				// axios.get("/api/index.json?city=" + this.currentCity)
				axios.get("https://xufyi.github.io/travel1/static/mock/index.json")
				// axios.get('static/mock/index.json')
				// 返回promise对象
				.then(({data} = data)=>{
					// console.log(data.data)
					if(data.ret && data.data){
						this.city = data.data.city
						this.iconList = data.data.iconList
						this.swiperList = data.data.swiperList
						this.recommendList = data.data.recommendList
						this.weekendList = data.data.weekendList
					}	
				})
			},
		},
		computed:{
			...mapState({currentCity:'city'})
		},
		mounted(){
			this.lastCity = this.currentCity
			this.getHomeInfo()
		},
		activated(){
			// console.log(this.lastCity,this.currentCity)
			// 组件被激活,判断当前城市是否改变，改变时再去发送ajax请求数据
			if(this.lastCity !== this.currentCity){
				this.lastCity = this.currentCity
				this.getHomeInfo("/api/index.json?city=" + this.currentCity )
			}
  		}
	}
</script>