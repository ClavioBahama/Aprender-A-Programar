let score = 0;
const totalQuestions = 32;
const salas = 13;
let completedSalas = new Set();

function checkAnswer(inputId, correctAnswer, hint, msgId, salaId) {
  const user = document.getElementById(inputId).value.trim().replace(/\s+/g, ' ');
  const msg = document.getElementById(msgId);
  if (user === "") {
    msg.innerHTML = "<span class='incorrect'>Por favor, digite sua resposta.</span>";
    return;
  }
  const isNumericAnswer = (typeof correctAnswer === 'number');
  let isCorrect = false;
  if (isNumericAnswer) {
    const userNum = Number(user.replace(',', '.'));
    isCorrect = !isNaN(userNum) && userNum === Number(correctAnswer);
  } else {
    isCorrect = user.toLowerCase() === String(correctAnswer).toLowerCase();
  }
  if (isCorrect) {
    updateScore(inputId, msg, salaId);
  } else {
    msg.innerHTML = `❌ <span class='incorrect'>Incorreto.</span> Dica: ${hint}`;
  }
}

function updateScore(inputId, msg, salaId) {
  const input = document.getElementById(inputId);
  if (!input.dataset.answered) {
    score++;
    input.dataset.answered = 'true';
    document.getElementById('score').textContent = score;
    const progressPercent = (score / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;
    checkSalaCompletion(salaId);
  }
  msg.innerHTML = "👍 <span class='correct'>Correto!</span>";
}

function checkSalaCompletion(salaId) {
  const salaQuestions = document.querySelectorAll(`#${salaId} .questao input`);
  const allAnswered = Array.from(salaQuestions).every(input => input.dataset.answered);
  if (allAnswered && !completedSalas.has(salaId)) {
    completedSalas.add(salaId);
    const selo = document.querySelector(`.selo[data-sala="${salaId}"]`);
    if (selo) selo.classList.add('unlocked');
  }
}

function showHint(msgId, hint) {
  const msg = document.getElementById(msgId);
  msg.innerHTML = `<span style="color: #666">Dica: ${hint}</span>`;
}

function resetAnswer(inputId, msgId) {
  const input = document.getElementById(inputId);
  input.value = '';
  document.getElementById(msgId).innerHTML = '';
}

function resetAll() {
  if (confirm("Tem certeza que deseja resetar toda a jornada? Sua pontuação e selos serão perdidos.")) {
    score = 0;
    completedSalas.clear();
    document.getElementById('score').textContent = score;
    document.getElementById('progress').style.width = '0%';
    document.querySelectorAll('.questao input').forEach(input => {
      input.value = '';
      input.dataset.answered = '';
    });
    document.querySelectorAll('.feedback').forEach(msg => msg.innerHTML = '');
    document.querySelectorAll('.selo').forEach(selo => selo.classList.remove('unlocked'));
  }
}

function scrollToSala(salaId) {
  if (salaId) {
    const sala = document.getElementById(salaId);
    sala.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function initSeloTracker() {
  const tracker = document.getElementById('selo-tracker');
  for (let i = 1; i <= salas; i++) {
    const selo = document.createElement('div');
    selo.className = 'selo';
    selo.dataset.sala = `sala${i}`;
    selo.textContent = `Sala ${i}`;
    tracker.appendChild(selo);
  }
}

function initParticles() {
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particlesContainer.appendChild(particle);
  }
}

window.onload = () => {
  initSeloTracker();
  initParticles();
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
};