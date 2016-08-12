# Front End Developer Exercise for Future Learn

*Matthew Bee (matt@todayishould.com)*

Instructions moved to INSTRUCTIONS.md and README.md has become developer instructions for running the code test locally and notes on development. 

## Installation

### Requirements
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [bower](https://bower.io/)

### Installation

Clone this repo.  Navigate to the repository folder if required.

Run ```npm install``` - This will install gulp, gulp sass, gulp source maps and browser-sync. Mostly development dependencies.

Run ```bower install``` - This will install all front end dependencies (jQuery). 

jQuery is purely used for speed - as I only have a limited time to develop code for the test - it's been used to allow more work to be completed. Everything could easily be done in vanilla JS, but would take more testing time.


### Compiling/Viewing the site

To run the gulp watch task and start the server (which will also autoload the site) run ```gulp```.

This will start the watch tasks to compile the SASS, watch for changes and also start a server at http://localhost:3000/ - which will autoload when changes made as sepcified in the Gulpfile. The browser should open at the right location after the gulp task has run.

## ToDo List

This is the project plan, as items are completed, I'll check them off and what remains is essentially the remaining tasks that I would be completing if I had longer than 2 hours.

* ~~Set up initial development environment, gulp server/sass compiling/dependencies etc.~~
* ~~Create Base HTML to work from~~
* ~~Create skeleton HTML~~
* Style HTML to match provided visuals
* Test in required browsers
* Add JS to make the interactions work
* Test in required browsers
* Add brand font from TypeKit (Europe)
* Add more detailed ARIA roles and 'itemprop' meta data
* Create front end tests (webDriverJS) to ensure that the JS interactions/element positioning do not been broken by future work
* Automate task runner to run tests when relevent codebase changed
* Test in a screenreader to ensure that accessibility isn't hindered with the hidden elements
* Refactor anything that could be made faster/simpler/better documented