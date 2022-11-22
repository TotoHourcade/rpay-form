let formData = { typeForm: '', hasErrors: false };

// Create a new children when a dropdown value has children.
// Also, delete the last children added if needs
function selectValueDropdown(event) {
    const valueSelected = event.target.value;
    const idElementSelected = event.target.getAttribute('id');
    const currentItem = PersonalInformationForm.find(element => element.id === idElementSelected);

    if (!currentItem) return;
    const optionSelected = currentItem.options.find(element => element.value == valueSelected);
    console.log(document.getElementById(currentItem.id + '-form').childNodes.length);
    if (document.getElementById(currentItem.id + '-form').childNodes.length > 7) {
        const numberItemsShouldRemove = document.getElementById(currentItem.id + '-form').childNodes.length - 7;
        Array(numberItemsShouldRemove).fill().forEach(() => {
            document.getElementById(currentItem.id + '-form').removeChild(document.getElementById(currentItem.id + '-form').lastChild);
        })
    }

    if (optionSelected.hasChildren) {
        if (optionSelected.hasChildren.typeInput === 'textField') {
            document.getElementById(`${idElementSelected}-form`).innerHTML += TextField({ ...optionSelected.hasChildren, children: true });
        }
        if (optionSelected.hasChildren.typeInput === 'Dropdown') {
            document.getElementById(`${idElementSelected}-form`).innerHTML += DropDownField({ ...optionSelected.hasChildren, children: true });
        }
        if (optionSelected.hasChildren.typeInput === 'FileUpload') {
            document.getElementById(`${idElementSelected}-form`).innerHTML += UploadFileField({ ...optionSelected.hasChildren, children: true });
        }
        document.getElementById(`${idElementSelected}`).value = valueSelected;
    }
}

const Button = ({ label, buttonLabel, id, onPress, icon }) => {
    return (
        `
            <div class="col-span-12 sm:col-span-12 id="${id}-form">
                <label class="block text-sm font-medium text-gray-700">${label}</label>
            </div>
          
            <div class="col-span-3">
                <button class="text-center inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-full shadow-s rounded-full" onclick="${onPress}">${buttonLabel}${icon}</button>
            </div>
        `
    )
}

const DropDownField = ({ label, id, errorId, options, children = false, titleOfSection }) => {
    return (
        ` ${titleOfSection ? `<div class='col-span-12 mt-5'><h2 class='mt-5'>${titleOfSection}</h2></div>` : ''}
        <div class="col-span-12 sm:col-span-12 ${children ? 'pt-2' : ''}" id="${id}-form">
        <label for="first-name" class="block text-sm font-medium text-gray-700">${label}</label>
        <select name="" id="${id}"
        onchange="selectValueDropdown(event)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            ${options.map((option) => `<option value="${option.value}">${option.label || option.value}</option>`)}
        </select>
        <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
    </div>`
    )
}

const UploadFileField = ({ label, errorId, id, children = false }) => {
    return (`
    <div class="col-span-12 sm:col-span-12 ${children ? 'pt-2' : ''}"">
                                <label class="block text-sm font-medium text-gray-700">${label}</label>
                                <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                                    onclick="openDynamicInputUpload(${id})">
                                    <div class="space-y-1 text-center">
                                    <div class="flex justify-center" id="svg-container-${id}">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer mx-auto rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span id="text-file-${id}">Upload file</span>
                                                <input id="${id}" onchange="fileInputChangeValue(${id})"
                                                    name="file-upload" type="file" class="sr-only" >
                                            </label>
                                        </div>
                                        <p class="text-xs text-gray-500">PDF, PNG, JPG ( Max 500kb )</p>
                                        <p class="text-xs " id="text-label-${id}"></p>
                                    </div>
                                </div>
                                <p class="text-xs mt-1 error-input-text" id="${errorId}"></p>
                            </div>
    `);
}
const DataPickerField = ({ label, placeholder, errorId, id }) => {
    return (
        `
        <div class="col-span-12 sm:col-span-12">
        <label class="block text-sm font-medium text-gray-700 mb-1">${label}</label>
        <div class="relative ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input datepicker onkeypress='dateFormatter(event)' type="text" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 sm:text-sm rounded-lg  block w-full pl-10 dark:placeholder-gray-400" placeholder="${placeholder}" id="${id}">
      </div>
      <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
      </div>
      `
    )
}

