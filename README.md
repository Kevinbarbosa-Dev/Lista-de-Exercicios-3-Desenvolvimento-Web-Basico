# 📘 Lista de Exercícios 3 – Desenvolvimento Web Básico

Este repositório contém os arquivos desenvolvidos como parte da **Lista de Exercícios 3** da disciplina de Desenvolvimento Web Básico. O objetivo é praticar o uso de HTML semântico, CSS, formulários, listas, navegação, Flexbox, Grid e responsividade.

## 🧱 Estrutura dos Exercícios

### 1. Página Principal – `index.html`
Criação de uma estrutura básica utilizando tags **semânticas**:
- `<header>` com um `<h1>` (título) e um `<p>` introdutório.
- `<main>` dividido em duas seções:
  - **Missão**: com `<h2>` e `<p>`.
  - **Visão**: com `<h2>` e `<p>`.
- `<footer>` com um `<p>` de copyright.

### 2. Listas e Navegação – `listas.html`
- Lista **não ordenada** (`<ul>`) com 5 hobbies pessoais.
- Lista **ordenada** (`<ol>`) com passos para preparar uma receita simples.
- Bloco de **navegação** (`<nav>`) com 3 links externos.

### 3. Formulário de Feedback – `feedback.html`
Formulário com os seguintes campos:
- Nome
- E-mail
- Endereço completo
- Tipo de feedback (ex: sugestão, reclamação)
- Campo para o conteúdo do feedback
- Botão de envio

### 4. CSS Básico e Box Model – `styles.css`
Estilização aplicada ao `index.html`:
- Definições de **cores de fundo** e **cores de texto** para `<header>`, `<main>` e `<footer>`.
- Aplicação de **margin**, **padding** e **borda** para evidenciar as seções.

### 5. Seletores e Propriedades
Ainda no `styles.css`, foram adicionados:
- Estilo para todos os `<h2>`:
  - Aumento de `font-size`
  - `text-decoration: underline`
- Classe `.destaque`:
  - Texto em **itálico**
  - Leve **background-color**
- ID `#importante`:
  - `border-top` mais espessa aplicada a um `<p>` específico

### 6. Exercício com Grid e Flexbox
- Galeria com 8 imagens e legendas organizadas com **CSS Grid**.
- Galeria envolvida em um contêiner centralizado com **Flexbox**.
- Layout responsivo com **media query** para ajustar o número de colunas em telas menores.

### 7. Menu Hamburger
- Menu "hamburger" visível apenas em telas com largura ≤ 600px.
- O menu padrão é ocultado e o botão permite abrir/fechar a navegação.

---
