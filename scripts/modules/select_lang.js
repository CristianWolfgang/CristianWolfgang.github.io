import fetchHTML from "./fetch_html.js";
export default function selectLang(lang){
	localStorage.setItem("lang",lang);
	document.documentElement.lang = lang;
	fetchHTML("./assets/content-"+ lang.toLowerCase() +".html");
};