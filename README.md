# Shahid React Task

## Application Overview
This application is a task from Shahid to Abdallah Marei for evalution purposes.\
The application is built using React and multiple tools were used to assist in building thie application, these tools are `Redux-toolkit`, `react-router`, `styled-components` and `fort awesome` for the icons.

## To run this application
The user must first clone this repo, use `npm i` to install all the required packages and then use `npm start` to start the application.\
Then open [http://localhost:3000](http://localhost:3000).

## Application Description
1. `Redux-toolkit` was used to store the darkMode state and the styles of the elements depending on the theme, `LocalStorage` was used to keep the theme persistent and the `ThemeProvider` from styled components was used to apply thoses styles.
2. The Blog page uses a custom hook to fetch data from a movies api and dynamically renderes them on the page. (Problem-solving task #1)
3. The Contact page has a contact us form with validation that was done without the use of libraries. (Problem-solving task #2)
4. The Home page has a welcome message as well as conditionally rendering a component based on the theme. (Problem-solving task #3)
5. The About page is just a page that shows some info on the application.
6. There is a 404 page is the user decides to go to a route that isn't used by the application.
7. The application is responsive.
8. No libraries were used other than the ones mentioned in the overview.
