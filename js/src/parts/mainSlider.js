function mainSlider(){
    let slider = document.querySelector('.showup__content-slider'),
        slides = [...slider.querySelectorAll('.card')],        
        arrowRight = document.querySelector('.slider-right'),
        arrowLeft = document.querySelector('.slider-left'),
        arrowSlider = [...slider.querySelectorAll('.card__controls-arrow')],

        slider2 = document.querySelector('.modules__content-slider'),
        slides2 = [...slider2.querySelectorAll('.card')],
        arrowRight2 = document.querySelector('.slick-next'),
        arrowLeft2 = document.querySelector('.slick-prev'),
        arrowSlider2 = [...slider2.querySelectorAll('.card__controls-arrow')],

        slider3 = document.querySelector('.feed__slider'),
        slides3 = [...slider3.querySelectorAll('.feed__item')],
        arrowRight3 = slider3.querySelector('.slider-right'),
        arrowLeft3 = slider3.querySelector('.slider-left'),
        plus = document.querySelector('.showup__content-side'),
        noclick = false;
        slider.style.display = "flex";

        for(let i = 4; i < slides.length; i++){
            slides[i].style.display = "none";
            slides2[i].style.display = "none"; 
            if(slides3[i]){slides3[i].style.display = "none"}                    
        }
        
        function sliderLeft(slides,slider, className) {
            noclick = true;
            for(let i = 0 ; i < 4 ; i++){
                slides[i].classList.add(className +'-left');
            } 
            setTimeout(function(){
                slides[0].style.display = "none"; 
                for(let i = 0 ; i < 4 ; i++){
                    slides[i].classList.remove(className +'-left');
                } 
                slides[4].style.display = "block"; 
                slides[0].classList.remove(className +'-active'); 
                slides[1].classList.add(className +'-active');
                slider.appendChild(slides[0]);
                slides.push(slides.shift());
                noclick = false; 
            }, 700);

        }

        function sliderRight(slides,slider, className) {
            noclick = true;
            slides.unshift(slides.pop());
            slider.insertBefore(slides[0], slider.childNodes[0]);
            slides[0].style.display = "block";
            slides[4].style.display = "none";
            slides[1].classList.remove(className +'-active'); 
            slides[0].classList.add(className +'-active');
            for(let i = 0 ; i < 4 ; i++){
                slides[i].classList.add(className +'-right');
            } 
            setTimeout(function(){
                for(let i = 0 ; i < 4 ; i++){
                    slides[i].classList.remove(className +'-right');
                }  
                noclick = false;               
            }, 900);

        }

        arrowLeft.addEventListener('click', function(){
            if(!noclick){sliderLeft(slides,slider,'card');}            
        });

        arrowLeft2.addEventListener('click', function(){
            if(!noclick){sliderLeft(slides2,slider2,'card');}            
        });

        arrowLeft3.addEventListener('click', function(){
            if(!noclick){sliderLeft(slides3,slider3,'feed__item');}            
        });

        arrowSlider.forEach(function(arrow){
            arrow.addEventListener('click', function(event){
                if(!noclick){sliderLeft(slides,slider,'card');}                
            });
        });

        arrowSlider2.forEach(function(arrow){
            arrow.addEventListener('click', function(event){
                if(!noclick){sliderLeft(slides2,slider2,'card');}                
            });
        });

        setInterval(()=>{
            if(!noclick){sliderLeft(slides2,slider2,'card');}
        },4000);

        arrowRight.addEventListener('click', function(){
            if(!noclick){sliderRight(slides,slider,'card');}  
        });

        arrowRight2.addEventListener('click', function(){
            if(!noclick){sliderRight(slides2,slider2,'card');}  
        });

        arrowRight3.addEventListener('click', function(){
            if(!noclick){sliderRight(slides3,slider3,'feed__item');}  
        });

        slides.forEach(function(slide, index){
            slide.addEventListener('click', function(event){
                if(event.target.parentNode.nodeName != 'svg'){
                    window.location.href = "modules.html?module=" + (index + 1);
                }
            });
        });

        slides2.forEach(function(slide, index){
            slide.addEventListener('click', function(event){
                if(event.target.parentNode.nodeName != 'svg'){
                    window.location.href = "modules.html?module=" + (index + 1);
                }
            });
        });

        plus.addEventListener('click', function(event){
            window.location.href = "modules.html";
        });

}

module.exports = mainSlider;