document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message-card");
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add("visible");
        }, index * 1000); // Stagger messages by 1 second
    });
});

