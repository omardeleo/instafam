[![Instafam Logo](https://github.com/omardeleo/instafam/raw/master/app/assets/images/readme_logo.png)](https://instafam-aa.herokuapp.com)
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)

## General Info
### [Visit Instafam on the Web!](https://instafam-aa.herokuapp.com/#/)

Instafam is a single-page photo-sharing web application based on  [Instagram](http://www.instagram.com/). Instafam allows users to create photo posts, like and comment on other users' posts, as well as follow other users.
	
## Technologies
[Instafam](https://instafam-aa.herokuapp.com/#/) was built using:
* **React** for building encapsulated frontend components, and efficiently updating and rendering the right components when application data changes.
* **Redux** for application state management.
* **Rails** for backend Object Relational Mapping with Active Record, and RESTful API routing of HTTP requests.
* **PostgreSQL** for object-relational database management.
* **Webpack** for bundling static assets and code modules.
* **Jbuilder** for crafting custom HTTP responses.
* **Active Storage** for attaching files to Active Record models.
* **Amazon S3** for cloud storage of application file uploads.
* **Heroku** for deploying application.
	
## Features
#### User Authentcation

<div align="center">
    <img src="https://media.giphy.com/media/62d2iqjBQIfagXWUKe/giphy.gif" title="Login Screen"/>
</div>
Instafam implements a custom built authorization pattern. The  **BCrypt**  gem is used to hash user passwords to store in the database, and later check that hash to authenticate the user. The application’s root HTML page is bootstrapped with the current user to ensure that the user’s session remains uninterrupted in the case of a redirect or page refresh. A login attempt with invalid or incomplete credentials renders an error message.

#### Image Uploads

<div align="center">
    <img src="https://media.giphy.com/media/1Aj19jd9ycidkzkNgA/giphy.gif" title="Image Upload" />
</div>
Instafam users may create a new post by uploading an image in the New Post page. Users may also upload a profile image in their Profile page. In both cases, images are uploaded to and stored in an  **AWS S3**  bucket via the  **Paperclip**  gem. When a post image or profile image is uploaded, Paperclip automatically generates thumbnails that are displayed in the post author’s Profile page and in the post’s header, respectively.

#### Likes

Instafam users have the ability to like a post. If a post has 10 likes or less, it displays the liker’s usernames. If a post has more than 10 likes, it simply displays the number of likes.

#### Comments

Instafam users also have the ability to leave comments on a post. If a post has more than 5 comments, only the 5 most recent comments are displayed in the main post feed, with a button to expand to the full view. This limit is increased to 20 in the post’s show view.  
Comments greater than 125 characters are truncated, with a button to expand to the full view.

#### Profile Page

Each username in Instafam links to that user’s Profile Page. The Profile Page includes a profile image which can be changed, the number of posts by that user, and a grid with thumbnails for each of the user’s posts. Hovering over any thumbnail displays the an overlay with the number of likes and comments for each post. Clicking on a thumbnail redirects to that post’s show page.

## Setup
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```