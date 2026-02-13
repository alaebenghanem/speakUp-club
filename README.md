# 🎤 Speak Up Club

**Speak Up** is a modern, inclusive web platform designed to help shy and non-native English speakers find their voice. It provides a safe, judgment-free environment for members to practice speaking, engage in debates, and build confidence through community support.

![Speak Up Hero Section](speak%20up%20logo.jpg)

## 🚀 Features

- **🌐 Multi-Language Support:** Full translation support for **English**, **Arabic**, and **French** with a seamless language switcher.
- **🌗 Dark/Light Mode:** A built-in theme toggle for a comfortable viewing experience in any lighting.
- **📱 Fully Responsive:** Optimized key layouts for desktop, tablet, and mobile devices.
- **✨ Modern UI/UX:** Features smooth sound-wave animations, glassmorphism effects, and interactive elements.
- **📝 Registration System:** Integrated contact form capable of sending registrations directly to email via **EmailJS**.
- **💬 Social Integration:** Direct links to community channels on Instagram, TikTok, Facebook, and Telegram.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom styling with CSS variables for theming and animations.
- **JavaScript (ES6+):** Logic for state management, language switching, and form handling.
- **Lucide Icons:** Lightweight and beautiful SVG icons.
- **EmailJS:** Serverless email functionality for the registration form.

## 📂 Project Structure

```bash
speakUp-club/
├── index.html          # Main HTML structure
├── styles.css          # All styling, themes, and animations
├── script.js           # Core logic (Theme, Lang, Form handling)
├── content.js          # Translation dictionaries (EN, AR, FR)
├── manifest.json       # Web App Manifest for mobile support
├── speak up logo.jpg   # Project logo/favicon
└── README.md           # Project documentation
```

## ⚙️ Setup & Configuration

This is a static website, so it requires no backend server. However, to make the **Contact Form** work, you need to configure **EmailJS**.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/speakup-club.git
    cd speakup-club
    ```

2.  **Configure EmailJS:**
    *   Open `script.js`.
    *   Locate the `emailjs.init` and `emailjs.send` functions.
    *   Replace the placeholder strings with your actual API keys from the [EmailJS Dashboard](https://www.emailjs.com/):
        ```javascript
        // In script.js
        emailjs.init("YOUR_PUBLIC_KEY");
        // ...
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        ```

3.  **Run Locally:**
    *   Simply open `index.html` in any modern web browser.
    *   Or use a live server extension (like Live Server in VS Code) for the best experience.

## 🌍 Deployment

Since this is a static site, it can be deployed easily on platforms like:
*   **Netlify** (Drag and drop the folder)
*   **Vercel**
*   **GitHub Pages**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/speakup-club/issues).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
