import selectLang from "./select_lang.js";
const d = document,
ls = localStorage,
loadContent = ()=>{
d.addEventListener("DOMContentLoaded",e=>{
		
		(!ls.getItem("lang"))?selectLang("EN"):selectLang(ls.getItem("lang"));
	})
};
export default loadContent;