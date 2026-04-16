📇 Profile Card — Greatness Oluwole

A responsive and accessible Profile Card component built with HTML, CSS, and Vanilla JavaScript.
This project was developed as part of the Frontend Wizards — Stage 1B Task.

🚀 Live Demo

👉 Add your deployed link here [(Netlify / Vercel / GitHub Pages)](https://testable-profile-card-lovat.vercel.app/)

📁 Project Structure

profile-card/
│
├── index.html   # Main HTML structure
├── style.css    # Styling (responsive + accessible)
├── script.js    # JavaScript (epoch time update)
└── README.md    # Project documentation

✨ Features

✅ Semantic HTML structure (article, section, nav, figure)
✅ Fully responsive layout (mobile → desktop)
✅ Accessible (ARIA attributes, alt text, keyboard navigation)
✅ Live epoch time in milliseconds
✅ Social links open in new tab securely
✅ Clean UI with modern CSS (Flexbox & Grid)

🧪 Required Test IDs

All required elements include data-testid attributes for testing:

test-profile-card
test-user-name
test-user-bio
test-user-time
test-user-avatar
test-user-social-links
test-user-social-twitter
test-user-social-github
test-user-social-linkedin
test-user-hobbies
test-user-dislikes

⏱️ Dynamic Time Feature

The app displays the current epoch time using:

Date.now()

It updates every second using setInterval.

♿ Accessibility

Meaningful alt text for images
aria-live for dynamic time updates
Keyboard-focusable links
Visible focus states
Proper semantic structure

📱 Responsiveness

Mobile-first design
Flexible layout using CSS Grid & Flexbox
Stacks content on small screens
Maintains spacing and readability across devices

🛠️ How to Run Locally

1. Clone the repository

git clone  https://github.com/greythedevv/Testable-Profile-Card.git

2. Navigate into the folder

cd profile-card

3. Open in browser

You can simply open the index.html file:

start index.html   # Windows
open index.html    # macOS

Or use Live Server (recommended):

Install Live Server extension in VS Code

Right-click index.html

Click "Open with Live Server"

📌 Technologies Used

HTML5
CSS3 (Custom Properties, Flexbox, Grid)
JavaScript (ES6)

📄 Notes

No frameworks used (pure vanilla implementation)
Designed to be test-friendly and accessible
Time updates every second for accuracy

📅 Deadline

17 April 2026 — 11:59 PM

🔗 Submission
🌐 Live URL: [Add here](https://testable-profile-card-lovat.vercel.app/)
💻 GitHub Repo: [Add here](https://github.com/greythedevv/Testable-Profile-Card.git)