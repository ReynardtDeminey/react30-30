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

 