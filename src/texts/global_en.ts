export const TEXT = {
    // GENERAL VARIABLES

    // Utils
    add: 'Add',
    adm1: 'Province',
    adm2: 'District',
    adm3: 'Commune',
    adm4: 'Village',
    back: 'Back',
    beneficiaries: 'Beneficiaries',
    beneficiary: 'Beneficiary',
    cancel: 'Cancel',
    characters:'Characters',
    close: 'Close',
    create: 'Create',
    delete: 'Delete',
    details: 'Details',
    distribution: 'Distribution',
    distributions: 'Distributions',
    done: 'Done',
    email: 'Email',
    export: 'Export',
    gender: 'Gender',
    home: 'Home',
    households: 'Household',
    import: 'Import',
    individual: 'Individual',
    location: 'Location',
    new: 'New',
    next: 'Next',
    no_data: 'No data',
    phone: 'Phone',
    project: 'Project',
    projects: 'Projects',
    reports: 'Reports',
    rights: 'Rights',
    save: 'Save',
    settings: 'Settings',
    summary:'Summary',
    update: 'Update',

    // Error
    back_to_homepage: 'Go back to homepage',
    error_interceptor_msg: 'An error occured, request has failed (Empty back response).',
    forbidden: 'Forbidden Page',
    forbidden_message: 'Sorry, you don\'t have permission to access this page',
    not_found: 'Page Not Found',
    not_found_message: 'Sorry, this page could not be found',

    // Role
    role_user_admin: 'Administrator',
    role_user_country_manager: 'Country manager',
    role_user_field_officer: 'Field officer',
    role_user_project_manager: 'Project manager',
    role_user_project_officer: 'Project officer',
    role_user_regional_manager: 'Regional manager',

    // Months
    months_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],


    // SPECIFIC VARIABLES

    // Add beneficiary
    add_beneficiary_done: 'Summary of Household to create',
    add_beneficiary_getAddressNumber: 'Address Number',
    add_beneficiary_getAddressPostcode: 'Address Postcode',
    add_beneficiary_getAddressStreet: 'Address Street',
    add_beneficiary_getDateOfBirth: 'Date of Birth',
    add_beneficiary_getFamilyName: 'Family Name',
    add_beneficiary_getGivenName: 'Given Name',
    add_beneficiary_getNationalID: 'ID Number',
    add_beneficiary_getOccupation: 'Livelihood',
    add_beneficiary_getTypeNationalId: 'ID Type',
    add_beneficiary_getTypePhone: 'Phone Type',
    add_beneficiary_res_address: 'Resident Address',
    add_beneficiary_step1: 'Information',
    add_beneficiary_step2: 'Head',
    add_beneficiary_step3: 'Members',
    add_beneficiary_title: 'add beneficiary',
    add_beneficiary_code: 'Country code',

    // Add beneficiary options
    national_id_passport: 'Passport',
    national_id_card: 'ID Card',
    national_id_license: 'Driver\'s License',
    national_id_family_registry: 'Family Registry',
    national_id_other: 'Other',

    // Add distribution
    add_distribution_advanced_option: 'Advanced options',
    add_distribution_beneficiaries_reached: 'Beneficiaries reached',
    add_distribution_check_date: 'Error while saving the date, check that the format is like mm/dd/yyyy',
    add_distribution_check_fields: 'Fill new distribution\'s information before, including the commodity and a minimum selection score\'s value greater than 0.',
    add_distribution_commodities_delivered: 'to be delivered',
    add_distribution_created: ' was created',
    add_distribution_date_inside_project: 'Error while creating new distribution, your distribution date have to be inside the project dates',
    add_distribution_distributed_commodity: 'distributed commodity',
    add_distribution_error_creating: 'Error while creating new distribution',
    add_distribution_female: 'Woman',
    add_distribution_households_reached: 'Households reached',
    add_distribution_male: 'Man',
    add_distribution_missing_commodity: 'A commodity is missing',
    add_distribution_missing_date: 'The date is missing',
    add_distribution_missing_location: 'Add a Province',
    add_distribution_missing_selection_criteria: 'A selection criterion is missing',
    add_distribution_missing_threshold: 'The minimum selection score\'s value should be greater than 0',
    add_distribution_multiple_commodities: 'You can\'t have too payment\'s method as commodities',
    add_distribution_selection_criteria: 'selection criteria',
    add_distribution_text_explanation: 'The system will only select beneficiaries/households that have a score higher than the minimum selection score',
    add_distribution_threshold: 'Minimum selection score',
    add_distribution_zero: 'The number of households reached or the amount to be distributed is 0',

    // Add project
    add_project_title: 'new project',
    add_project_new_distribution: 'new distribution',

    // Beneficiaries
    beneficiaries_add_distribution: 'Add beneficiaries to this distribution',
    beneficiaries_add_list: 'Add this list to a project',
    beneficiaries_add_project: 'Please select the project(s) in which you would like to add the',
    beneficiaries_added: 'Beneficiairies added to the selected project',
    beneficiaries_advanced_research:'Advanced search',
    beneficiaries_clear_all_research:'Clear all',
    beneficiaries_full_address: 'Full household address:',
    beneficiaries_household_info: 'Household information summary:',
    beneficiaries_import_addFile: 'add file or drag and drop',
    beneficiaries_import_addModal: 'add file',
    beneficiaries_import_api: 'import from external data source',
    beneficiaries_import_beneficiaries_imported: ' beneficiaries inserted',
    beneficiaries_import_check_fields: 'A field is empty or unset, please fill all inputs and select a project',
    beneficiaries_import_csv: 'download template',
    beneficiaries_import_convert: 'convert file',
    beneficiaries_import_error_importing: 'Error while importing data',
    beneficiaries_import_file: ' import from file',
    beneficiaries_import_response: 'Get ready to recover the file',
    beneficiaries_import_select_location: 'You must select a location and add a file before uploading',
    beneficiaries_import_select_project: 'You must select a project and add a file before uploading',
    beneficiaries_import_title: 'import beneficiary data',
    beneficiaries_import_warning: 'Warning: if the provided file is incomplete, the resulting one may need to be completed for the import to succeed.',
    beneficiaries_location: 'Household Location:',
    beneficiaries_missing_selected_project:'You must select a project before uploading',
    beneficiaries_proxy: 'Proxy',
    beneficiaries_select_api: 'Select API',
    beneficiaries_selected_project: 'selected beneficiaries:',

    // Cache
    cache_distribution_added: 'Distribution and beneficiaries of the project added in the cache',
    cache_store_beneficiaries: 'Save For Offline Mode',
    cache_no_distribution: 'This distribution isn\'t stored in the cache, you can\'t access it offline',

    // Dashboard
    dashboard_distribution_map: 'distribution map',
    dashboard_recent_distributions: 'upcoming distributions',
    dashboard_summary: 'summary',
    dashboard_summary_1: 'total registrations',
    dashboard_summary_2: 'active projects',
    dashboard_summary_3: 'enrolled beneficiaries',
    dashboard_summary_4: 'total value transactions',

    // Data verification
    data_verification_chip_actual: 'Household targeted',
    data_verification_chip_add: 'To add',
    data_verification_chip_existing: 'Existing',
    data_verification_chip_remove: 'To remove',
    data_verification_description1: 'This panel will display any suspected data entry errors found in the imported beneficiary data. Please choose whether to keep the existing one, update it with the imported data or save both as separate beneficiary records.',
    data_verification_description2: 'The duplicate check page displays any potential duplicate beneficiary records in the database. If the existing beneficiary is not a head of household, you can overwrite their information, ignored the changes, or save both as different beneficiaries if you are sure they are different people.',
    data_verification_description3: 'We found records that do not appear to exist in the database already. Please select those that you wish to add to the project database.',
    data_verification_description4: 'We found records which you’ve indicated you wish to remove from the database. Please select those which you wish to remove.',
    data_verification_description_end: 'Modifications will be added to the database on each step validation.',
    data_verification_done: 'Your data has been verified',
    data_verification_error: 'Error processing data',
    data_verification_send: 'Update',
    data_verification_snackbar_duplicate_corrected: 'Duplicate issues corrected',
    data_verification_snackbar_duplicate_no_corrected: 'Not all duplicated have been corrected',
    data_verification_snackbar_less_corrected: 'Beneficiaries removed with success',
    data_verification_snackbar_more_corrected: 'Beneficiaries added with success',
    data_verification_snackbar_typo_corrected: 'Typo issues corrected',
    data_verification_snackbar_typo_no_corrected: 'Not all typo issues have been corrected',
    data_verification_step_info: 'Step info',
    data_verification_step_1: 'Data Entry Inconsistencies',
    data_verification_step_2: 'Check for Duplicates',
    data_verification_step_3: 'Add Beneficiaries',
    data_verification_step_4: 'Remove Beneficiaries',
    data_verification_step_1_no_issues: 'No typo issues',
    data_verification_step_2_no_issues: 'No duplicates',
    data_verification_step_3_no_issues: 'No beneficiaries to add',
    data_verification_step_4_no_issues: 'No beneficiaries to remove',
    data_verification_title: 'data verification and validation',

    // Distribution
    distribution_accept_changed: 'Accept Changes',
    distribution_add_beneficiaries: 'Add beneficiaries to this distribution',
    distribution_beneficiary_added: 'Beneficiary added',
    distribution_beneficiary_not_added: 'Beneficiary could not be added',
    distribution_cant_update: 'You can\'t update this distribution.',
    distribution_details_export: 'distribution list',
    distribution_details_import: 'import & compare',
    distribution_details_random: 'export random sample',
    distribution_details_sample_size: 'Sample size',
    distribution_details_validate: 'validate & lock',
    distribution_edit:'Edit distribution',
    distribution_error_validate: 'The distribution is empty, please fill it before to validate it',
    distribution_no_beneficiaries: 'No beneficiaries have been added or removed. Any changes made to the imported beneficiaries will be updated in the system.',
    distribution_no_random_sample: 'Random sample can\'t be generated...',
    distribution_no_right_transaction: 'You haven\'t the right to realize the transaction, ask to your project manager or your country manager',
    distribution_no_right_validate: 'You haven\'t the right to validate the distribution, ask to your project manager',
    distribution_no_valid_commodity: 'No valid commodity detected for this distribution.',
    distribution_not_modified: 'This distribution has not been modified so far.',
    distribution_not_validated: 'Distribution could not be validated',
    distribution_request_logs: 'Send transaction logs by email',
    distribution_select_beneficiaries: 'Please select the beneficiaries from the project',
    distribution_show_data: 'Show data anyway',
    distribution_validate: 'Validate',
    distribution_validated: 'Distribution has been validated',
    distribution_validated_title: 'Validated distribution',
    distribution_want_add: 'that you want to add to the ',


    // Header
    'header_add-beneficiaries': 'Add Beneficiaries',
    'header_add-distribution': 'Add Distribution',
    header_beneficiaries: 'Beneficiaries',
    header_disconnect: 'log out',
    'header_distributions': 'Distribution',
    'header_data-validation': 'Data Validation',
    header_home: 'Home',
    header_import: 'Import beneficiary data',
    header_imported: 'Imported beneficiaries data',
    header_language: 'language',
    header_profile: 'Profile',
    header_projects: 'Projects',
    header_reports: 'Reports',
    header_settings: 'Settings',
    'header_update-beneficiary': 'Update Beneficiaries',



    // Import
    import_added: 'Added from existing beneficiaries',
    import_back_to_beneficiaries: 'Back to Beneficiaries',
    import_back_to_project: 'Back to Project',
    import_created: 'Newly created',
    import_deleted: 'Will be deleted',
    import_description: 'Import the file that contains the modified distribution. The database will be updated with the new list of beneficiaries for this distribution when you will click on "update" after importing.',
    import_distribution_no_right_update: 'لا يحق لك تحديث التوزيع ، اسأل مدير المشروع الخاص بك',
    import_distribution_updated: 'Distribution updated',
    import_select_new: 'Select all new',
    import_select_old: 'Select all old',
    import_updated: 'Will be updated',

    // Login
    login_bms: 'Beneficiary management system',
    login_forgot_password: 'Forgot password?',
    login_password: '*********',
    login_title: 'login',
    login_username: 'username',

    // Modal
    modal_add_bad_weight: 'The weight should be greater than 0',
    modal_add_check_fields_budget: 'Invalid fields: check you filled every fields and budget is greater than 0',
    modal_add_check_fields_quantity: 'Invalid fields: check you filled every fields and quantity greater than 0',
    modal_add_fail_criteria: 'Failed to create the criteria',
    modal_add_invalid_mail: 'You must define an email',
    modal_add_no_right: 'You must define a right',
    modal_add_no_value: 'You need to enter a value',
    modal_add_title: 'Add a new ',
    modal_check_date: 'Invalid fields: Your start date cannot be older than the end date',
    modal_check_fields: 'Invalid fields: check you filled every field',
    modal_delete_sentence: 'You are about to delete ',
    modal_delete_sentence_2: '. Are you sure? ',
    modal_email_is: 'Email is',
    modal_failure: 'Failure',
    modal_leave: 'Leave',
    modal_language_actual: 'Current language: ',
    modal_leave_sentence: 'Do you really want to leave with unsaved changes?',
    modal_language_title: 'Language',
    modal_no_country: 'You must define a country with that role',
    modal_no_password: 'You must define a password',
    modal_not_enough_strong: 'The password is not strong enough... Minimum required: 8 characters, 1 lowercase, 1 uppercase, 1 numeric',
    modal_no_project: 'You must define at least a project with that role',
    modal_password_required: 'You must define a password',
    modal_pending_requests: 'Pending Requests',
    modal_project_name_characters_limit: 'do not exceed',
    modal_required: 'required',
    modal_save_language_as_default: 'Set this as my default language',
    modal_success: 'Success',
    modal_valid_email: 'Please enter a valid email address',
    modal_warning_pending_requests_1: 'Find the requests you created during your offline time below, you can send those you want to apply to modify the database.',
    modal_warning_pending_requests_2: 'WARNING: Requests linked to an item you created offline will fail !',

    // Model
    model_beneficiaries_dependents: 'Dependents',
    model_beneficiaries_nationalids: 'ID Number',
    model_beneficiaries_phones: 'Phones (no country code)',
    model_beneficiaries_status: 'Satus',
    model_commodity: 'Commodity',
    model_commodity_modality: 'Modality',
    model_commodity_unit: 'Unit',
    model_commodity_value: 'Quantity',
    model_countryIso3: 'Country',
    model_country_specific: 'Country specific option',
    model_country_specific_field: 'Field',
    model_criteria: 'Criteria',
    model_criteria_operator: 'Condition',
    model_criteria_weight: 'Score weight',
    model_dateofbirth: 'Date of birth',
    model_distribution_date: 'Distribution Start Date',
    model_distribution_name: 'Name',
    model_distribution_type: 'Target',
    model_donor: 'Donor',
    model_donor_fullname: 'Donor\'s name',
    model_donor_shortname: 'Shortname',
    model_familyName: 'Family name',
    model_firstName: 'First name',
    model_notes: 'Notes',
    model_project_donors_name: 'Donors',
    model_project_end_date: 'End Date',
    model_project_name: 'Project\'s name',
    model_project_number_of_households: 'Number of Households',
    model_project_start_date: 'Start Date',
    model_project_value: 'Amount to be distributed',
    model_sector: 'Sector',
    model_sectors_name: 'Sectors',
    model_transaction_message: 'Message',
    model_transaction_pickupDate: 'Pick up date',
    model_transaction_state: 'Status',
    model_type: 'Type',
    model_used: 'Used',
    model_user: 'User',
    model_user_password: 'Password',
    model_value: 'Value',
    model_vulnerabilities: 'Vulnerabilities',

    // Placeholder
    placeholder_one_many: 'Select one or many',
    
    // Profile
    profile_user_change_password: 'Change password',
    profile_user_hint_new_password: 'New password',
    profile_user_hint_new_password_again: 'Re-enter new password',
    profile_user_hint_old_password: 'Old password',
    profile_user_information: 'User information',

    // Project
    project_add: 'Please add some projects first! Then you will be able to manage some distributions...',
    project_add_household: 'Please add some beneficiaries first! Then you will be able to manage some distributions...',
    project_click: 'Click on',
    project_create: 'Create a new project',
    project_description: 'You will be able to modify project\'s name until your first distribution.',
    project_go_import_beneficiaries: 'Import Beneficiaries',
    project_no_distribution: 'This project does not contain any distributions. Create your first one !',
    project_no_household: 'This project does not contain any households.',
    project_no_projects: 'This country does not contain any project.',

    // Report
    report_apply: 'apply',
    report_country: 'country',
    report_country_report: 'country report',
    report_distribution_report: 'distribution report',
    report_filter_chose_periode: 'choose period',
    report_filter_per_month: 'per month',
    report_filter_per_quarter: 'per quarter',
    report_filter_per_year: 'per year',
    report_frequency_month: 'Month',
    report_frequency_quarter: 'Quarter',
    report_frequency_year: 'Year',
    report_from: 'from',
    report_loader: 'Loader',
    report_period_selected: 'Period selected',
    report_project: 'project',
    report_project_report: 'project report',
    report_select_frequency: 'Select frequency',
    report_to: 'to',
    report_upcoming_reporting: 'Upcoming reporting',

    // Settings
    settings_country_specific_options: 'country specific options',
    settings_created: ' created',
    settings_donors: 'donors',
    settings_financial_provider: 'Third party connections',
    settings_log_button: 'Get user logs by email',
    settings_project_exists: 'A project with this name already exists',
    settings_users: 'users',

    // Snackbar
    snackbar_change_password_done: 'Password has been changed!',
    snackbar_change_password_fail: 'Could not change password...',
    snackbar_change_password_not_possible: 'Password must be longer than 1 character and match with verification',
    snackbar_invalid_transaction_date: 'The transaction\'s deadline is over.',

    // Table
    table_actions: 'Actions',
    table_element_deleted: ' deleted',
    table_element_updated: ' updated',
    table_filter: 'Search by keyword',
    table_first_page: 'First page',
    table_items_per_page: 'Items per page',
    table_last_page: 'Last page',
    table_next_page: 'Next page',
    table_of_page: 'of',
    table_previous_page: 'Previous page',

    // Transaction
    transaction_accept_prevention: 'I agree to these terms.',
    transaction_again: 'Send again',
    transaction_amount_done: 'Amount sent',
    transaction_amount_total: 'Total amount',
    transaction_amount_waiting: 'Amount picked up',
    transaction_confirm: 'Confirm the transaction',
    transaction_confirm_button: 'Confirm',
    transaction_email_code: 'An email containing your validation code has been sent to:',
    transaction_id_transaction: 'ID Transaction',
    transaction_info_export: 'If the distribution hasn\'t any transactions, you will not have any file exported',
    transaction_inProgress: 'Transaction in progress...',
    transaction_paste_code: 'Please paste the code here and click on \'Confirm\' to proceed with the transaction: ',
    transaction_prevention: 'This platform is still under development and the online cash transaction functionality may not be fully stable yet. The development team denies responsibility for any errors that may occur in terms of money loss. By ticking the box below, you agree to use the system knowing fully well its limitations and take responsibility for the results of the transaction.',
    transaction_progress: 'commodity distribution progress:',
    transaction_refresh: 'Check pickup status',
    transaction_transaction: 'Start transaction',
    transaction_validate_distribution: 'Do you really want to validate this distribution ? You won\'t be able to modify it anymore.',
    transaction_validation: 'Confirm the validation',

    // Tooltip
    tooltip_add_beneficiaries: 'This page is the add beneficiaries\' page. This is a form to add a new household with required fields.',
    tooltip_add_distribution: 'This page is the add distribution\'s page. This is a form to add a new distribution with required fields. You will select households or beneficiaries by sorting them by a selection criteria and add a specific amount of commodities to the distribution.',
    tooltip_beneficiaries: 'This page is the beneficiaries\' page. You can see all households of the country. If you have the right, you can add new households with the "+" button, manage households and research in the list.',
    tooltip_dashboard: 'This page is the dashboard. You have a global view on some numbers about the country and its projects. You have access to a map with distributions of the country and summary of last distributions.',
    tooltip_data: 'This page is the post import beneficiaries\' page. This is a summary of households you have imported.',
    tooltip_data_validation: 'This page is the import beneficiaries\' page using a file. You have to verify your file by following the steps.',
    tooltip_distributions: 'This page is the distribution\'s page. You can see all households of the distribution. If you have the right, you can add new households with a file or by selecting in the list, manage households and validate the distribution to a transaction.',
    tooltip_import: 'This page is the import beneficiaries\' page. You can choose to import new households using a file or the API (the external data source) to import all the household of a specific commune.',
    tooltip_profile: 'This page is the profile\'s page. You can change your password.',
    tooltip_projects: 'This page is the projects\' page. You can see all projects of the country (only thoses that you have the right to see). If you have the right, you can add a new distribution with households whose are in the project, manage distributions and transactions.',
    tooltip_reports: 'This page is the reports\' page. This page is used to see statistics of the country, like the average transactions of a projects, number of distributions...',
    tooltip_settings: 'This page is the settings\' page. In this page, you\'ll be able to add a new user, new country specifics, new donors, a new project and change the credential for the transaction.',
    tooltip_update_beneficiary: 'This page is the update beneficiaries\' page. This is a form to update the selected household with required fields.',

    // Update beneficiary
    update_beneficiary_check_steps: 'Required data incomplete or unvalid: please check all steps',
    update_beneficiary_created_successfully: 'Created successfuly !',
    update_beneficiary_error_creating: 'Error while creating: ',
    update_beneficiary_error_updated: 'Error while updating: ',
    update_beneficiary_title: 'Update Beneficiary',
    update_beneficiary_updated_successfully: 'Updated successfuly !',
};
