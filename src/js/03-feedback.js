import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
 
function onFormSubmit(e) {
    e.preventDefault();
    if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
         alert('Введите текст')
    } 
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);  
    formData[refs.input.name] = '';
    formData[refs.textarea.name] = '';
    
}

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));      
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
        if (savedMessage) {        
            if (parsedMessage.email) {
                refs.input.value = parsedMessage.email;
                formData[refs.input.name] = parsedMessage.email;

            }
            if (parsedMessage.message) {
                refs.textarea.value = parsedMessage.message;
                formData[refs.textarea.name] = parsedMessage.message;
            }
    }
};
populateTextarea();



// if (parsedMessage) {
//       formData = parsedMessage;
//       refs.input.value = formData.email || '';
//       refs.textarea.value = formData.message || '';
//     }