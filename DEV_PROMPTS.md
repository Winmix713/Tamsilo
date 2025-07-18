# Developer Handoff Prompts for Match-Analysis-Prediction Dark UI System

Below are ten high-quality, ready-to-use development prompts—one for each major category—to guide programmers in building the perfect Match Analysis & Prediction system with a fully-featured dark-mode UI.

---

## 1. Project Architecture & Planning
**Prompt:**
"Define a scalable, modular project architecture for the Match Analysis & Prediction platform that cleanly separates responsibilities between frontend, backend, data pipeline, and ML components. Outline key modules, their interactions, and technology choices (e.g., React, Node.js, Python, PostgreSQL), including Docker-based local development and deployment strategies. Provide acceptance criteria and a basic folder structure for reference."

---

## 2. UI/UX Dark Mode Design
**Prompt:**
"Design a cohesive dark-mode UI theme for the dashboard of the Match Analysis & Prediction system. Specify color palettes (primary, secondary, accent colors with hex codes), typography (font family, sizes, weights), spacing and layout guidelines, and component styling rules (buttons, cards, tables, charts). Ensure high contrast and accessibility (WCAG AA). Deliver a Figma-style style guide or CSS/SCSS token definitions."

---

## 3. Frontend Technology & Component Development
**Prompt:**
"Set up a modern frontend stack using React (with TypeScript) and a state management library (e.g., Redux Toolkit or Zustand). Scaffold key UI components: navigation bar, match overview cards, live scorefeed, dynamic charts (e.g., Chart.js or Recharts), and prediction result panels. Include routing structure and theming support for toggling dark mode. Provide sample unit and integration tests (e.g., Jest + React Testing Library)."

---

## 4. Backend API & Service Design
**Prompt:**
"Design and implement a RESTful API using Node.js with Express (or NestJS) to support match data CRUD, prediction requests, and user preferences for dark mode. Define endpoint specifications (URL, method, payloads, response schemas) in OpenAPI (Swagger). Include authentication middleware (JWT) and error handling conventions. Write at least three example API tests (e.g., using Supertest)."

---

## 5. Data Ingestion & Processing Pipeline
**Prompt:**
"Build an automated data ingestion pipeline in Python that fetches live sports match data from third-party APIs (e.g., JSON or GraphQL), normalizes records, and writes them into a PostgreSQL database. Define database schemas for matches, teams, statistics. Implement retry logic, logging, and scheduling (e.g., with Airflow or cron). Provide sample ETL scripts and schema migration files."

---

## 6. Machine Learning Model Integration
**Prompt:**
"Integrate a pre-trained machine learning model (e.g., scikit-learn or TensorFlow) for match outcome prediction. Create a microservice in Python (Flask or FastAPI) that exposes a `/predict` endpoint accepting match stats JSON and returns probabilities. Ensure model versioning, input validation, and performance benchmarks. Include Dockerfile for the ML service and example curl requests."

---

## 7. Real-time Updates & State Management
**Prompt:**
"Implement real-time match updates on the frontend using WebSockets or Server-Sent Events. Design a state management flow that handles incoming live data (scores, stats) and updates components with minimal re-rendering. Provide a sample WebSocket server in Node.js and corresponding client hook in React. Include reconnection logic and graceful error handling."

---

## 8. Testing & Quality Assurance
**Prompt:**
"Establish a comprehensive test strategy covering unit, integration, and end-to-end scenarios. Select testing frameworks (Jest, Mocha, Cypress). Write sample tests for critical flows: API data retrieval, ML prediction response, and dark-mode UI toggle functionality. Define code coverage targets (>90%) and include linting/formatting checks (ESLint, Prettier) in the CI pipeline."

---

## 9. CI/CD & Deployment
**Prompt:**
"Configure a CI/CD pipeline (e.g., GitHub Actions, GitLab CI) to build, test, and deploy the application. Automate linting, unit/integration tests, container builds, and security scans. Define workflows for staging (on every pull request) and production (on merge to `main`). Provide example YAML configuration and integration with Docker Hub or AWS ECR, and infrastructure-as-code scripts (Terraform or CloudFormation) for Kubernetes or ECS deployment."

---

## 10. Documentation & Developer Guidelines
**Prompt:**
"Draft comprehensive documentation for the Match Analysis & Prediction project. Include a README with project overview, setup instructions, coding standards, branching strategy (Git flow), API reference, data schema definitions, and style guide for dark-mode UI. Provide doc templates (e.g., Markdown, MkDocs) and guidelines for contributors (code reviews, commit message conventions)."
