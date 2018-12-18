function difference(){

    let difference = document.querySelector('.difference'),
        cards = [...difference.querySelectorAll('.officer__card-item')],
        officerOld = difference.querySelector('.officerold'),
        officerOldTitle = officerOld.firstElementChild,
        officerOldCards = [],
        officerNew = difference.querySelector('.officernew'),
        officerNewTitle = officerNew.firstElementChild,
        officerNewCards = [];

    officerOld.innerHTML = '';
    officerNew.innerHTML = '';
    officerOld.appendChild(officerOldTitle);
    officerNew.appendChild(officerNewTitle);
    cards.forEach(function(element, index){
        officerOld.appendChild(element.cloneNode(true));
        if(index != cards.length-1){
            officerOld.lastChild.style.display = "none";            
        }
        officerOldCards.push(officerOld.lastChild);
        officerNew.appendChild(element.cloneNode(true));
        if(index != cards.length-1){
            officerNew.lastChild.style.display = "none";            
        }
        officerNewCards.push(officerNew.lastChild);
    });

    function openTabs(tabList) {
        for(let i = 0; i < tabList.length - 1; i++){
            if(tabList[i].style.display == "none" && i != tabList.length - 2){
                tabList[i].style.display = "flex";
                tabList[i].classList.add('fadeIn');
                break;
            } else if(i == tabList.length - 2){
                tabList[i].style.display = "flex";
                tabList[i].classList.add('fadeIn');
                tabList[i+1].classList.add('fadeOut');
            }                
        }
    }

    officerOld.addEventListener('click', function(event){
        if(event.target.parentNode.nodeName != 'svg'){
             openTabs(officerOldCards);
        }
    });

    officerNew.addEventListener('click', function(event){
        if(event.target.parentNode.nodeName != 'svg'){
            openTabs(officerNewCards);
        }
    });

}

module.exports = difference;