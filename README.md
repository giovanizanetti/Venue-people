## What this project is about 👇

This project is part of an assignment for the position of a front-end developer. I'm building a Crud application where the user can visualize a list of users and perform CRUD actions on it.

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Requirements](#requirements)**
- **[Features](#features)**
- **[Coding](#coding)**
- **[Process](#process)**
- **[Instalation](#instalation)**

## Technologies used 👇

- Vue 3
- Typescript
- Pinia
- FormKit
- Vite
- Scss
- I18n

## Goals for this project: 👇

- Show my ability to solve a problem by dividing it into smaller chunks and prioritising them before executing.
- Show that I can use Git by creating branches and meaningful commit messages.
- Prove that I'm comfortable with Vue.js by using advanced features like slots, attribute binding, reloading components, styling deep, passing props, emitting events, using events modifiers, directives and much more.
- Show that I'm comfortable using Pinia as a state management tool by creating stores and sharing the state when necessary. For that, I also prefer using the setup syntax just to be consistent with the way I write my vue components.
- Show my ability to use Sass by creating variables, nested styling and mixins.
- Show that I'm attentive to details by doing my best to reproduce the mockup provided.
- Last but not least. Show a working application where the user can navigate smoothly.

## Requirements 👇

- Vue Vue3/typescript-based project. Suggested packages: Pinia, Sass, FormKit.
- Readme with at least instructions on how to run the project.
- Reproduce the following **[Figma-mockup](https://www.figma.com/file/AF8zAvKtLNVewZmcJbEOxS/Test_Front-End_VenueUsers?type=design&node-id=0%3A1&mode=design&t=ZsdHyVMLRJ4BOmhy-1)** by paying attention to reponsiveness.

## Features 👇

- Views: Home, Contact list and Contact editor.
- Create the components for the contact view.
    - ContactCard to display the contact information. 
    - You can delete a contact by clicking the
trash icon. 
    - If we click on an email or phone number; we want to copy it to the clipboard.
    
- TeamCard that shows the team information.
- TopNavigationBar with rerouting.
- MainNavigationBar with rerouting.(_to be honest this one confused me a bit, so I left it and decided to focus on other aspects of the assignment_)
- Create the contact edit view
    - When clicking on a contact card, you should be redirected to the contact edit page
    where a form will be displayed with the user's information. 
    - Can edit the user from the form and save the changes. The updated data should be visible now on the contact page. 
    - If the user clicks cancel, they will be redirected to the contact list view.
    - Validation for email, phone number and initials
- Axios Integration: 
    - Set up Axios in the project to fetch data from a mock API endpoint.
    - Create mock data representing a collection of items. Ensure the data is structured appropriately and includes various properties relevant to the items.
    - Display the fetched data in the application
    - Implement basic CRUD functionality to interact with the data. Users
    should be able to view, add, edit, and delete items from the collection


#### Coding

- In a team I'm always accountble and try my best to make a good balance between development speed and code quality. Always thinking about the codebase healthy to build a robust product for the client and for company to to be abble to profity for many years.
- I try to write understandable variables name. Not necessarily the smallest.
- Smaller components. However, sometimes it makes sense to keep things grouped in a bigger component.
- I'm always attentive to reusability. I'm always creating helpers, utility functions, and utility components. Even if does not diminish the amount of code at first glance, it helps to keep the consistency in the way things happen in the application, especially with styling. Also, it improves development speed for future reuse.
- When creating a utility component, I make it as dumb as possible. So it can be more predictable and work as a pure function by just receiving props and emitting events.
- I have the habit of prefixing my types and interfaces with T or I, just to make things clear.
- I like to have a constants.ts file, some people also call it a dictionary. There, I store string values that I know I will be using through the application many times. This is one more layer to make my apps less error-prone. I also create read-only objects there, which works similarly to typescript enums but is better for compilation, therefore safer to use. Examples of the things I like to store there: are route names (useful when navigating), emits names (useful to declare emits and emitting the events), validation, etc. The IDI auto-completion helps when reusing those values, making the development experience way nicer.

#### Process

* I like using Trello to organize my thoughts and draw a plan.
* Tackle it by priority, Aways watching the requirements.
* Test
* Fix bugs
* Add extra features to imporve ux
* If I get stuck I always try to find the solution in one of the options:
  - Documentation
  - Google
  - Stackoverflow
  - Youtube / Udemy tutorials
  - Get a second opinion
  - Pair programming
 
  
## Instalation

- Run ```git clone https://github.com/giovanizanetti/Venue-people.git``` from your machine.
- ```cd``` to the project folder
- ```yarn``` to install all dependencies of the project.
- run ```yarn run dev``` to see the project on your browser.
- Build for production by running ```yarn build``` 


## [Check out the deployed version here!](https://my-books-app.netlify.app/)
