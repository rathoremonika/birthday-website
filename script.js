document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message-card");
    if (messages.length === 0) {
        console.error("No elements with class 'message-card' found!");
        return;
    }
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add("visible");
        }, index * 1000); // Each message appears 1 second apart
    });
});
