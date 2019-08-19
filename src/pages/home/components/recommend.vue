<template>
	<div class="recommend">
		<h3 class="recommend_title">热门推荐</h3>
		<ul class="itemList">
			<div v-for="item in list" :key="item.id">
				<Item :item-data="item"></Item>
			</div>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	@import "~styles/ellipsis.scss";
	.recommend{
		.recommend_title{
			padding-left: 0.1rem;
			background: #eee;
			line-height: 0.6rem;
		}
		.itemList{
			overflow: hidden;
		}
	}
</style>

<script>
	import Item from "@/common/item.vue";
	

	export default{
		props:["list"],  
		components:{Item},
		mounted(){
			console.log(this.list)
		}
	}
</script>