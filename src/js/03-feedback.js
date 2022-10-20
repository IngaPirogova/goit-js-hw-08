import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};
     console.log(refs.form)
    
 refs.form.addEventListener('submit', onFormSubmit);
 refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
 
 
populateTextarea();

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(message));  
    
}

function onFormSubmit(e) {
    e.preventDefault();

    if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
         alert('Введите текст')
    }

    console.log('Отправка формы')
    e.target.reset();
    localStorage.removeItem('STORAGE_KEY');
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('STORAGE_KEY');
    
    
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
};

const formData = {};
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    
    console.log(formData);       
});
