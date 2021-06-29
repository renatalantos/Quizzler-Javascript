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
[View on IPadPro](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/ipad_pro_responsive_design.JPG)

1.  The "Your information" section" 
2.  The game area 

This basic layout is maintained throughout the game. The "Your information" section won't dynamically change, merely the information in it will be updated throughout the game. 

### The "Your information" section

 This is where the user can enter and view user and game information. It is located to the left on the page on larger desktops and on top on smaller screens. It has the following elements:
 
* Username window with placeholder inside and with text above. 

 * "Save" button. 

 * "Number of games played" window with text. 

 * "Current question" window with text. 

* "Current score" window with text. 

* "Highscore" window with text. 



### The game area

The game area layout will basically stay the same throughout the game. I manipulate it by adding and hiding elements, depending on what page the user is. There are three basic pages. They all include the "Your information section", so I'm not going to explicitely mention it again. The game area which will be in the middle of the page on all screens, and all its elements are centered in the middle. 
[View on IPad](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/ipad_responsive_design.JPG)

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
 * Possible answers displayed on answer buttons in a 2 x 2 layout (in desktop view, 4 x 1on smaller screens) these will be hidden when the game ends. [Button layout on smallest screen](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/smallest_screen_responsive_design.JPG)
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

1. I intended to add a user registration and login form, which I realized were unnecessary. I only created the above mention "Your information" section, which was also part of my original concept.


