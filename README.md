# Trello Clone Project

## Objective
This project aims to simulate the real-world application development process by guiding you through building a simplified version of Trello, a popular project management tool. You will learn about React's capabilities for handling complex state management, implementing drag-and-drop functionality, and creating dynamic user interfaces.

## Getting Started

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create a copy of this repository in your GitHub account.
2. **Clone Your Forked Repository**: Clone the repository to your local machine using the `git clone` command with your repository's URL.
3. **Navigate to Your Project Folder**: Change your directory to the folder where you cloned the repo.
4. **Install Dependencies**: Run `npm install` to install the necessary dependencies for the project.

## Exercise Instructions

### Create Basic Components
- **Board**: Develop a `Board` component to represent the main workspace.
- **Lists**: Inside the `Board`, create a `List` component to represent columns like "To Do", "In Progress", and "Done".
- **Cards**: Create a `Card` component to represent tasks or items.

### Card Data Requirements
Each card should hold the foladdlowing data:
- **Title**: A brief, descriptive title of the task or item.
- **Description**: A more detailed explanation of what needs to be done.
- **Comments**: An array of comments related to the task.
- **Due Date**: The date by which the task should be completed.
- **Labels**: Tags or labels for categorizing the card. Options should include "Urgent", "High Priority", "Medium Priority", "Low Priority", and "Optional".

### Implement Drag-and-Drop
- Implement drag-and-drop functionality to move cards between lists using the mouse events `onMouseDown` and `onMouseUp`.
- Determine how to capture and utilize mouse coordinates to enable smooth dragging of cards.

### Modals for Card Details
- Implement a modal that pops up with detailed information when a card is clicked. This could include descriptions, comments, or due dates.
- A modal is a type of overlay window that appears on top of the main application content, typically to request user input or present important information. They focus the user's attention by pausing interaction with the main content until the modal task is completed or dismissed.
- Modals are commonly used for forms (like login or registration), warnings or confirmations (such as confirming the deletion of an item), or to display detailed content (like this task's expanded view with comments and descriptions).

### Manage State
- Utilize React's Context API to manage the state of boards, lists, and cards across the application.
- Note: Context is not strictly required for this exercise.

### Styling
- Apply CSS or a styling library of your choice to style the application, aiming to closely resemble Trello's design.

### Testing
- Write basic tests for your components to ensure they render correctly and function as expected.

### Optional Enhancements
- **Persistence with Local Storage**: Implement functionality to save and retrieve the application's state using local storage.
- **Integrate `react-dnd`**: After completing the basic drag-and-drop, try integrating `react-dnd` for a more advanced implementation.
- **Advanced Modals**: Enhance your modals with additional features and improve user interaction and accessibility.

## Expected Outcome
Upon completing this project, you will have a functional Trello clone application with features such as draggable cards, detailed modals, and global state management. You will have a deeper understanding of complex React structures and state management, as well as experience in implementing user-friendly interfaces.

## ChatGPT Assistance Prompts
If you encounter any challenges, consider asking ChatGPT the following questions to guide your development process:
- "How do I use `onMouseDown` and `onMouseUp` to implement drag-and-drop in React?"
- "What are some strategies for managing global state in a React application?"
- "How can I write tests for my React components?"
- "I'm having trouble with [specific issue], what are some potential solutions?"
- "How can I make my application responsive to different screen sizes?"

## Submission Guidelines
- **Commit Regularly**: Make sure to commit your changes regularly to your forked repository.
- **Push Your Changes**: Once you're satisfied with your project, push your changes to your GitHub repository.
- **Open a Pull Request**: Create a pull request from your forked repository to the original assignment repository with a title and brief description of your implementation and any challenges you faced.

We're excited to see your creative solutions and how you tackle this project! Good luck!

## Editor's Note

So I based this project off of an actual interview question I got from a now defunct recruiting service (Triplebyte). The original amount of time they gave me for this was about an hour, but in terms of a recommended amount of time to complete this project, I would recommend allocating at least 20 hours to working on this, including research. Not all of it should be heads down and face in front of screen though, I'd highly recommend taking a step or two back, come up with a battle plan for how you want to tackle the different problems, and structure out a skeleton at the very least first.

A new addition to this project is a section with helpful ChatGPT prompts. Back in the dark ages of pre-2022, much of your brainstorming for a project would have to be on paper, or through other people to bounce your ideas or questions off of. Now, we can accomplish the same thing using LLMs. Think about what steps are necessary to complete the project. Write them out. Then pass them to ChatGPT and ask for feedback. Ask for critical feedback. Revise and refine.

This is a difficult project for someone new to React. Lean in on the tools available to you. If you don't have GPT-4, I recommend using [Claude](https://claude.ai), which is free and at least better than GPT-3.5. Also try out the chat functionality on Phind, or if you've shelled out for it, Github Copilot also has chat functionality built into VSCode.