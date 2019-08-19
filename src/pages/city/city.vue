<template>
	<div >
		<CityHeader></CityHeader>
		<CitySearch :cities="cities"></CitySearch>
		<CityList :hotCities="hotCities" :cities="cities"></CityList>
	</div>
</template>

<style lang="scss" scoped>
	
</style>

<script>
 	import CityHeader from "./components/Header.vue";
 	import CitySearch from "./components/search.vue";
 	import CityList from "./components/List.vue";
 	import axios from "axios";


	export default {
		data(){
			return{
				cities:'',
				hotCities:''
			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				//发送请求，获取数据
				// axios.get('/api/city.json')
				axios.get('https://xufyi.github.io/travel1/static/mock/city.json')			
					//注意传入回调函数不需要加()
				.then(this.getCityInfoSucc)
			},
			getCityInfoSucc({data} = data){
				// console.log(data)
				if(data.ret && data.data){
					this.cities = data.data.cities;
					this.hotCities = data.data.hotCities
				}
			}
		}
						
	}
</script>