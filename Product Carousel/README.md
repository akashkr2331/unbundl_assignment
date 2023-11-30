# Product-Carousel
This project is frontend based and use # html, css and javascript.

Css and .js file are imported in html file. As the position of all images should be same, so it is kept as absolute. 
Whenever a image -class is set to active the image is placed at top using css. 
set timeout function is used to perodically change the state of images, calling a image to be active after every iterval

navigator is also added to manually navigate through images. Whenever navigate button i.e. prev and next is clicked , the event listener for button element returns a callback function navigating on the basis of image position and type of navigator called. 
