<template>
	<div class="list" ref="list">
		<div>
			<div class="area">
				<div class="title border-topbottom" >当前城市</div>
				<ul class="itemList">
					<li class="item">{{this.currentCity}}</li>
				</ul>
			</div>
			<div class="area">
				<div class="title border-topbottom" >热门城市</div>
				<ul class="itemList">
					<li class="item" 
						v-for="(item) of hotCities" 
						:key="item.id"
						@click="handelCityClick(item.name)"
					>
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="area" >
				<div v-for="(outer,outerkey) in cities">
					<div class="title border-topbottom">{{outerkey}}</div>
					<ul class="choose" >
						<li class="chooseItem border-bottom" 
							v-for="(inner,innerkey) in outer"
							:key="inner.id"
							:ref="outerkey"
							@click="handelCityClick(inner.name)"
						>
							{{inner.name}}
						</li>
					</ul>
				</div>
			</div>	
		</div>
		<!--右边的字母  -->
		<div class="letter">
			<ul>
				<li  v-for="(item,key) in cities" 
					:key="key"
				>
					{{key}}
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";
	// 设置上下1边框
	.border-topbottom{
		&:before{
			border-color: #ccc
		}
		&:after{
			border-color: #ccc
		}
	}
	.border-bottom{
		&:after{
			border-color: #ccc
		}
	}
	.list{
		// 保证上面页面部分固定,
		// 同时利用定位和top和bottom让元素的高度自适应
		position: absolute;
		top: 1.66rem;
		left: 0;
		bottom: 0;
		overflow: hidden;
		width: 100%;	
		.area{
			.title{
				background: #eee;
				padding:.1rem;
			}
			.itemList{
				overflow: hidden;
				padding:.1rem .4rem .1rem .1rem;
				display: flex;
				flex-wrap:wrap;
				.item{
					border:1px solid #CCC;
					width: 30%;
					text-align: center;
					line-height: .5rem;
					margin-bottom: .1rem ;
					margin-right: .18rem;
				}
			}
			.chooseItem{
				padding:.1rem
			}
		}
		.letter{
			width: .6rem;
			position: fixed;
			right: 0;
			top:2rem;
			font-size: .24rem;
			ul{
				display: flex;
				flex-direction:column;
				height: 100%;
				justify-content:center;
				li{
					text-align: center;
					color: $bgColor;
				}
			}
		}
	}	
</style>

<script>
	import BScroll from 'better-scroll';

	// 高级用法, 将vuex中的mapState,mapMutations结构引入
	import {mapState,mapMutations} from 'vuex';
	
	export default {
		data(){
			return{
				
			}
		} ,
		computed:{
			...mapState({
				// 前面为映射的值,后面的是store中变量
				currentCity:'city'
			})
		},
		props:[
			"hotCities",
			"cities"
		],
		methods:{
			handelCityClick(city){
				// console.log(city)
				//不建议直接修改。应该用$store方法
				// this.$store.state.city = city

				//异步方向使用dispatch
				// this.$store.dispatch('changeCity',city)

				//简单的同步方法直接commit触发
				// this.$store.commit('change',city)
				this.change(city)
				//改变了城市后跳转到首页
				this.$router.push('./')
			},
			// 这里做了方法映射,那么store中的方法就可以直接this.change使用
			...mapMutations(['change'])
		},
		mounted(){
			var list = this.$refs.list
			//实例化
			this.scroll = new BScroll(list,{
				// 插件阻止了默认的点击事件
				click:true
			})
		}
	}

			
</script>
