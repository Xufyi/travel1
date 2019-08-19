// 使用本地存储，防止页面刷新后上次的数据丢失的情况
let defaultCity = "上海";
try {
	defaultCity = localStorage.city
} catch (e) {}

//icon分类
let classify = ""
try {
	classify = localStorage.classify
} catch (e) {}


//搜索内容
let searchText = ""

//是否显示画廊
let isShowGallary = false

export default {
	city: defaultCity,
	classify,
	searchText,
	isShowGallary
}