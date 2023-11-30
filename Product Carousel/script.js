
window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
    const prev=document.getElementById("prevbutton");
    const next=document.getElementById("nextbutton");
  
    function addActive(slide) { 
        slide.classList.add('active'); 
    } 
  
    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 
  
    addActive(slides[0]); 
    let i=0;

    prev.addEventListener('click',()=>{
        if (i - 1 <0) { 
            addActive(slides[0]); 
            setTimeout(removeActive, 350, slides[slides.length-1]); 
            // break;
            i= slides.length-1;
        } 
        else{
            setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i - 1]);
                i--;
        }
    })

    next.addEventListener('click',()=>{
        // console.log("clicked")
        if (i + 1 == slides.length) { 
            addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                // break; 
                i=0;
        }
        else{
            setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]); 
                i++;
        }
    })

    setInterval(function () { 
        // for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                // break; 
                i=0;
            } 
            else if (slides[i].classList.contains('active')) { 
                setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]); 
                // break; 
                i++;
            } 
            
        // } 
    },
     3000); 

};