

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
	});

//Script for Navbar
	const nav = document.querySelector(".nav"),
		  navList = nav.querySelectorAll("li"),
		  totalNavList = navList.length,
		  allSection = document.querySelectorAll(".section"),
		  totalSection = allSection.length;

	for(let i=0; i<totalNavList; i++){
		//console.log(navList[i]);
		const a = navList[i].querySelector("a");
		//console.log(a);
		a.addEventListener("click", function(){
			//remove back section class
			for(let i=0; i<totalSection; i++){
				allSection[i].classList.remove("back-section");
			}

			for(let j=0; j<totalNavList; j++){
				if(navList[j].querySelector("a").classList.contains("active")){
					//console.log("back-section"+navList[j].querySelector("a"));
					//add back section class
					allSection[j].classList.add("back-section");					
				}
				navList[j].querySelector("a").classList.remove("active");
			}
		//console.log(this);
		this.classList.add("active");

		showSection(this);
		if(window.innerWidth < 1200){
			asideSectionTogglerBtn();
		}
		})
	}

	function showSection(element){
		for(let i=0; i<totalSection; i++){
			allSection[i].classList.remove("active");
		}
		//console.log(element);
		//console.log(element.getAttribute("href").split('#'));
		//const href = element.getAttribute("href").split("#");
	    //target = href[1];		
		const target = element.getAttribute("href").split("#")[1];
		//console.log(target);
		document.querySelector("#"+target).classList.add("active");
	}

	const navTogglerBtn = document.querySelector(".nav-toggler"),
	 	  aside = document.querySelector(".aside");

	 navTogglerBtn.addEventListener("click",() => {
	 	asideSectionTogglerBtn();
	 })

	 function asideSectionTogglerBtn(){
	 	aside.classList.toggle("open");
	 	navTogglerBtn.classList.toggle("open");
	 	for(let i=0; i<totalSection; i++){
	 		allSection[i].classList.toggle("open");
	 	}
	 }