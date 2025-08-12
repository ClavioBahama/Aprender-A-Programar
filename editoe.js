const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const preview = document.getElementById('preview');
const errorMessage = document.getElementById('error-message');

const styles = {
  ninja: {
    mainTitle: "🌟 Code Amigos: Editor Ninja",
    intro: "👋 Olá, jovem ninja! Eu sou o <strong>Mestre Koda</strong>. Use este editor para criar e visualizar sua <strong>Interface Ninja</strong> com HTML e CSS. Escreva seu código à esquerda e veja o resultado à direita. Vamos dominar o dojo! 🥷",
    cssClass: "story-ninja"
  },
  space: {
    mainTitle: "🌌 Code Amigos: Editor Cósmico",
    intro: "👋 Saudações, jovem astronauta! Eu sou o <strong>Comandante Koda</strong>. Use este editor para criar e visualizar sua <strong>Interface Web Galáctica</strong> com HTML e CSS. Escreva seu código à esquerda e veja o resultado à direita. Vamos codificar o universo! 🚀",
    cssClass: "story-space"
  },
  medieval: {
    mainTitle: "🏰 Code Amigos: Editor Místico",
    intro: "👋 Salve, jovem cavaleiro! Eu sou o <strong>Mestre Koda, o Mago</strong>. Use este editor para criar e visualizar sua <strong>Interface Mística</strong> com HTML e CSS. Escreva seu código à esquerda e veja o resultado à direita. Vamos forjar lendas! 🧙",
    cssClass: "story-medieval"
  }
};

function updatePreview() {
  const html = htmlEditor.value || '<h1>Bem-vindo ao Editor Cósmico!</h1>';
  const css = cssEditor.value || 'h1 { color: white; text-align: center; }';
  const doc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
    </html>
  `;
  try {
    preview.contentDocument.open();
    preview.contentDocument.write(doc);
    preview.contentDocument.close();
    errorMessage.textContent = '';
  } catch (e) {
    errorMessage.textContent = 'Erro no CSS: Verifique sua sintaxe!';
  }
}

function saveCode() {
  localStorage.setItem('htmlCode', htmlEditor.value);
  localStorage.setItem('cssCode', cssEditor.value);
  alert('Código salvo com sucesso!');
}

function loadCode() {
  const htmlCode = localStorage.getItem('htmlCode') || '';
  const cssCode = localStorage.getItem('cssCode') || '';
  htmlEditor.value = htmlCode;
  cssEditor.value = cssCode;
  updatePreview();
}

function resetCode() {
  htmlEditor.value = '';
  cssEditor.value = '';
  updatePreview();
}

function changeStoryStyle(style) {
  document.body.setAttribute('data-story-style', style);
  document.body.className = `story-${style}`;
  document.querySelector('h1').textContent = styles[style].mainTitle;
  document.querySelector('.intro').innerHTML = styles[style].intro;
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌞';
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
  }
}

htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);

document.addEventListener('DOMContentLoaded', () => {
  changeStoryStyle('space');
  loadCode();
});