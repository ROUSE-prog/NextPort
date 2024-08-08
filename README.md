# Next.js Portfolio with p5.js Background

Welcome to your dynamic and interactive portfolio built with Next.js and p5.js. This project demonstrates the seamless integration of p5.js animations within a modern React framework using Next.js..

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases a personal portfolio website with a unique touch - an animated background created using p5.js. The portfolio includes sections for home, projects, and contact information, all of which are smoothly scrollable.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive Background**: p5.js animations provide a visually appealing and dynamic background.
- **Smooth Scrolling**: Horizontal scrolling navigation through different sections.
- **Easy Customization**: Modify the content and styles easily to fit your personal branding.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for server-rendered applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [p5.js](https://p5js.org/): A JavaScript library for creative coding and interactive graphics.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/nextjs-portfolio-p5.git
    cd nextjs-portfolio-p5
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

## Usage

After starting the development server, you can access your portfolio at `http://localhost:3000`. The homepage will display your portfolio with the interactive p5.js background.

## Project Structure

Here's an overview of the project structure:

![Screenshot 2024-07-11 at 11 16 49 AM](https://github.com/ROUSE-prog/NextPort/assets/52251052/f810feb0-4fe9-44e3-a66f-6aceb530ffc1)


markdown
Copy code

## Customization

### Content

To customize the content of your portfolio, modify the respective components in the `components` directory:

- **Hero Section**: `components/Hero.js`
- **Projects Section**: `components/Projects.js`
- **Contact Section**: `components/Contact.js`
- **Navbar**: `components/Navbar.js`

### Styles

You can customize the styles by editing the Tailwind CSS classes in the component files and by modifying the `styles/globals.css` file.

### p5.js Animation

To modify the p5.js animation, edit the sketch functions in `components/P5Wrapper.js`:

- **Setup and Draw Functions**: Customize the `setup` and `draw` functions to change the background animation.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or create a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy your new dynamic portfolio! If you have any questions or need further assistance, feel free to contact me.
