function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput) {
    displayUserMessage(userInput);
    setTimeout(() => {
      botResponse(userInput);
    }, 500);
  }
}

function displayUserMessage(message) {
  const chatBody = document.getElementById("chat-body");
  const userMessage = document.createElement("div");
  userMessage.className = "chat-message user-message";
  userMessage.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(userMessage);
  document.getElementById("user-input").value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botResponse(message) {
  const chatBody = document.getElementById("chat-body");
  const botMessage = document.createElement("div");
  botMessage.className = "chat-message bot-message";

  let botText = "";

  if (message.toLowerCase() === "hi" || message.toLowerCase() === "hello") {
    botText = "Welcome to Habib Tours!";
  } else {
    botText = `
        Here are our contact details:<br>
        📧 Email: habibtoursgzb9@gmail.com<br>
        📞 Phone: +91 97164 49755
      `;
  }

  botMessage.innerHTML = `
      <img src="chatbot.png" alt="Chatbot" class="bot-image">
      <p>${botText}</p>
    `;

  chatBody.appendChild(botMessage);
  chatBody.scrollTop = chatBody.scrollHeight;
}
