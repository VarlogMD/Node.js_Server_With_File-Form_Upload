function uploadFile(event) {
    console.log('inside upload file')
    let target = event.target || event.srcElement || event.currentTarget;
    let file = target.files[0];
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploads/' + file.name, true);
    xhr.setRequestHeader('Content-Type', 'aplication/octet-stream');
    xhr.onreadystatechange = function () {
        event = null;
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('sucsess');
            } else {
                console.log('error');
            }
        }
    }
    xhr.send(file);
    event.target.value = "";
}


document.querySelector('#upload').addEventListener('change', uploadFile);