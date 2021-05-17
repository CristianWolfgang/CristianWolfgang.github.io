const d = document;
export default function zoomPhoto(mediaQuery){
	let media = window.matchMedia(mediaQuery);
	if(media.matches){
		d.addEventListener("click",e=>{
			if(e.target.matches(".portfolio-img")){
				e.target.classList.toggle("zoomed-img");
				d.body.style.overflow = (d.body.style.overflow==="hidden")?"auto":"hidden";
			}
		})			
	}
};
