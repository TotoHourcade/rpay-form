const PersonalInformationForm = [
    {
        id: 'first_name',
        label: 'First name',
        errorId: 'first_name_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/, errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'middle_name',
        label: 'Middle name',
        errorId: 'middle_name_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/, errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'last_name',
        label: 'Last name',
        errorId: 'last_name_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/, errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'date_bithday',
        label: 'Date Of Birth',
        errorId: 'date_bithday_error',
        placeholder: 'mm/dd/yyyy',
        typeInput: 'DatePicker',
        isRequired: true,
    },
    {
        id: 'tax_country',
        label: 'Tax Country',
        options: ['United States', 'Venezuela', 'Colombia', 'Argentina', 'Panama'],
        errorId: 'tax_country_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'phone_number',
        label: 'Phone Number',
        errorId: 'phone_number_error',
        placeholder: '+54 11-2222-4444',
        typeInput: 'textField',
        type: 'number',
        validationRegex: [
            {
                validation: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                errorText: 'El telefono ingresado es invalido'
            },
        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'id_photo',
        label: 'ID Photo',
        errorId: 'id_photo_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'street_1',
        label: 'Street',
        errorId: 'street_1_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
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
        validationRegex: [],
        maxLength: 200,
        minLength: 2,
        isRequired: false,
    },
    {
        id: 'country_selection',
        label: 'Country',
        options: ['United States', 'Venezuela', 'Colombia', 'Argentina', 'Panama'],
        errorId: 'country_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'state_related_selection',
        label: 'State',
        options: ['No idea where find the info yet'],
        errorId: 'state_related_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'city_related',
        label: 'City',
        options: ['No idea where find the info yet'],
        errorId: 'city_related_error',
        placeholder: '',
        typeInput: 'Dropdown',
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
        isRequired: false,
    },
    {
        id: 'document_type',
        label: 'Validate address document type',
        options: ['Utility Bill', '...'],
        errorId: 'document_type_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'validate_address_photo',
        label: 'Validate Address',
        errorId: 'validate_address_photo_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'type_id',
        label: 'Type ID',
        options: ['Drivers license', 'Gov ID', 'Passport', 'Residence Permit', 'RIF'],
        errorId: 'document_type_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'validate_id_photo',
        label: 'ID Document',
        errorId: 'validate_id_photo_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'country_residence',
        label: 'Contry of residence',
        options: ['United States', 'Venezuela', 'Colombia', 'Argentina', 'Panama'],
        errorId: 'document_type_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'expiration_id',
        label: 'Expiration on ID',
        errorId: 'expiration_id_error',
        placeholder: 'mm/dd/yyyy',
        typeInput: 'DatePicker',
        isRequired: true,
    },
]