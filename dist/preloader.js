window.onload = function(){
	setTimeout(function(){
        document.getElementById('preloader').classList.add('loaded_hiding');
	}, 543
	);
    setTimeout(function(){
        document.getElementById('preloader').classList.remove('loaded_hiding');
        document.getElementById('preloader').classList.remove('flex');
        document.getElementById('preloader').classList.add('loaded');
	}, 843
	);
}