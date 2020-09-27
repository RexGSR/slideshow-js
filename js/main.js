{
	const btnLeft = document.querySelector('.leftBtn');
	const btnRight = document.querySelector('.rightBtn');
	let markList = document.querySelector('.markList');
	let slider  = document.querySelector('.slider');
	let slides = slider.querySelectorAll('.slide');
	let index = 0;

	let changeSlide = () => {
			
			if(index >= slides.length){
			index = 0;
			}
			console.log(index);
			slides.forEach(slide => slide.classList.remove('active'));
			slides[index].classList.add('active');	
			
			markList.textContent = `${index + 1} / ${slides.length}`;
			index += 1;
		}


	btnLeft.addEventListener('click', () => {
	 	index -= 2;
 	 	if(index < 0){
			index = slides.length - 1;
		} 
		changeSlide()
	});


	btnRight.addEventListener('click', () => {  
		if(index >= slides.length){
			index = 0;
		} 
		changeSlide()
	});
	
	setInterval(changeSlide, 3000);



}