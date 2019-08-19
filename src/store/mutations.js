export default {
	change(state,city){
		console.log(localStorage.city)
		state.city = city
		try{
			//存储在localStorage
			localStorage.city = city
		}catch(e){}
	},
	//修复显示Gallary组件的时候下面可以滚动的情况
	changeIsShowGallary(state){
		state.isShowGallary = !state.isShowGallary
	}
}