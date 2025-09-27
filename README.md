# WeatherApp.github.io
Weather App 
What the Project Does
This project is a simple Weather Application that allows users to enter a city name and fetches the current weather data for that city using the OpenWeatherMap API. It displays:

Temperature in Celsius
City name
Weather icon representing current weather (rain, clouds, clear, etc.)
Humidity percentage
Wind speed in km/h
If the city name is invalid or not found, it shows an error message.

Tools and Languages Used
HTML: To create the structure of the app (input box, buttons, display areas).
CSS: For styling the app with a modern, clean, and responsive card layout.
JavaScript (ES6+): To handle user input, fetch data asynchronously from the OpenWeatherMap API, and dynamically update the UI.
OpenWeatherMap API: Provides real-time weather data.
Browser: To run and test the app.
Steps to Build and Run the Project
Setup HTML Structure
Create an index.html file with input fields, buttons, and containers for weather data and error messages.

Style with CSS
Create a style.css file to style the app with gradients, flexbox layout, and responsive design.

Write JavaScript Logic

Use fetch() to call OpenWeatherMap API with the city name entered by the user.
Handle API responses, including errors (like 404 city not found).
Dynamically update the weather icon, temperature, humidity, wind speed, and city name in the DOM.
Show or hide the error message or weather card based on the response.
Add event listeners for button click and Enter key press to trigger the search.
Get an API Key
Register at OpenWeatherMap, generate an API key, and replace the placeholder in the JavaScript code:

const apiKey = 'YOUR_API_KEY_HERE';
Run the App
Open index.html in a modern web browser. Enter a city name and click the search button or press Enter to see the weather.

Key Features and Challenges
Error Handling: The app gracefully handles invalid city names by showing an error message and hiding the weather details.
Dynamic Weather Icons: Icons change based on weather conditions for better user experience.
Responsive Design: The UI is clean and adapts well to different screen sizes.
Asynchronous Data Fetching: Uses async/await for smooth API calls without freezing the UI.
User Input Validation: Trims input and prevents empty searches.
Challenges:

Managing API errors and ensuring the UI updates correctly.
Matching weather conditions to appropriate icons.
Handling asynchronous code and updating DOM elements efficiently.
Source and Learning Reference
This project was learned and developed by following the YouTube tutorial:

"Learn How To Make Weather App Using JavaScript Step By Step Explained"
https://www.youtube.com/watch?v=MIYQR-Ybrn4
