# Edgar Editor

Why not ask your friendly neighborhood Edgar for help on your game ideas?

This project is very early in development, check back later. :)

## Dev Notes / Ideas

### Editor Architecture

The objective is to develop a simple editor that can be used to create a game project, and be extensible to support additional functionality related to game development.

#### Objectives / Ideas

- Use Nuxt as the basis for the editor
- Wrap the Monaco Editor in a Nuxt Plugin that exposes components and hooks
- Use the Nuxt Content module to manage the game project data
- A plugin system that can be used to extend the editor with additional functionality
  - i.e. a plugin that adds a GBDK integration for Game Boy development.
- Should provide source control integration for the game project, starting with Git.
- The backend should be a generic contract that could be reimplemented in another language.
- This project should be modular in the sense that various components of the project can be re-used for the benefit of the community.
  - The monaco editor integration for nuxt.
  - The backend server as a standalone package.
  - The tauri integration into nuxt as a standalone package.
- Native interactions with tauri should be possible.
The editor should communicate with the tauri layer through websockets so that the nuxt side doesn't need to be aware of the tauri layer. We must support the web, too.
