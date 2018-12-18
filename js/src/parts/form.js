function forms(){
let message = {
        loading: {
            img: 'img/loading.png',
            txt: 'Загрузка...'
        },
        success: {
            img: 'img/success.png',
            txt: 'Спасибо! скоро мы с вами свяжемся!'
        }, 
        failure: {
            img: 'img/bug.png',
            txt: 'Что-то пошло не так...'
        } 
    },

    pageJoin = document.querySelector('.join'),
    formJoin = pageJoin.querySelector('.form'),
    formJoinEmail = formJoin.querySelector('input[type=email]'),
    input = [...document.getElementsByTagName('input')],

    pageSchedule = document.querySelector('.schedule'),
    formSchedule = pageSchedule.querySelector('.form'),
    formScheduleEmail = pageSchedule.querySelector('input[type=email]'),
    formScheduleWhen = pageSchedule.querySelector('input[type=datetime]'),
    statusMessage = document.createElement('div'),        
    statusImg = statusMessage.appendChild(document.createElement('div').appendChild(document.createElement('img'))),
    statusTxt = statusMessage.appendChild(document.createElement('div')),
    overlay = document.querySelector('.overlay'),
    frame = document.querySelector('#frame'),
    videoBlock = overlay.querySelector('.video');

        
    statusMessage.classList.add('status');
    statusTxt.classList.add('status-txt');
    statusImg.classList.add('status-img');

    //console.log(formJoinEmail);

    function clearInput() {
        input.forEach(function(element,index){
            input[index].value = '';
        });
    }

    function formRequest(event,f){
        event.preventDefault();
        frame.style.display = "none";
        videoBlock.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(f);

        let obj = {};
        formData.forEach(function(element,index){
            obj[index] = element;
        });
        let json = JSON.stringify(obj);

        request.send(json);        

        function postData(){
            return new Promise(function(resolve,reject){
                    if(request.readyState < 4){
                        resolve();
                    } else if( request.readyState === 4 && request.status == 200){
                        resolve();
                    } else {
                        reject();
                    }
            });
      
        }

        request.addEventListener('readystatechange', function(){
            postData()
                .then(() => {
                    statusImg.src = message.loading.img;
                    statusTxt.innerHTML = message.loading.txt;
                    overlay.style.display = "flex";
                })
                .then(() => {
                    statusImg.src = message.success.img;
                    statusTxt.innerHTML = message.success.txt;
                    overlay.style.display = "flex";
                })
                .catch(() => {
                    statusImg.src = message.failure.img;
                    statusTxt.innerHTML = message.failure.txt;
                    overlay.style.display = "flex";
                })
                .then(clearInput); 
        });
    }

    function fieldInput(field,regEx){
        let val = field.value.toString().split('');
        val.forEach(function(el,ind){
            if(el.match(regEx)){
                val.splice(ind, 1);
            }                 
        });
        field.value = val.join('');
    }

    formJoin.addEventListener('submit', (event) => {formRequest(event, formJoin); });
    formSchedule.addEventListener('submit', (event) => {formRequest(event, formSchedule); }); 

    formJoinEmail.addEventListener('input', () => {fieldInput(formJoinEmail,/[а-яА-Я]/)});
    formScheduleEmail.addEventListener('input', () => {fieldInput(formScheduleEmail,/[а-яА-Я]/)});

    formScheduleWhen.addEventListener('input', () => {fieldInput(formScheduleWhen,/[^0-9\.\/]/)}); 
}

module.exports = forms;

