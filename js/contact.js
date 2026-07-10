const form = document.getElementById("contactForm");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            result.style.color = "#16a34a";
            result.innerHTML = "✅ Message sent successfully!";
            form.reset();
        } else {
            result.style.color = "#dc2626";
            result.innerHTML = "❌ " + (data.message || "Something went wrong.");
        }

    } catch (error) {
        result.style.color = "#dc2626";
        result.innerHTML = "❌ Network error. Please try again.";
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Message";
});