

const formValidation = (name, value) => {
    let error = '';
    switch (name) {

        case 'name':
            if (!value) {
                error = 'Name is required.';
            } else if (!/^[a-zA-ZåäöüÅÄÖÜ ]{1,100}$/.test(value)) {
                error = 'Name can contain 1-100 characters and only letters.';
            }
        break;

        case 'email':
            if (!value) {
                error = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Email is invalid.';
            }
        break;

        case 'phone':
            if (!value) {
                break;
            } else if (!/^[0-9]+$/.test(value)) {
                error = 'Phone number can only contain numbers.';
            }
        break;

        case 'subject':
            if (!value) {
                error = 'Subject is required';
            } else if (!/^.{1,100}$/.test(value)) {
                error = 'Subject can contain 1-100 characters. Current length: ' + value.length;
            }
        break;

        case 'message':
            if (!value) {
                error = 'Message is required';
            } else if (!/^.{1,1000}$/.test(value)) {
                error = 'Message can contain 1-1000 characters. Current length: ' + value.length;
            }
        break;

        default:
        break;
    }
    return error;
}

export default formValidation;