# Milestone Project 2 - Quizzler-Javascript
![All devices](https://github.com/renatalantos/Quizzler-Javascript/blob//master/documents/screenshots/Am_I_responsive_screenshot.JPG)

## Table of Contents

* Introduction
* UX
  * Business goals
  * Owner Goals
  * User Goals

* Layout
  * Home
  * About
  * Sessions
  * Gallery
  * Contact
  * Confidentiality 
  
 * Features

* Structure
  * Wireframes
  * Discrepancies with original ideas
  * Colours
  * Typography

* Technologies

* Testing

* Bugs, Issues

* Deployment

* Acknowledgements

# Introduction
The product Quizzler (supported by javascript) is an online art quiz game. Art lovers can test their knowledge by answering 15 questions, illustrated by images relating to the work of art or artist. 
The user has an option to create a username, but they can also play in guest mode.
The user is given the option to save their username. At the end of the game they receive a message, whose content depends on the score and it displays entered username (if any) and the score in the game as well. During the game, the user is informed about:
  
  *  The number of games played in the session
  *  Which question they are on (Current question)
  *  Current score
  *  The highscore

 The site has been designed for desktop, laptop, tablet and mobile devices.


# UX

* Owner goals

The owners of the product is a web developer, who would like to demonstrate her skills towards prospective employers and the public.


* User goals


Potential users would like / may want to achieve the following:

### Before the game

* Finding a quiz game online. This can be achieved by one of the meta tags' name being set to "keywords" and  the content to "trivia, art, quiz, online, game" in the index.html file.
* See username and game information. These are displayed in the "Your information" section.  
* Create a username to personalise the game. This can be achieved by entering the name in the username window. Users can start the game without entering a username as well, which is pinpointed in the "Create username or just play!" message about the username window.
* Save their username. This is supported by the "Save" button under the username window.
* Know how many questions there are. This is supported by the initial message "Try my awesome 15 question art quiz!"
* Start the game. This feature is enabled by the "Start" button.

### During the game
* See the number of games played in the session. This is displayed in the "Number of games" window in the "Your information" section once a game is started.
* See how many questions are there left to answer. This information is displayed in the "Current question" window in the "Your information" section, where current questions are shown as current question / 15.
* Keep track of their score. This information is displayed "Current score" window in the "Your information" section. Score increments by 100. 
* Get from one question to the next. This is supported by the "Next" button.
* Receive immediate feedback whether the answer they gave was correct or incorrect. This feature is implemented by the answer button turning green/red depending on correct/incorrect answer. Also, a message is displayed "Correct! +100 points" if answer is correct and "Incorrect! 0 points" if answer is incorrect.

### When game ends
* See their highscore in order to be able to measure their current performance against previous performances. This information is displayed in the "Highscore" window in the "Your information" section.
* Recieve a message, with the number of questions they got right. This is enabled by the user message at the end. The text will differ based on the score. 
* Restart the game. This feature is enabled by the "Restart" button.

### In general
* Check out the developer portfolio of this project. The GitHub favicon will enable the user to get access to this information.
* Be able to view the site on devices with different screen sizes and reolution. This is supported by the css media queries in the style.css file.


# Layout

As I meant to keep the design as simple as possible, the game is designed to be on one page only, regardless the game stages. It's layout is sourced from one index.html file only. The basic page layout is divided into 2 areas: 


1.  The "Your information" section" 
2.  The game area 

This basic layout is maintained throughout the game. The "Your information" section won't dynamically change, merely the information in it will be updated throughout the game. 

### The "Your information" section
insert photo here!!!!
 This is where the user can enter and view user and game information. It is located to the left on the page on larger desktops and on top on smaller screens. It has the following elements:
 
* Username window with placeholder inside and with text above. 

 * "Save" button. 

 * "Number of games played" window with text. 

 * "Current question" window with text. 

* "Current score" window with text. 

* "Highscore" window with text. 



### The game area

The game area layout will basically stay the same throughout the game. I manipulate it by adding and hiding elements, depending on what page the user is. There are three basic pages. They all include the "Your information section", so I'm not going to explicitely mention it again. The game area which will be in the middle of the page on all screens, and all its elements are centered in the middle. insert photo here!!!!
1. Start page 
[Start page](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/start_page_with_no_updates.JPG)
2. Game page 
[Game page](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/when_game_started.JPG)
3. End page 
[End page](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/on_end_game.JPG)
4. Restart page - this will be the same as the Start page, except for highscore will show and the current question counter is 1.
[Restart page](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/on_restart.JPG)

 #### The Start Page consist of the following elements: 
 * Title area with question "Do you know your art?" and 2 Font Awesome icons for a palette and a brush - this will be hidden after "Start" button is pressed.
 * Photo area with the main image "colourful paints" - this will be hidden after "Start" button is pressed.
 * Message to user "Play my awesome 15 question quiz game" - this will be hidden after "Start" button is pressed. 
 * Button area with the "Start" button only - the "Start" button will be hidden after "Start" button is pressed.   


 #### The Game page consist of the following elements:

 * Image relating to question - this will be hidden when the game ends.
 * Actual question - this will be hidden when the game ends.
 * Possible answers displayed on answer buttons in a 2 x 2 layout (in desktop view, 4 x 1on smaller screens) these will be hidden when the game ends. insert photo here!!!!!
*  Next button - this will be hidden when the game ends.
*  Result message. This message appears above the answer buttons and will disappear as soon as the answer buttons are disabled.

#### The End Game Page consist of the following elements: 

* Message to the user "Play again" - this will be hidden when the game restarts.
* "Restart" button - this will be hidden when the game restarts. The "Restart" button takes the user to the Game page (skipping the static Start page).
* Message to the user depending on the score, displaying te number of correctly answered questions - this will be hidden when the game restarts. 



# Features


### The "Your information" section

This is where the user can enter and view user and game information. This is featured in ALL game stages. It consists of the following elements:
 1.  "Your information" heading to display the purpose of this section. The horizontal rule underneath separates the functional elements from the title. These functional elements are:

 2. Username window with placeholder inside and with text above. User has the option to create a username or play in guest mode. This is clarified by the text, which says: "Create username or just play!" If user enters a username and saves it, it will be displayed in the result message at the end of the game, where number of corretly answered questions are outlined. If user chooes not to enter a username, the message will be still displayed, with no name.

 3. "Save" button. The save button will save the username, entered the way described above.


 4. "Number of games played" window with text. Here user can keep track of the  number of games in a game session. This is 0 by default, changes to 1 on start and will update on restart.

 5. "Current question" window with text. Current questions are shown as current question / 15. This is 0 by default, changes to 1 on start and will updateto 0 on restart.

6. "Current score" window with text. This enables users to keep track of their score. Score increments by 100. This is 0 by default, increments by 100 when user gets a question right and will update to 0 on restart.

7. "Highscore" window with text. This enables users to keep track of their highscore. This is 0 by default, increments if achieved score is bigger than the highscore or sets the first score as highscore. This is 0 by default.

8. The second horizontal rule separates the above functional elements from the GitHub icon, which is a shortcut link to the web developer's current portfolio and the copyright statement unserneath.

### Featured on Start Page

1. Title area with question "Do you know your art?" and 2 Font Awesome icons for a palette and a brush - this is a visual enhancement feature
 2. Photo area with the main image "colourful paints" - this is a visual enhancement feature.
 3. Message to user "Play my awesome 15 question quiz game". 
 4. Button area with the "Start" button only - the "Start" button starts the game the first time, after it's renamed to "Restart. This is the only dynamic element on the Start page.


 ### Featured on Game Page

 1. Image relating to question - for visual enhancement, also they are organic part of the questions.
 2. Actual question - the gist of the quiz.
 3. Possible answers displayed on answer buttons in a 2 x 2 layout (in desktop view). The answer selected answer button turns green/red depending on correct/incorrect answer, and they will be disabled and faded out then to signal it to the the user, that they are not allowed to press the buttons again. They will stay like this until the "Next" button is pressed. The answer buttons could not be pressed again by default anyway, this feature just enhances that. 
4.   Next button. The next button removes the disabled state from the answer buttons and takes the user to the next page.
5.  Result message. This message appears above the answer buttons simultaneously with the answer buttons' reacting saying "Correct! +100 points" if answer is correct and "Incorrect! 0 points" if answer is incorrect. It will disappear as soon as the answer buttons are disabled.

### Featured on End Page

1. Message to the user "Play again" - extra encouragement to the user to stay on the game.
2. "Restart" button - The "Restart" button takes the user to the Game page (skipping the static Start page) It is simply the "Start" button renamed to "Restart".
3. Message to the user depending on the score, displaying te number of correctly answered questions. There are 6 messages altogether, including when score is 0.



## Future features
* I would like to add more questions to the game, as presently the number of alternating questions in a 15 question game is only 30.
* I would like to add a sound effect to the buttons and maybe a pleasant background music.
* It would be nice to create a larger game where this art quiz is only a subcategory. 

# Structure
## Wireframes


### Wireframes for mobile, tablet and desktop view are available here: 

[Mobile View](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/wireframes/%23Mobile_view.pdf)


[Tablet View](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/wireframes/%23Tablet_view.pdf)


[Desktop View](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/wireframes/%23Desktop_view.pdf)

## Discrepancies with original ideas


Overall I kept to the basic layout described in the wireframes. I aimed for a simple design and simple game to start with.

However, there are some concepts and features that I discarded.

1. I intended to add a user registration and login form, which I realized were unnecsessary. I only created the above mention "Your information" section, which was also part of my original concept.


2. Buttons were meant to be displayed under one another, however, this is not good on smaller laptop screens, as user needs to scroll up and down to see the image and press the next button. This button layout has been preserved for mobile devices.

  ## Colours

    For the colours I partly used the [mycolor.space](https://mycolor.space/) site and the in-built colour palette in Gitpod. I aimed for cheerful, playful, attractive colours that suit a game and compliment the colourful images. I allowed myself to use stronger yet not too strong colours. The background colour is a very pale pink, however, as users should not be distracted from the visuals of the game elements. I chose the colours intuitively. The colours are contrasting yet complimenting each other in my opinion. insert photo here!!!!

    

    ## Typography


    For the information section, the game questions, the game answers on the buttons I used Sniglet cursive from Google fonts as it has playful, round yet easy-to-read letters.  

    For the page title "Do you know your art?"  and the messages to the user to encourage them to paly "Try my awesome 15 question art quiz!" and "Play again" I used Nanum Brush cursive from Google Fonts as the letters look like brushstrokes and they can be associated with painting. 
    

    For the final score messages to the user I used Calligraffiti, cursive from Google fonts as the letters look like they are handwritten and the message is more personal. This is also a very beautiful letter type and can be associated with art.


# Technologies

### The following technologies and platforms were used to create the site:

*  **HTML** for structure and text

*  **CSS** for styling

* **Javascript** for to enable user interaction on the site


* **Google Fonts** for text

* **Font Awesome for icons** for icons

* **Responsivity mockup sites** to test responsivity

* **Gitpod** to create pages and assets

* **Github** to store created pages and assets


# Testing 

 ## Validation 

   My index.html page passed the validator with the following result on 2 lines: **Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.** I left this, however, as even without the heading, the sections represent areas with well marked different purposes on the page.
   [HTML Warning messages after successful validation]()

   My CSS page passed in the W3C Jigsaw CSS validator with the following result: **CSS Congratulations! No Error Found.**

  There were 14 warning messages displayed regarding imported elements. 
  These relate to the imported stylesheet on top of the page and the elements are imported to power the text overlay transform features.

  [CSS Warning messages after successful validation]()

  ## Testing in supported browsers

  I used the following most up-to-date browsers:

  * Google Chrome
  * Mozilla Firefox
  * Microsoft Edge
  * Internet Explorer

  Chrome, Firefox and Edge displayed the site without problems. Firefox and Edge display a sligthly different background color. 
  My guess is, they don't feature the colours I imported from the ColorSpace website and they substitute it with the closest match.

  Internet Explorer didn't display the animated features including the Javascript powered slideshow Gallery  first. 
  After I moved the javascript source links form the head into the end of the body page, these features worked as well.

  ## Responsiveness

  I checked the responsiveness on the following tools while creating the pages:

  * Google Developer Tools

  * Am I Responsive website

  The finished product was tested on the following devices:

  * Samsung Galaxy A51
  * Ipad
  * Huawei P30 Pro
  * Samsung Galaxy S5

  The site looked the way it was intended on almost all devices. However, the Ipad does not display the main images.
   Apparently that could do with the IOS system or Safari, I couldn't resolve this issue, however, in Google Developer 
   tools everything looks as meant.

  I also found while testing the responsive layout in Google Developer tools, that the smaller the device screen size, the better the header looks.

  ## Features 

  All features are working as intended. Contact form asks for relevant information if not given. 
  Radio buttons allow user to select one option at the time.

## Bugs, Issues


* Hamburger menu

I tried to insert a hamburger menu for mobile view using Javascript following the [https://www.w3schools.com/howto/howto_js_mobile_navbar.asp](https://www.w3schools.com/howto/howto_js_mobile_navbar.asp) link,
 however, the opened link tabs stayed open after being clicked on, and occupied too much space on the screen, so I reverted to using the header links. 

* Gap on the side of main images in large desktop view

This is due to the actual width of the images, which is 1500px and the screen width is wider than that. 
I considered resizing the images but I found that it affects the image quality, 
so I left it the way it is.  

* Header occupied a large portion of the screen in mobile view

 In mobile view the header took up too much space and nav elements appeared partly under each other. I resized the header in all views. In mobile views I reduced the line height, font size, the logo and all paddings and margins that could be done without. I gave the navbar a width of 90% and the logo 10%. This doesn't apply to devices under the screen width of under 321 px. Here I simply floated the logo to the left and reduced the navbar elements. On larger mobile devices the logo and the nav elements appear on 2 different lines, however the nav items are pretty much centered and the layout has improved a lot. 


* Extra space between elements Contact child psychologist link and copyright statement on About and Sessions pages. On the About page the footer was inside the #hero-text-area section, taking it out fixed the issue. 


* On the Sessions page an extra margin of 10px was was applied to the h3 footer elements, and extra 10px padding was applied to the footer h6 elements. Styling just the footer h3 elements by stopping them from sharing the same properties as the navbar elements and footer links was half of the solution. In the properties I set both margin and padding to 0. I created an id for the footer h6 and styled this again with no margin or padding.

[Gap as intended](https://github.com/renatalantos/Embrace-support-group/blob/master/documents/screenshots/gap%20between%20contact%20child%20psychologist%20link%20and%20copyright%20as%20intended.JPG)
[Gap appears larger than intended](https://github.com/renatalantos/Embrace-support-group/blob/master/documents/screenshots/gap%20appear%20larger%20on%20Sessions%20and%20Gallery%20pages.JPG)


* The above helped me solve another issue where creating an extra div for the copyright statement and placing it after the Follow us on social media text in the html file highlighted the flaws mentioned in the above section. The copyright statement had to be part of the of footer-item-center div, after the Contact a child psychologist link. Therefore, when diaplayed in mobile view, the copyright statement was displayed between links and not at the bottom. Therefore, in tablet and mobile view the copyright needed to hidden in the @media queries. 

[Illogical position of copyright statement in the footer in tablet and mobile view](https://github.com/renatalantos/Embrace-support-group/blob/master/documents/screenshots/footer%20and%20copyright.JPG)



* Radio buttons allow user to select two options at the same time. 

This was solved by adding a name to the radio input tags. 
[Radio button allows to selections at the same time](https://github.com/renatalantos/Embrace-support-group/blob/master/documents/screenshots/Radio%20buttons.JPG)

* Gap between main Home image and text area

A gap appeared between the main image and the text area in tablet and large desktop view. This was due to the narrower height and width of the image from the rest.
 I fixed this issue resizing the image for the 2 extra views. However, when tested on my Android Galaxy A51, the gap appeared there (not before). I fixed this by adding an extra 20px of height and line height in mobile view. This fixed the issue.

[Gap between main image and text area](https://github.com/renatalantos/Embrace-support-group/blob/master/documents/screenshots/Gap_between_image_and_text_area.jpg)

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitPod Workspace I made sure that everything is saved.
2. In the Terminal window I added all my files by using git add . .
2. In the Terminal window I queued my files using git commit -m "Meaningful, descriptive note"
3. In the Terminal window I typed git push to push my updated files into GitHub.
4. In GitHub I selected my repository name from the dropdown window.
5. I navigated to the Settings tab on the right hand side (above Green Gipod button).
6. On the Settings page I navigated to GitHub Pages.
7. I clicked on the Check out here! link after the message: Pages settings now has its own dedicated tab!
8. This took me to the next page GitHub Pages. 
9. Under Source I selected branch **Master** from the **None**, **extensions** and **Master** options.
10. From the folders beside branch I selected /(root) from /(root) and /docs.
11. Next I clicked save.
12. My live site was deployed a few minutes later under [the following link:](https://renatalantos.github.io/Embrace-support-group/)


# Acknowledgements 

The below website is a collage for all over the web.

## Idea

Completely mine. However, I was glad to discover that there are web pages, images, videos featuring parent support groups and therapy groups in general. 

## Text 
Text is a mix from the following websites:

* [General1](https://www.relate.org.uk/)
* [General2](https://turn2me.ie/)
* [General3](http://www.familymatters.ie/testimonials.html)
* [General4](https://www.goodtherapy.org/learn-about-therapy/modes/group-therapy)
* [Confidentiality page](https://students.tufts.edu/sites/default/files/HWClientConsentConfidentialityPolicy.pdf)

## Images 

Images are  courtesy of the [pexels.com](https://www.pexels.com/).  Thanks Tima!
The main Home page image is featured on the [www.newportacademy.com](https://www.newportacademy.com/resources/restoring-families/parenting-support-groups/) webiste.

## Video 

Video is courtesy of a lovely parent support group and YouTube
[YouTube video link](https://www.youtube.com/watch?v=jAIRxEWfl7Y)

## Text styling
I used the GoogleFonts website to choose my letter styles.

## Icons

Icons are from the FontAwesome website.

## Colours
Colours were partly chosen from the mycolor.space website and the default palette in GitPod. 

## Technologies
My beloved cheetsheet, the www.w3schools website for Javascript. Kits to power image transformations, the gallery slideshow and buttons for the slideshow are from there. 

# Special Acknowledgements

* To Roman for staring us off on this journey.
* To Kasia for all her help and hard work.
* To my classmates who helped and advised.
* To my mentor Seun for her guidance.

And last but not least my family for testing my pages while I was testing their patience.
Sorry about the late dinners and horrible meals!!! And Thanks!































  










    
  






