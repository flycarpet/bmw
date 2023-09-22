document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("km-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const currentKm = formData.get("currentKm");
        result.textContent = `Huidige Kilometerstand: ${currentKm}`;
    });
});
