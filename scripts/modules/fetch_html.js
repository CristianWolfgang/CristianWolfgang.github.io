
const d = document,
fetchHTML = url =>{
	fetch(url)
	.then(res=>{
		return res.text();
	})
	.then(HTMLCode=>{
		document.querySelector(".content").innerHTML =HTMLCode;
	});
}
export default fetchHTML;