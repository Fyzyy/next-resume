# Next Resume - CV and Portfolio Generator

A modern CV and interactive portfolio generator based on Next.js, which automatically creates a professional PDF resume and portfolio website from a simple JSON file.

## 🚀 Features

- **Automatic PDF Resume** : Professional PDF resume generation with the 3 most recent experiences and 2 latest projects
- **Interactive Web Portfolio** : Complete website with all your data
- **Simple JSON Configuration** : Single data source to generate everything
- **Responsive Design** : Interface adapted to all devices
- **Dark/Light Theme** : Automatic theme switching

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd next-resume
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Data Configuration

### JSON File Structure

Create or modify the `data/[your-name].json` file with your personal information. Here's a complete example:

```json
{
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "title": "Full Stack Developer",
    "email": "john.doe@email.com",
    "phone": "+1 234 567 890",
    "location": "New York, USA",
    "website": "https://johndoe.dev",
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
    "avatar": "/avatar.jpg"
  },
  "summary": "Passionate developer with 5 years of experience in modern web development. Specialized in React, Node.js and cloud architectures.",
  "experience": [
    {
      "role": "Senior Full Stack Developer",
      "company": "TechCorp",
      "location": "New York, USA",
      "start": "2022-03",
      "end": "Present",
      "logo": "/techcorp-logo.png",
      "tasks": [
        "Developing React applications with TypeScript",
        "Designing REST APIs with Node.js and Express",
        "Deploying on AWS with Docker and Kubernetes",
        "Leading a team of 3 junior developers"
      ]
    },
    {
      "role": "Full Stack Developer",
      "company": "StartupXYZ",
      "location": "San Francisco, USA", 
      "start": "2020-06",
      "end": "2022-02",
      "logo": "/startup-logo.png",
      "tasks": [
        "Developing the main e-commerce platform",
        "Optimizing frontend and backend performance",
        "Integrating payment systems (Stripe, PayPal)"
      ]
    }
  ],
  "projects": [
    {
      "name": "E-commerce Platform",
      "role": "Lead Developer",
      "start": "2023-01",
      "end": "2023-06",
      "tasks": [
        "Microservices architecture with Docker",
        "Modern user interface with Next.js",
        "Integrated secure payment system"
      ]
    },
    {
      "name": "Mobile App Analytics",
      "role": "Frontend Developer",
      "start": "2022-08",
      "end": "2022-12",
      "tasks": [
        "Real-time analytics dashboard",
        "Data visualizations with Chart.js",
        "GraphQL API for data"
      ]
    }
  ],
  "education": [
    {
      "degree": "Master in Computer Science",
      "school": "MIT",
      "location": "Cambridge, USA",
      "start": "2018-09",
      "end": "2020-06",
      "description": "Specialization in artificial intelligence and web development"
    }
  ],
  "skills": {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    "DevOps": ["Docker", "AWS", "Kubernetes", "CI/CD"],
    "yoursCategory": ["yourSkill1", "yourSkill2"],
  },
  "languages": [
    {
      "name": "English",
      "level": "Native"
    },
    {
      "name": "Spanish", 
      "level": "Fluent (C1)"
    },
    {
      "name": "French",
      "level": "Intermediate (B2)"
    }
  ],
  "interests": [
    "Open source development",
    "Artificial intelligence", 
    "Photography",
    "Rock climbing"
  ]
}
```

### Images and Logos

Place your images in the `public/` folder:
- Avatar: `/avatar.jpg`
- Company logos: `/company-name.png`

## 🎯 Resume vs Portfolio Differences

### PDF Resume (short version)
- **Experiences**: Only the 3 you write first in json
- **Projects**: Only the 2 you write first in json  
- **Format**: PDF optimized for printing
- **Access**: `/resume` or "Download Resume" button

### Web Portfolio (complete version)
- **Experiences**: All experiences
- **Projects**: All projects
- **Format**: Interactive and responsive website
- **Access**: Home page `/`

## 🔧 Available Commands

```bash
# Development mode
pnpm dev

# Production build
pnpm build

# Production start
pnpm start

# Code linting
pnpm lint

# Code formatting
pnpm format

# Install dependencies
pnpm install
```

## 📁 Project Structure

```
├── app/                    # Next.js Pages (App Router)
│   ├── page.tsx           # Portfolio (home page)
│   └── resume/page.tsx    # PDF Resume Generator
├── components/            # React Components
│   ├── portfolio/         # Web portfolio components
│   ├── resume/           # PDF resume components  
│   └── ui/               # Reusable UI components
├── data/                 # JSON files with data
├── public/              # Images and static assets
├── styles/             # Styles and themes
└── types/             # TypeScript types
```

## 🎨 Customization

### Colors and Theme

Modify the `styles/resume-theme.ts` file to customize the PDF resume appearance.

### Components

Customize components in `components/` to adapt the display to your needs.

## 📄 License

This project is under MIT license. See the `LICENSE` file for more details.

---

**💡 Tip:** For an optimal resume, make sure your 3 most recent experiences and 2 latest projects are the most relevant and recent in your JSON file.
