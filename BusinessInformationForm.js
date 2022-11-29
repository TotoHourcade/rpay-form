const BusinessInformationForm = [
    {
        titleOfSection: 'Información Personal',
        id: 'type_entity',
        label: 'Tipo de entidad',
        options: [
            {hasChildren: false, value: 'Company'},
            {hasChildren: false, value: 'LLC'},
            {hasChildren: false, value: 'C Corp'},
            {hasChildren: false, value: 'S Crop'},
            {hasChildren: false, value: 'Trust'},
        ],
        errorId: 'type_entity_error_id',
        placeholder: '',
        typeInput: 'Dropdown',
        isRequired: true,
    },
    {
        id: 'entity_name',
        label: 'Nombre legal de la entidad:',
        errorId: 'entity_name_error',
        placeholder: 'Nombre registrado ante el organismo/autoridad competente.',
        typeInput: 'textField',
        validationRegex: [
            {
                validation: /^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{3}).+$/,
                errorText: 'Incluye tu nombre completo, tal como aparece en tu identificación'
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
        id: 'signature',
        label: 'Nombre completo del administrador de la compañía',
        errorId: 'signature_error',
        placeholder: 'Nombre completo',
        extraInfo: `Puede ser Gerente, Presidente o cualquier persona autorizada para recibir comunicaciones con respecto a esta entidad. Especifique el nombre completo de la persona autorizada para aceptar los términos y condiciones.`,
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 5,
        isRequired: true,
    },
    {
        id: 'tax_country_business',
        label: 'Pais de constitución de la entidad',
        options: [
            {hasChildren: false, label:'Selecciona un país', value: 0},
            {
                hasChildren:  [{
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
                {
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
                    parentOf: 'Estados Unidos',
                }, 
            
            ],
                value:'Estados Unidos',
            },
            {
                hasChildren:  [{
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
                },{
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
                
                }],
                value:'Colombia',
            },
            {
                hasChildren:  [{
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
                },{
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
            
            }],
                value:'Argentina',
            },
            {
                hasChildren:  [{
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
                }, {
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
                }],
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
        label: 'Número de teléfono de la entidad o del socio mayoritario',
        errorId: 'phone_number_error',
        placeholder: 'Número de teléfono de la compania',
        extraInfo:`Puede ser un gerente o persona autorizada para recibir notificaciones con respecto a la entidad. Indique el número telefónico correspondiente, con el código de área y país.`,
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
        endSection:true,

    },
    

    // {
    //     id: 'region_formation',
    //     label: 'Region of Formation',
    //     options: ['no idea where search this info',],
    //     errorId: 'region_formation_error',
    //     placeholder: '',
    //     typeInput: 'Dropdown',
    //     isRequired: true,
    // },
    

    
    {
        titleOfSection:'Dirección',

        id: 'country_selection',
        hasChildren: 'state_related_selection',
        label: 'Selecciona el pais de la compania',
        options: [
            {hasChildren: false, label:'Selecciona un país', value: 0},
            {hasChildren: {
                id: 'state_related_selection',
                label: 'Selecciona el estado de la compania',
                options: [
                    {hasChildren:false, label: 'Selecciona el estado', value: 0},
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
                parentOf: 'Estados Unidos',
            }, value:'Estados Unidos', label: 'Estados Unidos'},
            {hasChildren: 
                {
                    id: 'state_related_selection',
                    label: 'Estado de la compania',
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
                    label: 'Estado de la compania',
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
                    label: 'Estado de la compania',
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
        id: 'company_city_related',
        label: 'Ciudad de la compania',
        errorId: 'company_city_related_error',
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
        id: 'company_postal_code',
        label: 'Código postal de la compania',
        errorId: 'postal_code_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 50,
        minLength: 2,
        isRequired: true,
    },
    {
        id: 'company_street',
        label: 'Dirección de la compania',
        errorId: 'company_street_error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 2,
        isRequired: true,
    },
    {
        id: 'company_street_2',
        label: 'Dirección 2',
        errorId: 'company_street_2error',
        placeholder: '',
        typeInput: 'textField',
        validationRegex: [],
        maxLength: 200,
        minLength: 2,
        isRequired: false,
        endSection:true,

    },
    {
        titleOfSection: 'Documentos',
        id: 'tax_id_document',
        label: 'Documento de identificación fiscal de la Entidad',
        extraInfo:`Según el país de constitución deberás adjuntar el archivo (comprobante digital o planilla) en formato PDF:

        • Estados Unidos: EIN (Employer Identification Number)
        • Colombia: Registro Único Tributario (RUT)
        • Argentina: Código Único de Identificación Tributaria (CUIT)
        • Panamá/Perú: Registro Único de Contribuyentes (RUC)
        • Otras jurisdicciones: comprobante fiscal de la entidad emitido por el país donde se encuentra registrada (vigente)
        
        Recuerda que las capturas de pantalla o las fotos tomadas a la pantalla no son válidas como documentos a consignar.`,

        errorId: 'tax_id_document_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'document_creation',
        label: 'Acta Constitutiva, Documentos de Incorporación o Registro de Comercio de la entidad',
        extraInfo:`Deberás incluir el Acta Constitutiva y las Actas de Asambleas que reflejen las modificaciones posteriores, por ejemplo:

        • Documento donde aparezca la composición accionaria actual de la entidad
        • Nombramiento de la Junta Directiva vigente
        • Cambios de la denominación de la entidad (razón social) o de su domicilio principal/fiscal
        • Cambios en el objeto(s) de la entidad
        • Cualquier otro cambio o modificación sustancial en la administración o datos de la entidad
        
        Si hubo algun cambio en administracion de la empresa, incluir el acta donde se reflejen las modificaciones. 
        
        Puedes adjuntar varios archivos/documentos en este campo. 
        
        Debes adjuntar el archivo o archivos en formato PDF.
        
        Recuerda que las capturas de pantalla o las fotos tomadas a la pantalla no son válidas como documentos a consignar. Los documentos deben estar firmados.`,
        errorId: 'document_creation_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    // {
    //     id: 'validate_addres_type',
    //     label: 'Documento que certifique la creación de la empresa',
       
    //     options: [
    //         {hasChildren:false, label: 'Bank statement with less than 90 days', value: 'Bank statement'},
    //     ],
    //     errorId: 'validate_addres_type_error',
    //     placeholder: '',
    //     typeInput: 'Dropdown',
    //     isRequired: true,
    // },
    {
        id: 'validate_address_document',
        label: 'Prueba de dirección de la entidad',
        errorId: 'validate_address_document_error',
        placeholder: '',
        typeInput: 'FileUpload',
        extraInfo:`Debes adjuntar el archivo en formato PDF. Puede ser cualquiera de los siguientes documentos:
        - Estado de cuenta bancario con menos de 90 dias de emision
        - Factura de servicios con menos de 90 dias de emision
        - Contrato de arrendamiento vigente
        
        Recuerda que las capturas de pantalla o las fotos tomadas a la pantalla no son válidas como documentos a consignar.`,
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: 'document_shareholders',
        label: 'Composición accionaria/capital ',
        extraInfo:'La evidencia de composición accionaria puede estar reflejada en el Operating Agreement, estatutos, Affidavit (declaración jurada), artítulos de incorporación o registro de acciones que refleje claramente los porcentajes o composición accionaria. El documento debe estar firmado.',
        errorId: 'document_shareholders_error',
        placeholder: '',
        typeInput: 'FileUpload',
        fileUploaded: null,
        isRequired: true,
    },
    {
        id: "add_shareholder",
        label: 'Ingresa todos los accionistas con un 25% o mayor porcentaje de participación accionaria en la entidad.',
        buttonLabel: 'Agregar nuevo accionista',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',
        placeholder: '',
        typeInput: 'Button',
        onPress: 'addShareholder()'
    },
]