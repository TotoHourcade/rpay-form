let formData = { typeForm: '', hasErrors: false };

const DropDownField = ({label, id, errorId, options}) => {
    return (
        `<div class="col-span-6 sm:col-span-3 mb-5">
        <label for="first-name" class="block text-sm font-medium text-gray-700">${label}</label>
        <select name="" id="${id}"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            ${options.map((option) => `<option value="${option}">${option}</option>`)}
        </select>
        <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
    </div>`
    )
}

const UploadFileField = ({ label, errorId, id}) => {
    return (`
    <div class="mb-5">
                                <label class="block text-sm font-medium text-gray-700">${label}</label>
                                <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                    onclick="openDynamicInputUpload(${id})">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer mx-auto rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span id="text-file">Subir imagen</span>
                                                <input id="${id}" onchange="fileInputChangeValue(${id})"
                                                    name="file-upload" type="file" class="sr-only" >
                                            </label>
                                        </div>
                                        <p class="text-xs text-gray-500">PNG, JPG, GIF ( Min 400kb - Max 2mb )</p>
                                        <p class="text-xs " id="text-label"></p>

                                    </div>
                                </div>
                                <p class="text-xs mt-1 error-input-text" id="${errorId}"></p>
                            </div>
    `); 
}
const DataPickerField = ({ label, placeholder, errorId, id }) => {
    return (
        `
        <label class="block text-sm font-medium text-gray-700 mb-1">${label}</label>
        <div class="relative mb-5">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input datepicker type="text" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 sm:text-sm rounded-lg  block w-full pl-10 p-2.5  dark:placeholder-gray-400" placeholder="${placeholder}" id="${id}">
      </div>
      <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
      `
    )
}

const TextField = ({ id, label, placeholder, errorId, maxLength, minLength, type = "text"}) => {
    return (
        `<div class="col-span-6 sm:col-span-3 mb-5">
        <label for="${id}" class="block text-sm font-medium text-gray-700">${label}</label>
        <input type="${type}" maxlength=${maxLength} minlength=${minLength} name="${id}" id="${id}" 
        placeholder="${placeholder}" autocomplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
    </div>`
    )
}
function openDynamicInputUpload(id) {
    id.click()
}

const createDynamicForm = (typeForm) => {
        const FormItems = (typeForm === 'PersonalForm') ? PersonalInformationForm : BusinessInformationForm;
        formData.typeForm = typeForm;
        const dynamicForm = FormItems.map((elementForm) => {
            if (elementForm.typeInput === 'textField') return TextField(elementForm)
            if (elementForm.typeInput === 'DatePicker') return DataPickerField(elementForm)
            if(elementForm.typeInput === 'Dropdown') return DropDownField(elementForm)
            if(elementForm.typeInput === 'FileUpload') return UploadFileField(elementForm)
        })
        document.getElementById('form-root').innerHTML =
        `<form onsubmit="event.preventDefault()">
        <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6" id="dinamyc_form"> ${dynamicForm.toString().replaceAll(',', ' ')}</div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit" onclick="validateForm()"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Enviar
                </button>
            </div>
        </div>
    </form>` 

    FormItems.forEach((elementForm) => {
            if(elementForm === 'FileUpload') {
                document.getElementById(`box-${elementForm.id}`).onclick = () => {
                    document.getElementById(elementForm.id).click();
                }
            }
        });
        
};




function validateForm() {
    if (formData.typeForm === 'PersonalForm') {
        PersonalInformationForm.forEach(elementForm => {
            const inputField = document.getElementById(elementForm.id);
            document.getElementById(elementForm.errorId).innerText = ''
            if (inputField.type === 'text' || inputField.type === 'number') {
                if(!elementForm.validationRegex) return;
                if (elementForm.validationRegex.length > 0) {
                    elementForm.validationRegex.forEach((validationElement) => {
                        if (!validationElement.validation.test(inputField.value)) {
                            document.getElementById(elementForm.errorId).innerText = validationElement.errorText
                        }
                    });
                }
            }
            if(inputField.type === 'file'){
                if(inputField.files.length === 0) document.getElementById(elementForm.errorId).innerText = 'Selecciona una foto PNG o JPG'
            }
        });
    }
}


let fileUploaded;
function fileInputChangeValue(id) {
    const fi = id;
    if (fi.files.length > 0) {
        for (let i = 0; i <= fi.files.length - 1; i++) {
            const fsize = fi.files.item(i).size;
            const fileSize = Math.round((fsize / 1024));
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