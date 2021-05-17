import selectLang from "./select_lang.js";
const d = document,
ls = localStorage,
langBtn = ()=>{
	d.addEventListener("click",e=>{
		if(e.target.matches("#btn-lang")){
			(ls.getItem("lang")==="EN")?ls.setItem("lang","ES"):ls.setItem("lang","EN");
			selectLang(ls.getItem("lang"));
			e.target.textContent = ls.getItem("lang");
		}
	})
};

export default langBtn;