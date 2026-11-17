# Code Amigos — A Aventura do Código Python

Materiais e editor para aprender HTML/CSS/JavaScript.

**Stack:** HTML · CSS · JavaScript

**Documentação:**
- [Issue de organização](https://github.com/ClavioBahama/Aprender-A-Programar/issues/1) — revisão e sugestões

---

## 0. Pré-requisitos

Navegador moderno (Chrome, Edge ou Firefox).
Opcional: Node.js (`npx serve`) ou Python para servir a pasta localmente.

## 1. Instalação e Execução

```powershell
npx serve .   # servir a pasta em `http://localhost:3000`
python -m http.server 8000   # alternativa sem Node.js — abrir `http://localhost:8000`
```

## 2. Estrutura do Projeto

```text
Aprender-A-Programar/
├── index.html      # índice
├── html.html       # lição de HTML
├── CSS.html        # lição de CSS
├── editor.html     # editor de código
├── script.js
├── editoe.js
├── style.css
└── editor.css
```

## 3. Funcionalidades

- Páginas de lições de HTML e CSS.
- Editor de código embutido (`editor.html`).
- Projeto educacional sem build.

## 4. Arquivos e pontos de entrada

- `index.html` — índice das lições.
- `editor.html` — editor interativo.

## 5. Segurança

Projeto estático: nenhuma credencial identificada no repositório.

## 6. Problemas Comuns

Abrir os arquivos com `file://` pode bloquear CSS/JS em alguns navegadores — use um servidor local.
Nomes de arquivos com acentos ou espaços precisam de codificação de URL.

## 7. Observações (organização)

> Revisão realizada em 17/11/2026 durante a padronização dos repositórios, inspirada no README do FreelaMZ.
- Projeto educacional com páginas de lições e um editor.
- Sugestão: corrigir a grafia de `editoe.js` para `editor.js` (com cuidado, pois pode haver referências).

## 8. Licença

Projeto pessoal/acadêmico. Verifique a licença de templates ou bibliotecas de terceiros antes de uso comercial.

