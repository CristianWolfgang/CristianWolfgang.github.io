export default function footerYear(){
	const $footer =document.querySelector("footer"); 
	$footer.style.display="none";
	let date = new Date();
	$footer.innerHTML +=" "+ date.getFullYear();

	document.addEventListener("DOMContentLoaded",e=>{
		$footer.style.display="block";		
	})
}