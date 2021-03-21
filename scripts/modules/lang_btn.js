import fetchHTML from "./fetch_html.js";
const d = document,
ls = localStorage,
langBtn = ()=>{
	d.addEventListener("click",e=>{
		if(e.target.matches("#btn-lang")){
			switch(ls.getItem("lang")){
				case "ES":
					ls.setItem("lang","EN");
					d.documentElement.lang = "en";
					fetchHTML("./assets/content-en.html");
				break;
				case "EN":
					ls.setItem("lang", "ES");
					d.documentElement.lang = "en";
					fetchHTML("./assets/content-es.html");
			}
		}
	})
}
export default langBtn;