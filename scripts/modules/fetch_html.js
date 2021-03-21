
const d = document,
fetchHTML = url =>{
	fetch(url)
	.then(res=>{
		return res.text();
	})
	.then(HTMLCode=>{
		document.body.innerHTML = HTMLCode;
		d.querySelector(".footer__p").textContent += ` - ${new Date().getFullYear()}`;
	})
}
export default fetchHTML;