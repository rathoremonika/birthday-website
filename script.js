document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message");
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = "1";
        }, index * 3000); // Show each message every 3 seconds
    });
});

