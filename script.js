const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');
const aboutText = document.getElementById('aboutText');
const aboutInput = document.getElementById('aboutInput');
const emailText = document.getElementById('emailText');
const emailInput = document.getElementById('emailInput');
const phoneText = document.getElementById('phoneText');
const phoneInput = document.getElementById('phoneInput');

editBtn.addEventListener('click', () => {
    aboutInput.value = aboutText.innerText;
    emailInput.value = emailText.innerText;
    phoneInput.value = phoneText.innerText;
    
    aboutText.style.display = 'none';
    emailText.style.display = 'none';
    phoneText.style.display = 'none';
    editBtn.style.display = 'none';

    aboutInput.style.display = 'block';
    emailInput.style.display = 'block';
    phoneInput.style.display = 'block';
    saveBtn.style.display = 'block';
});

saveBtn.addEventListener('click', () => {
    aboutText.innerText = aboutInput.value;
    emailText.innerText = emailInput.value;
    phoneText.innerText = phoneInput.value;

    aboutText.style.display = 'block';
    emailText.style.display = 'block';
    phoneText.style.display = 'block';
    editBtn.style.display = 'block';

    aboutInput.style.display = 'none';
    emailInput.style.display = 'none';
    phoneInput.style.display = 'none';
    saveBtn.style.display = 'none';
});
