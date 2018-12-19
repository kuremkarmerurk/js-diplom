    let tag = document.createElement('script');
    
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
            let player;
            function onYouTubeIframeAPIReady() {
                player = new YT.Player('frame', {
                        height: '480',
                        width: '720',
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });            
            }
            function onPlayerReady(){}
            function onPlayerStateChange(event) {
                if(event.data == YT.PlayerState.ENDED){
                    let playNext = document.getElementById('playNext'),
                        playNow = document.getElementById('playNow'),
                        overlay = document.querySelector('.overlay'),
                        playNextWrapper = document.getElementById('playNextWrapper');
                    playNext.innerHTML = playNow.innerHTML;
                        playNextWrapper.style.opacity = 1;
                        playNext.addEventListener('click',()=>{                     
                            loadVideoById(getIdFromUrl(playNext.dataset.url));
                            overlay.style.display = "flex"; 
                            document.body.style.overflow = 'hidden';
                        });
                }
            }
            function loadVideoById(videoId) {
                player.loadVideoById({'videoId': videoId, 'suggestedQuality': 'large'});
            }
            function stopVideo() {
                player.stopVideo();
            }
            function getIdFromUrl(videoUrl){
                let id = []; 
                videoUrl = videoUrl.split('');
                for(let i = videoUrl.length - 1; i > -1; i--){
                    if(videoUrl[i] != "\/"){
                        id.unshift(videoUrl[i]);                        
                    }else{
                        break;
                    }                    
                }
                
                return id.join('');
            }
            

        window.addEventListener('DOMContentLoaded', function(){
            'use strict';
            
            let overlay = document.querySelector('.overlay'),
                playModule = [...document.querySelectorAll('.play')],
                close = overlay.querySelector('.close'),
                videoItem = [...document.querySelectorAll('.module__video-item')];

            playModule.forEach((element,index)=>{
                if(index % 2 == 0){
                    element.addEventListener('click',()=>{
                        overlay.style.display = "flex"; 
                        document.body.style.overflow = 'hidden';
                        playModule[index+1].id = "playNext";
                        playModule[index].id = "playNow";
                        videoItem[index+1].id = "playNextWrapper";
                        loadVideoById(getIdFromUrl(playModule[index].dataset.url));
                    });
                }  
            });
            close.addEventListener('click',()=>{
                stopVideo();
            });         
            
        });  