const TextField = ({ id, label, placeholder, errorId, maxLength, minLength, type = "text", isRequired, col = 12, children = false, titleOfSection }) => {
    if (children) console.log("childnreeeen")
    return (
        `
        ${titleOfSection ? `<div class='col-span-12 mt-5'><h2>${titleOfSection}</h2></div>` : ''}
        <div class="col-span-12 sm:col-span-${col} ${children ? 'pt-2' : ''}" id="${id}-form">
        <label for="${id}" class="block text-sm font-medium text-gray-700">${label}</label>
        <input type="${type}" maxlength=${maxLength} minlength=${minLength} name="${id}" id="${id}" 
        placeholder="${placeholder}" autocomplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            ${isRequired ? '' : `<span class="text-xs text-dark mt-1 " id="${id}-info" style='color:gray'>* Opcional</span>`}
            <p class="text-xs text-dark mt-1 error-input-text" id="${errorId}"></p>
        
    </div>`
    )
}

// Auto format the date input field, and validate correct date.
function dateFormatter(event) {
    //Validate the month ( Max 12 - Min 0 )
    if (event.target.value.length === 0 && event.key > 1) {
        event.preventDefault()
    }
    if (event.target.value.length === 1) {
        if (event.target.value == 1) {
            if (event.key > 2) {
                event.preventDefault()
            }
        }
    }

    // Validate the day ( Max 31 - min 0 )
    if (event.target.value.length === 3 && event.key > 3) {
        event.preventDefault()
    }
    if (event.target.value.length === 4) {
        if (event.target.value.charAt(event.target.value.length - 1) == 3) {
            if (event.key > 1) {
                event.preventDefault()
            }
        }
    }
    if (event.target.value.length === 1) {
        if (event.target.value == 1) {
            if (event.key > 2) {
                event.preventDefault()
            }
        }
    }

    //Validate the year is less than 2022
    if (event.target.value.length === 6 && event.key > 2) {
        event.preventDefault()
    }
    if (event.target.value.length === 7) {
        if (event.target.value.charAt(event.target.value.length - 1) == 2) {
            if (event.key > 0) {
                event.preventDefault()
            }
        }
    }

    if (event.srcElement.id == 'date_birthday') {

        if (event.target.value.length === 8) {
            if (event.target.value.charAt(event.target.value.length - 2) == 2) {
                if (event.key > 2) {
                    event.preventDefault()
                }
            }
        }
        if (event.target.value.length === 9) {
            if (event.target.value.charAt(event.target.value.length - 3) == 2) {
                if (event.key > 2) {
                    event.preventDefault()
                }
            }
        }
    }

    // Avoid more characters
    if (event.target.value.length === 10) event.preventDefault()

    // Validate if the input is a string
    if (isNaN(event.key)) {
        event.preventDefault();
    }

    // Add the format of the date
    if (event.target.value.length === 2 || event.target.value.length === 5) {
        event.target.value += '/'
    }
}

function openDynamicInputUpload(id) {
    id.click()
}

const createDynamicForm = (FormItems) => {
    const dynamicForm = FormItems.map((elementForm) => {
        if (elementForm.typeInput === 'textField') return TextField(elementForm)
        if (elementForm.typeInput === 'DatePicker') return DataPickerField(elementForm)
        if (elementForm.typeInput === 'Dropdown') return DropDownField(elementForm)
        if (elementForm.typeInput === 'FileUpload') return UploadFileField(elementForm)
        if (elementForm.typeInput === 'Button') return Button(elementForm)
    })

    return dynamicForm
}

// Core of the app
const startForm = (typeForm) => {
    const FormItems = (typeForm === 'PersonalForm') ? PersonalInformationForm : BusinessInformationForm;
    formData.typeForm = typeForm;
    let dynamicForm = createDynamicForm(FormItems)

    document.getElementById('form-root').innerHTML =
        `<form onsubmit="event.preventDefault()">
        <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6 grid grid-cols-12 gap-2" id="dinamyc_form"> ${dynamicForm.toString().replaceAll(',', ' ')}</div>
            ${typeForm === 'BusinessForm' ? '<div id="shareholders" class="col-span-12"></div>' : ''}
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit" onclick="validateForm()"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Enviar
                </button>
            </div>
        </div>
    </form>`

    //Esto para que es?
    FormItems.forEach((elementForm) => {
        if (elementForm === 'FileUpload') {
            document.getElementById(`box-${elementForm.id}`).onclick = () => {
                document.getElementById(elementForm.id).click();
            }
        }
    });
};

function fileInputChangeValue(input) {
    const fi = input;
    if (fi.files.length > 0) {
        for (let i = 0; i <= fi.files.length - 1; i++) {
            const fsize = fi.files.item(i).size;
            const fileSize = Math.round((fsize / 1024));
            if (fileSize > 500) {
                alert('El archivo no debe pesar mas de 500kb');
            } else {
                document.getElementById(`text-label-${input.id}`).innerHTML = `${fi.files[0].name}`;
                document.getElementById(`text-file-${input.id}`).innerHTML = 'Change file'
                document.getElementById(`svg-container-${input.id}`).innerHTML = '<img width="100" alt="Eo circle green checkmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">'
            }
        }
    }
}

