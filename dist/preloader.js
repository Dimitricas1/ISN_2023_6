window.onload = function(){
	setTimeout(function(){
        document.getElementById('preloader').classList.add('loaded_hiding');
        document.body.classList.remove('loading_no_overflow');
	}, 543
	);
    setTimeout(function(){
        document.getElementById('preloader').classList.remove('loaded_hiding');
        document.getElementById('preloader').classList.remove('flex');
        document.getElementById('preloader').classList.add('loaded');
	}, 843
	);
}