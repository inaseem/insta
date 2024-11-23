# Insta Application

## Overview

This document provides an overview of the architectural decisions taken for the Insta application, its scalability, integration with a backend REST API, and the testing strategy. Additionally, it includes instructions on how to run, build, and test the application.

## Live Demo

The project is live and can be accessed at [https://inaseem.github.io/insta/](https://inaseem.github.io/insta/).

## Current Scope

The current scope of the Insta application includes the following features:

1. **View Image-Based Stories**: Users can view stories that are primarily image-based.
2. **View Story Progress**: Users can see the progress of each story as it is being viewed.
3. **Automatic Story Transition**: Once a story is viewed, it automatically moves to the next story.
4. **Navigate to Next Story**: Clicking the right side of the screen takes the user to the next story.
5. **Navigate to Previous Story**: Clicking the left side of the screen takes the user to the previous story.
## Future Scope

The future scope of the Insta application includes the following features:

1. **Video-Based Stories**: Users will be able to view stories that are video-based, providing a richer media experience. This is partially implemented.
2. **View Once Stories**: Users will have the option to create stories that can only be viewed once, enhancing privacy and exclusivity.
3. **Analytics**: Detailed analytics for story views, including who viewed the story and how many times it was viewed.
4. **GitHub Actions for Build and Deployment**: Automate the build and deployment process using GitHub Actions. The necessary scripts are already included in the `package.json` file.

## Architectural Decisions

### Technologies Used

The Insta application leverages a variety of technologies to ensure a robust, scalable, and maintainable architecture:

1. **React**: Chosen for its component-based architecture, which promotes reusability and ease of maintenance.
2. **TypeScript**: Provides static typing, which helps catch errors early in the development process and improves code quality.
3. **Vite**: Used as the build tool for its fast build times and modern features.
4. **React Context API**: Utilized for state management to avoid prop drilling and to manage the state of stories efficiently.
5. **Custom Hooks**: Encapsulate reusable logic, making the codebase cleaner and more modular.
6. **GitHub Pages**: Selected for deployment due to its simplicity and seamless integration with GitHub repositories.
7. **Vitest and @testing-library/react**: Chosen for unit testing to ensure the reliability of individual components.
8. **Playwright**: Used for end-to-end testing to simulate user interactions and verify the application’s functionality from the user's perspective.
9. **Tailwind CSS**: A utility-first CSS framework that helps in rapidly building custom designs. It significantly reduces the size of the CSS by purging unused styles.
10. **PostCSS**: A tool for transforming CSS with JavaScript plugins. It helps in optimizing and minimizing the CSS, further reducing the file size.

These technologies were selected to create a performant, scalable, and maintainable application while ensuring a smooth developer experience.

### Component Structure

The application is structured into several key components:

1. **App.tsx**: The root component that sets up the router.
2. **Home.tsx**: The home page displaying a list of status items.
3. **Stories.tsx**: The stories page that fetches and displays user stories.
4. **StoriesView.tsx**: The view component for displaying individual stories.
5. **StoriesContext.tsx**: Context provider for managing the state of stories.
6. **useImageLoader.tsx**: Custom hook for loading images.
7. **useStoryProgress.tsx**: Custom hook for managing story progress.
8. **useStatusData.tsx**: Custom hook for fetching status data from the API.

### State Management

The application uses React's Context API to manage the state of stories. The `StoriesContext` is used for centralized state management, making it easier to manage and update the state of stories across different components.
### Scalability

The architecture is designed to be scalable:

- **Modular Components**: Each component is responsible for a specific part of the application, making it easier to maintain and extend.
- **Context API**: Using the Context API for state management allows for easy state sharing across components without prop drilling.
- **Custom Hooks**: Custom hooks like `useImageLoader`, `useStoryProgress`, and `useStatusData` encapsulate logic that can be reused across different components.
- **Varying Timeouts**: Although the requirement was to allow 5 seconds story timeouts, the ability to have varying timeouts has been added to handle future cases as well.

### Integration with Backend REST API

The application is designed to integrate seamlessly with a backend REST API:

- **API Calls**: The `useStatusData` hook fetches status data from the backend using the `api.getStatusByUserId` method.
- **Error Handling**: The hooks include error handling to manage API call failures gracefully.
- **Loading State**: The hooks manage loading states to provide feedback to the user while data is being fetched.

## Testing Strategy

### Unit Tests

Writing test cases is a fun process. It helps in making the code quality better and compose the code in a way that it is testable. Testable code goes a long way.
Unit tests are written using `vitest` and `@testing-library/react` to ensure the core functionality of components:

- **StatusItem.test.tsx**: Tests the rendering and click functionality of the `StatusItem` component.
- **PhotoStoryHeader.test.tsx**: Tests the rendering and button click functionality of the `PhotoStoryHeader` component.
- **StoriesView.test.tsx**: Tests the rendering and navigation functionality of the `StoriesView` component.

### End-to-End Tests

End-to-end tests are written using `playwright` to ensure the application works as expected from the user's perspective:

- **app.spec.ts**: Tests the core functionality of the application, including loading the home page, navigating to the stories page, and interacting with stories.

## Running, Building, and Testing

### Available Scripts

Refer to the `package.json` file for the available scripts:

- **Run Development Server**: `yarn dev`
- **Build the Application**: `yarn build`
- **Run Unit Tests**: `yarn test`
- **Run End-to-End Tests**: `yarn test:e2e`
- **Run End-to-End Tests with UI**: `yarn test:e2e-ui`
- **Run Linter**: `yarn lint`
- **Preview Build**: `yarn preview`
- **Deploy to GitHub Pages**: `yarn deploy`

### Installing Dependencies

Before running the application, you need to install the necessary node dependencies:

```bash
yarn install
```

### Running the Application

To run the application in development mode:

```bash
yarn dev
```

### Building the Application

To build the application for production:

```bash
yarn build
```

### Running Tests

To run unit tests:

```bash
yarn test
```

To run end-to-end tests:

```bash
yarn test:e2e
```

To run end-to-end tests with UI:

```bash
yarn test:e2e-ui
```
