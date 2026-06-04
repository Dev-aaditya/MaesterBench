# MaesterBench
A full-stack AI benchmarking platform that uses real-time APIs to compare leading AI models based on speed, accuracy, pricing, and performance. Features live updates, tech news, trend analytics, and interactive dashboards for developers and AI enthusiasts.

---

## 🚀 Features

*   **Sleek Multi-Page Architecture**: Fully modular frontend split cleanly into a Homepage, a Performance Leaderboard, and a curated News Feed.
*   **Dynamic Problem Briefing**: A bento-grid style report section highlighting industry data decay, benchmarks lag, and market shifts.
*   **Comprehensive Performance Leaderboard**: A dashboard interface visualizing metrics (Reasoning scores, Latency/Speed, and Grades) for 10 prominent AI models using custom CSS progress bars.
*   **The 24-Hour AI Briefing**: An editorial-style bento grid featuring category-tagged articles covering model releases, API updates, and open-source news.
*   **Centralized Conversational Chatbot**: A premium floating assistant UI inspired by modern mobile interfaces. It is injected dynamically across all pages using a centralized script and includes conversational simulation logic.

---

## 📁 Project Structure

The project is lightweight and fast, running entirely on foundational web tech without heavy node frameworks:

```text
├── homepage.html      # Landing page, hero, problem briefing, & card overview
├── leaderboard.html   # Detailed dashboard tracking 10 hardcoded AI models
├── news.html          # Bento grid interface for real-time market updates
├── style.css          # Main stylesheet for page layouts, gradients, and typography
├── chatbot.js         # Centralized utility script that injects the chat HTML & logic
└── chatbot.css        # Specific layouts, keyframes, and transitions for the chatbot