import fetchHTML from "./fetch_html.js";
const d = document,
ls = localStorage,
loadContent = ()=>{
d.addEventListener("DOMContentLoaded",e=>{
		if(!ls.getItem("lang")){
			ls.setItem("lang","ES");
			fetchHTML("./assets/content-es.html");
		}else{
			let lang = ls.getItem("lang").toLowerCase()
			fetchHTML(`./assets/content-${lang}.html`);
		}
	})
};
export default loadContent;