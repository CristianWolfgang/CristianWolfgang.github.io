import loadContent from "./modules/load_content.js";
import langBtn from "./modules/lang_btn.js";
import footerYear from "./modules/footer_year.js";
import zoomPhoto from "./modules/zoom_photo.js";
const d = document;

loadContent();
footerYear();
d.addEventListener("DOMContentLoaded",e=>{
	langBtn();
	zoomPhoto("(max-width:425px)");
})