2. Buttons were meant to be displayed under one another, however, this is not good on smaller laptop screens, as user needs to scroll up and down to see the image and press the next button. This button layout has been preserved for mobile devices.

  ## Colours

 For the colours I partly used the [mycolor.space](https://mycolor.space/) site and the in-built colour palette in Gitpod. I aimed for cheerful, playful, attractive colours that suit a game and compliment the colourful images. I allowed myself to use stronger yet not too strong colours. The background colour is a very pale pink, however, as users should not be distracted from the visuals of the game elements. I chose the colours intuitively. The colours are contrasting yet complimenting each other in my opinion. [Colour harmony](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/colour_harmony.JPG)

    

## Typography


For the information section, the game questions, the game answers on the buttons I used Sniglet cursive from Google fonts as it has playful, round yet easy-to-read letters.  

For the page title "Do you know your art?"  and the messages to the user to encourage them to paly "Try my awesome 15 question art quiz!" and "Play again" I used Nanum Brush cursive from Google Fonts as the letters look like brushstrokes and they can be associated with painting. 
    

For the final score messages to the user I used Calligraffiti, cursive from Google fonts as the letters look like they are handwritten and the message is more personal. This is also a very beautiful letter type and can be associated with art.


# Technologies

### The following technologies and platforms were used to create the site:

*  **HTML** for structure and text

*  **CSS** for styling

* **Javascript** for enabling user interaction on the site


* **Google Fonts** for text

* **Font Awesome for icons** for icons

* **Responsivity mockup sites** to test responsivity

* **Gitpod** to create pages and assets

* **Github** to store created pages and assets


# Testing 

 ## Validation 

   My index.html page passed the validator with the following result on 2 lines: **Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.** I left this, however, as even without the heading, the sections represent areas with well marked different purposes on the page, so there use is semantically correct in my opinion.
   [HTML Warning messages after successful validation](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/HTML_warnings.JPG)

   My CSS page passed in the W3C Jigsaw CSS validator with the following result: **CSS Congratulations! No Error Found.**

  There were 14 warning messages displayed regarding imported elements. 
  These relate to the imported stylesheet on top of the page and the elements are imported to power the text overlay transform features.

  [CSS Warning messages after successful validation](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/css_validation.JPG)


  My script.js file passed the JS Lint validator with no errors but a lot of warnings, most of which relate the the characters I uses in the code.
  [JS Lint Warning messages 1](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/js_lint_warnings1.JPG)
  [JS Lint Warning messages 2](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/js_lint_warnings2.JPG)
  [JS Lint Warning messages end](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/js_lint_warnings_end.JPG)


On Google Dev Tools the site displays without erros, however, there is an error for a deleted favicon, which is not connected to the game.

[Favicon](https://github.com/renatalantos/Quizzler-Javascript/blob/master/documents/screenshots/Favicon.JPG)



  ## Testing in supported browsers

  I used the following most up-to-date browsers:

  * Google Chrome
  * Mozilla Firefox
  * Microsoft Edge
  * Internet Explorer
  * Opera

  Chrome, Firefox, Edge and Opera displayed the site without problems and let the game run without errors. Firefox and Edge display a sligthly different background color. 
  My guess is, they don't feature the colours I imported from the ColorSpace website and they substitute it with the closest match.

  On Internet Explorer the start page displayed but on click of the start button the game didn't start, even though active scripting is on. I guess IE doesn't support certain Javascript features.


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

  ## Features 

  All features are working as intended. All buttons work, username is displayed, all question and score windows show the correct values, user feedback messages are correctly displayed based on score. Images and questions show up. 

## Bugs, Issues


* My main issue that kept me progressing for a long time was that question counter started decrementing on game restart after a while. This was due to the fact that unlike in the tutorial I based my game on, the user needs to proceed to the next question by the next button. I had created a nexPage() function where I put the questionCounter as questionCounter increases as user goes to the next page. Therefore I had to redeclare questionCounter in startGame() and set it to 1 in restartPage(). availableQuestions = [...questions] needed to be taken out of the getNewQuestion() function and put into restartPage() and startPage(). This issue was resolved by my mentor.

* However, due to this another bug was generated, which has remained unresolved. As questionCounter is forced to start at 1 at restart, the first question on restart is the last from the previous game. And probably due to the splice method, as the first question is basically considered being from the previous array of questions, is removed and sometimes put back in the array during the course of the same game, meaning that question 1 may be repeated within the same game.

* Was unable to write if statement with if(score===0) for user feedback message, there was no message returned at the end. Then I realized that score is only "born" when it is incremented, it doesn't exist before. By adding an incrementScore(0) into the user selection check function, this issue was resolved.

* My other unresolved issue is that I haven't been able write code for validating no user answer, namely when user does not press any answer buttons. I tried to set a Boolean variable answerClicked at the beginning of the game set it to false, placed it into the user selection check function and set it to true, outside of the function it was false, and validate as if (answerClicked==false){display message... } I would have needed it to the user feedback message. Right now, when user rushes through the game without selecting any answer, two things can happen:
1. If user plays in the first session, no message shows where user feedback messages should be shown. 
2. If user plays after a session where they received a score (including 0), the previous score and user message will be transferred into the end of the "empty" game.

* I had an issue with figuring out how to restart the game as reimplementing the start button didn't do anything. Then I realized that I had to build back the elements that I removed in the startGame() function in order to make most of the space and reset the variables that were increased during the game. I needed to create an endGame() function for this purpose as well.






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
12. My live site was deployed a few minutes later under [the following link:](https://renatalantos.github.io/Quizzler-Javascript/)


# Acknowledgements 



## Idea
The quiz idea is not new under the Sun, but this particular quiz was was compiled by me. 


## Text 
I wrote most questions myself.
I needed help on the following 2 questions, though as I don't know the artists well:

* [On Kandinsky](https://quizizz.com/admin/quiz/5de6f21a52cd9a001b726dc0/wassily-kandinsky)
* [On Andy Warhol](https://www.funtrivia.com/trivia/People/Andy-Warhol-20581.html)


## Images 

The main image is from [pexels.com](https://www.pexels.com/). The images in the project are not subjected to copyright.



## Text styling
I used the GoogleFonts website to choose my letter styles.

## Icons

Icons are from the FontAwesome website.

## Colours
Colours were partly chosen from the mycolor.space website and the default palette in GitPod. 

## Technologies
I could not have created this game without external Javascript resources in this short amount of time. 
I heavily relied on the following tutorial to build the game:

How to Make a Quiz App using HTML CSS Javascript -
Vanilla Javascript Project for Beginners Tutorial by Brian Design
Youtube link: https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2455s.

I also looked at the following repository by a fellow student:


https://github.com/rebeccatraceyt/WhatTheBlank. This helped me set up the sessionStorage.getItem() 
and sessionStorage.setItem()methods and helped me understand what the code does.


I was also helped on 2 separate issues by 2 tutors of CI.


Main issue with my game of questionCounter decreasing on restart was resolved by my mentor Seun.
I learnt how to insert images into Javascript from this tutorial: [StackOverflow](https://stackoverflow.com/questions/64563792/how-to-have-images-in-a-javascript-quiz). 

Beside StackOverflow, I often checked the geeksforgeeks and www.w3schools websites as well. 
Code for text transformation (fade in) in CSS is from W3schools.
Button layout is based on the following site: https://css-tricks.com/



# Special Acknowledgements


* To Kasia for all her help and precious advice.
* To my classmates who helped and advised.
* To my mentor Seun for her guidance.

And last but not least my family for putting up with me during this intense time.
Thanks Guys!

Thanks for reading.































  










    
  






