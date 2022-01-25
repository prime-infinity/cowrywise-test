# Cowrywise-test

The result of a simple frontend test in which images are gotten from the unsplash api and displayed in a frontend built with Vue.js
Basic and simple implementation with basic features 

> **Cowrywise-test: [Cowrywise-test]**(https://cowrysplash.netlify.app/)

## Technologies

- Basic web technologies such as HTML5, CSS3, Bootstrap
- Vue.js For the frontend


## Features

- On application start,an asynchronous https call to the unsplash API is sent.
- An initial value is provided in a search box, this value is used to query the API.
- The API is queried for only 9 results
- From the json response given, the UI is updated.
- Another search string can be passed in the search box and the search icon clicked to initialise the new search
- A placeholder is used while the images are being loaded
- The images are arranged in a beautiful and responsive staggered grid.
- On clicking on any image, another API call is made to the unsplash API to get that particular image.
- A modal is opened and the gotten image as well as its details are used to populate it.
