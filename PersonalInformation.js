const PersonalInformationForm = [
    {
        titleOfSection: 'Información Personal',
        id: 'first_name',
        label: 'Primer nombre del titular de la cuenta',
        errorId: 'first_name_error',
        placeholder: 'Primer nombre',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$/,
                errorText: 'Ingrese un nombre válido'
            },
            {
                validation: /^[A-Za-z][A-Za-z]*$/,
                errorText: 'Ingrese el nombre tal como aparece en su ID'
            }

        ],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
        errorMessage: "Ingrese su primer nombre",
        col: 4
    },
    {
        id: 'middle_name',
        label: 'Segundo nombre del titular de la cuenta',
        errorId: 'middle_name_error',
        placeholder: 'Segundo nombre',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 5,
        isRequired: false,
        errorMessage: "Ingrese su segundo nombre",
        col: 4
    },
    {
        id: 'last_name',
        label: 'Apellido del titular de la cuenta',
        errorId: 'last_name_error',
        placeholder: 'Apellido',
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
        errorMessage: "Ingrese su apellido",
        col: 4
    },
    {
        id: 'date_birthday',
        label: 'Ingrese la fecha de nacimiento del titular de la cuenta. Respetando el siguiente formato Mes, Dia, Año',
        errorId: 'date_birthday_error',
        placeholder: 'mm/dd/yyyy',
        typeInput: 'DatePicker',
        isRequired: true,
    },
    {
        id: 'tax_country',
        label: 'País de residencia/domicilio del titular de la cuenta bancaria ',
        options: [
            { hasChildren: false, label: 'Seleccione país', value: 0 },
            {
                hasChildren: {
                    id: 'tax_id',
                    label: 'Ingrese su Social Security Number (SSN)',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    type: 'number',
                    placeholder: 'SSN',
                    maxLength: 9,
                    minLength: 9,
                    isRequired: true,
                    parentOf: 'United States',
                    validationRegex: [{
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value: 'United States',
            },
            {
                hasChildren: {
                    id: 'tax_id',
                    label: 'Ingrese su Registro Único de Información Fiscal (RIF)',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    maxLength: 12,
                    minLength: 12,
                    placeholder: 'Registro Único de Información Fiscal (RIF)',
                    isRequired: true,
                    parentOf: 'Venezuela',
                    validationRegex: [{
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value: 'Venezuela',
            },
            {
                hasChildren: {
                    id: 'tax_id',
                    label: 'Ingrese su Registro Único Tributario (RUT)',
                    errorId: 'tax_id_error',
                    placeholder: '',
                    typeInput: 'textField',
                    maxLength: 9,
                    minLength: 8,
                    placeholder: 'Registro Único Tributario (RUT)',
                    parentOf: 'Colombia',
                    isRequired: true,
                    validationRegex: [{
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value: 'Colombia',
            },
            {
                hasChildren: {
                    id: 'tax_id',
                    label: 'Ingrese su Código Único de Identificación Tributaria (CUIT)',
                    errorId: 'tax_id_error',
                    placeholder: 'Código Único de Identificación Tributaria (CUIT) ',
                    typeInput: 'textField',
                    type: 'number',
                    maxLength: 9, //SSN has 9 digits
                    minLength: 8,
                    isRequired: true,
                    parentOf: 'Argentina',
                    validationRegex: [{
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value: 'Argentina',
            },
            {
                hasChildren: {
                    id: 'tax_id',
                    label: 'Ingrese su Registro Único de Contribuyentes (RUC)',
                    errorId: 'tax_id_error',
                    placeholder: 'Registro Único de Contribuyentes (RUC)',
                    typeInput: 'textField',
                    type: 'number',
                    maxLength: 11,
                    minLength: 7,
                    isRequired: true,
                    parentOf: 'Panama',
                    validationRegex: [{
                        validation: /(.*[a-z0-9]){2}/i,
                        errorText: 'State needs to be min 2 characters'
                    }],
                },
                value: 'Panama',
            },
        ],
        errorId: 'tax_country_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'phone_number',
        endSection: true,
        label: 'Número de teléfono del titular de la cuenta bancaria',
        errorId: 'phone_number_error',
        placeholder: 'Número telefónico personal, con código de área y país.',
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
        titleOfSection: 'Dirección',
        id: 'country_selection',
        hasChildren: 'state_related_selection',
        label: 'País de residencia/domicilio del titular de la cuenta bancaria',
        options: [
            { hasChildren: false, label: 'Elegir país', value: 0 },
            {
                hasChildren: {
                    id: 'state_related_selection',
                    label: 'Estado',
                    options: [
                        { hasChildren: false, label: 'Elegir estado', value: 0 },
                        { hasChildren: false, label: 'Alabama', value: 'AL' },
                        { hasChildren: false, label: 'Alaska', value: 'AK' },
                        { hasChildren: false, label: 'Arizona', value: 'AZ' },
                        { hasChildren: false, label: 'Arkansas', value: 'AR' },
                        { hasChildren: false, label: 'California', value: 'CA' },
                        { hasChildren: false, label: 'Colorado', value: 'CO' },
                        { hasChildren: false, label: 'Connecticut', value: 'CT' },
                        { hasChildren: false, label: 'Delaware', value: 'DE' },
                        { hasChildren: false, label: 'Florida', value: 'FL' },
                        { hasChildren: false, label: 'Georgia', value: 'GA' },
                        { hasChildren: false, label: 'Hawaii', value: 'HI' },
                        { hasChildren: false, label: 'Idaho', value: 'ID' },
                        { hasChildren: false, label: 'Illinois', value: 'IL' },
                        { hasChildren: false, label: 'Indiana', value: 'IN' },
                        { hasChildren: false, label: 'Iowa', value: 'IA' },
                        { hasChildren: false, label: 'Kansas', value: 'KS' },
                        { hasChildren: false, label: 'Kentuky', value: 'KY' },
                        { hasChildren: false, label: 'Louisiana', value: 'LA' },
                        { hasChildren: false, label: 'Maine', value: 'ME' },
                        { hasChildren: false, label: 'Maryland', value: 'MD' },
                        { hasChildren: false, label: 'Massachusetts', value: 'MA' },
                        { hasChildren: false, label: 'Michigan', value: 'MI' },
                        { hasChildren: false, label: 'Minnesota', value: 'MN' },
                        { hasChildren: false, label: 'Mississippi', value: 'MS' },
                        { hasChildren: false, label: 'Missouri', value: 'MO' },
                        { hasChildren: false, label: 'Montana', value: 'MT' },
                        { hasChildren: false, label: 'Nebraska', value: 'NE' },
                        { hasChildren: false, label: 'Nevada', value: 'NV' },
                        { hasChildren: false, label: 'New Hampshire', value: 'NH' },
                        { hasChildren: false, label: 'New Jersey', value: 'NJ' },
                        { hasChildren: false, label: 'New Mexico', value: 'NM' },
                        { hasChildren: false, label: 'New York', value: 'NY' },
                        { hasChildren: false, label: 'North Carolina', value: 'NC' },
                        { hasChildren: false, label: 'North Dakota', value: 'ND' },
                        { hasChildren: false, label: 'Ohio', value: 'OH' },
                        { hasChildren: false, label: 'Oklahoma', value: 'OK' },
                        { hasChildren: false, label: 'Oregon', value: 'OR' },
                        { hasChildren: false, label: 'PennsyIvania', value: 'PA' },
                        { hasChildren: false, label: 'Rhode Island', value: 'RI' },
                        { hasChildren: false, label: 'South Carolina', value: 'SC' },
                        { hasChildren: false, label: 'South Dakota', value: 'SD' },
                        { hasChildren: false, label: 'Tennessee', value: 'TN' },
                        { hasChildren: false, label: 'Texas', value: 'TX' },
                        { hasChildren: false, label: 'Utah', value: 'UT' },
                        { hasChildren: false, label: 'Vermont', value: 'VT' },
                        { hasChildren: false, label: 'Virginia', value: 'VA' },
                        { hasChildren: false, label: 'Washington', value: 'WA' },
                        { hasChildren: false, label: 'West Virginia', value: 'WV' },
                        { hasChildren: false, label: 'Wisconsin', value: 'WI' },
                        { hasChildren: false, label: 'Wyoming', value: 'WY' },
                    ],
                    errorId: 'state_related_error',
                    placeholder: '',
                    typeInput: 'Dropdown',
                    isRequired: true,
                    parentOf: 'United States',
                }, value: 'United States', label: 'United States'
            },
            {
                hasChildren:
                {
                    id: 'state_related_selection',
                    label: 'Estado',
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
                value: 'Venezuela',
                label: 'Venezuela'
            },
            {
                hasChildren:
                {
                    id: 'state_related_selection',
                    label: 'Estado',
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
                value: 'Colombia',
                label: 'Colombia'
            },
            {
                hasChildren:
                {
                    id: 'state_related_selection',
                    label: 'Estado',
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
                value: 'Argentina',
                label: 'Argentina'
            },
            {
                hasChildren:
                {
                    id: 'state_related_selection',
                    label: 'Estado',
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
                value: 'Panama',
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
        label: 'Ciudad',
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
        label: 'Codigo postal',
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
        label: 'Dirección de avenida o calle del titular de la cuenta bancaria',
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
        endSection: true,
        label: 'Dirección 2',
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
        titleOfSection: 'Documentos',
        id: 'type_id',
        label: 'Tipo de documento de Identidad',
        options: [
            { hasChildren: false, label: 'Seleccione el tipo de ID', value: 0 },
            {
                hasChildren: [
                    {
                        id: 'expiration_id',
                        label: 'Ingrese la fecha de expiración de su ID',
                        errorId: 'expiration_id_error',
                        placeholder: 'mm/dd/yyyy',
                        typeInput: 'DatePicker',
                        isRequired: true,
                        parentOf: 'Licencia de conducir'
                    },
                    {
                        id: 'validate_id_photo_2',
                        label: 'Fotografía del frente del documento de identidad vigente del titular de la cuenta bancaria',
                        errorId: 'validate_id_photo_error_2',
                        placeholder: '',
                        typeInput: 'FileUpload',
                        fileUploaded: null,
                        isRequired: true,
                        parentOf: 'Licencia de conducir'
                    },
                    {
                        id: 'validate_id_photo',
                        label: 'Fotografía del reverso del documento de identidad vigente del titular de la cuenta bancaria',
                        errorId: 'validate_id_photo_error',
                        placeholder: '',
                        typeInput: 'FileUpload',
                        fileUploaded: null,
                        isRequired: true,
                        parentOf: 'Licencia de conducir'
                    },
                ], value: 'Licencia de conducir'
            },
            {
                hasChildren: [{
                    id: 'expiration_id',
                    label: 'Ingrese la fecha de expiración de su Documento de identidad',
                    errorId: 'expiration_id_error',
                    placeholder: 'mm/dd/yyyy',
                    typeInput: 'DatePicker',
                    isRequired: true,
                    parentOf: 'Documento de identidad'
                }, {
                    id: 'validate_id_photo',
                    label: 'Fotografía del frente del documento de identidad vigente del titular de la cuenta bancaria',
                    errorId: 'validate_id_photo_error',
                    placeholder: '',
                    typeInput: 'FileUpload',
                    fileUploaded: null,
                    isRequired: true,
                    parentOf: 'Documento de identidad'
                },
                {
                    id: 'validate_id_photo',
                    label: 'Fotografía del reverso del documento de identidad vigente del titular de la cuenta bancaria',
                    errorId: 'validate_id_photo_error',
                    placeholder: '',
                    typeInput: 'FileUpload',
                    fileUploaded: null,
                    isRequired: true,
                    parentOf: 'Documento de identidad'
                },], value: 'Documento de identidad'
            },
            {
                hasChildren: [
                    {
                        id: 'expiration_id',
                        label: 'Ingrese la fecha de expiración de su documento',
                        errorId: 'expiration_id_error',
                        placeholder: 'mm/dd/yyyy',
                        typeInput: 'DatePicker',
                        isRequired: true,
                        parentOf: 'Pasaporte'
                    },
                    {
                        id: 'validate_id_photo_2',
                        label: 'Fotografía del frente del documento de identidad vigente del titular de la cuenta bancaria.',
                        errorId: 'validate_id_photo_error_2',
                        placeholder: '',
                        typeInput: 'FileUpload',
                        fileUploaded: null,
                        isRequired: true,
                        parentOf: 'Pasaporte'
                    },
                ], value: 'Pasaporte'
            },
            {
                hasChildren: [{
                    id: 'expiration_id',
                    label: 'Ingrese la fecha de expiración de su documento',
                    errorId: 'expiration_id_error',
                    placeholder: 'mm/dd/yyyy',
                    typeInput: 'DatePicker',
                    isRequired: true,
                    parentOf:'Permiso de residencia'
                }, {
                    id: 'validate_id_photo',
                    label: 'Fotografía del frente del documento de identidad vigente del titular de la cuenta bancaria',
                    errorId: 'validate_id_photo_error',
                    placeholder: '',
                    typeInput: 'FileUpload',
                    fileUploaded: null,
                    isRequired: true,
                    parentOf: 'Permiso de residencia'
                }], value: 'Permiso de residencia'
            },
        ],
        errorId: 'type_id_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'document_type',
        label: 'Seleccione un documento que pruebe la dirección del titular de la cuenta. Si no esta vencido tiene que tener un maximo de 90 dias de la fecha de expedicion',
        options: [
            { hasChildren: false, label: 'Tipo de documento', value: 0 },
            { hasChildren: false, value: 'Factura de servicios públicos' },
            { hasChildren: false, value: 'Licencia de conducir con dirección' },
            { hasChildren: false, value: 'Documento fiscal' },
            { hasChildren: false, value: 'ID con dirección' },
            { hasChildren: false, value: 'Contrato de arrendamiento' },
        ],
        errorId: 'document_type_error',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'validate_address_photo',
        label: '',
        errorId: 'validate_address_photo_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },


]