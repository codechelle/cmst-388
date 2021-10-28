// JavaScript Document

//Load window
window.onload = function() {
    //Get thumbnail container
    var thumbnailContainer = document.getElementById("thumbnails");

    //Get images in thumbnail container
    var thumbnailImgs = thumbnailContainer.getElementsByTagName('img');

    //Get location for captions
    var captionText = document.getElementById('caption');

    //Get location for larger images
    var largeImage = document.getElementById('largeImage');

    //Image container with a fun background color
    var largeImgContainer = document.getElementById('mainImage');
    largeImgContainer.style.backgroundColor = '#f542ef';

    //Loop through available images
    for (let i=0; i < thumbnailImgs.length; i++) {

        //Relevant caption per image
        thumbnailImgs[i].onmouseover=function getCaption(){
            switch(i) {
                case 0:
                    return captionText.innerHTML = 'Pink, purple, and yellow orchids by Ardi Evans';
                    break;
                case 1:
                    return captionText.innerHTML = 'Pure white orchids by Joanna Kosinska';
                    break;
                case 2: 
                    return captionText.innerHTML = 'Pink orchids by John Wiesenfeld';
                    break;
                case 3:
                    return captionText.innerHTML = 'Purple and green orchids by Rae Galatas';
                    break;
                case 4:
                    return captionText.innerHTML = 'Purple and white moth orchids by @whiterainforest on Unsplash';
                    break;
            }
        }
        
        //Add class name with border style to thumbnail images
        thumbnailImgs[i].onclick=function selectedImgs(){

            var selectedImg = document.getElementsByClassName("thumbUp");

            if (selectedImg.length > 0) {
                selectedImg[0].className = selectedImg[0].className.replace(" thumbUp", "");
            }
            
            // Add the active class to the current/clicked button
            this.className += " thumbUp";

            //Display larger version of selected image
            if (i === 0) {
                return largeImage.src = thumbnailImgs[0].src;
            } if (i === 1) {
                return largeImage.src = thumbnailImgs[1].src;
            } if (i === 2) {
                return largeImage.src = thumbnailImgs[2].src;
            } if (i === 3) {
                return largeImage.src = thumbnailImgs[3].src
            } if (i === 4) {
                return largeImage.src = thumbnailImgs[4].src
            } 
        };
    }
}

