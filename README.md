# chart-image-service
Currently in POC, this is a node service that exposes an API, given parameters it will generate a chart from our component library, take a snapshot of the component and return the png. 

## Tech stack
* React
* Node
* Express
* Puppeteer

## How it works
The application uses node express to run a server and listen for requests, when a post request is made to /charts with data in the body, the application will pass the data to a generateHTML function, this function will SSR the LineChart Component with the given data and return the HTML string. Next we call generateImage passing the HTML string, the generateImage function will use puppeteer to run a headless browser pointing to the localhost:3030 (where our server is running), it will set the content of the page to be the HTML string, puppeteer will take a screenshot which is saved to disk. The function returns the image name. The final step is to taking the returned image name send the file as the response to the post request. 

Note: There is a generateMockData.js file which will generate the mock data required by the component. You can then copy this into postman to test the API. 

## To Do
* Refactor to TypeScript
* Add all available charts as options
* Get the legend values from the data (hardcoded right now)
* Clean up image after returned 
* Update component library chart to convert timestamp to dates so conversion loop can be removed
* Add Unit Tests
