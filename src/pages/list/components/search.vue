<template>
	<div class="search">
		<div class="search_inp">
			<input type="text" placeholder="请输入城市名或拼音"  @keyup.enter='showSearch' v-model="keyword">
		</div>	
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/varibles.scss";
	.search{
		.search_inp{
			height: .6rem;
			background: $bgColor;
			color: #eee;
			display: flex;
			text-align: center;
			line-height: .86rem;
			padding:.1rem;
			input{
				width: 100%;
				padding: 0 .1rem;
				border-radius: .1rem;
				color:#666;
				text-align: center;
			}
		}
		.search_list{
			position: absolute;
			top:1.66rem;
			bottom:0;
			left:0;
			right:0;
			z-index: 999;
			background: #ccc;
			overflow: hidden;
			ul{
				li{
					background: #fff;
					line-height: .7rem;
					padding-left: .1rem;
				}
			}
			.noData{
				background: #fff;
				line-height: .7rem;
				padding-left: .1rem;
			}
		}
	}
</style>

<script>

	export default{
		data(){
			return {
				keyword:'',
				list:[],
				timer : null,
				// 搜索内容
				keyword:''
			}
		},
		watch:{
			//监听搜索框
			keyword(){
				//设置100ms的演示器执行,提高搜索效率
				if(this.timer){
					clearTimeout(this.timer)
				}
				//当没有输入内容时不执行
				if( !this.keyword ){
					this.list= []
					return 
				}
				this.timer = setTimeout(()=>{
					for(var key in this.cities){
						var result =  this.cities[key].forEach((item,index)=>{
						// 名称或是拼音含有关键字
						if(item.spell.indexOf(this.keyword) >= 0 || item.name.indexOf(this.keyword) >= 0) {
							this.list.push(item)
							}
						})
					}
					return 
				},100)	
			}
		},
		methods:{
			showSearch(){
				//向外触发事件，传递搜索内容，
				this.$emit('search',this.keyword)
			}
		},
	}
</script>