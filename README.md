# 🎤 Speak Up Club

**Speak Up** is a modern, inclusive web platform designed to help shy and non-native English speakers find their voice. It provides a safe, judgment-free environment for members to practice speaking, engage in debates, and build confidence through community support.

![Speak Up Hero Section](speak%20up%20logo.jpg)

## 🚀 Features

- **🌐 Multi-Language Support:** Full translation support for **English**, **Arabic**, and **French** with a seamless language switcher.
- **🌗 Dark/Light Mode:** A built-in theme toggle for a comfortable viewing experience in any lighting.
- **📱 Fully Responsive:** Optimized key layouts for desktop, tablet, and mobile devices.
- **✨ Modern UI/UX:** Features smooth sound-wave animations, glassmorphism effects, and interactive elements.
- **📝 Registration System:** Integrated contact form powered by **Supabase** for secure data storage.
- **🔐 Admin Dashboard:** A protected administration panel to manage registrations, view submissions, and track club growth.
- **💬 Social Integration:** Direct links to community channels on Instagram, TikTok, Facebook, and Telegram.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom styling with CSS variables for theming and animations.
- **JavaScript (ES6+):** Logic for state management, language switching, and form handling.
- **Lucide Icons:** Lightweight and beautiful SVG icons.
- **Supabase:** Backend-as-a-Service for database management and authentication.

## 📂 Project Structure

```bash
speakUp-club/
├── index.html          # Main landing page
├── admin.html          # Administration dashboard
├── styles.css          # Main styles and animations
├── admin.css           # Admin-specific styling
├── script.js           # Core landing page logic
├── admin.js            # Admin panel logic & Auth
├── content.js          # Translation dictionaries (EN, AR, FR)
├── manifest.json       # Web App Manifest for mobile support
├── supabase_schema.sql # Database schema for Supabase setup
├── speak up logo.jpg   # Project logo/favicon
└── README.md           # Project documentation
```

## ⚙️ Setup & Configuration

This project uses **Supabase** for storing registrations and managing the admin panel.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/speakup-club.git
    cd speakup-club
    ```

2.  **Supabase Setup:**
    *   Create a new project on [Supabase](https://supabase.com/).
    *   Run the queries in `supabase_schema.sql` in your Supabase SQL Editor to create the `registrations` table.
    *   Open `script.js` and `admin.js`.
    *   Replace the placeholder URL and Anon Key with your own project credentials:
        ```javascript
        const SUPABASE_URL = 'https://your-project-id.supabase.co';
        const SUPABASE_KEY = 'your-anon-key';
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
