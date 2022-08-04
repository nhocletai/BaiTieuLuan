window.addEventListener('load', function(){
    const slider = document.querySelector(".slider");
    const slidermain = document.querySelector('.slider-main');
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn= document.querySelector(".slider-next");
    const prevBtn= document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let postionX = 0;
    let anh = 0;
    nextBtn.addEventListener("click", function ()
    {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function ()
    {
        handleChangeSlide(-1);

    });

    [ ...dotItems].forEach(item => item.addEventListener("click", function(e){
        [ ...dotItems].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.anh);
        anh = slideIndex;
        postionX = -1 * anh * sliderItemWidth;
        slidermain.style = `transform: translateX(${postionX}px)`;

    })
    );
    function handleChangeSlide(direction)
    {
        if(direction == 1)
        {

            if (anh >= slidesLength -1) 
            {
                anh = slidesLength -1;
                return;
            }
            postionX = postionX - sliderItemWidth;
            slidermain.style = `transform: translateX(${postionX}px)`;
            anh++;
        }  else 
            if(direction == -1)
            {

                if (anh <= 0) 
                {
                    anh = 0;
                    return;
                }
            postionX =  postionX + sliderItemWidth;
            slidermain.style = `transform: translateX(${postionX}px)`;
            anh--;
            }
            dotItems[anh].classList.add("active");
        
    }    
})