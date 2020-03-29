---
date: 2020-03-29T10:00:37Z
hero_image: "/content/images/markus-spiske-cvBBO4PzWPg-unsplash.jpg"
title: Our Login form is almost there!
author: Reynardt Deminey

---
We've come far with our login form and we're almost there. Let's see where we are at this stage.

![](/content/images/Screenshot from 2020-03-29 12-03-19.png)

Just to see where we are and what is still needed, let's just look at the example first.

![](/content/images/spotify.png)

Now we can clearly see what is still needed.

It looks like our logo and heading needs more work. The logo should be bigger and it should be the same colour as the button. So, let's get to it. Remember, yesterday we added an **id** of logo to our **i** tag in our heading. Let's go to our CSS file and style the logo. From the example it looks like the logo is almost double the size of the text, so we would type the following code in our **style.css** file.

    #logo {
        font-size: 60px;
        color: mediumseagreen;
    }

With this code we increase the size of the logo and the colour thereof. Due to the fact that the FontAwesome icons are, at the base, just a font, we adjust the size of the logo with the **font-size** property. Our logo should now look like this:

![](/content/images/Screenshot from 2020-03-29 12-16-10.png)

I think you'll agree that we're almost there. If we look at the example, we see that both the text and the logo are centered, and ours isn't quite. To fix that we add the following line to the styling of our logo.

    vertical-align: middle;

When that is added, the styling of our logo in the style.css file now looks like this:

    #logo {
        font-size: 60px;
        color: mediumseagreen;
        vertical-align: middle;
    }

Once we save and refresh, our logo will look like this:

![](/content/images/Screenshot from 2020-03-29 12-21-44.png)

That's perfect. Let's move on the next thing. From our example we see that there is a green line below the **Sign In** text in our subheading. What we can't see from the example is that that green line isn't permanently there, but only appears when our cursor hovers over the text. In other words, it changes dynamically. Let's fix that quickly.

The first thing we need to do, is add this line to our **subheading** styling. Find the subheading in your **style.css** file and add the following line of code:

     padding-bottom: 5px;

Our subheading's styling should now look like this:

    .subheading {
        font-size: 20px;
        color: white;
        margin: 20px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 5px;
    }

Now, at the end of our **style.css** file, we add the following code:

    .subheading:hover {    
        border-bottom: 4px solid mediumseagreen;
        cursor: pointer;
    }

With this code, we once again select the subheading as before, but the **:hover** selects the element only when the mouse cursor is placed over it over it. The border-bottom property indicates that a border with the specified values will show up when the mouse hovers over the text. Similarly, the cursor will change to a pointer when it is placed over the text. When you save the file and refresh your browser, the text should now look like this:

![](/content/images/Screenshot from 2020-03-29 12-34-14.png)

Similarly, when you hover the cursor over the Sign Up text, it does the same. Perfect!

Now let's move on to the text inputs. From the example we see that they are already filled with text and if we type in our inputs the fonts are larger and a different colour. Let's change that quickly. Firstly, in our HTML file, we add the following to code to each input (Just the text inputs).

    <input class="form-text-input" type="text" placeholder="Username"><br>
    <input class="form-text-input" type="text" placeholder="Password"><br> 

You can see we added a placeholder to each text input. Our HTML code should now look like this.

    <body>
        <div>
            <div id="container">
                <h1 id="heading"><i id="logo" class="fa fa-spotify logo" aria-hidden="true"></i> Spotify</h1>
                <p><span class="subheading">Sign In</span><span class="subheading">Sign Up</span></p>
                <form id="login-form">
                    <input class="form-text-input" type="text" placeholder="Username"><br>
                    <input class="form-text-input" type="text" placeholder="Password"><br> 
                    <label class="form-checkbox-input"><input class="form-checkbox-input" type="checkbox" name="checkbox" id="checkbox">stay signed in</label>
                </form>
                <button id="button">SIGN IN</button>
                <p id="footer">Forgot Password?</p>
            </div>
        </div>
            
    </body>

If we save and refresh our browser, our login form now looks like this:

![](/content/images/Screenshot from 2020-03-29 12-42-05.png)

We can see the text is too big and it's against the edge of the text box. We can also see that it is in bold in the example. Let's change that. Can you remember which properties we will use to adjust the font-size and the space inside the element? Yes, **font-size** and **padding**. Let's add them to the styling of the inputs in our **style.css** file. Remember, we gave our text input a **class** of **form-text-input**. Search for that class in your **style.css** file and change it to look like this.

    .form-text-input {
        width: 69%;
        margin: 12px;
        height: 45px;
        font-size: 14px;
        border-radius: 50px;
        border: none;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: bold;
        color: darkgray;
    }

We added the **padding-left** and **padding-right** properties to move the text away from the edges. One thing to keep in mind here is that makes the box wider, so we adjusted the **width** property to **69%**. We also adjusted the font size with the **font-size** property. Lastly we added the **font-weight** property to make the font bold and the **color** property to change the color of the font to **darkgray**.

After we made all the changes, saved our file and refreshed our browser, our login form should now look like this:

