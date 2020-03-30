---
date: 2020-03-30T07:56:18Z
hero_image: "/content/images/golf.jpg"
title: Meet our new client
author: Reynardt Deminey

---
After our first few lessons, a client has approached us to build a website for his security estate in Greedyville. He is the developer of the estate and he wants to market his new estate with the use of a website. 

During your meeting with him, he briefs you with the following information:

* The estate's name is **Shady Acres Golf Estate**.
* The estate will have approximately 1500 stands which will be made available for sale to the public and will feature excellent security.
* The estate will feature a world class golf course which will be designed by the well known professional golfer, Happy Gilmore.
* The estate will have a shopping centre with an exclusive Walmart and several boutique shops.
* The estate will have 4 restaurants. There will be a steakhouse, an indian restaurant, a seafood restaurant and a burger take-away.
* Lastly, the estate will feature world class medical facilities with a hospital.

After the meeting, it is time to get to work. It's time to do some planning. We have to study the brief and decide on the design of our site.

When I look at the brief, I think we should put a navigation bar on the top of the page with links to our different pages. I think that our links should be the following:

* About
* Facilities
* Contact, and
* Join Golf Club

The **About** page will give more details on the estate and the developer. The **Facilities** page will be list all the facilities in the estate. The **Contact** page will provide a contact form where buyers will be able to contact the developer (maybe in future the estate itelf). The **Join Golf Club** page will provide a page where people outside of the estate can join the golf club.

Now that we know which pages our site will have we can start designing. After a bit of designing, I've come up with this design for the home page.

![](/content/images/Screenshot from 2020-03-30 10-26-48.png)  
We will do a navigation bar on top of the page. Just below the navigation bar we will make a carousel, maybe with images of the estate. Below the carousel we will have a few highlights of the estate each with its own description.

Now that we have a wire frame of the site and an idea of the information on it, we can start building.

It's time to create a folder for our project. Go to the main folder we created in lesson 1. The lesson 1 folder should be in this main folder. Now create a new folder in our main folder and name the folder **lesson 2**. If we open the main folder now, there should be 2 folders, **lesson 1 and lesson 2**. 

Now open VSCode and, like before, click on **File  --> Open Folder**. Search for your **lesson 2** folder and open the folder in VSCode. Your screen should now look like this:

![](/content/images/Screenshot from 2020-03-30 10-35-27.png)  
Now, just like before, next to the **lesson 2**, we click the new file button and create a file named **index.html**. Once the file is created it will open in the code editor. Now, repeat the process for a **style.css** file.

Remember, you can also right click in the file explorer in VSCode and create new files with the pop up menu that appears. 

Once done, your VSCode screen should look like this:

![](/content/images/Screenshot from 2020-03-30 10-39-02.png)  
Can you remember how we get the boilerplate HTML code in VSCode? Yes, we type html and in the popup that appears we select **html : 5**. Once selected, our boilerplate will be provided. Your screen should now look like this:

![](/content/images/Screenshot from 2020-03-30 10-44-57.png)

Unlike the previous lesson where we wrote all of the CSS code ourselves, for this lesson we will use **Bootstrap**. Whoa, wait, what is Bootstrap? Bootstrap is a front-end CSS framework directed at responsive front-end web development. In simpler terms, it is CSS that has been written for us and we just use it by adding **classes** to our elements.

So, how do we get Bootstrap? The easiest way is the go their site at [getbootstrap.com]( "www.getbootstrap.com"). On the home page, click on the get started button and we will be taken to an introduction page. If we scroll down on the page, we will find a **Quick start** heading. Just below the heading is a **CSS** heading with a link we can copy. That link is:

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

Go ahead and copy that link by clicking on the **Copy** button in the top right hand corner. If you notice the **link** tag in the link, can you remember where we should paste this code into our **index.html** file? Yes, in the head of our document. Let's go ahead and paste it there.

If we scroll down further on the Bootstrap page, we find a **JS** heading with a few links below it. Just like before, copy those links, by clicking the button. Now, where should we paste there links in our **index.html** file. We should paste these links just before our closing **body** tag. Why? Well, it may take some time to load, so we put it at the end of our HTML file so that our page contents loads first.

Once we have done the above, our code should look like this:

![](/content/images/Screenshot from 2020-03-30 11-00-06.png)

Once this is done we can start building. The first part of our page is the navigation bar. Luckily for us, Bootstrap provides a library of templates we can use. On the left side of the **Bootstrap** page we find a menu. If we look in that menu we will see a link t**o Components**. If we click that we will be taken to a new page and the **Components** menu will be expanded. 

If we scroll down on the **Components** menu, we find the **Navbar** option. 

![](/content/images/Screenshot from 2020-03-30 11-06-52.png)

We can click on the Navbar link and on the page that opens we can scroll down and find the option we want. I've settled on this option because it gives us exactly what we need.

![](/content/images/Screenshot from 2020-03-30 11-08-18.png)

Just below the option, you will see the code that provides that specific **Navbar**. 

![](/content/images/Screenshot from 2020-03-30 11-10-05.png)

Just like the links we copied before, we can click on **Copy** in the top right corner. Once copied we can paste this code into our **index.html** file, just below the opening body tag. After copying, your **index.html** file should look like this:

![](/content/images/Screenshot from 2020-03-30 11-13-34.png)

We can now right click on the file name in the code editor and select the Copy Path option. Once, done we can paste this link into the address bar of our browser and press enter. You will see that we now have a navigation bar on our page.

![](/content/images/Screenshot from 2020-03-30 11-16-38.png)

If we look at the code, you will note that it is just normal HTML elements that that have quite a few classes. These classes have been styled in the Bootstrap file we linked to. 

Now we have to change the text to our pages we have decided on and which we will create later. To do that we go to our **index.html** file.

You will notice that the text for the links are all within **a** tags. This is what we call anchor tags and what we use when we link to other files. If you look at the a tags, you will see the text corresponds with the headings on our navigation bar. Let's change the text.

    <a class="nav-item nav-link" href="#">About</a>
    <a class="nav-item nav-link" href="#">Facilities</a>
    <a class="nav-item nav-link" href="#">Contact</a>
    <a class="nav-item nav-link" href="#">Join Golf Club</a>

We change the text within the **a** tags to correspond to our planned pages. We also removed all the further attributes to the first and final tags, because at this stage we don't want different styling for **active** and **disabled**. 

In **line 11** (yours might differ) of the code we have another **a** tag which provides the brand of the site. We change the text there to Shady Acres Estate. 

    <a class="navbar-brand" href="#">Shady Acres Estate</a>

Finally, in the line just above the brand we changed above, two **classes** have been added to the **nav** tag. We can change the **navbar-light** and **bg-light** classes to **navbar-dark** and **bg-dark**, like this:

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

The body of our **index.html** file should now look like this (excluding the script tags):

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

If we save the file and refresh our browser, the navigation bar now looks like this:

![](/content/images/Screenshot from 2020-03-30 11-38-50.png)

We done quite a bit for the day. Well done! Tomorrow we will be adding more elements and finish our home page.

See you soon!

 