# **Yemo Blog | Website**

Yemo Blog is an engaging platform designed exclusively for registered users, providing them with the opportunity to create posts, engage in comments, follow interesting content, seamlessly update posts, and curate their profiles with ease.

This dynamic website was meticulously crafted as part of Portfolio Project #4 (Full-Stack Toolkit) for the prestigious Diploma in Full Stack Software Development at [Code Institute](https://www.codeinstitute.net).

[View live website here](https://yemos-blog-website-3ef5a934b3dc.herokuapp.com/)

![Yemo Blog responsive design](assets/images/responsiveness.png)

## Table of Content

- [**Yemo Blog | Website**](#yemo-blog--website)
  - [Table of Content](#table-of-content)
  - [**Project**](#project)
  - [Objective](#objective)
  - [Site Users Goal](#site-users-goal)
  - [Site Owners Goal](#site-owners-goal)
  - [Project Management](#project-management)
    - [Kanban Board](#kanban-board)
    - [Database Schema](#database-schema)
- [**User Experience (UX)**](#user-experience-ux)
  - [Wireframes](#wireframes)
  - [User Stories](#user-stories)
    - [Site User](#site-user)
    - [Site Admin](#site-admin)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)
- [**Features**](#features)
  - [**Existing Features**](#existing-features)
    - [**Navigation**](#navigation)
    - [**Create Post**](#create-post)
    - [**Update Post**](#update-post)
    - [**Profile Page**](#profile-page)
    - [**Admin Area**](#admin-area)
    - [**Sign Up**](#sign-up)
    - [**Sign In**](#sign-in)
    - [**Sign Out**](#sign-out)
    - [**Footer**](#footer)
    - [**Flash Messages and confirmation pages to the user**](#flash-messages-and-confirmation-pages-to-the-user)
    - [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks \& Software](#frameworks--software)
  - [Libraries](#libraries)
- [Testing](#testing)
  - [Testing User Stories](#testing-user-stories)
  - [Code Validation](#code-validation)
    - [Markup Validation](#markup-validation)
    - [CSS Validaton](#css-validaton)
    - [PEP Validation](#pep-validation)
    - [JavaScript Validation](#javascript-validation)
  - [Additional Testing](#additional-testing)
    - [Manual Testing](#manual-testing)
    - [Automated Testing](#automated-testing)
    - [Responsiveness Test](#responsiveness-test)
    - [Browser Compatibility](#browser-compatibility)
    - [Lighthouse](#lighthouse)
    - [Peer Review](#peer-review)
  - [Known bugs](#known-bugs)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
  - [Deployment To Heroku](#deployment-to-heroku)
  - [How To Fork The Repository On GitHub](#how-to-fork-the-repository-on-github)
  - [Cloning And Setting Up This Project](#cloning-and-setting-up-this-project)
- [Credits](#credits)
  - [Content](#content)
  - [Technical](#technical)
- [Acknowledgements](#acknowledgements)

## **Project**

## Objective

The primary objective of Yemo Blog is to offer a user-friendly and interactive platform where registered individuals can effortlessly create, share, and engage with diverse content, fostering a vibrant community of creators and readers.

## Site Users Goal

The ultimate goal for users on the Yemo Blog site is to seamlessly express their thoughts and ideas by creating, sharing, and interacting with posts, comments, and profiles within a dynamic and welcoming online community.

## Site Owners Goal

The overarching goal for the site owner of Yemo Blog is to cultivate a thriving digital space where users can actively participate, fostering engagement and content creation, ultimately building a vibrant and loyal community around the platform. Additionally, the owner aims to showcase the versatility and capabilities of the Full Stack Software Development skills acquired through the Diploma program at Code Institute.

## Project Management

### Kanban Board

I've been using the application [Kanban board](https://kanbantool.com/kanban-board) and the project board in GitHub to keep my project together. It has been working really well and has helped me structure up my work a lot. Trello was used on a more general plan and GitHub was used to plan and organize my user stories.

<details><summary><b>Kanban Board</b></summary>

![Kanban Borad](assets/images/kanbanboard_1.png)

![User Stories](assets/images/user_story_2.png)
</details><br/>

[Back to top](<#table-of-content>)

### Database Schema

I employed a modeling tool called [Graph Models](https://django-extensions.readthedocs.io/en/latest/graph_models.html) to construct the database schema. In essence, this tool visualizes the intricate relationships between various models within the database, all tied to our application. Graph Models generates a .dot file, which can be conveniently transformed into a more user-friendly design using the dreampuf application.

This approach not only simplifies the representation of the database structure but also facilitates better understanding and communication.

<details><summary><b>Database Schema</b></summary>

![Database Schema](assets/images/database_schema.png)
</details><br/>

# **User Experience (UX)**

## Wireframes

The wireframes for the website were meticulously crafted using the [Balsamiq](https://balsamiq.cloud) software, encompassing both desktop and mobile interfaces. While the text content remained fluid throughout the wireframing phase, it's essential to note that the finalized design may exhibit variances from the initial wireframes. These differences stem from deliberate design decisions made during the creative process, enhancing the overall aesthetics and user experience.

<details><summary><b>Wireframes</b></summary>

![Wireframes](assets/images/wireframe.png)
</details><br/>

## User Stories

The user stories for this project are presented below to provide clarity on the significance of each feature. These stories serve as a foundation for testing and validation, which will be thoroughly documented and confirmed in the subsequent [Testing](<#testing>).

### Site User
|  | | |
|:-------:|:--------|:--------|
| As a Site User | I can view a list of posts | &check; |
| As a Site User | I can post | &check; |
| As a Site User | I can click on a specific post to read | &check; |
| As a Site User | I can like and unlike a review so that it is possible for me to interact with the review | &check; |
| As a Site User | I can view the number of likes on each review so that I can see how popular a specific review is | &check; |
| As a Site User | I can navigate easy on the site through paginated list of posts so that I feel comfortable using the site | &check; |
| As a Site User | I can view comments on a specific review so that I can read the conversations between different users on the site | &check; |
| As a Site User | I can sign up an account so that I can like and comment on reviews, create a profile page, create own reviews and edit / remove my reviews | &check; |
| As a Site User | I can create a profile page so that other reviewers can read about who I am | &check; |
| As a Site User | I can comment on a review so that I can be involved in the conversation | &check; |
| As a Site User | I can edit my comment so that I can change the content if needed | &check; |
| As a Site User | I can remove my review so that I have full control of my reviews | &check; |
| As a Site User | I can choose to see my own reviews so that I can find them easily | &check; |
| As a Site User | I can create a new review so that I can contribute to with new content to Review Alliance | &check; |
| As a Site User | I can log out from the site so that I can feel safe that nobody can access my information | &check; |
| As a Site User | I can get visual feedback when interacting with the content so that I can be sure how I have interacted with the page | &check; |

### Site Admin

|  | | |
|:-------:|:--------|:--------|
| As a Site Admin | I can log out from the site so that I can feel safe that nobody can access my information | &check; |
| As a Site Admin | I can create, read, update and delete reviews so that I can manage my review content | &check; |
| As a Site Admin | I can approve reviews so that I can secure high quality of the content | &check; |
| As a Site Admin | I can approve and disapprove comments so that I can secure a safe environment for the Site Users | &check; |
| As a Site Admin | I can create draft reviews so that I can finish writing the content later | &check; |
| As a Site Admin | I can access an admin area so that I can get a general understanding of logged in users, number of likes and number of posts | &check; |
| As a Site Admin | I can get visual feedback when interacting with the content so that I can be sure how I have interacted with the page | &check; |

[Back to top](<#table-of-content>)

## Site Structure

Yemo Blog in two parts: **when the user is logged out** and **when the user is logged in**. Depending on login status different pages is available for the user. When the user is logged out, such user can only view posts, comments, likes but cannot perform any of the mentioned activities EXCEPT logged in. If you are logged in as an administrator an *`admin` area* is available. The site has an minimalistic, clean and intuitive design that makes the site easy to navigate for the user.

Read more about the different choices in the [Features](<#features>) section.

[Back to top](<#table-of-content>)

## Design Choices

* ### Color Scheme

The color scheme chosen for Yemo Blog site was based on Bootstrap colour scheme and my personal reference.

<details><summary><b>Color Scheme</b></summary>

![Color Palette image](assets/images/coolors_palette.png)
</details><br/>

* ### Typography

The fonts used for the site is `Roboto`, which is sans-serif.

* `Roboto` is used generally in the website with different weigth as needed. It's easy to read and matches the minimalistic style that I wanted the site to have.

<details><summary><b>Google Font - Roboto</b></summary>

![Google Fonts Roboto](assets/images/google_fonts_roboto.png)
</details>

[Back to top](<#table-of-content>)

# **Features**

The features of the site are listed below.

## **Existing Features**

### **Navigation**

The navigation bar is very clean and straight forward. Depending if you  are logged in or not different menus are visible for the site user. If a user login, the user has the ability to post, comment, etc. An extra menu item is visible if you are logged in as an `administrator`.

*Links that are visible to logged out users**

* `Home` - The home page.
* `Blogs` - Lists all available blogs.
* `Category` - Blogs category.
* `Search` - Makes blogs search possible.
* `Login` / `Sign Up` - Gives the user the opportunity to log in or sign up if not already a registered user at Yemo Blog.

<details><summary><b>Navigation - User Not Logged In</b></summary>

![Navigation - User Not Logged In](assets/images/navbar_not_logged_in.png)
</details>

<details><summary><b>Navigation - Small Screen User Not Logged In</b></summary>

![Navigation - User Not Logged In](assets/images/small_screen_navbar_not_logged_in.png)
</details><br/>

*Links that are visible to logged in users*

All of the links that are visible to a not logged in user plus the ones below.

* `Create` New Post - Lets the user create a new blog post.
* `Comment`/`Reply` - Lists all comments/replies to a blog post.
* `Profile` Page - Shows logged in users profile page.
* `Logout` - Logs out the user.

<details><summary><b>Navigation - User Logged In</b></summary>

![Navigation - User Logged In](assets/images/navbar_logged_in.png)
</details>

<details><summary><b>Navigation - Small Screen User Not Logged In</b></summary>

![Navigation - User Not Logged In](assets/images/small_screen_navbar_logged_in.png)
</details><br/>

*Links that are visible if a user is an administrator*

All of the links above plus the one below.

* Admin Area - Gives the administrator a view with information about i.e. total number of users, number of comments and number of posts. In this view the administrator also can `publish` / `unpublish` / `approve` / `unapprove` `reviews`, `approve` / `unapprove` `comments` and `delete` blog posts.

<details><summary><b>Navigation - Admin Logged In</b></summary>

![Navigation Small - Admin Logged In](assets/images/admin_logged_in.png)
</details><br/>

### **Create Post**

On this page the registered and logged in user can create their own blog and post it. Click on the profile name then on `My Profile`, there a link to a create blog post.

<details><summary><b>Profile Page</b></summary>

![Profile Page](assets/images/profile_page.png)
</details>

<details><summary><b>Create Blog</b></summary>

![Add Blog](assets/images/add_blog.png)
</details><br/>

### **Update Post**

On this page the registered and logged in user can update their own blogs. The user will click on `My Blogs` on the `Profile Page`, this will display the list of blogs a User has. Through this view, a user han `update` and `delete` owned blogs.

<details><summary><b>List of Owned Blogs</b></summary>

![List of Owned Blogs](assets/images/my_blogs.png)
</details>

<details><summary><b>Update Blog</b></summary>

![Update Blog](assets/images/update_blog.png)
</details><br/>

### **Profile Page**

On this page the user can view and update their own profile page. And update passwords.

<details><summary><b>User Profile Page</b></summary>

![User Profile Page](assets/images/profile_page.png)
</details><br/>

### **Admin Area**

On this page the `administrator` (or other superuser decided by Yemo Blog) can *`approve`* / *`unapprove`* / *`publish`* / *`unpublish`* and *`delete`* blog posts, `comments` etc. General information about *number of users*, *number of `comments`*, *`number of reviews`*, *`unapproved comments`* is also being showed on the page.

<details><summary><b>Admin Area</b></summary>

![Admin Area](assets/images/admin_logged_in.png)
</details><br/>

### **Sign Up**

If the site visitor has no registered user at Yemo Blog, they can sign up.

<details><summary><b>Sign Up</b></summary>

![Sign Up](assets/images/sign_up.png)
</details><br/>

### **Sign In**

On this page the user can sign in to Yemo Blog website.

<details><summary><b>Sign In</b></summary>

![Sign In](assets/images/sign_in.png)
</details><br/>

### **Sign Out**

The logout is carefully crafted, once clicked on, it logout the user.

<details><summary><b>Logout</b></summary>

![Logout](assets/images/sign_out.png)
</details><br/>

### **Footer**

The footer area includes short information about Yemo Blog contact information and links to relevant social media.

<details><summary><b>Footer</b></summary>

![Footer](assets/images/footer.png)
</details><br/>

### **Flash Messages and confirmation pages to the user**

The sites incorporates flash messages and confirmation pages when an action has been performed (i.e. `delete/update` actions). Examples of this in the screenshots below.

<details><summary><b>Confirmation Messages</b></summary>

![Registration Success](assets/images/success_1.png)
![Profil Image Update Success](assets/images/success_2.png)
![Blog Add Success](assets/images/success_3.png)
![Update Blog Success](assets/images/success_4.png)
![Delete Blog Success](assets/images/success_5.png)
</details><br/>

### Features Left to Implement

* Add more automated testing
* Add 'current page is active' in navbar
* Add image resize functionality
* And few other features to be explored after

[Back to top](<#table-of-content>)

# Technologies Used

## Languages

* [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) - Provides the functionality for the site.
* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website

## Frameworks & Software

* [Bootstrap](https://getbootstrap.com/) - A CSS framework that helps building solid, responsive, mobile-first sites
* [Django](https://www.djangoproject.com/) - A model-view-template framework used to create the Review | Alliance site
* [Balsamiq](https://balsamiq.com/) - Used to create the wireframe.
* [Github](https://github.com/) - Used to host and edit the website.
* [GitBash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) - Terminal in [GitHub Codespace](https://www.github.com) used to create, edit and push changes to the GitHub repository.
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test performance of site.
* [Am I Responsive](https://www.amresponsive.com/) - Used for responsiveness check.
* [a11y Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/) - Used to test color contrast on the site
* [Graph Models](https://django-extensions.readthedocs.io/en/latest/graph_models.html) - Used to create a *.dot file of all models in the project.
* [Favicon](https://favicon.io/) - Used to create the favicon.
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness.
* [Kanban Board](https://kanbanboard.com/) - A project management tool to organize the project.
* [Cloudinary](https://cloudinary.com/) - A service that hosts all static files in the project.
* [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
* [PEP8 Validation](http://pep8online.com/) - At the time for deploying this project the PEP8 Online Validaton service was offline, therefore not used.
* [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

## Libraries

[Back to top](<#table-of-content>)

The libraries used in this project are located in the requirements.txt file and have been documented below

* [asgiref](https://pypi.org/project/asgiref/) - ASGI is a standard for Python asynchronous web apps and servers to communicate with each other, and positioned as an asynchronous successor to WSGI.
* [cloudinary](https://pypi.org/project/cloudinary/) - The Cloudinary Python SDK allows you to quickly and easily integrate your application with Cloudinary. Effortlessly optimize, transform, upload and manage your cloud's assets.
* [dj3-cloudinary-storage](https://pypi.org/project/dj3-cloudinary-storage/) - Django Cloudinary Storage is a Django package that facilitates integration with Cloudinary by implementing Django Storage API.
* [Django](https://pypi.org/project/Django/) - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
* [django-allauth](https://pypi.org/project/django-allauth/) - Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
* [django-crispy-forms](https://pypi.org/project/django-crispy-forms/) - Used to integrate Django DRY forms in the project.
* [django-extensions](https://pypi.org/project/django-extensions/) - Django Extensions is a collection of custom extensions for the Django Framework.
* [gunicorn](https://pypi.org/project/gunicorn/) - Gunicorn ‘Green Unicorn’ is a Python WSGI HTTP Server for UNIX. It’s a pre-fork worker model ported from Ruby’s Unicorn project. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resource usage, and fairly speedy.
* [oauthlib](https://pypi.org/project/oauthlib/) - OAuthLib is a framework which implements the logic of OAuth1 or OAuth2 without assuming a specific HTTP request object or web framework.
* [psycopg2](https://pypi.org/project/psycopg2/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language.
* [PyJWT](https://pypi.org/project/PyJWT/) - A Python implementation of RFC 7519.
* [python-dotenv](https://pypi.org/project/python-dotenv/) - Python-dotenv has been used in this project to store the environmental variables. For it simple and concise usage.
* [pylint-django-2.5.3](https://pypi.org/project/pylint-django/) - A Pylint plugin for improving code analysis when analysing code using Django.
* [requests-oauhlib](https://pypi.org/project/requests-oauthlib/) - P    rovides first-class OAuth library support for Requests.
* [sqlparse](https://pypi.org/project/sqlparse/) - sqlparse is a non-validating SQL parser for Python. It provides support for parsing, splitting and formatting SQL statements.
* [cryptography-3.3.23](https://pypi.org/project/cryptography/3.3/) - Cryptography is a package which provides cryptographic recipes and primitives to Python developers.
* [whitenoise](https://whitenoise.readthedocs.io/en/latest/) - Whitenoise, radically simplified static file serving for Python web apps. I used this to serve the static files in this project.

# Testing

## Testing User Stories

* As a Site User | I can view a list of blog post so that I can select one to read
    * At the top of the site there is a navigation bar with a link that lists all blog posts when the user clicks on it.

* As a Site User | I can click on a specific post so that I can read it in detail
   * At the top of the site there is a navigation bar with a link that lists all blogs post.

* As a Site User | I can like and unlike a post so that it is possible for me to interact with the comments
    * When the user is logged it is possible to click on a heart on the blog detail page to like / unlike a review.

* As a Site User | I can view the number of likes on each blog so that I can see how popular a specific review is
    * On the blog detail page the user can see how many likes the specific blog has.

* As a Site User | I can navigate easy on the site through paginated list of posts so that I feel comfortable using the site
    * On the blogs pages the pagination is activated when there are more than 4 blogs post on a page.

* As a Site User | I can view comments on a specific blog so that I can read the conversations between different users on the site
    * When the user clicks on a specific blog, the comment section can, in an easily way, be viewed.

* As a Site User | I can sign up an account so that I can like and comment on blogs, create a profile page, create own reviews and edit / remove my blog
    * In the navigation bar the user can click the Login / Sign up link to either login or sign up for a new account. When this is done the user can interact on the page as stated in the user story).

* As a Site User | I can create a profile page so that other bloggers can read about who I am
    * If a user is registered and logged in there is a 'Show Profile'-page in the navigation menu where the user can fill in profile details. The profile is shown for the site users in the blog posts.

* As a Site User | I can comment on a review so that I can be involved in the conversation
    * When the user is logged in they can write a comment on a specific blog.

* As a Site Admin | I can log out from the site so that I can feel safe that nobody can access my information
   * When the admin is logged in it is possible to choose the 'Log Out'-option in the navigation menu.

* As a Site Admin | I can create, read, update and delete blogs post so that I can manage my review content
    * When the user is logged in as an administrator / superuser a new item show up in the navigation menu called 'Admin Area'. In this area the user can read, update and delete blogs. Creation of blogs can be made the same way as any logged in user. Updating blogs can only be made if the administrator has written the original blog.

* As a Site Admin | I can approve reviews so that I can secure high quality of the content
    * When the user is logged in as an administrator / superuser a new item show up in the navigation menu called 'Admin Area'. In this area the user can approve / unapprove / publish / unpublish blogs.

* As a Site Admin | I can approve and disapprove comments so that I can secure a safe environment for the Site Users
    * When the user is logged in as an administrator / superuser a new item show up in the navigation menu called 'Admin Area'. In this area the user can approve / unapprove comments.

* As a Site Admin | I can create draft reviews so that I can finish writing the content later
    * When a user is logged in as an administrator they have the possibility to create a review they and set the status to published or draft.

* As a Site Admin | I can access an admin area so that I can get a general understanding of logged in users, number of likes and number of posts
    * In the admin area there is an summary area in the top with general information about the site (i.e. number of users, number of blogs / comments that need approval)

## Code Validation

The code on the 'Yemo Blog' site has been tested through W3C Markup Validation Service, W3C CSS Validation Service and JSHint. Errors were at first found on the site in the W3C Markup Validation Service but could quite easily be fixed (see bugs section).

### Markup Validation

After fixing the inital errors that W3C Markup Validation Service reported, no errors were returned.

<details><summary><b>HTML Validation Result</b></summary>

![HTML Result Home Page](assets/images/html_validation_no_err.png)
</details><br/>

[Back to top](<#table-of-content>)

### CSS Validaton

Some Bootstrap errors were found in the css file as shown below.

<details><summary><b>CSS Validation Result</b></summary>

![HTML Result Home Page](assets/images/css_validation_bootstrap_errs.png)
</details><br/>

[Back to top](<#table-of-content>)

### PEP Validation

No errors report was found in all the python files.

[Back to top](<#table-of-content>)

### JavaScript Validation

The JSHint validator results can be seen below:

It shows an unknown error.

<details><summary><b>JSHint Validation Result</b></summary>

![JSHint Validation](assets/images/js_validation.png)
</details><br/>

[Back to top](<#table-of-content>)

## Additional Testing

### Manual Testing

In addition to tests stated above I have performed a few manual tests. Below the list of tests that has been conducted can be found.

| Status | **Main Website - User Logged Out**
|:-------:|:--------|
| &check; | Typing in a incorrect URL on the page loads the 404 error page
| &check; | Pasting page that needs authentication loads a forbidden page
| &check; | Clicking the nav logo loads the home page
| &check; | Clicking the Home button on the nav bar loads the home page and lists all reviews
| &check; | Clicking the All button on the nav bar lists all blogs

| Status | **Main Website - User Logged In**
|:-------:|:--------|
| &check; | Typing in a incorrect URL on the page loads the 404 error page
| &check; | Pasting page that needs authentication loads a forbidden page
| &check; | Clicking the nav logo loads the home page
| &check; | Clicking the Home button on the nav bar loads the home page and lists all blogs
| &check; | In the detail view the logged in user can comment on a blog
| &check; | In the logged in user menu the Admin Area is not visible
| &check; | Clicking the Show Profile Page button in the logged in user menu loads the My Profile page

| Status | **Main Website - Admin Logged In**
|:-------:|:--------|
| &check; | Clicking the Admin Area button in the logged in user menu loads the Admin Area Page
| &check; | In the review section. Clicking the approve / unapprove / publish / unpublish toggles the approve and status signs
| &check; | The view button is only visible if a review is published
| &check; | In the comment section. Clicking the approve / unapprove toggles the approve and status signs
| &check; | Total Users shows correct number of total users
| &check; | Total blog shows the correct number of total blogs
| &check; | Total Comments shows the correct number of total comments
| &check; | Reviews that need approval shows the correct numer of reviews that need approval
| &check; | Comments that need approval shows the correct number of comments that need approval

 Status | **Create A Blog - User Logged In**
|:-------:|:--------|
| &check; | Title field is required
| &check; | Title field does not accept empty field
| &check; | Title field does not accept just spaces
| &check; | Body field is required
| &check; | Body field does not accept empty field
| &check; | Category field defaults to Uncategorized

Status | **Create A New User - User Logged Out**
|:-------:|:--------|
| &check; | Username field is required
| &check; | Username field does not accept empty field
| &check; | Email field does not accept just spaces
| &check; | Email field is optional
| &check; | Password field does not accept empty field
| &check; | Success flash message is displayed when the user submits the create a new user form
| &check; | Default biography is visible in about page (with i.e default featured image)

Status | **Create A Profile Page - User Logged In**
|:-------:|:--------|
| &check; | Default featured image is visible the first time a user opens the 'my profile' page
| &check; | First Name field is not required as it has already been provided when creating account
| &check; | Last Name field is not required
| &check; | Last Name field does not accept empty field

### Automated Testing

Some automated testing has been done during this project. Due to prioritization of other tasks I only could provide 30% coverage. See screenshot below. Automated tests can be run by typing the command - *`python manage.py test`*

<details><summary><b>Automated Testing</b></summary>

![Automated Testing](assets/images/pytest.png)
</details><br/>

### Responsiveness Test

The responsive design tests were carried out manually with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).

| Desktop    | Display <1280px       | Display >1280px    |
|------------|-----------------------|--------------------|
| Render     | pass                  | pass               |
| Images     | pass                  | pass               |
| Links      | pass                  | pass               |

| Tablet     | Samsung Galaxy Tab 10 | Amazon Kindle Fire | iPad Mini | iPad Pro |
|------------|-----------------------|--------------------|-----------|----------|
| Render     | pass                  | pass               | pass      | pass     |
| Images     | pass                  | pass               | pass      | pass     |
| Links      | pass                  | pass               | pass      | pass     |

| Phone      | Galaxy S5/S6/S7       | iPhone 6/7/8       | iPhone 12pro         |
|------------|-----------------------|--------------------|----------------------|
| Render     | pass                  | pass               | pass      | pass     |
| Images     | pass                  | pass               | pass      | pass     |
| Links      | pass                  | pass               | pass      | pass     |

[Back to top](<#table-of-content>)

### Browser Compatibility

* `Google Chrome` Version (122.0.6261.29)
* `Mozilla Firefox` (version 122.0)
* `Apple Safari` (version 16.6)
* `Microsoft Edge` (version 121.0.2277.113)

[Back to top](<#table-of-content>)

### Lighthouse

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of *Performance*, *Accessibility*, *Best Practices* and *SEO*.

<details><summary><b>Lighthouse Home Page Result</b></summary>

![Lighthouse Home Page Result](assets/images/lighthouse_test.png)
</details><br/>

<details><summary><b>Lighthouse Blog Page Result</b></summary>

![Lighthouse Blog Page](assets/images/lighthouse_test_blog_page.png)
</details><br/>

[Back to top](<#table-of-content>)

### Peer Review

Additional testing of the application was conducted by people outside of the software development field. Some smaller spelling and grammar errors were found and corrected. No issues connected to design or handling of the site.

## Known bugs

There are Bootstrap 5.3 CSS errors

### Fixed Bugs

* Bug: When click on notification, it says server error, contact the site admin. This is now handled and fixed.
* Bug: also while updating a post, it says error 508. I've also handle it.

### Unfixed Bugs

* Bug: The CSS Validation reported some best practices errors. When I validate my own CSS code there are no errors at all. But I thought it would be proper to highlight the error here in the bugs section.

<details><summary><b>CSS Validation</b></summary>

![CSS Validation](assets/images/css_validation_bootstrap_errs.png)
</details><br />

<details><summary><b>Warnings from Google Chrome DevTools</b></summary>

![Console Warning](assets/images/console_warning.png)
</details><br />

[Back to top](<#table-of-content>)

# Deployment

## Deployment To Heroku

The project was deployed to [Heroku](https://www.heroku.com). To deploy, please follow the process below:

1. To begin with we need to create a GitHub repository from the [this repo](https://github.com/yemoalakija/Blog.git) by following the link and then click 'Use this template'.

<details><summary><b>Heroku Deployment - Step 1</b></summary>

![Heroku Deployment Step 1](assets/images/heroku_01.png)
</details><br />

2. Fill in the needed details as stated in the screenshot below and then click 'Create Repository From Template'.

<details><summary><b>Heroku Deployment - Step 2</b></summary>

![Heroku Deployment Step 2](assets/images/heroku_02.png)
</details><br />

3. When the repository creation is done click 'GitHub' as stated in the screenshot below to create a codespace.

<details><summary><b>Heroku Deployment - Step 3</b></summary>

![Heroku Deployment Step 3](assets/images/heroku_03.png)
</details><br />

4. Now it's time to install Django and the supporting libraries that are needed. Type the commands below to do this.

* ```pip install 'django<4' gunicorn```
* ```pip install 'dj_database_url psycopg2```
* ```pip install 'dj3-cloudinary-storage```

<details><summary><b>Heroku Deployment - Step 4</b></summary>

![Heroku Deployment Step 4](assets/images/heroku_04.png)
</details><br />

5. When Django and the libraries are installed we need to create a requirements file.

* ```pip freeze --local > requirements.txt``` - This will create and add required libraries to requirements.txt

<details><summary><b>Heroku Deployment - Step 5</b></summary>

![Heroku Deployment Step 5](assets/images/heroku_05.png)
</details><br />

6. Now it's time to create the project.

* ```django-admin startproject YOUR_PROJECT_NAME .``` - This will create your project

<details><summary><b>Heroku Deployment - Step 6</b></summary>

![Heroku Deployment Step 6](assets/images/heroku_06.png)
</details><br />

7. When the project is created we can now create the application.

* ```python manage.py startapp APP_NAME``` - This will create your application

<details><summary><b>Heroku Deployment - Step 7</b></summary>

![Heroku Deployment Step 7](assets/images/heroku_07.png)
</details><br />

8. We now need to add the application to settings.py

<details><summary><b>Heroku Deployment - Step 8</b></summary>

![Heroku Deployment Step 8](assets/images/heroku_08.png)
</details><br />

8. Now it is time to do our first migration and run the server to test that everything works as expected. This is done by writing the commands below.

* ```python manage.py migrate``` - This will migrate the changes
* ```python manage.py runserver``` - This runs the server. To test it, click the open browser button that will be visible after the command is run.

9. Now it is time to create our application on Heroku, attach a database, prepare our environment and settings.py file and setup the Cloudinary storage for our static and media files.

* Head on to [Heroku](https://www.heroku.com/) and sign in (or create an account if needed).

* In the top right corner there is a button that is labeled 'New'. Click that and then select 'Create new app'.

<details><summary><b>Heroku Step 09</b></summary>

![Heroku Step 9](assets/images/heroku_09.png)
</details><br />

10. Now it's time to enter an application name that needs to be unique. When you have chosen the name, choose your region and click 'Create app".

<details><summary><b>Heroku Step 10</b></summary>

![Heroku Step 10](assets/images/heroku_10.png)
</details><br />

11. To add a database to the app you need to go to the resources tab ->> add-ons, search for 'Heroku Postgres' and add it.

<details><summary><b>Heroku Step 11</b></summary>

![Heroku Step 11](assets/images/heroku_11_1.png)
![Heroku Step 11](assets/images/heroku_11_2.png)
</details><br />

12. Go to the settings tab and click on the reveal Config Vars button. Copy the text from `DATABASE_URL` (because we are going to need it in the next step).

<details><summary><b>Heroku Step 12</b></summary>

![Heroku Step 12](assets/images/heroku_12.png)
</details><br />

13. Go back to your codespace and create a new `.env` file in the top level directory. Then add these rows.

* ```DATABASE_URL = "YOUR_DATABASE_URL"``` - This sets the environment variables.
* ```SECRET_KEY = "YOUR_SECRET_KEY"``` - Here you can choose whatever secret key you want.
* ```CLOUDINARY_URL = "YOUR_CLOUDINARY_URL"``` - Cloudinary connection string.

<details><summary><b>Heroku Step 13</b></summary>

![Heroku Step 13](assets/images/heroku_13.png)
</details><br />

14.  Now we are going to head back to Heroku to add the specified environemnt variables to config vars. See screenshot below.

<details><summary><b>Heroku Step 14</b></summary>

![Heroku Step 14](assets/images/heroku_14.png)
</details><br />

15. Now we have some preparations to do connected to our environment and settings.py file. In the settings.py, add the following code:

```import os```

```import dj_database_url```

```from dotenv import load_dotenv```

```load_dotenv()```

<details><summary><b>Heroku Step 15</b></summary>

![Heroku Step 15](assets/images/heroku_15.png)
</details><br />

16. In the settings file, remove the insecure secret key and replace it with:
```SEECRET_KEY = os.getenv('SECRET_KEY')```

<details><summary><b>Heroku Step 16</b></summary>

![Heroku Step 16](assets/images/heroku_16.png)
</details><br />

17.  Now we need to comment out the old database setting in the settings.py file (this is because we are going to use the postgres database instead of the sqlite3 database).

<details><summary><b>Heroku Step 17 1/2</b></summary>

![Heroku Step 17](assets/images/heroku_17_1.png)
</details><br />

Now, add the link to the DATABASE_URL that we added to the environment file earlier.

<details><summary><b>Heroku Step 17 2/2</b></summary>

![Heroku Step 17](assets/images/heroku_17_2.png)
</details><br />

18. Save all your fields and migrate the changes.

```python manage.py migrate```

19. Now we are going to get our connection to Cloudinary connection working (this is were we will store our static files). First you need to create a Cloudinary account and from the Cloudinary dashboard copy the API Environment Variable.

20. Go back to the `.env` file in our codespace and add the Cloudinary url as said No.13 above (it's very important that the url is correct):

```CLOUDINARY_URL = "cloudinary://************************"```

21. Let's head back to Heroku and add the Cloudinary url in Config Vars. We also need to add a disable collectstatic variable to get our first deployment to Heroku to work.

<details><summary><b>Heroku Step 21</b></summary>

![Heroku Step 21](assets/images/heroku_21.png)
</details><br />

22. Let's head back to our settings.py file on codespace. We now need to add our Cloudinary Libraries we installed earlier to the installed apps. Here it is important to get the order correct.

<details><summary><b>Heroku Step 22</b></summary>

![Heroku Step 22](assets/images/heroku_22.png)
</details><br />

23. For Django to be able to understand how to use and where to store static files we need to add some extra rows to the settings.py file.

<details><summary><b>Heroku Step 23</b></summary>

![Heroku Step 23](assets/images/heroku_23.png)
</details><br />

24. Almost there, we have just a couple of steps left. Now it's time to link the file to the Heroku templates directory.

<details><summary><b>Heroku Step 24</b></summary>

![Heroku Step 24](assets/images/heroku_24.png)
</details><br />

25. Let's change the templates directory to `TEMPLATES_DIR` in the teamplates array.

<details><summary><b>Heroku Step 25</b></summary>

![Heroku Step 25](assets/images/heroku_25.png)
</details><br />

26. To be able to get the application to work through Heroku we also need to add our Heroku app and localhost to which hosts that are allowed.

<details><summary><b>Heroku Step 26</b></summary>

![Heroku Step 26](assets/images/heroku_26.png)
</details><br />

27. For this project, we'll use `whitenoise` package to take care of our staticfiles.

* ```pip install whitenoise```
* We need to install middleware, add:

  ```bash

  MIDDLEWARE = [
    # ...other middlewares
    'whitenoise.middleware.WhiteNoiseMiddleware',]

* Configure static files:
  ```bash
  STATIC_URL = '/assets/'
  STATICFILES_DIR = [
    os.path.join(BASE_DIR / 'assets')
  ]
  STATIC_ROOT = os.path.join(BASE_DIR / 'staticfiles')
  STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

* We run: `python manage.py collectstatic` for whitenoise to takecare of the static files of the project.
* Create a file called **`Procfile`* and add the line ```web: gunicorn PROJ_NAME.wsgi?``` to it.d

1.   Now you can save all the files and prepare for the first commit and push to Github by writing the lines below.

* ```git add .```
* ```git commit -m "Deployment Commit```
* ```git push```

29. Before moving on to the Heroku deployment we just need to add one more thing in the config vars. We need to add `PORT` in the KEY input field and `8000` in the VALUE field. If we don't add this there might be problems with the deployment.

30. Now it's time for deployment. Scroll to the top of the settings page in Heroku and click the 'Deploy' tab. For deployment method, select `GitHub`. Search for the repository name you want to deploy and then click connect.

31. Scroll down to the manual deployment section and click `Deploy Branch`. Hopefully the deployment is successful!

<details><summary><b>Heroku Step 31</b></summary>

![Heroku Step 31](assets/images/heroku_31.png)
</details><br />

The live link to the `Yemo Blog` site on Heroku an be found [here](https://yemos-blog-website-3ef5a934b3dc.herokuapp.com/). And the Github repository can be found [here](https://github.com/yemoalakija/Blog).

[Back to top](<#table-of-content>)

## How To Fork The Repository On GitHub

It is possible to do a independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to do changes in the copy without affecting the original repository. To fork the repository, take these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a `Fork` button. Click on the button to create a copy of the original repository.

<details><summary><b>Github Fork</b></summary>

![Fork](assets/images/github_fork.png)
</details><br />

[Back to top](<#table-of-content>)

## Cloning And Setting Up This Project

To clone and set up this project you need to follow the steps below.

1. When you are in the repository, find the code tab and click it.
2. To the left of the green `codespace` `button`, press the 'code' menu. There you will find a link to the repository. Click on the clipboard icon to copy the URL.
3. Use an IDE and open Git Bash. Change directory to the location where you want the cloned directory to be made.
4. Type `git clone`, and then paste the URL that you copied from GitHub. Press enter and a local clone will be created.

<details><summary><b>Github Create Local Clone</b></summary>

![Clone](assets/images/github_clone_01.png)
</details><br />

5. To be able to get the project to work you need to install the requirements. This can be done by using the command below:

* ```pip install -r requirements.txt``` - This command downloads and install all required dependencies that is stated in the requirements file.
  Note: You can as well setup a virtual environment before installing the `requirements.txt` file:
    * In your local machine of IDE, in the directory where the repo is cloned, run: `python -m venv "YOUR_VIRTUAL_ENVIRONMENT_NAME"` The `virtual_envronemnt_name` can be any name you want. Then you need to activate the envronment by running: `.\VIRTUAL_ENV_NAME\Script\activate` on windows or `source VIRTUAL_ENV_NAME/bin/activate` on macOS. Type `deactivate` to stop the virtual environment.

6. The next step is to set up the environment file so that the project knows what variables that needs to be used for it to work. Environment variables are usually hidden due to sensitive information. It's very important that you don't push the `.env` file to Github (this can be secured by adding `.env` to the .gitignore-file). The variables that are declared in the `.env` file needs to be added to the Heroku config vars. Don't forget to do necessary migrations before trying to run the server.

* ```python manage.py migrate``` - This will do the necessary migrations.
* ```python manage.py runserver``` - If everything is setup correctly the project is now live locally.

<details><summary><b>Setup .env</b></summary>

![Clone](assets/images/github_clone_02.png)
</details><br />

[Back to top](<#table-of-content>)

# Credits

## Content

* All text content written by Adeyemo Alakija.

* Blog images taken from [Google](https://www.google.com)

* Template for read.me provided by Code Institute (*with some additional changes that my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/))* suggested.

## Technical

* Inspiration regarding this project was taken from Django Walkthrough project and personal vibes to always wanting to create a blog website.
* There are still more functions I will continue to explore and improve on this project in the future.

# Acknowledgements

This site was created for Portfolio Project #4 (Full-Stack Tolkin) - Diploma in Full Stack Software Development Diploma at the [Code Institute](https://www.codeinstitute.net). I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for relevant feedback during the project.

*Adeyemo Alakija, 2024*

[Back to top](<#table-of-content>)
