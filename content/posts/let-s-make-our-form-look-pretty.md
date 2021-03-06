---
date: 2020-03-28T12:05:11Z
hero_image: "/content/images/day3.jpg"
title: Let's make our form look pretty
author: Reynardt Deminey

---
Today it's time to put some make up on our login form and make it look like our example. Let's quickly just refresh our memory on how our login form has to to look.

![](/content/images/spotify-2.png)

From where we are now, we have some way to go to make our form look like that, but we'll get there.

The first step is that we have to link our CSS file with our HTML file. Remember, yesterday I said that the **head** of our HTML file provides information on the page and the external files we are linking to. So we will be linking our CSS file between the **head** tags of our HTML file.

To do this, we will use the **link** tag (Yes, another type of tag). In our case the **link** tag will look like this:

    <link rel="stylesheet" href="style.css">

The **rel** attribute indicates what type of file we are linking to and the **href** attribute indicates the name and path of the file we are linking to. Because our files are in the same folder, we just specify the file name. If we add this to the **head** of our file, our code now looks like this:

![](/content/images/Screenshot from 2020-03-28 13-51-07-1.png)

Once the files are linked, we can continue with the styling of our page. If we look at the example, we see that the page has a background image which fills the whole page. To to this, we write the following code in our **style.css** file:

     html {
        background: url(https://images.unsplash.com/photo-1533464826937-8876cc53ab92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        background-size: cover;
        overflow: hidden;
    }

Firstly, we type html. In a CSS file, this means we are selecting the whole page. In our case that is what we want, because the background image has to fill the whole page.

The code that follows the selector are enclosed in curly braces. Inside the curly braces we make use of properties and values. For example, with regard to background size, **background-size** is the property and **cover** is the value. We will work with this a lot more in the days to come, so you will get the hang of it.

The first property we use is **background**. You can use a file on your pc as value or, in our case, we will use a file we link to online. I always say that you have to type the code yourself, but in this case you can copy and paste the code for the **background** into your file.

We then use the **background-size** property with a value of **cover** to fill the page with the background image. Lastly, we use **overflow : hidden** to specify that the page should not allow scrolling when the image is bigger than the screen.

If our files are linked and the above code is entered into our css file and saved our page now looks like this.

![](/content/images/Screenshot from 2020-03-28 14-33-14.png)  
Not exactly what we are looking for so let's change that. As we can see from the example, the background has a colour overlay. To place a colour overlay over the image, we will select the body of the HTML document. Once again, we just use body, with the properties and values between the curly braces.

    body {
        background: rgba(112, 112, 128, 0.88);
        height: 100vh;    
    }

In this code, we select the **body**. For the **background** property, we give it a value of **rgba(112, 112, 128, 0.88)**. This is the **rgb** code for that specific color of grey. You can play around with the different values in the brackets to see how the colour changes. The last value between the brackets **(0.88)** is the alpha channel and specifies the transparency of the image. Once we add that code, save and refresh, our page will now look like this:

![](/content/images/Screenshot from 2020-03-28 14-48-21.png)

But that's not right? We have a margin around our page. We'll have to fix that. To fix it we have to take away all the margins from the edge of the page. To do that we add the following code to the top of our **css** file:

    * {
        margin: 0;
        padding: 0;
      }

Our css file should now look like this:

    * {
        margin: 0;
        padding: 0;
      }
    
    html {
        height: 100vh;
        background: url(https://images.unsplash.com/photo-1533464826937-8876cc53ab92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        background-size: cover;
        overflow: hidden;
        padding: 0;
    }
    
    body {
        background: rgba(112, 112, 128, 0.88);
        height: 100vh;    
    }

If you refresh and save, you will note that the colour overlay now covers the whole background image. Now we can get to work on the form itself.

Firstly, we note that the form has to be in the center of the page. To this I suggest we put all the code of our form in a container which we can then position on the page. To do this, we put all our code in the **body** between two **div** tags. Unlike **h1**, **p** or **form** tags which signifies part of the page, a **div** tag is a utility tag which can be used for may different elements and is quite common in modern web pages. Our code should now look like this:

    <body>
        <div> /* Opening div tag */
            <h1>Spotify</h1>
            <p><span>Sign In</span><span>Sign Up</span></p>
            <form>
                <input type="text"><br>
                <input type="text"><br> 
                <label><input type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
            </form>
            <button>SIGN IN</button>
            <p>Forgot Password?</p>
        </div> /* Closing div tag */
    </body>

Remember I said we would learn more about **class** and **id** attributes when we style the form. The difference between the two is that **class** can be used to identify multiple elements, whereas **id** is used to identify a single element.

For example you may have 5 different buttons that will all use the same styling. You will then give them a **class** of button and style them in the css file. You may want one to be a different colour? You will give that button an **id** which you can then use to change the colour. This may sound complicated but we will see it in action in the days to come.

We only have one container on our page, so let's give that container an **id** of **container**.

    <body>
        <div id="container">  /* Give the div an id of container */
            <h1>Spotify</h1>
            <p><span>Sign In</span><span>Sign Up</span></p>
            <form>
                <input type="text"><br>
                <input type="text"><br> 
                <label><input type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
            </form>
            <button>SIGN IN</button>
            <p>Forgot Password?</p>
        </div>    
    </body>

Now that we have given the container an **id**, we can style it in the css file. We want the form to be in the middle of the page, so we'll use this code at the bottom of our css file after the **body** styling:

    #container {
        width: 30%;
        margin: auto;
    }

With the code, we select the **div** with the **id** of container. It's important to note here that, unlike the **html** and **body** tags above, we select an element with an **id** by adding a **#** in front of the name. Similarly, with classes you select a **class** by adding a **.** in front of the name.

Once the **div** is selected we use the **width** property to specify a value of **30%**, that is **30%** of the page. We use the **margin** property with a **value** of **auto** to center the div in the middle of the page. Our page now looks like this.

![](/content/images/Screenshot from 2020-03-28 15-22-56.png)

We're getting there! Now we want the container to have a background colour and we want all the elements in the container to be centered. Before you read my code further, first try it yourself.

To center the contents and add a background a colour we add the following code:

    #container {
        width: 30%;
        margin: auto;
        background-color: rgb(46,47,51);
        text-align: center;
    }

