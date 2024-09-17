# Movie-Catalog App

This project is a Movie-Catalog application built using Next.js and SAP UI5 Web Components. It was started using the Next.js template from SAP UI5 Web Components. It allows users to view top-rated movies, search for movies, and manage a favorites list.

## Features

- Display the top 5 movies by Rating (user score) for a given Release Year
- Movie cards with title, description, release date, rating, and movie picture
- Search functionality for movie titles
- Add movies to a favorites list
- Data fetched from The Movie Database (TMDb) API
- Utilizes SAP UI5 Web Components for UI elements

## Tech Stack

- Next.js
- React
- SAP UI5 Web Components
- TanStack Query
- CSS Modules
- React Context API
- Local Storage for favorites persistence

## Getting Started

### Installation

1. Clone the repository:

   ```
   git clone git@github.com:JGuardiola95/movie-catalog-app.git
   cd movie-catalog-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:

   - Copy the `.env.example` file to `.env`:
     ```
     cp .env.example .env
     ```
   - The `.env` file contains a pre-filled API_KEY for The Movie Database. You can use this for now, or replace it with your own if you have one.

4. Run the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Design Choices and Challenges

- **UI Components**: SAP UI5 Web Components were used for search, display cards, and favorite list management. This provides a consistent and professional look to the application.

- **State Management**: React Context is used for global state management, providing a clean way to share state across components without prop drilling.

- **Data Fetching**: TanStack Query is employed for efficient data fetching and caching, improving the application's performance and user experience.

- **Styling**: CSS Modules are used for component-specific styling, ensuring style encapsulation and avoiding global CSS conflicts.

- **Favorites**: The favorites list is persisted using localStorage, allowing users to maintain their list across sessions.

### Challenges

- Learning and implementing SAP UI5 Web Components was initially challenging, as it required understanding the library's specific patterns and best practices.

- Balancing between using UI5 components and custom styling to achieve the desired look while maintaining consistency.

- Time Constraints: The project was developed within a limited timeframe as part of a technical assessment. This time pressure influenced some design decisions and limited the scope of what could be implemented.

- **Internationalization (i18n) Implementation**: Attempts to implement i18n functionality were unsuccessful. The main issues encountered were:
  - The properties file could be fetched correctly outside of the `registerI18nLoader` function, indicating that the problem wasn't related to the public folder.
  - The code was running on the client side, suggesting a potential conflict with Next.js server-side rendering (SSR).
  - Various approaches were tried, but a working solution couldn't be achieved.
  - The same i18n implementation was tested in a Vite app and worked correctly, indicating that the issue is likely specific to the Next.js environment.

## Improvements

- Add unit and integration tests for increased reliability.
- Integrate a database to safely persist user data, providing a more robust and scalable solution compared to localStorage.
- Set up and implement Cypress for end-to-end testing, ensuring the application functions correctly from a user's perspective across different scenarios and interactions.

## Preview

![home](/public/home.png)
![favorites](/public/favorites.png)
