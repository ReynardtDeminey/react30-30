---
date: 2020-04-02T08:54:05Z
hero_image: "/content/images/chris-ried-ieic5Tq8YMk-unsplash.jpg"
title: Our homepage is getting there!
author: Reynardt Deminey

---
Yesterday we added to a carousel with some images to our homepage. If we look at our initial planning, we now have to add the highlights to our page. Our page currently looks like this:

![](/content/images/homepage-carousel.png)

Our highlights will be right under our carousel. For the highlights we can use another component provided by the **Bootstrap** library. I suggest that our page has approximately **6** highlight which we all put in their own container.  

If we go to the Bootstrap page and click on Get Started, we will be taken to the page where we will once again go the menu on the left hand side of the page. In that menu we click on the Card item.

![](/content/images/CardBootstrap.png)

On the page that opens we can scroll down to the example under the heading **Using grid markup**. The **Bootstrap Grid** is a way that we can position and space content on our page. It provides a way to position content in columns and rows. For instance, if we use a row with 2 columns as provided in the example, we will 2 cards next to each other.

If we copy the code of the example and paste it into our index.html file right under the carousel, you will note that we now have two boxes where we can put our highlights.

![](/content/images/cards1.png)

Our code for the cards look like this:

    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

The first **div** has a class of **row**. This is the container that will be holding our cards and this class is used to specify that the contents in the container will be in a row. Within the container we see that the separate cards have classes of **col-sm-6**. This specifies that each card falls in a column with a width of **6**. In a **Bootstrap** grid we always work **12** columns. So, to have two equal sized colums we use a width of **6**. 

If we look at the cards, we see that they span the whole width of the page. Ideally, we don't want them to span the whole width and they should be narrower than the page. Let's fix that. We do that by adding classes to the very first div tag of the cards.

    <div class="row w-75 mx-auto">

We add the **w-75** to specify that the container holding the cards should be 75% of the width of the page. We add the **mx-auto** to position the container in the center of the page. There are all utilities provided by Bootstrap for the positioning and spacing of elements.

Our code for the cards no look like this:

    <div class="row w-75 mx-auto">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

If we look at the page, we now see that the cards are narrower and they are in the center in the screen. 

![](/content/images/cards2.png)

We planned on having 6 highlights, so we can copy our code for the cards and past it two more times under the current cards.

Our code for the cards should now look like this:

    <div class="row w-75 mx-auto">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
      <div class="row w-75 mx-auto">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
     <div class="row w-75 mx-auto">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

And our page looks like this:

![](/content/images/cards3.png)

We now see that we have all 6 cards for our highlights, but there is now space between them and between the cards and the carousel. We should therefore create some some space. There are a few ways we can do that. I suggest, that in our case, we add the following code to our **style.css** file. 

    .row {
        margin-top: 20px;
    }

If we save and refresh our page, you'll see that now there is some space between the elements. Now, another thing we have to change is the alignment of the content in each card. Luckily, **Bootstrap** provides a class that we can use to do that. In each of the **rows** we pasted, add a class of text-center to each of the first **divs**.

    <div class="row w-75 mx-auto text-center">

If we do that with each of our three throws, we'll see that the content of each card moves to the center. The next thing that has to change is the colour of the buttons. We have a choice to make here. We can either change the buttons to the colour of the navigation bar or we can choose a new colour and make both that colour. At this stage, let's make the buttons, the same colour as the navigation bar. To do this, we have to change the **classes** of our cards.

In each **card**, you will notice an **a** tag. In that **a** tag is a class of **btn-primary**. Go ahead and change that to **btn-dark** like this. 

    <a href="#" class="btn btn-dark">Go somewhere</a>

This **class** will change the colour of the **a** tag from blue to the same dark colour as the navigation bar. We can now also change the heading in our cards to our highlights. I suggest we change the text with the **h5** tags in each card to the following in the same order.

* World Class Golf Course
* Luxury Living
* Excellent Security
* Shopping
* Restaurants
* Medical Facilities

In each of the **p** tags below the h5 tags, we can replace the text, with the following text.

"_Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatem repellat alias consectetur voluptates maxime maiores impedit veniam? Recusandae optio dicta aliquid pariatur temporibus, atque cumque labore quos! Vitae dicta ab deserunt ea ex expedita voluptates mollitia placeat numquam blanditiis praesentium est facilis ratione reiciendis illo non, assumenda voluptas esse?_"

This is text that we normally use as place holder text. Our page will now look like this:

![](/content/images/cards5.png)

The last element we need on our homepage is a footer. A footer is nothing else than a navigation bar, which we already have where we can put links to social media, privacy policies and so on. To insert a footer at the end of our page, place the following code after the code for our cards:

    <nav id="footer" class="nav justify-content-center text-light bg-dark">
        <p class="nav-link" href="#">Copyright shadyacresestate.com</a>
    </nav>

Then add the following code in our **style.css** file.

    #footer {
        margin-top: 20px;
    }

The above two pieces of code adds a bar to the bottom of our screen. The bar is the same colour as our navigation bar and the code in the CSS file, makes a bit of space between our footer and the cards.

Today we've added the cards for the highlights and the footer. Our homepage is almost done! 