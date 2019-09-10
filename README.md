# Tap Room

#### _An application that shows a variety of beers/beverages from various brands in a clientside React application. - September 6 2019_

#### _By **Erik Irgens**_

## Description

This application is for a Tap Room website, which is meant to display many beer options from several different brands. This app, in this iteration, is intended to introduce the concepts of React and the component model into a client side app. 

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **User can view the main page** | Visit "/" path | Beer is displayed by category of brand  |
| **User can use the navigation page to view all brands** | Visit "/brands" path | A list of brands will appear  |
| **User can visit individual brands' page for their beverages only** | Visit "/brands/{brand}" path | A list of brand's beverages will appear  |


### Component Diagram and Pathing
![Untitled Diagram](https://user-images.githubusercontent.com/49962295/64452329-fbd39800-d09a-11e9-8697-dc3a9725a437.jpg)


## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/erik-t-irgens/TapRoom
    ```
2. Install the dependencies
    ```
    $ npm install
    ```
3. Run the application in the root directory
    ```
    $ npm run
    ```
4. Visit the MVC localhost:8080/
    ```
    localhost:8080/
    ```

## Known Bugs
* The listed beers on the Brewers page should not be aligned to the bottom of their element. I'm not sure why they are aligned in such a way.

## Technologies Used
* JavaScript, CSS, HTML, React

## Support and contact details

_Please contact Erik Irgens with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Erik Irgens_**
