# Zanga Study

Zanga Study is an Arabic-first educational web application designed to help Computer Science students review course material, practice questions, and track their study progress.

The project provides structured lessons, quizzes, chapter tests, practice sessions, study plans, and progress tracking through a lightweight web interface.

## Features

- Interactive course lessons
- Question banks for multiple Computer Science subjects
- Custom quizzes
- Chapter-based tests
- Mistake tracking and review
- Practical exercises and labs
- Study plan generation
- Score and progress tracking
- Arabic interface with English technical terminology
- Responsive design
- Local browser storage for user progress
- Modular JavaScript architecture

## Available Subjects

| Subject | Lessons | Questions |
|---|---:|---:|
| Computer Networks | 38 | 463 |
| Operating Systems | 41 | 277 |
| Algorithms | 21 | 434 |
| Web Development | 36 | 398 |
| Programming Languages | 20 | 169 |
| Engineering Software Products | 29 | 235 |
| **Total** | **185** | **1,976** |

## Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- ES Modules
- LocalStorage

### Development Environment

- Node.js 20+
- Native Node.js testing
- Custom build scripts

The current frontend does not depend on an external JavaScript framework.

## Project Structure

```text
zanga-project/
│
├── assets/
│   ├── css/
│   └── js/
│       ├── core/
│       ├── features/
│       ├── services/
│       ├── subjects/
│       ├── ui/
│       └── runtime/
│
├── config/
├── data/
│   └── subjects/
│
├── docs/
├── img/
├── scripts/
├── tests/
│
├── index.template.html
├── index.html
└── package.json
```

## Running the Project

### Static Version

The generated version of the application can be opened directly by running:

```text
index.html
```

in a modern web browser.

### Development Server

Node.js 20 or later is recommended.

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd zanga-project
```

Start the development server:

```bash
npm run dev
```

Open the local address displayed in the terminal.

## Build

The project uses a custom build process.

After modifying source files, rebuild the application using:

```bash
npm run build
```

Generated runtime files are stored inside:

```text
assets/js/runtime/
```

Files inside the runtime directory are generated automatically and should not normally be edited directly.

## Testing

Run project validation:

```bash
npm run check
```

Run automated tests:

```bash
npm test
```

The test suite includes checks for areas such as:

- Course content
- Question generation
- Study plans
- Local storage
- Saved data validation
- Quiz behavior
- Application builds
- Navigation
- API client behavior

## Data Storage

The current version stores progress locally in the user's browser.

Stored information may include:

- Course progress
- Quiz results
- Mistakes
- Scores
- Study progress

Because the application currently uses browser storage, progress is not synchronized between devices.

## Backend Development

The project is currently being expanded with a backend system.

The planned backend architecture includes:

- Java
- Spring Boot
- MySQL
- Spring Security
- REST APIs
- User authentication
- Password hashing
- User accounts
- Persistent progress storage
- Global leaderboard
- Administrative tools

The backend will replace some of the current browser-based storage with persistent server-side data.

## Planned Features

Future development may include:

- User registration and login
- Administrator dashboard
- Question management
- Course content management
- Persistent user progress
- Global leaderboard
- Server-side quiz validation
- Improved analytics
- Account-based synchronization across devices

## Purpose

The purpose of this project is to provide a centralized study platform for Computer Science courses while also serving as a practical software development project involving frontend development, backend development, databases, authentication, testing, and software architecture.

## Status

The frontend is functional and currently under active development.

Backend integration and database functionality are being developed.

## License

This project is intended for educational purposes.
