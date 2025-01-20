document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".message-card");

    // Debugging: Log the elements to ensure they are being selected
    console.log("Messages found:", messages);

    if (messages.length === 0) {
        console.error("No elements with class 'message-card' found!");
        return;
    }

    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add("visible");
        }, index * 1000); // Stagger messages by 1 second
    });
});
