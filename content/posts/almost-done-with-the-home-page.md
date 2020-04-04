---
date: 2020-04-04T09:54:42Z
hero_image: "/content/images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg"
title: Almost done with the home page!
author: Reynardt Deminey

---
This is getting exciting. Our homepage is almost there! Let's look at where we are now?

![](/content/images/cards5.png)

There's still a few things we need to do to get the page looking perfect. The first thing I suggest is that we add a permanent heading to the carousel with the name of the estate. Let's add the heading. In the code for the carousel, just below the closing **ol** tag and before the div with class **carousel-inner**, add the following code:

     <div id="heading">
     	<h1>Shady Acres Estate</h1>
    	<h3>Luxury Living at its best</h3>
     </div>

If we save and refresh the page, we will see that the heading doesn't show on the page. We will fix that soon. Your code for the carousel should now look like this:

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div id="heading">
              <h1>Shady Acres Estate</h1>
              <h3>Luxury Living at its best</h3>
            </div>    
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="golfestate.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>World Class Golf Course</h5>              
                </div>
              </div>
              <div class="carousel-item">
                <img src="home.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Luxury Living</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src="shopping.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Safe and Secure Shopping</h5>              
                </div>
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

Let's make the heading show on the page. In the style.css file, at the bottom below the styling for the footer, add the following code:

    #heading {
        z-index: 20;
        position: absolute;
        left: 25%;
        top: 20%;
        color: white;
    }

Once we save and refresh our browser, we see the heading on the page. One thing though, that font is ugly and not befitting of a luxury estate. Let's change that. In the head of your **index.html** paste the following link to a font (just like we did before):

    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

Now that we imported the new font, add the following code at the end of your **style.css** file, after the styling for the heading:

    #heading h1 {
        font-family: 'Great Vibes', cursive;
        font-size: 100px;
    }
    
    #heading h3 {
        font-family: 'Great Vibes', cursive;
        font-size: 50px;
        padding-left: 100px;
    }

With this code, we target the **h1** and **h3** tags within the heading and change the font, the font-size and the position of the **h3** tag. Now we can move on to the highlights. Let's start with the first one. 

Firstly, we place the code for card in an enclosing **div** and we give that **div** an **id** of **golf-card-container**. We then also give the **div** with the **class** of **card** an **id** of **golf-card**. Our code for the first card should now look like this:

    <div id="golf-card-container">
    	<div id="golf-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">World Class Golf Course</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

With that done, we can move on to the **style.css** file and add the following code:

    #golf-card-container {
        overflow: hidden;
    }
    
    #golf-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("golfestate.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;    
    }
    
    #golf-card:hover {
        background-size: 150%;
    }

Let's see what this code in the **style.css** file does. The **overflow:hidden** where we target the **golf-card-container**,  specifies that the container won't grow and show content outside of the container. The **background** property sets the background image for the card and a dark green overlay in the form of a **linear-gradient**. For this card we use the **golfestate.jpg** image that is already in our folders. 

The **background-size** property sets the size of the **background** to **110%** of its enclosing container. The **background-position: center** property positions the background in the center of its container. The **transition** property deals with the transition to the larger size when we hover over the card. We specify that the transition should take **4s** and that it should **ease in**. Lastly, in the **#golf-card:hover** we specify the size when we hover over the card.

Our card should now look like this:

![](/content/images/cards6.png)

You will note that, when we hover over the card, the image zooms in and it has an animated effect. Now, let's repeat the process for the other 5 cards. Let's start with the Luxury Living card. For that the code will look like this.

In the **index.html** file:

    <div id="luxury-card-container">
    	<div id="luxury-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">Luxury Living</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

In the **style.css** file:

    #luxury-card-container {
        overflow: hidden;
    }
    
    #luxury-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("home.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;
        
    }
    
    #luxury-card:hover {
        background-size: 150%;
    }

For this card we use the **home.jpg** file we have in our folder. Now let's move the the **Excellent Security** card. For this card our code will look like this and we use the **security.jpg** file that is available in the Google Drive.

In the **index.html** file:

    <div id="security-card-container">
    	<div id="security-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">Excellent Security</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

In the **style.css** file:

    #security-card-container {
        overflow: hidden;
    }
    
    #security-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("security.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;
        
    }
    
    #security-card:hover {
        background-size: 150%;
    }

Now, let's do the **Shopping** card. For this we use the **shopping.jpg** that is already in our folders.

In the **index.html** file:

    <div id="shopping-card-container">
    	<div id="shopping-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">Shopping</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

In the **style.css** file:

    #shopping-card-container {
        overflow: hidden;
    }
    
    #shopping-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("shopping.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;
        
    }
    
    #shopping-card:hover {
        background-size: 150%;
    }

Now let's repeat the process for the final two. The images are available in the Google Drive. 

First the **Restaurants** card:

In the **index.html** file:

    <div id="restaurant-card-container">
    	<div id="restaurant-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">Restaurants</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

In the **style.css** file:

    #restaurant-card-container {
        overflow: hidden;
    }
    
    #restaurant-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("restaurant.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;
        
    }
    
    #restaurant-card:hover {
        background-size: 150%;
    }

Now the **Medical** Card:

In the **index.html** file:

    <div id="medical-card-container">
    	<div id="medical-card" class="card">
    		<div class="card-body">
    			<h5 class="card-title">Medical Facilities</h5>
    			<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto natus, ex eum veniam cum commodi inventore velit ipsum reiciendis sed, ipsam placeat in ratione repudiandae est! Aperiam consequatur dolor assumenda sint quae, tempore architecto laborum? Dolorum totam fugiat, repudiandae sed natus nulla nihil? Pariatur explicabo sunt quibusdam incidunt aliquam.</p>
    			<a href="#" class="btn btn-dark">Go somewhere</a>
    		</div>
    	</div>
    </div>

In the **style.css** file:

    #medical-card-container {
        overflow: hidden;
    }
    
    #medical-card {
        background: linear-gradient(rgba(10, 80, 1, 0.8), rgba(10, 80, 1, 0.8)), url("medical.jpg");    
        background-size: 110%;
        background-position: center;
        transition: all 4s ease-in;
        color: white;
        
    }
    
    #medical-card:hover {
        background-size: 150%;
    }

Our cards are now complete. Let's make a few final adjustments to the page. Change the first line of the **nav** to this:

    <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top">

This fixes the navigation bar to the top of the screen and changes the colour. Change the div just before the links on the navigation bar to this:

    <div class="navbar-nav ml-auto">

The ml-auto class moves the links to the right of the page. 

On every button change the **btn-dark class** to **btn-success**, and the text to **Read More** like this:

    <a href="#" class="btn btn-success">Read More</a>

Finally, change the **bg-dark** in the footer to **bg-success**, like this:

    <nav id="footer" class="nav justify-content-center text-light bg-success">

In, the **style.css** add the following code:

    .navbar-brand {
        font-family: 'Great Vibes', cursive;
    }

This changes the font of the website name on the left hand side of the navigation bar. In the styling for the **heading**, change the top property to 25% instead of 20%.

That's it, well done, our page is done! Our page now looks like [this](https://reynardtdeminey.github.io/shady-acres-estate/).

 