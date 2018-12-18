function changePage(){
    let page = document.querySelector('.moduleapp'),
        modules = [...page.querySelectorAll('.module')];
        
        

        modules.forEach((mdl)=>{
            mdl.style.display = "none";
        });

        function pageInit() {
            page.innerHTML = '';
            for( let i = 0; i < 8; i++){
                if( i % 2 == 0 ){
                    page.appendChild(modules[0].cloneNode(true));
                    modules.push(page.lastChild);
                } else {
                    page.appendChild(modules[1].cloneNode(true));
                    modules.push(page.lastChild);
                }                
            }
            if(Number(window.location.href.split('=')[1]) != NaN && Number(window.location.href.split('=')[1]) < 9){
                page.childNodes[+window.location.href.split('=')[1] - 1].style.display = "block";
            } else {
                page.childNodes[0].style.display = "block";
            }            
            modules.shift();
            modules.shift();
            
        }
        
        pageInit();

        let logos = [...page.querySelectorAll('.logo')],
            buttonsLeft = [...page.querySelectorAll('a.next')],
            buttonsMainPrev = [...page.querySelectorAll('.prevmodule')],
            buttonsMainNext = [...page.querySelectorAll('.nextmodule')],
            modulesTitle = [...page.querySelectorAll('.title')],
            sidecontrolControlsCount = [...page.querySelectorAll('.sidecontrol__controls-count')],
            sidecontrolControlsShow = [...page.querySelectorAll('.sidecontrol__controls-show')],
            bookCover = [...page.querySelectorAll('.book__cover')],
            prevCounter = [...page.querySelectorAll('.prev__counter')],
            nextCounter = [...page.querySelectorAll('.next__counter')],
            current = [...page.querySelectorAll('.current')];
        
        for(let i = 0; i < modules.length; i++){
            modules[i].id = i + 1;
            modulesTitle[i].textContent = modulesTitle[i].textContent.replace(/[36]/,i+1);
            sidecontrolControlsCount[i].textContent = sidecontrolControlsCount[i].textContent.replace(/[36]/,i+1);
            sidecontrolControlsShow[i].textContent = sidecontrolControlsShow[i].textContent.replace(/[36]/,i+1);
            bookCover[i].textContent = bookCover[i].textContent.replace(/[36]/,i+1);
            current[i].textContent = current[i].textContent.replace(/[36]/,i+1);
            prevCounter[i].textContent = (i > 0) ? prevCounter[i].textContent.replace(/[25]/,i) : prevCounter[i].textContent.replace(/[25]/,8);
            nextCounter[i].textContent = (i < modules.length - 1) ? nextCounter[i].textContent.replace(/[47]/,i+2) : nextCounter[i].textContent.replace(/[47]/,1);
        }

        logos.forEach((logo)=>{ 
            logo.addEventListener('click', function(){
                modules.forEach((mdl)=>{
                    mdl.style.display = "none";
                });
                modules[0].style.display = "block";
            });
        });

        buttonsMainNext.forEach((button,index)=>{ 
            button.addEventListener('click', function(){
                modules[index].style.display = "none";
                if(index+1 < modules.length){
                    modules[index+1].style.display = "block";
                } else {
                    modules[0].style.display = "block";
                }
            });
        }); 

        buttonsMainPrev.forEach((button,index)=>{ 
            button.addEventListener('click', function(){
                modules[index].style.display = "none";
                if(index-1 >= 0){
                    modules[index-1].style.display = "block";
                } else {
                    modules[modules.length - 1].style.display = "block";
                }
            });
        });

        buttonsLeft.forEach((button,index)=>{ 
            button.addEventListener('click', function(){
                modules[index].style.display = "none";
                if(index+1 < modules.length){
                    modules[index+1].style.display = "block";
                } else {
                    modules[0].style.display = "block";
                }
            });
        });
    
}

module.exports = changePage;
