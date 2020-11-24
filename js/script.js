//Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
	  filterBtns = filterContainer.children,
	  totalFilterBtn = filterBtns.length,
	  portfolioItems = document.querySelectorAll(".portfolio-item"),
	  //console.log(portfolioItems)
	  totalPortfolioItem = portfolioItems.length;
	  //console.log(totalPortfolioItem);
	
	  for(let i=0; i<totalFilterBtn; i++){
	  	filterBtns[i].addEventListener("click",function(){
	  		filterContainer.querySelector(".active").classList.remove("active");
	  		this.classList.add("active"); 

	  		const filterValue = this.getAttribute("data-filter");
	  		//console.log(filterValue);
	  		for(let k=0; k<totalPortfolioItem; k++){
	  			if(filterValue === portfolioItems[k].getAttribute("data-category")){
	  				portfolioItems[k].classList.remove("hide");
	  				portfolioItems[k].classList.add("show");
	  			}
	  			else{
	  				portfolioItems[k].classList.remove("show");
	  				portfolioItems[k].classList.add("hide");
	  			}
	  			if(filterValue === "all"){
	  				portfolioItems[k].classList.remove("hide");
	  				portfolioItems[k].classList.add("show");
	  			}
	  		}
	  	})
	  }

	 
	//Script for portfolio light box

	const lightbox = document.querySelector(".lightbox"),
		  lightboxImg = lightbox.querySelector(".lightbox-img"),
		  lightboxText = lightbox.querySelector(".caption-text"),
		  lightboxCounter = lightbox.querySelector(".caption-counter"),
		  lightboxClose = lightbox.querySelector(".lightbox-close");

	let itemIndex = 0;

	for(let i=0; i<totalPortfolioItem; i++){
		portfolioItems[i].addEventListener("click", function(){
			itemIndex = i;
			changeItem();
			toggleLightbox();
		})
	}
	//Script for previous and next buttons
	function nextItem(){
		if(itemIndex === totalPortfolioItem-1){
			itemIndex = 0;
		} 
		else{
			itemIndex++;
		}
		//console.log(itemIndex);
		changeItem();
	}
	function prevItem(){
		if(itemIndex === 0){
			itemIndex = totalPortfolioItem - 1;
		} 
		else{
			itemIndex--;
		}
		//console.log(itemIndex);
		changeItem();
	}


	function toggleLightbox(){
		lightbox.classList.toggle("open");
	}

	function changeItem(){
		imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
		//console.log(imgSrc);
		lightboxImg.src =imgSrc; 
		lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
		lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItem;
}

//Sctript to close lightbox

	lightbox.addEventListener("click", function(event){
		if(event.target === lightboxClose || event.target === lightbox){
		toggleLightbox();
		//console.log(event.target);
	}
	})