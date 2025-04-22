Website Design System

This design system provides a consistent and reusable set of styles, components, and guidelines to ensure a cohesive look and feel across your web projects.

Table of Contents

- Introduction
- Features
- Getting Started
- - Prerequisites
- - Installation
- Usage
- - Color Palette
- - Typography
- - Text Styles
- - Buttons
- - Icons
- Contributing
- Contact

- Introduction

The Website Design System is a collection of reusable components and styles designed to maintain consistency across various web projects. It includes a color palette, typography settings, text styles, buttons, and icons, all of which can be easily integrated into your projects.

- Features

Color Palette: A set of predefined colors for backgrounds, text, and accents.
Typography: Font families and styles for headings, body text, and more.
Text Styles: Predefined styles for headings, subheadings, body text, and captions.
Buttons: Styles for filled, tonal, and outlined buttons.
Icons: A collection of social media icons.
Responsive Design: Ensures the design system works well on various screen sizes.

- Getting Started

- - Prerequisites

Before you begin, ensure you have the following:

Basic knowledge of HTML and CSS.
A modern web browser.
A text editor or IDE (e.g., Visual Studio Code, Sublime Text).

- - Installation

Clone the Repository:

Copy
git clone https://github.com/yourusername/website-design-system.git

Navigate to the Project Directory:

Copy
cd website-design-system

Open the Project:
Open the project in your preferred text editor or IDE.

- Usage

- - Color Palette

The design system includes a predefined color palette. You can use these colors in your CSS by referencing the CSS variables.

Copy
:root {
    --alabaster: #F3F0E8;
    --battleship-gray: #8E8E76;
    --powder-blue: #AFC4DF;
    --glaucous: #5A82E1;
    --night: #0A0A0A;
    --bg-color: white;
    --text-color: var(--night);
}

- - Typography

The design system uses the following font families:

Raleway: For headings and body text.
Raleway Dots: For special text styles.

Copy
body {
    font-family: 'Raleway', sans-serif;
}

- - Text Styles

Predefined text styles for headings, subheadings, body text, and captions.

Copy
<h1 style="font-size: var(--font-size-xl); font-weight: bold;">Heading 1</h1>
<h2 style="font-size: var(--font-size-l); font-weight: bold;">Heading 2</h2>
<h3 style="font-size: var(--font-size-m); font-weight: bold;">Heading 3</h3>
<p style="font-size: var(--font-size-xs);">Body text.</p>
<p style="font-size: var(--font-size-xxs);">Caption text.</p>

- - Buttons

Styles for filled, tonal, and outlined buttons.

Copy
<button class="filled-button">Filled</button>
<button class="tonal-button">Tonal</button>
<button class="outlined-button">Outlined</button>

- - Icons

A collection of social media icons using Font Awesome.

Copy
<i class="fab fa-telegram"></i>
<i class="fab fa-whatsapp"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-facebook"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-tiktok"></i>
<i class="fab fa-youtube"></i>
<i class="fab fa-pinterest"></i>

- Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

- Contact

For any questions or feedback, please open an issue or contact a.kabineva@outlook.com.