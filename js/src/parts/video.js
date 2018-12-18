function showVideo(){
    let overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.close'),
        showup = document.querySelector('.showup'),
        

        moduleApp = document.querySelector('.moduleapp'),        
        frame = document.querySelector('#frame'),
        play;

        overlay.style.zIndex = "100";
    
    if(showup){
        play = showup.querySelector('.play');
        play.addEventListener('click',()=>{
            frame.src = play.dataset.url;
            overlay.style.display = "flex"; 
            document.body.style.overflow = 'hidden';        
        });
    }   
    

    if(moduleApp){
        let playModule = [...moduleApp.querySelectorAll('.play')],
            videoItem = [...moduleApp.querySelectorAll('.module__video-item')];
        playModule.forEach((element,index)=>{
            play = element;
            if(index % 2 == 0){
                element.addEventListener('click',()=>{
                    
                        frame.src = element.dataset.url;
                        overlay.style.display = "flex"; 
                        document.body.style.overflow = 'hidden';
                        playModule[index+1].innerHTML = element.innerHTML;
                        videoItem[index+1].style.opacity = 1;
                        playModule[index+1].addEventListener('click',()=>{                     
                            frame.src = playModule[index+1].dataset.url;
                            overlay.style.display = "flex"; 
                            document.body.style.overflow = 'hidden';
                        });
                });
            }  
        });        
    }
    

    close.addEventListener('click',()=>{
        frame.src = play.dataset.url;
        frame.style.display = "flex";
        if(document.querySelector('.status')){document.querySelector('.status').remove();}
        overlay.style.display = "none";
        document.body.style.overflow = '';
    });


}

module.exports = showVideo;