var misimage= document.querySelector('img');
misimage.onclick=function(){
	var miSrc= misimage.getAttribute('src');
	if(miSrc==='images/nosemancha.jpg'){
		misimage.setAttribute('src','images/futbol.jpg');
}
else{
	misimage.setAttribute('src','images/nosemancha.jpg');
}
}
