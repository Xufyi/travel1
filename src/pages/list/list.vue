<template>
	<div>
		<Header></Header>
		<Search @search="searchShow"></Search>
		<Sort @sort="listOrder" @click.native="changeOrder"></Sort>

		<ul class="itemList">
			<div v-for="item in dealItemData" :key="item.id">
				<Item :item-data="item"></Item>
			</div>
		</ul>

		<!-- 加载更多 -->
		<More @click.native="showOthers" v-show="others.length" :xfy-length="this.others.length"></More>
	</div>
</template>
<script>
	import 	Header from "./components/header";
	import 	Search from "./components/search";
	import 	Sort from "./components/sort";
	import  Item from "@/common/item.vue";
	import  More from "./components/more.vue";
	import 	axios from "axios";
	import 	Vue from "vue";

	export default{
		data(){
			return{
				//默认显示前3条数据
				recommendList:"",
				// 不显示的item数组
				others:[],
				//升序/false降序
				order:false,
				//定义搜索内容
				searchText:'',
				msg:"666"
			}
		},
		components:{
			Header,
			Search,
			Sort,
			Item,
			More
		},
		methods:{
			//发送请求获取数据
			getHomeInfo(){
				// axios.get("/api/index.json?city=" + this.currentCity)
				axios.get("https://xufyi.github.io/travel1/static/mock/index.json?city=" + this.currentCity)
				// axios.get('static/mock/index.json')
				// 返回promise对象
				.then(({data} = data)=>{
					if(data.ret && data.data){
						//截取前3个
						this.recommendList = data.data.recommendList.slice(0,3)
						this.others = data.data.recommendList.slice(3)
					}	
				})
			},
			//加载更多，展示剩下的内容
			showOthers(){
				this.recommendList = this.recommendList.concat(this.others)
				this.others = []
			},
			//排序
			listOrder(id){
				//升序
				if(this.order){
					//优惠排序
					if( id === 'discount'){
						// 优惠价 = 现价 - 原价
						// a.originPrice - a.price 
						return this.recommendList.sort( (a,b)=>(a.originPrice - a.price) - (b.originPrice - b.price)   )
					}
					//价格，销量，好评排序。 降序
					this.recommendList.sort( (a,b)=>  a[id] - b[id])	
					return
				}
			//降序
				//优惠排序
				if( id === 'discount'){
					// 优惠价 = 现价 - 原价
					// a.originPrice - a.price 
					return this.recommendList.sort( (a,b)=>(b.originPrice - b.price) - (a.originPrice - a.price) )
				}
				//价格，销量，好评排序。 降序
				this.recommendList.sort( (a,b)=>b[id] - a[id] )	
			},
			//再次点击切换升序/降序
			changeOrder(){
				this.order = !this.order
			},
			//显示搜索内容
			searchShow(text){
				// console.log('搜索内容 ' + text)
				this.$store.state.searchText = text
				//
				this.searchText = text
			}
		},
		computed:{
			//搜索内容
			dealItemData(){
				if( !this.searchText ){
					//说明为空,直接返回数据
					return this.recommendList
				}
				//合并，清空加载更多的列表
				this.recommendList = this.recommendList.concat(this.others)
				this.others = []
				//说明不为空，过滤掉不符合搜索条件的内容
				var result =  this.recommendList.filter( (item,index)=>{
					//加或者语句
					return	item.title.indexOf(this.$store.state.searchText) >= 0 
					 || item.desc.indexOf(this.$store.state.searchText) >= 0
				})
				// 存储数据变为空，返回搜索内容
				this.$store.state.searchText = ''
				return result
			}
		},
		mounted(){
			this.getHomeInfo()
		}
	}
</script>
