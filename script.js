// Smooth scroll to Cars section
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
});

// Dark mode toggle with localStorage
const themeToggle = document.getElementById('themeToggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});


// Toggle chatbot window
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

// Basic AI logic (demo)
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
    const userMessage = chatbotInput.value.trim();
    chatbotMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;
    chatbotInput.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    setTimeout(() => {
      let reply = 'Sorry, I didn’t get that.';
      if (userMessage.toLowerCase().includes('electric')) {
        reply = 'We have the Nexon EV and Tiago EV available!';
      } else if (userMessage.toLowerCase().includes('book')) {
        reply = 'Sure! Visit the Contact section or fill the form.';
      } else if (userMessage.toLowerCase().includes('price')) {
        reply = 'All prices are listed under the Cars section!';
      }

      chatbotMessages.innerHTML += `<div class="bot-message">${reply}</div>`;
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 600);
  }
});
