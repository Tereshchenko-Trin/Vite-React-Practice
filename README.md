# Vite-React-Practice
A single-page application (SPA) for viewing posts retrieved from the [DummyJSON API](dummyjson.com), using modern React, TypeScript, and TanStack Query technologies. A WebSocket chat module is also included as an additional feature. [Watch it here](https://vite-react-practice-9ccfi7m3x-tereshchenko-trins-projects.vercel.app/?page=1).

# Tech stack
- **Framework:** React v19
- **Builder:** Vite
- **Language:** TypeScript
- **Routing:** TanStack Router
- **Data Management/API:** TanStack Query
- **UI/CSS:** Tailwind CSS and Shadcn UI
- **Testing:** Vitest / React Testing Library (for unit, module, and snapshot tests)
- **Additional:** WebSocket (for chat)

# Features
- View a list of posts with DummyJSON
- Pagination for loading posts
- Detailed view of a single post
- Fully typed code in TypeScript
- Modern and responsive user interface
- A working real-time chat module

# Initialization
Clone the repository and install dependencies:
```
git clone https://github.com/Tereshchenko-Trin/Vite-React-Practice.git
cd Vite-React-Practice
npm install
```

# Development mode
You can run the project in development mode. The application will be accessible at `http://localhost:/5173`.
```
npm run dev
```

# Production build
This script creates an optimized, ready-to-deploy build of the project in production mode.
```
npm run build
```

# Testing
To run all configured tests (unit, module, and snapshot), use the command:
```
npm run test
```
