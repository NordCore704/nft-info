export const validateFormInputs = (inputValues) => {
    const errors = {}

    if (!inputValues.contract_address) {
        errors.contract_address = 'Contract Address not provided'
    }
    if (!inputValues.token_id) {
        errors.token_id = 'Token ID not provided'

    }
    if (!inputValues.page_size) {
        errors.page_size = 'Result size not provided'

    } else if(inputValues.page_size > 100){
        errors.page_size = 'Please enter a valid result size ranging from 1-100'
    } else if(inputValues.page_size < 1){
        errors.page_size = 'Please enter a valid result size ranging from 1-100'
    }
    return errors
}

export const validateFormInputsTwo = (inputValues) => {
    const errors = {}
    if (!inputValues.page_size) {
        errors.page_size = 'Result size not provided'

    } else if(inputValues.page_size > 100){
        errors.page_size = 'Please enter a valid result size ranging from 1-100'
    } else if(inputValues.page_size < 1){
        errors.page_size = 'Please enter a valid result size ranging from 1-100'
    }
    return errors
}