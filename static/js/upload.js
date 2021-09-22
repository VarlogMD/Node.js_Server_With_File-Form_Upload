function uploadFile(event) {
    console.log('load file start');
    let target = event.target || event.srcElement || event.currentTarget;
    let file = target.files[0];
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploads/' + file.name, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.onreadystatechange = function () {
        event = null;
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callbackFunction(this.responseText);
            } else {
                console.log('error');
            }
        }
    }
    xhr.send(file);
    event.target.value = "";
}

function callbackFunction(data) {
    console.log(data);
    document.querySelector('.icon-image').src = 'images/'+data;
    document.querySelector('input[name="imagename"]').value = data;
}


document.querySelector('#upload').addEventListener('change', uploadFile);