Our page should now look like this:

![](/content/images/Screenshot from 2020-03-28 15-27-53.png)  
It's getting closer. The container should move down a bit and not be on the top edge of the page. Can you guess which property we will use to move the container down? Yes, padding. To do this we add the following to the styling of our **body** styling.

    body {
        background: rgba(112, 112, 128, 0.88);
        height: 100vh;
        padding: 8%;   /* Added padding */ 
    }

If we save and refresh, our page will now look like this:

![](/content/images/Screenshot from 2020-03-28 15-34-02.png)

Now let's style the contents of the container. If we look at the heading we notice, that its quite a large and different font. To change the font, we once again go to our **body** styling and add the following:

     body {
        background: rgba(112, 112, 128, 0.88);
        height: 100vh;
        padding: 8%;    
        font-family: 'Montserrat', sans-serif; /* Change the Font */
    }

If you save and refresh now, you'll notice that the font has changed. Before we can use the **Montserrat** font we really want, we have to import it. We do this by adding another **link** tag in our **head** tag. The link tag is the following:

     <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet">

You'll notice that this time, instead of a file on our machine, we are linking to an external resource (Google Fonts). Every time our page loads it will fetch the font data from the Google Fonts and use it on our form. You can go ahead and copy the above **link** tag to the **head** of your HTML file. Your code should now look like this:

![](/content/images/Screenshot from 2020-03-28 15-43-02.png)  
If you now save and refresh the page, you'll notice the font change again. Although not the exact same font as in the example, it is close. 

Now for the heading. We have the logo and the Spotify text. To enter the logo we will once again be using an external resource. Exactly like the css file and the Google Fonts link we will paste the **link** tag into the **head** of our **index.html** file.

You can go ahead and past this **link** into the **head** of your **index.html** file.

        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

Your code should now look like this:

![](/content/images/Screenshot from 2020-03-28 15-53-40.png)

Now we should get the logo. In the **h1** tag, just before the word **Spotify**, type the following code:

    <i class="fa fa-spotify" aria-hidden="true"></i>

This link is a link I copied from the FontAwesome Site, wehre you use fonts to display logos in your site. You can have a look at the site to see what logos there are. Your code between the **body** tags should now look like this:

    <body>
        <div>
            <div id="container">
                <h1><i class="fa fa-spotify" aria-hidden="true"></i> Spotify</h1>
                <p><span>Sign In</span><span>Sign Up</span></p>
                <form>
                    <input type="text"><br>
                    <input type="text"><br> 
                    <label><input type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button>SIGN IN</button>
                <p>Forgot Password?</p>
            </div>
        </div>
            
    </body>

If you save and refresh now, you'll see the Spotify logo in your heading like this:

![](/content/images/Screenshot from 2020-03-28 15-58-00.png)

Now in the **i** tag that we pasted give it an **id** of **logo** and the **h1** an **id** of **heading**, like this:

    <body>
        <div>
            <div id="container">
                <h1 id="heading"><i id="logo" class="fa fa-spotify" aria-hidden="true"></i> Spotify</h1>
                <p><span>Sign In</span><span>Sign Up</span></p>
                <form>
                    <input type="text"><br>
                    <input type="text"><br> 
                    <label><input type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button>SIGN IN</button>
                <p>Forgot Password?</p>
            </div>
        </div>
            
    </body>

Once done we can go the the css file and style our heading. Firstly, we need some space above the heading, so we add this line to the styling of our container. We also add a line to add space at the bottom of the container.

    #container {
        width: 30%;
        margin: auto;
        background-color: rgb(46,47,51);
        text-align: center;
        padding-top: 50px; /* Add this */
        padding-bottom: 50px; /* Add this */
    }

Remember padding is the space inside an element and margin is the space outside an element. To style our heading the add the following code under our container styling:

    #heading {
        font-size: 35px;
        color: white;
        margin-bottom: 50px;
    }

