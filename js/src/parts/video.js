function showVideo(){
    let overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.close'),
        showup = document.querySelector('.showup'),
        

        input = [...document.getElementsByTagName('input')],       
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
    
    function clearInput() {
        input.forEach(function(element,index){
            input[index].value = '';
        });
    }

    close.addEventListener('click',()=>{
        if(document.querySelector('.status')){document.querySelector('.status').remove();}
        overlay.style.display = "none";
        document.body.style.overflow = '';
        clearInput();
    });


}

module.exports = showVideo;