const showSocial = document.querySelectorAll('#showSocial')
const arrowShow = document.querySelectorAll('#arrowShow')
const socNet = document.querySelectorAll('.container__social')
const buttonBack = document.querySelector('#buttonBack')
const contentScreen = document.querySelectorAll('.container__screen')
const nextContent = document.querySelectorAll('#nextContent')
const backScreen = document.querySelectorAll('#backScreen')
const inputSetCode = document.querySelectorAll('.code__set')

counter = 0

// focus on next and previous element
inputSetCode.forEach((element) => {
    element.addEventListener('input', () => {
        if (element.value != '') {
            if (element.nextElementSibling == null) {
                return null
            }
            else {
                element.nextElementSibling.focus()
            }
        }
        if (element.value == '') {
            if (element.previousElementSibling == null) {
                return null
            }
            else {
                element.previousElementSibling.focus()
            }
        }
    })
})

// swap content
nextContent.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        if (counter == contentScreen.length - 1) {
            return null
        }
        else {
            const prevContent = contentScreen[counter]
            prevContent.classList.add('display__none')
            counter += 1
            const newContent = contentScreen[counter] 
            newContent.classList.remove('display__none')
        }
    })
})

backScreen.forEach((element) => {
    element.addEventListener('click', () => {
        if (counter == 0) {
            return null
        }
        else {
            const prevContent = contentScreen[counter]
            prevContent.classList.add('display__none')
            counter -= 1
            const newContent = contentScreen[counter]
            newContent.classList.remove('display__none')
        }
    })
})


// button back desktop
buttonBack.addEventListener('click', () => {
    window.history.back()
})

// social visible content
showSocial.forEach((element) => {
    element.addEventListener('click', () => {
        arrowShow.forEach((element) => {
            element.classList.toggle('active')
        })
        socNet.forEach((element) => {
            element.classList.toggle('visibleOpacity')
        })
        socNet.forEach((element) => {
            element.classList.toggle('nonVisibleOpacity')
        })
    })
})