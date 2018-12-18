function download(){
    let d = [...document.querySelectorAll('.download')];
    
    d.forEach((element,index)=>{
        let downloadLink = document.createElement('a');
        downloadLink.innerHTML = element.innerHTML;
        downloadLink.classList.add('download');
        downloadLink.href = 'downloads/download' + (index + 1) + '-min.pdf';
        downloadLink.target = '_blank';
        element.classList.remove('download');
        element.innerHTML = '';
        element.appendChild(downloadLink);
    });

    

}

module.exports = download;