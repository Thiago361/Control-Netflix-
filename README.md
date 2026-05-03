
---

# 📺 Netflix Controller: Educational Extension

![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Chrome Extension](https://img.shields.io/badge/Platform-Chrome%20Extension-blue)
![License](https://img.shields.io/badge/License-MIT-red)

Uma extensão leve e didática projetada para explorar o poder da **Chrome Extensions API (Manifest V3)**. O projeto foca em demonstrar como interagir programaticamente com o DOM e elementos de mídia em aplicações web complexas.

> [!IMPORTANT]
> **Fins Educacionais:** Este repositório foi criado exclusivamente para estudo de injeção de scripts e manipulação de DOM.
---

## 🚀 O que este projeto demonstra?

O objetivo principal não é apenas o controle da plataforma, mas a aplicação prática de conceitos de engenharia de software para navegadores:

*   **Script Injection:** Uso da API `chrome.scripting` para executar código em contextos isolados.
*   **Runtime Messaging:** Comunicação assíncrona entre o **Popup** (UI) e o **Content Script** (Contexto da página).
*   **DOM Mastery:** Técnicas de seleção e remoção dinâmica de elementos (modais de restrição).
*   **Media Interaction:** Controle programático da instância do player de vídeo HTML5.

---

## ✨ Funcionalidades Principais

| Categoria | Descrição |
| :--- | :--- |
| 🛡️ **Bypass Didático** | Demonstração de remoção de overlays de restrição de residência. |
| ⏯️ **Playback** | Controle de Play/Pause via interface externa. |
| 🔊 **Áudio** | Ajuste de volume e função Mute/Unmute. |
| 🖥️ **Display** | Alternância rápida para modo tela cheia (Fullscreen). |

---

## 🛠️ Stack Técnica

*   **Core:** HTML5, CSS3 (Modern Flexbox) e JavaScript (Vanilla).
*   **API:** Chrome Extensions Manifest V3.
*   **Permissões:** `tabs`, `scripting` e filtros de `host_permissions`.

---

## 📂 Estrutura de Arquivos
```bash
netflix-controller/
├── manifest.json   # Cérebro da extensão e definições de permissões
├── index.html      # Interface visual do Popup
├── index.css       # Estilização moderna da UI
├── script.js       # Lógica de controle e comunicação de mensagens
└── README.md       # Documentação do projeto
```

---

⚙️ Como Instalar (Modo Desenvolvedor)
Clone o projeto:

```bash
git clone [https://github.com/Thiago361/Control-Netflix-.git](https://github.com/Thiago361/Control-Netflix-.git)
```
Acesse as extensões: No Chrome, vá para chrome://extensions/.

Developer Mode: Ative a chave Modo do desenvolvedor no canto superior direito.

Carregue o projeto: Clique em Carregar sem compactação e selecione a pasta raiz do repositório.

Teste: Abra a Netflix e utilize o ícone da extensão na sua barra de ferramentas.

---

⚠️ Disclaimer & Segurança
Este software é um Proof of Concept (PoC). O uso de extensões para modificar o comportamento de sites de terceiros pode violar os Termos de Serviço da plataforma.

Não utilize em contas principais.

O autor não se responsabiliza por sanções aplicadas pela plataforma.

O foco aqui é o aprendizado de código, não a pirataria ou evasão sistemática de recursos.

---

🤝 Contribuições
Adoraria ver como você pode melhorar este controle! Sinta-se à vontade para:

Abrir Issues para reportar bugs.

Enviar Pull Requests com novas funcionalidades (ex: controle de legendas, ajuste de velocidade).

---

Desenvolvido com ☕ e foco em aprendizado.