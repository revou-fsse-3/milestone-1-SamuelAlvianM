# SAM's Milestone

## Introduction

In this guide, we'll walk through the process of building a simple website using HTML for structure, CSS for styling, and JavaScript for interactivity. from 3 elements I build a simple **Portofolio Website** . I kindly wait for your comments, and inspire from you for me to elevate my work.

Welcome to my first milestone!

## Table of Contents

1. [Structuring Your Project](#structuring-your-project)
   - [Project Folder](#project-folder)
   - [File Structure](#file-structure)

2. [HTML - Creating the Structure](#html-creating-the-structure)
   - [Basic HTML Template](#basic-html-template)
   - [Adding Content](#adding-content)

3. [CSS - Styling Your Website](#css-styling-your-website)
   - [Linking CSS](#linking-css)
   - [Applying Styles](#applying-styles)

4. [JavaScript - Adding Interactivity](#javascript-adding-interactivity)
   - [Linking JavaScript](#linking-javascript)
   - [Event Handling](#event-handling)

5. [Conclusion](#conclusion)

## My Workflow

## I. Structuring My Project

### Project Folder

Create a dedicated folder for your project to keep files organized.

I'm Using __gitbash__ to make a new folders and files. Also i clone my **milestone-1** repository to my folder

### File Structure

Follow a clear file structure, separating HTML, CSS, and JavaScript files.
I use external CSS and JavaScript files and imported it into the my HTML using this:

```html
<!-- import my external CSS -->
<link rel="stylesheet" href="src/style.css">

<!-- import my external javascript -->
<script src="src/script.js"></script>
```
>$\textsf{\color{red}IMPORTANT: Make sure your CSS and JS file on local and imported have a same name}$ 


$\textsf{\color{Green}}$ 
## HTML - Creating the Structure

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

</body>
<script src="script.js"></script>
</html>
```

### II. Clone Milestone GitHub Into My Local Files

### III. Synchronize My GitHub to Netlify

### $\textsf{\color{green} Step 1: Sign Up to Netlify}$
+ Make sure you have a Github Account.
+ Go to the Netlify website: [https://www.netlify.com/](https://www.netlify.com/).
+ Click the "Sign Up" button and follow the registration process. Or sign with GitHub
+ Verify your email address to activate your Netlify account.
+ if you sign with github, you need to authenticate your account.

![STEP 1-SIGN](assets/markdown/1STEP1.1.jpg)

### $\textsf{\color{green} Step 2: Connect Netlify to GitHub}$
* Log in to your Netlify account.
* Click "New site from Git" on the Netlify dashboard.
* Choose your Git provider, which is GitHub in this case.
* Authorize Netlify to access your GitHub repositories.
* Select the GitHub repository you want to deploy.

![STEP 1-CONNECT](assets/markdown/1STEP1.2.jpg)

## The _Auto_ Deploy on Netlify from GitHub

### $\textsf{\color{green} Step 1: Configure Build Settings}$
* After selecting your repository, you'll be prompted to configure build settings.
* Choose your build settings, including the branch you want to deploy from.
* Click "Deploy site" to initiate the first deployment.

![STEP 2](assets/markdown/1step%202.jpg)


### $\textsf{\color{green} Step 2: Automatic Updates from GitHub}$
* Netlify will automatically build and deploy your site when you push updates to the specified branch on GitHub.
* Any changes made in the selected branch will trigger an automatic update on Netlify.

![STEP 2.2](assets/markdown/2STEP%201.jpg)

### IV. Make my HTML

### V. Styling With CSS

### VI. Add My Milestone with "Some Sweets" with JavaScript

### VII. Deploy My Content to Custom Domain

### $\textsf{\color{green} Step 1: Configure Custom Domain on Netlify}$
+ In your Netlify dashboard, select your site.
+ Under "Settings," go to the "Domain management" section.
+ Click "Add custom domain" and enter your purchased domain name.
+ Follow the instructions to verify and set up DNS records for your domain.
+ Netlify will configure your site to use the custom domain.

![STEP 3.2](assets/markdown/3%20STEP%201%20(2).jpg)

## Manage Domain on Netlify

### $\textsf{\color{green} Step 2: Go to "site" and choose Domain Management}$
+ In your netlify Dashboard, select Site.
+ Choose Domain Management to set up your custom domain.
+ Click "add a domain" and enter your domain name.
+ Your Domain name must be match with the custom name you've made on your domain provider.

![STEP 4](assets/markdown/4s1.jpg)

### $\textsf{\color{green} Step 3: Check your Production Domains}$
+ After your custom domain registered on domain management, you must wait the synchronization and configuration between your Netlify DNS and domain provider site. 
+ It will take hours (max 24h) for the "awautubg External DNS turned into "Netlify DNS".
+ If it does, your custom domain or your website is online now.

![STEP 4.2](assets/markdown/4s1.2.jpg)

