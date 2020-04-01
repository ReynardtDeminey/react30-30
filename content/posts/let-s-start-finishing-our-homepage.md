---
date: 2020-04-01T09:23:29Z
hero_image: "/content/images/homepage.jpg"
title: Let's start finishing our homepage
author: Reynardt Deminey

---
In the last lesson we created two files, **index.html** and **style.css**. We also linked the **Bootstrap** library to our page. After linking the library we created our navigation bar at the top of our page. Our page currently looks like this.

![](/content/images/homepage.png)

Our code in our code editor looks like this:

![](/content/images/vscode1.png)

Now, it's time that we start finishing our homepage. Like I said in the previous lesson during the planning phase, I suggest a hero section with a carousel. 

Just like in the previous lesson, we go to the Bootstrap website. 

![](/content/images/bootstrap.png)

On the Bootstrap page we click on Get started and on the next page, in the left hand menu we click on **Components**. Once the Components menu opens we can scroll down and click on Carousel. 

![](/content/images/carousel-menu.png)

In the page the opens, there are quite a few options for carousels that we can use on our page. If we scroll down on that page, the fourth one seems to be the best for our page. It has images, controls and each image has a label. This would be perfect for our page where we want to place certain highlights of the estate on our home page.

Just below the example, we will find the following code for our carousel component:

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

If we copy this code, we can paste it in our **index.html** file, just below  the code for the navigation bar. We can also move the code for our navigation bar into **div** tag. To do that, we create an opening and closing **div** tag and cut and past our navigation bar code between the div **tags**. Your code for the navigation bar should look like this:

    <div>
    	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        	<a class="navbar-brand" href="#">Shady Acres Estate</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#">About</a>
                    <a class="nav-item nav-link" href="#">Facilities</a>
                    <a class="nav-item nav-link" href="#">Contact</a>
                    <a class="nav-item nav-link" href="#">Join Golf Club</a>
                    </div>
                </div>
            </nav>
        </div>

We can now go to the code for the carousel. In probably about the 8th line of the code of the carousel, you will notice a **div** tag with class of **carousel-item** **active**. Just below that tag, there is an **img** tag with an with a **src** attribute. You will note the **src** attribute is empty. This tag is called an **image** tag and it's the tag we use when we add images to our websites. The **src** attribute specifies the **source** of the image.

For our website, I have downloaded all the necessary images and placed them in a Google Drive folder which you can download [here](https://drive.google.com/open?id=1or935rkvHB5c7AfMWGPMHPCBs_RpYqbs). For the carousel, we add the file **golfestate.jpg** between the quotation marks in the **src** attribute in the first section of the carousel. In the second **img** tag of the carousel, we add the file **home.jpg** between the quotation marks in the **src** attribute. Lastly, we place **shopping.jpg** between the quotation marks in the **src** attribute.  

After this is done, your code for the carousel should look like this:

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
    	<div class="carousel-inner">
    		<div class="carousel-item active">
    			<img src="golfestate.jpg" class="d-block w-100" alt="...">
    			<div class="carousel-caption d-none d-md-block">
    			<h5>First slide label</h5>
    			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    			</div>
    		</div>
    		<div class="carousel-item">
    			<img src="home.jpg" class="d-block w-100" alt="...">
    			<div class="carousel-caption d-none d-md-block">
    			<h5>Second slide label</h5>
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    			</div>
    		</div>
    		<div class="carousel-item">
    			<img src="shopping.jpg" class="d-block w-100" alt="...">
    			<div class="carousel-caption d-none d-md-block">
    			<h5>Third slide label</h5>
    			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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

If you save and refresh the page, you'll notice that there is now a carousel on the which scrolls through the pictures we uploaded. Now we can change the labels of our carousel. To do that we change the text in the code for the carousel, just like we did in with the images.

In the first **h5** tag we find in the carousel, we can change **First slide label** to **World Class Golf Course**. We can then also delete the **paragraph** or **p** tag below the label. We can repeat the same process for the second an third **h5** tags, replacing **Second slide label** with **Luxury Living**, and **Third slide label** with **Safe and Secure Shopping**. If we save and refresh, we'll see that our slides now have the above labels.

Looking at our page, however, we see that the images are too large. We need to adjust the height of the images. To do that we will have to adjust the height in our **style.css** file. **Remember**, we first have to link our **style.css** file with our **index.html** file. Can anyone remember how to do that?

To do that we add a **link** tag to the head of our **index.html** file. In other words, we place the following in our **head** tag after the **link** to **Bootstrap**.

    <link rel="stylesheet" href="style.css">

It is important to remember that we place the above link **after** the link for **Bootstrap**, otherwise the **Bootstrap link** will overwrite any custom CSS we write. The head of our HTML file should then look like this: 

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>

Once our files are linked, we can add the following code to our **style.css** file. 

    .carousel-item{
        height: 50vh;
    } 
    .carousel-item img{
        height: 50vh;
        object-fit: cover;
    }

With the code we firstly target the **carousel item** (This is the image and our label). We give it a height of 50% of the viewport height (50vh). In other words, we make it 50% of the height of our screen. 

We then target the **image(img)** within the **carousel item** and we also give that a height of 50% of the viewport (50vh). This is done so that the image fits within our carousel.

We also use **object-fit: cover;** just like we did in our Login Form from the previous lesson, to make the image fit the whole carousel.

When we save and refresh, our page now looks like this:

![](/content/images/homepage-carousel.png)

Well done, we have incorporated a carousel into our page and our client will be very happy. Tomorrow, we sill start doing the highlights which we will place below our carousel.

Till later!