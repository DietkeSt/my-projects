function sendMail(contactForm) {
    const submitButton = contactForm.querySelector('#submitButton');

    emailjs.send("service_98c6jtu", "resume", {
            "from_name": contactForm.name.value,
            "reply_to": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);

                contactForm.reset();

                const successMessage = document.createElement('p');
                successMessage.textContent = "Email sent successfully!";
                successMessage.classList.add('success-message');

                // Append the success message to the form container
                contactForm.closest('.contact-form').appendChild(successMessage);

                // Display success message inside the submit button
                submitButton.innerHTML = '<i class="fas fa-check"></i> Success!';
                submitButton.classList.remove('btn-primary');
                submitButton.classList.add('btn-success');

                // Optional: Reset button text and styles after a few seconds
                setTimeout(() => {
                    successMessage.remove();
                    submitButton.innerHTML = 'Submit';
                    submitButton.classList.remove('btn-success');
                    submitButton.classList.add('btn-primary');
                }, 10000);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}