![](/content/images/Screenshot from 2020-03-29 12-57-38.png)

That looks about right. Now if we move on to the checkbox, we see that it's blue when checked and to the left. I will leave ours where it is. Why? Firstly, it looks better centered. Secondly, to get the checkbox to change colour when checked is a bit more complicated and falls out of the ambit of these lessons. The only styling I will apply, is to move the checkbox down a bit. To do that we add the following code to our checkbox styling:

    .form-checkbox-input {
        margin-right: 10px;
        margin-top: 15px;
        color: white;    
    }

The margin-top property, moves the checkbox down a bit farther away from the text inputs. Now let's move to our button. The button looks great, but you'll notice that there is a slight shadow behind the button. To create that shadow, we'll use what we call the **box-shadow**.

Look for where the button was selected in the **style.css** file and add the following code.

    box-shadow: 0px 7px 12px black;

With this code we create a box shadow. The box-shadow is create by a few different number, which are all in pixels. The first is the offset on the **x-axis**. In other words this number determine how far the shadow moves to the left or right. We make this zero, bacause we don't want the shadow to be to the left or the right. The second number is the offset on the **y-axis**. In other words this number determines how far the shadow will extend behind the button. We make this number **7px** to extend the shadow to the back of the button. The third number is the **blur radius**, in other words how far the blur effect should extend. In our case, a blur radius of **12px** looks about right. Finally, and as before, the **rgb** code is the colour code for the colour we used for the **box-shadow**.

Our Login form now looks like this:

![](/content/images/Screenshot from 2020-03-29 13-29-07.png)  
In respect of the text at the bottom, they only thing I will do is change the colour. We made this a paragraph, whereas it should be a link, but seeing as we have nowhere to link to, we will keep it a paragraph. We will use the links in the next project. To change the colour we go to where the **footer** is selected in the **style.css** file and we change the code as follows:

    color: lightgrey;

The code where the footer is styled should now look like this:

    #footer {
        font-weight: bold;
        color: lightgrey;
    }

To end of our form, we just have to round the corners of the form container and add a box shadow. To do this, look for where we selected the **container** in our **style.css** file and add the following code:

    border-radius: 12px;
    box-shadow: 0px 5px 16px rgb(52, 53, 54);

Our styling for our container should look like this:

    #container {
        width: 30%;
        margin: auto;
        background-color: rgb(46,47,51);
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        border-radius: 12px;
        box-shadow: 0px 5px 16px rgb(52, 53, 54);
    }

The **border-radius** property gives the corners of the **container** a rounded appearance. As with the button, the **box-shadow** property creates a shadow behind the form.

Our completed form looks like this:

![](/content/images/Screenshot from 2020-03-29 13-42-42.png)

That's it! Our form is done. I'm looking forward to the next lesson.

Till later!

### BONUS:

I've added some Javascript to our login form. This part is completely optional and I won't explain much. We will get to work with Javascript later on.

If we look at our form, we see that if we hover over the Sign In and Sign Up text, the green line shows under it. In reality what happens on a real website is that you click on one of those two to select your option.

Naturally if you click the form should change. Normally a sign up form has another text box where you have to confirm your password. The text of the sign up button should also change. Let's make those changes.

In the span tag which houses the **Sign Up** text, make the following changes:

    <span onclick="SignUpButton()" class="subheading">Sign Up</span>

With this code we add a Javascript function to our code which will be called when the button is clicked. We will write the function later.

On the other span, which houses the **Sign In** text, make the following changes:

    <span onclick="SignInButton()" class="subheading">Sign In</span>

Here we add another function which will be called when this is clicked.

Lastly, add the following input just **below** your last **text** input and **before** the checkbox input.

    <input style="display: none; margin-left: 12%;" id="sign-up" class="form-text-input" type="text" placeholder="Confirm Password"><br>

Just before the closing **body** tag in your HTML file, add the following code:

    <script src="script.js"></script>

This code will connect the HTML file with the script.js file which contains our Javascript code.

Now, as in the first part of our Login form lesson, next to the fodler name in the VSCode file explorer, click the add file button. As an alternative, right click in the file explorer in VSCode and select **New File**. Name that file **script.js**, press enter and the file will be opened in the code editor.

As I said, we will be creating a function when the text is clicked. In the **script.js** file, type the following:

    function SignUpButton(){
        let x = document.getElementById("sign-up");
        let button = document.getElementById("button")
        if (x.style.display === "none"){
            x.style.display = "block"
        }
        button.innerHTML = "SIGN UP"    
    }

This function will make the extra text box render to the screen and change the text of the button. I will explain later on in further lessons exactly how the function works.

Similarly, when the other text is clicked we have to remove the extra text input and change the text of the button back to the original text. For this we use the following function:

    function SignInButton(){
        let x = document.getElementById("sign-up");
        let button = document.getElementById("button")
        if (x.style.display === "block"){
            x.style.display = "none"
        }    
        button.innerHTML = "SIGN IN"
    }

If we save all our files now and refresh our browser, we will see that the form changes as we click on either **Sign In** or **Sign Up**.

Our form is now really done.

I hope you are looking forward to the next lesson.