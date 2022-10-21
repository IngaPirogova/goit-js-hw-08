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
 

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));      
}

function onFormSubmit(e) {
    console.log(JSON.parse(localStorage.getItem('STORAGE_KEY')));

    e.preventDefault();

    if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
         alert('Введите текст')
    }

    console.log('Отправка формы')
    e.target.reset();
    localStorage.removeItem('STORAGE_KEY');    
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    
    if (savedMessage) {
        
        refs.textarea.value = savedMessage.message;
        refs.input.value = savedMessage.email;
    }
};
populateTextarea();


