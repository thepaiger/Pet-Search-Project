# Pet-Search-Project

## App Title: 
### The name of your app.
  * Fetch!
  
## App Description: 
### What your app will do.
  * Pet tinder?
    * Set profile for search criteria
    * Search through pets
    * Possibly less of a standard search setup and more randomized pets popping up to "swipe" through like Tinder? Dating profile for pets?

## API: 
### The API you are using and the information you plan to get from it.
  * https://www.petfinder.com/developers/v2/docs/
  
## API Snippet: 
### A sample snippet of JSON from a successful GET request you have made to your API using Postman.
  * Object
    animals: Array(20)
      0:
        age: "Young"
        attributes: {spayed_neutered: true, house_trained: false, declawed: false, special_needs: false, shots_current: true}
        breeds: {primary: 'Tabby', secondary: null, mixed: false, unknown: false}
        coat: "Short"
        colors: {primary: 'Gray / Blue / Silver', secondary: null, tertiary: null}
        contact: {email: 'purrfectangelsanimalrescue@yahoo.com', phone: '9035203918', address: {…}}
        description: "Murphy was rescued from a shelter at 8 weeks old.  He is such a handsome boy with a kitten face,..."
        distance: null
        environment: {children: true, dogs: true, cats: true}
        gender: "Male"
        id: 53162451
        name: "Murphy"
        organization_animal_id: null
        organization_id: "TX2073"
        photos: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
        primary_photo_cropped: {small: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53162451/1/?bust=1633298652&width=300', medium: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53162451/1/?bust=1633298652&width=450', large: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53162451/1/?bust=1633298652&width=600', full: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/53162451/1/?bust=1633298652'}
        published_at: "2021-10-03T22:04:17+0000"
        size: "Medium"
        species: "Cat"
        status: "adoptable"
        status_changed_at: "2021-10-03T22:04:17+0000"
        tags: (7) ['Friendly', 'Affectionate', 'Gentle', 'Smart', 'Brave', 'Quiet', 'Loves kisses']
        type: "Cat"
        url: "https://www.petfinder.com/cat/murphy-53162451/tx/mesquite/purrfect-angels-animal-rescue-tx2073/?referrer_id=8a83d890-6fa4-45ec-bd55-8908eb564151"
        videos: []
        _links: {self: {…}, type: {…}, organization: {…}}
  
## Wireframes: 
### The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.
  * https://whimsical.com/EM56yA3fQrtiGH8Vfck5Qe
    * IN PROGRESS
    
## MVP: 
### A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
  1. Built with HTML, CSS, and JavaScript.
  2. Styled using Flexbox or Grid.
  3. Use fetch to make a request to an external data source and insert some of the retrieved data on to the DOM.
  4. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  5. Fulfill the build requirements you have specified in your MVP.
  6. Deployed site on Github Pages.
  7. At least 30 commits in your project repository.
  8. A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

  * Build responsive website for searching adoptable pets
    * Add search criteria and click through adoptable pets

## Post-MVP: 
### A list of additional/advanced features you would like to include in your app after you have met MVP.
  * Instead of populating all search results that fit criteria, create more of a Tinder set up - randomized pet within search criteria will display with bio details with ability to click through to official profile or "swipe" and move on
    * May need to use a CSS carousel? 
  * https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
    * Touch event for swiping
  
## Goals: 
### What you plan to accomplish for each day of the project week.
| Day	| Deliverable	| Status |
| --- | ----------- | :----: | 
| Oct 1	| Prompt / Project Approval / Fetch Request | Complete | 
| Oct 2	| Wireframes / Timeframes | Complete | 
| Oct 3	| Core Application Structure | Complete |
| Oct 4	| Psuedocode & JS Functionality | In-Progress | 
| Oct 5	| Populate Majority Code & CSS | Incomplete |
| Oct 6	| Complete Majority Code & CSS | Incomplete |
| Oct 7	| CSS / Final Touches | Incomplete |
| Oct 8	| Presentations | Incomplete |

## Timeframes: 
### How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
| Component | Priority | Estimated Time | Time Invested	|
| --------- | :------: | :------------: | :-----------: |
| Wireframes | L | 2 HRS | 1 HR |
| Add/test API Fetch | H | 3 HRS | 7 HRS |
| Pseudocode Javascript	| H | 3 HRS | 45 MIN |
| HTML & JS	| H | 10 HRS | 7 HR 30 MIN |
| Main CSS Styling | H | 5 HRS | 2 HRS |
| CSS Detailing | H | 3 HRS |  |
| Adding Flexbox | H | 2 HRS |  |
| Media Queries | H | 3 HRS |  |
| Total | H |  |  |