Here we set the font size with the **font-size** property, the color of the font with the **color** property and the space under the heading with the **margin-bottom** property. 

Your heading should now look like this:

![](/content/images/Screenshot from 2020-03-28 16-20-54.png)

Now to the paragraph below the heading. Yesterday I mentioned that we will make this two separate elements in order to position and style them. I suggest for both of them we assign a **class** of **subheading**.

    <p><span class="subheading">Sign In</span><span class="subheading">Sign Up</span></p>

To style the **subheading**, we select it using the subheading selector with a full stop as I mentioned above.

     .subheading {
        font-size: 20px;
        color: white;
        margin: 20px;
        text-transform: uppercase;
        font-weight: bold;
    }

See if you can guess what all the properties do in respect of the styling.

Firstly, the **font-size** property adjusts the size of the font and the **color** property changes the colour of the font. The **margin** property adjusts the space between the respective spans. The **text-transform** makes the text uppercase and the **font-weight** makes the text bold. Your Sign In and Sign Up text should now look like this.

![](/content/images/Screenshot from 2020-03-28 16-40-19.png)

Now we move on to the form. For the form we will be using a class and an id for the form and the inputs. For the each of the text inputs we give a **class** of **form-text-input**, for the checkbox and it's label a **class** of **form-checkbox-input** and for the form itself we give an **id** of **login-form**.

    <body>
        <div>
            <div id="container">
                <h1 id="heading"><i id="logo" class="fa fa-spotify logo" aria-hidden="true"></i> Spotify</h1>
                <p><span class="subheading">Sign In</span><span class="subheading">Sign Up</span></p>
                <form id="login-form">
                    <input class="form-text-input" type="text"><br>
                    <input class="form-text-input" type="text"><br> 
                    <label class="form-checkbox-input"><input class="form-checkbox-input" type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button>SIGN IN</button>
                <p>Forgot Password?</p>
            </div>
        </div>
            
    </body>

To style the form we type the following code into our **style.css** file.

    #login-form {
        margin-top: 30px;
        margin-bottom: 30px;
    }

This merely adjusts the space on top and on the bottom of the form.

To style the text inputs we type the following code in our **style.css** file.

    .form-text-input {
        width: 75%;
        margin: 12px;
        height: 45px;
        font-size: 20px;
        border-radius: 50px;
        border: none;
    }

Before you read what each property does, try to guess what each one does. 

The **width** property sets the width of the text box. The **margin** property increases the space between the two text boxes. The **height** property sets the height of the box. **Font-size** determines the font-size of the font in the box. The **border-radius** property rounds the edges of the box and the **border** property, which is set to none, removes the border. 

To style the checkbox, we type the following code in our **style.css** file:

    .form-checkbox-input {
        margin-right: 10px;
        color: white;
    }

With this code, we create space between the checkbox and the text. and we change the color of the text to white.

Now we have to style the button. We'll give the button an id of button. 

    <body>
        <div>
            <div id="container">
                <h1 id="heading"><i id="logo" class="fa fa-spotify logo" aria-hidden="true"></i> Spotify</h1>
                <p><span class="subheading">Sign In</span><span class="subheading">Sign Up</span></p>
                <form id="login-form">
                    <input class="form-text-input" type="text"><br>
                    <input class="form-text-input" type="text"><br> 
                    <label class="form-checkbox-input"><input class="form-checkbox-input" type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button id="button">SIGN IN</button>
                <p>Forgot Password?</p>
            </div>
        </div>
            
    </body>

Once we have assigned the id, we can style the button in our **style.css** file. To do that, we type the following code in our **style.css** file:

    #button {
        width: 75%;
        margin-bottom: 20px;
        height: 45px;
        font-size: 20px;
        border-radius: 50px;
        border: none;
        color: white;
        background-color:mediumseagreen;
    }

As with the inputs, the **width** property adjusts the width, the **height** property adjusts the height, **font-size** the size of the font, **margin** the space around the button, **border:none** removes the border, **color** adjusts the color of the text and **background-color** changes the colour of the button.

Finally we move on to the last paragraph. We give this paragraph a **id** of footer. 

    <body>
        <div>
            <div id="container">
                <h1 id="heading"><i id="logo" class="fa fa-spotify logo" aria-hidden="true"></i> Spotify</h1>
                <p><span class="subheading">Sign In</span><span class="subheading">Sign Up</span></p>
                <form id="login-form">
                    <input class="form-text-input" type="text"><br>
                    <input class="form-text-input" type="text"><br> 
                    <label class="form-checkbox-input"><input class="form-checkbox-input" type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button id="button">SIGN IN</button>
                <p id="footer">Forgot Password?</p>
            </div>
        </div>
            
    </body>

Once the **id** is assigned, we can type the following code in our **style.css** file in order to style the paragraph.

    #footer {
        font-weight: bold;
        color: white;
    }

This code changes the text to bold and the colour of the text to white.

At this stage our form looks like this:

![](/content/images/Screenshot from 2020-03-28 17-18-29.png)  
As you will see, there is still some things to do. In tomorrow's lesson we'll do the finishing touches and our form will be done!

Enjoy!