### My FE application

# Front-End Structure Overview

The front-end of our application is built using **React.js**. Each component is designed to be reactive and maintain a clean and efficient structure. Below is an outline of the directory structure along with descriptions of their contents.

## Directory Structure example

### `Games`
This directory houses the core gameplay components.

- **Components**: Contains all reusable components specific to the game.
- **hooks**
  - This sub-directory includes all the React hooks like `useState` that manage state and side effects which are not part of the views directly.
- **View.js**
  - Responsible for rendering the visual part of the game components.

### `Useful Stuff`
A collection of utilities and styles that are used throughout the app.

- **Styles**
  - Basic CSS styles that are globally applied across the application.
- **Utils**
  - **slugify**: A utility function for generating slugs from strings.
  - **theme context**: Manages theming across the application.
  - General utility functions that are used throughout the application.

## Development Notes

- Ensure all components in the `Games` directory are kept reactive and neat.
- The structure within `Games/hooks` should help keep the logic and state management separate from the UI (`View.js`).

This document serves as a guide for maintaining consistency in the development of the application. Please adhere to the outlined structure for future development and refactoring.
