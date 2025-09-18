# SMB_Renovation 🌟

Welcome to **SMB_Renovation** – your ultimate destination for modern, stylish, and high-quality renovation solutions! 🏡✨  

This website showcases our expertise in **home and villa renovations**, delivering **beautiful, functional, and durable spaces** with a touch of elegance and modern design.  

---

## 🚀 Project Overview

**SMB_Renovation** is a fully responsive, interactive, and visually appealing website created to highlight the services of a professional renovation business. The website combines **modern web technologies** like **HTML5, CSS3, Tailwind CSS, JavaScript, and Node.js** for a seamless user experience.  

Visitors can explore our wide range of services, learn about our expertise, view a gallery of projects, and contact us directly through a **fully functional contact form**.

---

## 💼 Features

- **Fully Responsive Design** – Works beautifully on desktops, tablets, and mobiles.  
- **Modern UI/UX** – Sleek animations, hover effects, and elegant layouts.  
- **Services Showcase** – Detailed information about **kitchen, bathroom, villa renovations, swimming pools**, and more.  
- **Interactive Contact Form** – Send messages directly from the website to our email.  
- **Gallery Section** – Showcase of completed projects with subtle animations.  
- **Tailored Customization** – Website sections are modular and easy to update.  
- **AOS Animations** – Smooth scroll animations for better engagement.  

---

## 🛠 Technologies Used

- **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Email Automation:** Nodemailer  
- **Other Tools:** PostCSS, AOS (Animate On Scroll), Font Awesome icons  

---

## 📂 Folder Structure

```plaintext
SMB_Renovation/                     # Main project folder
│
├── frontend/                       # All frontend related files for website UI
│   ├── assets/                     # Images, logos, icons used in the website
│   ├── node_modules/               # Frontend dependencies installed via npm (Tailwind CSS, PostCSS, Autoprefixer, etc.)
│   ├── package.json                # Frontend project config and dependencies
│   ├── package-lock.json           # Auto-generated lock file for frontend dependencies
│   ├── index.html                  # Main homepage of the website
│   ├── detail.html                 # Additional pages (services, projects, etc.)
│   ├── style.css                   # Tailwind CSS + custom styling
│   ├── script.js                   # Frontend JavaScript (menu toggle, animations, contact form fetch)
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   └── postcss.config.js           # PostCSS configuration for Tailwind
│
├── backend/                        # Backend server for handling contact form submissions
│   ├── node_modules/               # Backend dependencies installed via npm (Express, Nodemailer, body-parser, cors)
│   ├── package.json                # Backend project config and dependencies
│   ├── package-lock.json           # Auto-generated lock file for backend dependencies
│   └── setupServer.js              # Script to auto-create server.js if missing and start backend
│
└── README.md                        # Project documentation with setup, usage, features, and instructions
```
## 🖌 Design Highlights

- Elegant gradient backgrounds and modern color palette

- Smooth hover animations (scale-101 or scale-102, shadow, transition)

- Image galleries with subtle zoom and fade effects

- Clean typography for readability and aesthetics

- Fully mobile-friendly layout with flexible grids

## 📧 Contact Form Setup

- Uses Node.js backend with Express

- Emails sent via Gmail SMTP (Nodemailer)

- Reply-To automatically set to user email for direct responses

- Validates user input for name, email, subject, and message

- Fully responsive and interactive on all devices

- User-friendly setup: If server.js is deleted, the backend will auto-create it on npm start

## ⚡ How to Run Backend (Auto-create server)

1. Open terminal in the backend folder:
```
cd backend
```

2. Install dependencies:
```
npm install express nodemailer body-parser cors
```

3. Start backend (auto-creates server.js if missing):
```
npm start
```
## ⚡ How to Run Frontend

1. Open terminal in the frontend folder:
```
cd frontend
```

2. Install frontend dependencies (Tailwind CSS, PostCSS, Autoprefixer):
```
npm install
```

3. (Optional) If you have Tailwind build scripts in package.json, run the build command:
```
npm run build
```
- It's process your `style.css` and convert the tailwind classes to final css

4. Open index.html in browser (double-click or via Live Server extension in VS Code) to see the website.

- Console will display server running on port 5000

- Contact form messages will be sent to your Gmail with user name, email, subject, and message

## 🌟 Services Highlighted

- Kitchen Renovation: Cabinets, countertops, PVC wraps, full makeover

- Bathroom Renovation: Tub replacement, ceiling changes, custom sinks

- Villa Renovation: Complete interior makeovers with modern designs

- Swimming Pool Work: Construction, maintenance, waterproofing

- Customized Solutions: Tailored services to match client preferences

## 📸 Suggested Images / Media

- **Home Page Screenshot**  
  ![Home Page](assets/screenshots/home.png)  

- **Services Page Screenshot**  
  ![Services Page](assets/screenshots/services.png)  

- **Gallery Page Screenshot**  
  ![Gallery Page](assets/screenshots/gallery.png)  

- **Contact Page Screenshot**  
  ![Contact Page](assets/screenshots/contact.png)  

> All images are placed in the `assets/screenshots/` folder for easy management.  
> Replace the paths with your actual images as needed.


## 📈 Future Enhancements

- Add multi-language support for wider audience

- Dynamic gallery with filters for project types

- Integration with payment or booking forms for renovation services

- SEO optimization for better search visibility

## 📌 Why Choose SMB_Renovation Website?

- Professional, modern, and attractive design

- Fully responsive with smooth animations

- Detailed service showcase with images and descriptions

- Interactive and working contact form

- Easy to maintain and customize

- Backend auto-create feature ensures easy setup for users

## 👩‍💻 Author

### Ayesha – Full Stack Developer & Data Enthusiast
```
GitHub: AyeshaTechX

Email: ayeshadatascientist9@gmail.com
```
> This project reflects creativity, attention to detail, and technical skill in modern web development and backend integration.

## ⭐ Thank You

Explore, customize, and use SMB_Renovation to create stunning renovation websites with modern design, smooth animations, and functional backend integration.
