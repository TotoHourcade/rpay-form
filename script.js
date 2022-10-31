
let fileUploaded;
function fileInputChangeValue(e) {
    const fi = document.getElementById('fileUploaded');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
            const fsize = fi.files.item(i).size;
            const fileSize = Math.round((fsize / 1024));
            console.log(fi.files[0])
            if (fileSize < 400) {
                alert('El archivo debe pesar mas de 400kb');
            } else if (fileSize > 2000) {
                alert('El archivo supera el peso maximo');
            } else {
                fileUploaded = fi.files[0];
                document.getElementById('text-label').innerHTML = `${fileUploaded.name}`;
                document.getElementById('text-file').innerHTML = 'Cambiar imagen'
            }
        }
    }

}

document.getElementById('box-focus').onclick = () => {
    document.getElementById('fileUploaded').click();
}
function handleSubmit() {
    const fullNameValue = document.getElementById('full_name').value;
    const dateValue = document.getElementById('date').value;

    const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullNameValue);
    const isValidDate = new Date(dateValue) != 'Invalid Date';
    console.log(new Date(dateValue))
    const isValidFile = !!fileUploaded


    // Input errors
    const nameError = document.getElementById('name-error');
    const dateError = document.getElementById('date-error');
    const fileError = document.getElementById('input-error');

    nameError.innerText = "";
    dateError.innerText = "";
    fileError.innerText = "";

    if (!isValidName) return document.getElementById('name-error').innerHTML = 'Incluye tu nombre completo, tal como aparece en tu identificación';
    if (!isValidDate) return document.getElementById('date-error').innerHTML = 'Incluye una fecha válida';
    if (!isValidFile) return document.getElementById('input-error').innerHTML = 'Incluye una foto válida';

    fetch('', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}