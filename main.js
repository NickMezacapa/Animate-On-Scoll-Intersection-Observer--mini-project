// Create an array for all h2 elements and all divs with the .img-wrap class, save to variables
let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('h2')];
let paragraphs = [...document.querySelectorAll('p')];


/* Declare options object to use for intersection observer parameter, will need the rootMargin and a threshold. This will declare where and when the observed information will be observed and displayed. The rootMargin of 0px will make the entire viewport our observer. When 25% of the image is being observed, we will adjust styling for the element to appear on the page */
let options = {
    rootMargin: '0px',
    threshold: .25
}

// If the elements, which are being passed in as entries, are intersecting with the observer, we will add the active class.
let setItemActive = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
};

// Create the new Intersection Observer
// Must be created after declaration of setItemActive so it can be passed as a callback along with our options object
let observer = new IntersectionObserver(setItemActive, options);

// For each element in the imageItem array, we will need to create a file path for the images and adjust the styling
imageItems.forEach((item, index) => {
    item.children[0].style.backgroundImage = `url(./image-assets/${index+1}.jpg)`;
    /* 
    if the index is even, adjust the style left to 55%, otherwise the style left is = 5%. This will make every second image be on the opposite side of the page.
    */
    index % 2 == 0 ? item.style.left = '55%' : item.style.left = '5%';
    observer.observe(item);
})
    // We will apply the same concept to our h2 elements and p elements
titles.forEach((title, index) => {
    index % 2 == 0 ? title.style.left = '22%' : title.style.left = '55%';
    observer.observe(title);
})
paragraphs.forEach((paragraph, index) => {
    index % 2 == 0 ? paragraph.style.left = '22%' : paragraph.style.left = '55%';
    observer.observe(paragraph);
})
