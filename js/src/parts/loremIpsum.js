function loremIpsum(){
    let show = [...document.querySelectorAll('.module__info-show')];
        
        show.forEach((element)=>{
            let textBox = document.createElement('div');

                textBox.textContent = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    
            let insertedNode = element.parentNode.insertBefore(textBox, element.nextSibling);

            insertedNode.classList.add('loremIpsum');
            insertedNode.style.display = 'none';

            element.addEventListener('click', ()=>{
                if( insertedNode.style.display == 'none' ){
                    insertedNode.style.display = 'block';
                    insertedNode.classList.add('fadeIn');
                }else{
                    insertedNode.style.display = 'none';
                }
            });
        });

        

}

module.exports = loremIpsum;