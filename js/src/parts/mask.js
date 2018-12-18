function mask() {
    let phone = document.getElementById('phone');

    phone.addEventListener('click', function(){
        if(!phone.value){
            phone.value = '+1(';
        }
    });

    phone.addEventListener('input', function(){
        let val = (phone.value.length < 4) ? '+1('.split('') : phone.value.split(''),
            map = "+1(___)___-_____".split('');
            if( val.length < map.length ){
                if( val[val.length-1].match(/[0-9]/) ){
                    //map[val.length-1] == '_'
                    if(map[val.length - 1] != '_'){
                        val.splice(val.length - 1, 0 ,map[val.length - 1]);
                    }
                    phone.value = val.join('');
                } else {                    
                    if (val.length > 4){
                        val.pop();
                    }                    
                    phone.value = val.join('');
                }
            } else {
                val.pop();
                phone.value = val.join('');
            }
    });

    phone.addEventListener('focusout', function(){
        if ( phone.value == "+1(" ){
            phone.value = '';
        }
    });
}  
  module.exports = mask;
