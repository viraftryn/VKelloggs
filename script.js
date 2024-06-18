document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector('.burger')
    const middle = document.querySelector('.middle')
    const inner = document.querySelector('.inner')

    burger.addEventListener('click', () => {
        middle.style.display = 'block'
        inner.style.right = '0'
    })

    middle.addEventListener('click', () => {
        middle.style.display = 'none'
        inner.style.right = '-100%'
    })

    const dropdown = document.querySelector(".dropdown")
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".menu")
    const options = dropdown.querySelectorAll(".menu li")
    const selected = dropdown.querySelector(".selected")
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked")
        caret.classList.toggle("caret-rotate")
        menu.classList.toggle("menu-open")
    })
    options.forEach(option => {
        option.addEventListener("click", () => {
        selected.innerText = option.innerText
        select.classList.remove("select-clicked")
        caret.classList.remove("caret-rotate")
        menu.classList.remove("menu-open")
        options.forEach(option => {
            option.classList.remove("active")
        })
        option.classList.add("active")
        })
    })

    const sections = document.querySelectorAll(".info-about")
    const prevButtons = document.querySelectorAll(".controls svg:first-child")
    const nextButtons = document.querySelectorAll(".controls svg:last-child")

    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    function prevSection() {
        currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
        showSection(currentIndex);
    }

    function nextSection() {
        currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
        showSection(currentIndex);
    }

    prevButtons.forEach(button => button.addEventListener("click", prevSection));
    nextButtons.forEach(button => button.addEventListener("click", nextSection));

    showSection(currentIndex);

    const elementsToAnimate = document.querySelectorAll(".animate-on-observe")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active")
                } else {
                    entry.target.classList.remove("active")
                }
            })
        })
    
        elementsToAnimate.forEach((element) => observer.observe(element))

        document.getElementById('submitBtn').addEventListener('click', function (event) {
            event.preventDefault();
            let isValid = true;
        
            const firstName = document.getElementById('firstName').value.trim()
            const firstNameError = document.getElementById('firstNameError')
            if (firstName.length < 2) {
                firstNameError.textContent = '*First name must be at least 2 characters long'
                firstNameError.style.display = 'block'
                isValid = false;
            } else {
                firstNameError.style.display = 'none'
            }
        
            const lastName = document.getElementById('lastName').value.trim()
            const lastNameError = document.getElementById('lastNameError')
            if (lastName.length < 2) {
                lastNameError.textContent = '*Last name must be at least 2 characters long'
                lastNameError.style.display = 'block'
                isValid = false
            } else {
                lastNameError.style.display = 'none'
            }
        
            const email = document.getElementById('email').value.trim()
            const emailError = document.getElementById('emailError')
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailPattern.test(email)) {
                emailError.textContent = '*Email address is not valid'
                emailError.style.display = 'block'
                isValid = false
            } else {
                emailError.style.display = 'none'
            }
        
            const phoneNumber = document.getElementById('phoneNumber').value.trim()
            const phoneNumberError = document.getElementById('phoneNumberError')
            const phonePattern = /^[0-9]+$/
            if (!phonePattern.test(phoneNumber)) {
                phoneNumberError.textContent = '*Phone number is not valid'
                phoneNumberError.style.display = 'block'
                isValid = false
            } else {
                phoneNumberError.style.display = 'none'
            }
        
            const message = document.getElementById('message').value.trim()
            const messageError = document.getElementById('messageError')
            if (message === '') {
                messageError.textContent = '*Message cannot be empty'
                messageError.style.display = 'block'
                isValid = false;
            } else {
                messageError.style.display = 'none'
            }
        
            if (isValid) {
                alert('Form submitted successfully!')
            }
        })
        
})