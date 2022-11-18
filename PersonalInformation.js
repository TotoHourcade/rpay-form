const PersonalInformationForm = [
    {
        id: 'first_name',
        label: 'Please enter the first name of the account owner',
        errorId: 'first_name_error',
        placeholder: 'First name',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/,
                errorText: 'Enter a valid name'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Enter your name as it appear in your ID'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
        errorMessage: "Enter your full 'first name'",
        col: 4
    },
    {
        id: 'middle_name',
        label: 'Please enter the middle name of the account owner',
        errorId: 'middle_name_error',
        placeholder: 'Middle name',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 5,
        isRequired: false,
        errorMessage: "Enter your full 'middle name'",
        col: 4
    },
    {
        id: 'last_name',
        label: 'Please enter the Last name of the account owner',
        errorId: 'last_name_error',
        placeholder: 'Last name',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/,
                errorText: 'Enter a valid name'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Enter your last name as it appear in your ID'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
        errorMessage: "Enter your full 'last name'",
        col: 4
    },
    {
        id: 'date_birthday',
        label: 'Please enter the account owner date of birth. In the format Month, Day, Year.',
        errorId: 'date_birthday_error',
        placeholder: 'mm/dd/yyyy',
        typeInput: 'DatePicker',
        isRequired: true,
    },
    {
        id: 'tax_country',
        label: 'Please enter the account owner Tax Country',
        options: [
            {hasChildren: false, label:'Select country', value: 0},
            {
                hasChildren:  {
                    id: 'tax_id',
                    label: 'Please enter the account owner Tax ID # without any dashes',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    type: 'number',
                    placeholder: 'Enter social security number here',
                    maxLength: 9, 
                    minLength: 9,
                    isRequired: true,
                    parentOf: 'United States',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value:'United States',
            },
            {
                hasChildren:  {
                    id: 'tax_id',
                    label: 'Please enter the account owner Tax ID # without any dashes',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    maxLength: 12, 
                    minLength: 12,
                    placeholder: 'Enter RIF here',
                    isRequired: true,
                    parentOf: 'Venezuela',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value:'Venezuela',
            },
            {
                hasChildren:  {
                    id: 'tax_id',
                    label: 'Please enter the account owner Tax ID # without any dashes',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    maxLength: 9,
                    minLength: 8,
                    placeholder: 'Enter RUT here',
                    parentOf: 'Colombia',
                    isRequired: true,
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value:'Colombia',
            },
            {
                hasChildren:  {
                    id: 'tax_id',
                    label: 'Please enter the account owner Tax ID # without any dashes',
                    errorId: 'tax_id_error',
                    placeholder: 'Enter CUIT/CUIL here',
                    typeInput: 'textField',
                    type:'number',
                    maxLength: 9, //SSN has 9 digits
                    minLength: 8,
                    isRequired: true,
                    parentOf:'Argentina',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value:'Argentina',
            },
            {
                hasChildren:  {
                    id: 'tax_id',
                    label: 'Please enter the account owner Tax ID # without any dashes',
                    errorId: 'tax_id_error',
                    placeholder: 'Enter RUC here',
                    typeInput: 'textField',
                    type:'number',
                    maxLength: 11,
                    minLength: 7,
                    isRequired: true,
                    parentOf:'Panama',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value:'Panama',
            },
        ],
        errorId: 'tax_country_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'phone_number',
        label: 'Please enter the account owners number including country code',
        errorId: 'phone_number_error',
        placeholder: 'Phone number',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^[0-9]*$/,
                errorText: 'Please remove special characters +()- etc'
            },
        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'country_selection',
        hasChildren: 'state_related_selection',
        label: 'Country',
        options: [
            {hasChildren: false, label:'Select country', value: 0},
            {hasChildren: {
                id: 'state_related_selection',
                label: 'State',
                options: [
                    {hasChildren:false, label: 'Select State', value: 0},
                    {hasChildren:false, label: 'Alabama', value: 'AL'},
                    {hasChildren:false, label: 'Alaska', value: 'AK'},
                    {hasChildren:false, label: 'Arizona', value: 'AZ'},
                    {hasChildren:false, label: 'Arkansas', value: 'AR'},
                    {hasChildren:false, label: 'California', value: 'CA'},
                    {hasChildren:false, label: 'Colorado', value: 'CO'},
                    {hasChildren:false, label: 'Connectiacut', value: 'CT'},
                    {hasChildren:false, label: 'Delaware', value: 'DE'},
                    {hasChildren:false, label: 'Florida', value: 'FL'},
                    {hasChildren:false, label: 'Georgia', value: 'GA'},
                    {hasChildren:false, label: 'Hawaii', value: 'HI'},
                    {hasChildren:false, label: 'Idaho', value: 'ID'},
                    {hasChildren:false, label: 'Illinois', value: 'IL'},
                    {hasChildren:false, label: 'Indiana', value: 'IN'},
                    {hasChildren:false, label: 'Iowa', value: 'IA'},
                    {hasChildren:false, label: 'Kansas', value: 'KS'},
                    {hasChildren:false, label: 'Kentuky', value: 'KY'},
                    {hasChildren:false, label: 'Louisiana', value: 'LA'},
                    {hasChildren:false, label: 'Maine', value: 'ME'},
                    {hasChildren:false, label: 'Maryland', value: 'MD'},
                    {hasChildren:false, label: 'Massachusetts', value: 'MA'},
                    {hasChildren:false, label: 'Michigan', value: 'MI'},
                    {hasChildren:false, label: 'Minnesota', value: 'MN'},
                    {hasChildren:false, label: 'Mississippi', value: 'MS'},
                    {hasChildren:false, label: 'Missouri', value: 'MO'},
                    {hasChildren:false, label: 'Montana', value: 'MT'},
                    {hasChildren:false, label: 'Nebraska', value: 'NE'},
                    {hasChildren:false, label: 'Nevada', value: 'NV'},
                    {hasChildren:false, label: 'New Hampshire', value: 'NH'},
                    {hasChildren:false, label: 'New Jersey', value: 'NJ'},
                    {hasChildren:false, label: 'New Mexico', value: 'NM'},
                    {hasChildren:false, label: 'New York', value: 'NY'},
                    {hasChildren:false, label: 'North Carolina', value: 'NC'},
                    {hasChildren:false, label: 'North Dakota', value: 'ND'},
                    {hasChildren:false, label: 'Ohio', value: 'OH'},
                    {hasChildren:false, label: 'Oklahoma', value: 'OK'},
                    {hasChildren:false, label: 'Oregon', value: 'OR'},
                    {hasChildren:false, label: 'PennsyIvania', value: 'PA'},
                    {hasChildren:false, label: 'Rhode Island', value: 'RI'},
                    {hasChildren:false, label: 'South Carolina', value: 'SC'},
                    {hasChildren:false, label: 'South Dakota', value: 'SD'},
                    {hasChildren:false, label: 'Tennessee', value: 'TN'},
                    {hasChildren:false, label: 'Texas', value: 'TX'},
                    {hasChildren:false, label: 'Utah', value: 'UT'},
                    {hasChildren:false, label: 'Vermont', value: 'VT'},
                    {hasChildren:false, label: 'Virginia', value: 'VA'},
                    {hasChildren:false, label: 'Washington', value: 'WA'},
                    {hasChildren:false, label: 'West Virginia', value: 'WV'},
                    {hasChildren:false, label: 'Wisconsin', value: 'WI'},
                    {hasChildren:false, label: 'Wyoming', value: 'WY'},
                ], 
                errorId: 'state_related_error',
                placeholder: '',
                typeInput: 'Dropdown',
                isRequired: true,
                parentOf: 'United States',
            }, value:'United States', label: 'United States'},
            {hasChildren: 
                {
                    id: 'state_related_selection',
                    label: 'State',
                    errorId: 'state_related_selection_error',
                    placeholder: '',
                    typeInput: 'textField',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                    maxLength: 50,
                    minLength: 2,
                    parentOf: 'Venezuela',
                    isRequired: true,
                },
                value:'Venezuela',
                label: 'Venezuela'
            },
            {hasChildren: 
                {
                    id: 'state_related_selection',
                    label: 'State',
                    errorId: 'state_related_selection_error',
                    placeholder: '',
                    typeInput: 'textField',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                    maxLength: 50,
                    minLength: 2,
                    isRequired: true,
                    parentOf: 'Colombia',
                },
                value:'Colombia',
                label: 'Colombia'
            },
            {hasChildren: 
                {
                    id: 'state_related_selection',
                    label: 'State',
                    errorId: 'state_related_selection_error',
                    placeholder: '',
                    typeInput: 'textField',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                    maxLength: 50,
                    minLength: 2,
                    isRequired: true,
                    parentOf: 'Argentina',
                },
                value:'Argentina',
                label: 'Argentina'
            },
            {hasChildren: 
                {
                    id: 'state_related_selection',
                    label: 'State',
                    errorId: 'state_related_selection_error',
                    placeholder: '',
                    typeInput: 'textField',
                    validationRegex: [{ 
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                    maxLength: 50,
                    minLength: 2,
                    isRequired: true,
                    parentOf: 'Panama',
                },
                value:'Panama',
                label: 'Panama'
            },
        ],
        errorId: 'country_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'city_related',
        label: 'City',
        errorId: 'city_related_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [{ 
            validation: /(.*[a-z0-9]){2}/i,
            errorText: 'City needs to be min 2 characters'
        }],
        maxLength: 50,
        minLength: 2,
        isRequired: true,
    },
    {
        id: 'postal_code',
        label: 'Postal Code',
        errorId: 'postal_code_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 50,
        minLength: 2,
        isRequired: true,
    },
    {
        id: 'street_1',
        label: 'Please enter the account owner Street Address 1',
        errorId: 'street_1_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [{ 
            validation: /(.*[a-z0-9 ]){3}/i,
            errorText: 'Enter your street address correctly'
        }],
        maxLength: 200,
        minLength: 2,
        isRequired: true,
    },
    {
        id: 'street_2',
        label: 'Street 2',
        errorId: 'street_2_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [{ 
            validation: /(.*[a-z]){3}/i,
            errorText: 'Enter your street address correctly'
        }],
        maxLength: 200,
        minLength: 2,
        isRequired: false,
    },
    {
        id: 'document_type',
        label: 'Please select the account owner document type that shows proof of address. The document must be at least 90 days old',
        options: [
            {hasChildren: false, label:'Document type', value: 0},
            {hasChildren: false, value: 'Utility bill'},
            {hasChildren: false, value: 'Drivers License w/Address'},
            {hasChildren: false, value: 'Tax document'},
            {hasChildren: false, value: 'Gov ID w/ Address'},
            {hasChildren: false, value: 'Rental Lease agreement'},
        ],
        errorId: 'document_type_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'validate_address_photo',
        label: 'Please upload the document showing proof of address. Scanned, blurry, unlear images will not be accepted.',
        errorId: 'validate_address_photo_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'type_id',
        label: 'Please enter the account owner ID type',
        options: [
            {hasChildren: false, label:'Select type ID', value: 0},
            {hasChildren: {
                id: 'validate_id_photo',
                label: 'Please Upload the back of the drivers license. Scanned, blurry, unlear images will not be accepted.',
                errorId: 'validate_id_photo_error',
                placeholder: '',
                typeInput: 'FileUpload',
                fileUploaded: null,
                isRequired: true,
                parentOf: 'Drivers license'
            }, value: 'Drivers license'},
            {hasChildren: {
                id: 'validate_id_photo',
                label: 'Please Upload the back of the goverment ID. Scanned, blurry, unlear images will not be accepted.',
                errorId: 'validate_id_photo_error',
                placeholder: '',
                typeInput: 'FileUpload',
                fileUploaded: null,
                isRequired: true,
                parentOf: 'Gov ID'
            }, value: 'Gov ID'},
            {hasChildren: false, value: 'Passport'},
            {hasChildren: {
                id: 'validate_id_photo',
                label: 'Please Upload the back of the residence permit. Scanned, blurry, unlear images will not be accepted.',
                errorId: 'validate_id_photo_error',
                placeholder: '',
                typeInput: 'FileUpload',
                fileUploaded: null,
                isRequired: true,
                parentOf: 'Residence Permit'
            }, value: 'Residence Permit'},
        ],
        errorId: 'type_id_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'validate_id_photo_2',
        label: 'Please Upload the front of the document. Scanned, blurry, unlear images will not be accepted.',
        errorId: 'validate_id_photo_error_2',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'country_residence',
        label: 'Please enter the country of residence of the account owner',
        options: [
            {hasChildren: false, label:'Select country', value: 0},
            {hasChildren: false, label:'United States', value: 'United States'},
            {hasChildren: false, label:'Venezuela', value: 'Venezuela'},
            {hasChildren: false, label:'Colombia', value: 'Colombia'},
            {hasChildren: false, label:'Argentina', value: 'Argentina'},
        ],
        errorId: 'country_residence_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'expiration_id',
        label: 'Please enter the expiration date of the document',
        errorId: 'expiration_id_error',
        placeholder: 'mm/dd/yyyy',
        typeInput: 'DatePicker',
        isRequired: true,
    },
]