const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact Form Backend Connection

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {
            contactForm.reset();
        }

    } catch (error) {

        alert("Something went wrong!");

        console.error(error);

    }

});