// *** Validations *** //
function validateDate(inputField, elementForm) {
    const fullDate = inputField.value.split('/')
    if (fullDate.length === 3) {
        const month = parseInt(fullDate[0]);
        const day = parseInt(fullDate[1]);
        const year = parseInt(fullDate[2]);
        if (month > 12 || month < 1) {
            document.getElementById(elementForm.errorId).innerHTML = 'Enter a valid date with the correct format (MM/DD/YYYY)';
            formData.hasErrors = true;

        }
        if (day > 31 || day < 1) {
            document.getElementById(elementForm.errorId).innerHTML = 'Enter a valid date with the correct format (MM/DD/YYYY)';
            formData.hasErrors = true;

        }
        if (year > new Date().getFullYear()) {
            document.getElementById(elementForm.errorId).innerHTML = 'Enter a valid date with the correct format (MM/DD/YYYY)';
            formData.hasErrors = true;

        }
    } else {
        document.getElementById(elementForm.errorId).innerHTML = 'Enter a valid date with the correct format (MM/DD/YYYY)';
        formData.hasErrors = true;
    }
}

function validateDropdown(inputField, elementForm) {
    if (inputField.value == 0 && elementForm.isRequired) {
        document.getElementById(elementForm.errorId).innerHTML = 'Select an option'
        formData.hasErrors = true;
        return;
    } else {
        document.getElementById(elementForm.errorId).innerHTML = ''
    }
    if (elementForm.options.length > 0) {
        elementForm.options.forEach((option) => {
            if (option.hasChildren && inputField.value == option.hasChildren.parentOf) {
                const childrenNode = document.getElementById(option.hasChildren.id);
                const typeChildren = option.hasChildren.typeInput;
                if (childrenNode.type == 'text' || childrenNode.type == 'number') {
                    validateTextField(childrenNode, option.hasChildren);
                }
                if (typeChildren == 'Dropdown') validateDropdown(childrenNode, option.hasChildren);
            }
        })
    }
}

function validateTextField(inputField, elementForm) {
    if (inputField.value === '' && elementForm.isRequired) {
        if (elementForm.errorMessage) {
            document.getElementById(elementForm.errorId).innerHTML = elementForm.errorMessage
        } else {
            document.getElementById(elementForm.errorId).innerHTML = 'Fill the field'
        }
        formData.hasErrors = true;
        return;
    } else {
        document.getElementById(elementForm.errorId).innerHTML = ''
    }
    if (!elementForm.validationRegex) return;
    if (elementForm.validationRegex.length > 0 && inputField.value != '') {
        elementForm.validationRegex.forEach((validationElement) => {
            if (!validationElement.validation.test(inputField.value)) {
                formData.hasErrors = true;
                document.getElementById(elementForm.errorId).innerText = validationElement.errorText
            }
        });
    }
}

function validateForm() {
    formData.hasErrors = false;
    let FormItems = (formData.typeForm === 'PersonalForm') ? PersonalInformationForm : BusinessInformationForm;
    if (formData.typeForm == 'BusinessForm') {
        FormItems = FormItems.concat(shareholdersList.flat());
    }

    console.log(FormItems)

    FormItems.forEach(elementForm => {
        if (elementForm.typeInput != 'Button') {
            const inputField = document.getElementById(elementForm.id);
            document.getElementById(elementForm.errorId).innerText = ''

            if (elementForm.typeInput === 'DatePicker') validateDate(inputField, elementForm);
            if (elementForm.typeInput === 'Dropdown') validateDropdown(inputField, elementForm);
            if (inputField.type === 'text' || inputField.type === 'number') validateTextField(inputField, elementForm)
            if (inputField.type === 'file') {
                if (inputField.files.length === 0) document.getElementById(elementForm.errorId).innerText = 'Select a file PDF, PNG or JPG'
            }
        }
    });

    if (formData.hasErrors) return;

    let dataForm = {};
    FormItems.map(elementForm => {
        console.log(dataForm)
        const inputField = document.getElementById(elementForm.id);

        dataForm = { ...dataForm, [elementForm.id]: inputField.value }
        if (elementForm.typeInput === 'Dropdown') {
            if (elementForm.options.length > 0) {
                elementForm.options.forEach((option) => {
                    if (option.hasChildren && inputField.value == option.hasChildren.parentOf) {
                        const childrenNode = document.getElementById(option.hasChildren.id);
                        dataForm = { ...dataForm, [option.hasChildren.id]: childrenNode.value }
                    }
                })
            }
        }
        if (elementForm.typeInput === 'textField')
            if (elementForm.typeInput === 'DatePicker') return DataPickerField(elementForm)
        if (elementForm.typeInput === 'Dropdown') return DropDownField(elementForm)
        if (elementForm.typeInput === 'FileUpload') return UploadFileField(elementForm)
    })
    // This is the data to send to the server
    console.log(dataForm)
}

