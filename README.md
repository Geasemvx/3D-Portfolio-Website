# 3D Developer Portfolio

An interactive 3D portfolio website that showcases my experience, skills and projects as a software engineer. It is built with **React**, **Three.js**, **Vite** and **Tailwind CSS**.

> 🚧 **Status:** in active development. New sections and projects are added regularly.

**Live demo:** _coming soon_

---

## About

I'm Nicholas Mavundlha, a software engineer from Cape Town with a BSc in Computer Science and Computer Engineering from the University of Cape Town. I built this portfolio to present my work in a more engaging way than a static CV. It combines interactive 3D scenes with a clean, responsive layout.

## Features

- **Interactive 3D scenes:** Three.js models and animations that visitors can explore.
- **Experience:** my professional background, including my work as a Junior Software Engineer at Digiata Technology Services.
- **Skills:** the languages, frameworks and tools I work with.
- **Projects showcase:** cards for my key projects, each with a description, tech tags and a link to the source code.
- **Responsive design:** a layout that works on desktop, tablet and mobile, styled with Tailwind CSS.
- **Fast development and builds:** powered by Vite.

## Featured Projects

| Project | Tech |
|---|---|
| 3D Developer Portfolio (this repo) | React, Three.js, Vite, Tailwind CSS |
| Pantry E-commerce Store | JavaScript, MongoDB, Docker, Render |
| Test Scheduler (UCT capstone) | PHP, MongoDB, JavaScript, Apache |
| Clothing Image Classifier | Python, PyTorch, NumPy, Jupyter |
| [Parallel Sandpile Simulator](https://github.com/Geasemvx/ParallelAbelianSandpile) | Java, Fork/Join, Multithreading |

## Tech Stack

- [React](https://react.dev/): UI components
- [Three.js](https://threejs.org/): 3D graphics in the browser
- [Vite](https://vitejs.dev/): development server and build tool
- [Tailwind CSS](https://tailwindcss.com/): utility-first styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Geasemvx/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in your terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build     # creates an optimised build in /dist
npm run preview   # previews the production build locally
```

## Customising

Project cards are defined in the `projects` array (in `projects.js`). Each project has a `name`, `description`, `tags`, `image` and `source_code_link`. To add a project, add an entry to the array and place its screenshot in the assets folder.

## Contact

- **GitHub:** [github.com/Geasemvx](https://github.com/Geasemvx)
- **LinkedIn:** [linkedin.com/in/nicholasmavundlha-634b3a231](https://www.linkedin.com/in/nicholasmavundlha-634b3a231)
- **Email:** Nicholasmavundlha7@gmail.com
