 export const slider = function() {

    const sliderEl = document.getElementById('slider');
    const testimonialEl = document.getElementsByClassName('testimonials')[0];
    const sliderWidth = 1100; 

    function handleSliderNav(btn) {
        if(btn.id === 'slide-next') { slide('next'); return;}

        if(btn.id === 'slide-prev') { slide('prev'); return;}
    }

    function slide(pos) {
        //Number(window.getComputedStyle(sliderEl, null).left.split('px')[0]))
        // getComputedStyle() returns a string -> '128px'
        // so convert that to a number without the units.
        const currentLeftPos =  Number(window.getComputedStyle(sliderEl, null).left.split('px')[0]);
        const totalSlides = sliderEl.querySelectorAll('.slide').length;
        let move;
        
        if(pos === 'next') { move = ((currentLeftPos / sliderWidth) - 1) * 100;}

        if(pos === 'prev') { move = ((currentLeftPos / sliderWidth) + 1) * 100;}

        // make sure move pos is rounded up, if user is sliding too fast the move value might end up being a weird number :o
        move = Math.ceil(move/100)*100;

        // if not end of slides move!
        if(!((move === 100) || move === -(totalSlides * 100))) sliderEl.style.left = `${move}%`;
    }

    testimonialEl.addEventListener('click', function(e) {                    
        if(e.target && e.target.nodeName === 'I') {
            handleSliderNav(e.target);
        }
    });
}