let shareholdersList = [];

const getShareholdersForm = (shareholder) => {

    //We do it this way so the original array does not get passed by reference
    let ShareholdersForm = JSON.parse(JSON.stringify(PersonalInformationForm));

    return ShareholdersForm.concat({
        id: 'company_role',
        label: 'Company Role',
        errorId: 'company_role_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 2,
        isRequired: true,
    },
        {
            id: 'shareholder_email',
            label: 'Shareholder Email',
            errorId: 'shareholder_email_error',
            placeholder: '',
            typeInput: 'textField',
            validationRegex: [{
                validation: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                errorText: 'Please enter a valid email'
            }],
            maxLength: 200,
            minLength: 2,
            isRequired: true,
        }).map((element) => {
            element.shareholderIndex = shareholder
            element.id = element.id + `_shareholder_${shareholder}`
            element.errorId = element.errorId + `_shareholder_${shareholder}`
            if (element.typeInput === 'Dropdown') {
                element.options.map((option) => {
                    if (option.hasChildren) {
                        option.hasChildren.id = option.hasChildren.id + `_shareholder_${shareholder}`
                        option.hasChildren.errorId = option.hasChildren.errorId + `_shareholder_${shareholder}`
                    }
                })
            }
            return element
        })
}

const addShareholder = () => {
    if (shareholdersList.length == 4) return
    console.log(shareholdersList)
    const shareholders = shareholdersList.length + 1;
    const ShareholdersForm = getShareholdersForm(shareholders);
    shareholdersList = shareholdersList.concat([ShareholdersForm])

    let dynamicForm = createDynamicForm(ShareholdersForm)

    let div = document.createElement('div')
    div.innerHTML = `
        <div class="overflow-hidden shadow sm:rounded-md mb-5" id="shareholder${shareholders}_div">
            <div class="bg-white px-4 py-5 sm:p-6 grid grid-cols-12 gap-2" id="shareholder${shareholders}_form">
            <div class="col-span-12 inline-flex">
                <h2 class="text-2xl mr-4">Shareholder ${shareholders}</h2>
                <button onclick="removeShareholder(event)" data-shareholder=${shareholders} id="button_shareholder_${shareholders}" class="text-center inline-flex items-center px-2 py-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-full shadow-s rounded-full text-white" >
                  Quitar
                </button>
            </div>
                <hr class="col-span-12">
                ${dynamicForm.toString().replaceAll(',', ' ').replaceAll('account owner', 'shareholder')}
            </div>
        </div>`

    document.getElementById('shareholders').appendChild(div)

}

const removeShareholder = (event) => { // This will need refactoring
    const indiceToRemove = Number(event.target.getAttribute('data-shareholder'));

    shareholdersList = shareholdersList.map((shareholder) => {
        if (shareholder[0].shareholderIndex === indiceToRemove) {
            return;
        } else {
            return shareholder
        }
    });
    shareholdersList = shareholdersList.filter(e => e)

    // This loop is for the form container
    shareholdersList = shareholdersList.map((shareholder, index) => {
        const indexShareHolder = index + 1;
        const oldIndex = shareholder[0].shareholderIndex;


        // This loop is for the items inside of the form
        shareholder = shareholder.map((element) => {
            // console.log(indexShareHolder)
            const newID = element.id.substring(0, element.id.length - 1) + indexShareHolder;
            const newErrorID = element.errorId.substring(0, element.errorId.length - 1) + indexShareHolder;
            //Actualizar cada campo con su id en DOM
            document.getElementById(element.id).id = newID;
            document.getElementById(element.errorId).id = newErrorID;


            return {
                ...element,
                id: newID,
                errorId: newErrorID,
                shareholderIndex: indexShareHolder
            }
        })

        // New index
        document.getElementById(`button_shareholder_${oldIndex}`).setAttribute('data-shareholder', indexShareHolder);
        document.getElementById(`button_shareholder_${oldIndex}`).id = `button_shareholder_${indexShareHolder}`
        document.getElementById(`shareholder${oldIndex}_div`).id = `shareholder${indexShareHolder}_div`
        document.getElementById(`shareholder${oldIndex}_form`).querySelector('h2').innerHTML = `Shareholder ${indexShareHolder}`;
        document.getElementById(`shareholder${oldIndex}_form`).id = `shareholder${indexShareHolder}_form`
        return shareholder

    });
    document.getElementById(`shareholder${indiceToRemove}_div`).remove()
}

