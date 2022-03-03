const dropDown = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let arrowDown = document.querySelector('#arrow_down')
let counter = 0;

const buttonBack = document.querySelector('#button_back')
const buttonsShiftNextContent = document.querySelectorAll('[data-shift-content]')
const buttonsShiftPrevContent = document.querySelectorAll('[data-shift-back]')
const buttonShiftNextReg = document.querySelectorAll('[data-shift-reg]')
const buttonShiftBackReg = document.querySelectorAll('[data-back-reg]')
const buttonConfirm = document.querySelector('[data-error-button]')
const sukaBlyat = document.querySelector('[data-suka]')
const backFromReg = document.querySelectorAll('#back_from_reg')
const backToTheFirst = document.querySelector('[data-back-reg="2"]')

const codeChangePassword = document.querySelectorAll('[tabindex]')

const passwordInput = document.querySelectorAll('[data-password]')
const errorPassword = document.querySelector('[data-error="2"]')
const eye = document.querySelectorAll('[data-show-password]')

const pagesContent = document.querySelectorAll('.section__align')
const buttonReg = document.querySelectorAll('#button__create')

dropDown.addEventListener('click', () => {
    social.classList.toggle('animate')
    arrowDown.classList.toggle('arrow__animate')
})

buttonBack.addEventListener('click', () => {
    window.history.back()
})

// swap content with node lists

sukaBlyat.addEventListener('click', (event) => {
    event.preventDefault();
    counter = 3;
})

backToTheFirst.addEventListener('click', (event) => {
    const prevContent = pagesContent[counter]
    prevContent.classList.add('display__none')
    counter = 0;
    const newContent = pagesContent[counter + 1]
    newContent.classList.remove('display__none')
})

backFromReg.forEach(element => {
    element.addEventListener('click', (event) => {
        counter -= 1
        console.log(counter)
        const prevContent = pagesContent[counter + 1]
        prevContent.classList.add('display__none')
        if (counter > 3) {
            const newContent = pagesContent[counter]
            newContent.classList.remove('display__none')
        }
        else if (counter == -1) {
            counter = 0;
            const prevContent = pagesContent[counter + 1]
            prevContent.classList.add('display__none')
            const newContent = pagesContent[counter]
            newContent.classList.remove('display__none')
        }
    })
})

buttonReg.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        counter += 1
        console.log(counter)
        const firstScreen = pagesContent[counter - 4]
        firstScreen.classList.add('display__none')
        const prevContent = pagesContent[counter - 1]
        prevContent.classList.add('display__none')
        const newContent = pagesContent[counter]
        newContent.classList.remove('display__none')
    })
})

buttonsShiftNextContent.forEach(element => {
    element.addEventListener('click', (event) => {
        counter += 1
        const prevContent = pagesContent[counter - 1]
        prevContent.classList.add('display__none')
        const newContent = pagesContent[counter]
        newContent.classList.remove('display__none')
    })
})

buttonsShiftPrevContent.forEach(element => {
    element.addEventListener('click', (event) => {
        counter -= 1
        const prevContent = pagesContent[counter]
        prevContent.classList.remove('display__none')
        const newContent = pagesContent[counter + 1]
        newContent.classList.add('display__none')
    })
})

codeChangePassword.forEach((element) => {
    element.addEventListener('input', () => {
        if (element.value.length != 0) {
            element.nextElementSibling.focus();
        }
    })
})

codeChangePassword.forEach((element) => {
    element.addEventListener('input', () => {
        if (element.value.length == 0) {
            element.previousElementSibling.focus();
        }
    })
})
// eye

eye.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        let inputElement = document.querySelector(`[data-password='${target.dataset.showPassword}']`)
        element.classList.toggle('eye__path')
        if (inputElement.getAttribute('type') == 'password') {
            inputElement.setAttribute('type', 'text')
        }
        else if (inputElement.getAttribute('type') == 'text') {
            inputElement.setAttribute('type', 'password')
        }
    })
})

// error validation
buttonConfirm.addEventListener('click', (event) => {
    let inputValues = document.querySelector('[data-error="1"]').value
    let inputSecondValues = document.querySelector('[data-error="2"]').value
    if (inputValues != inputSecondValues) {
        errorPassword.classList.add('input__err')
    }
    else {
        errorPassword.classList.add('input__acs')
    }
})

