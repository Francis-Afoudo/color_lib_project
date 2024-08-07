const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
});


// hero
sr.reveal('.hero_text', { origin: 'top', distance: '50px', interval: 100 });

sr.reveal('.our_philosophy', { origin: 'top', distance: '50px', interval: 40 });



sr.reveal('.from_bottom_text', { origin: 'bottom', distance: '50px', interval: 100 });

sr.reveal('.from_right_image', { origin: 'right', distance: '20px', interval: 20 });


//steps
sr.reveal('.steps__step', { distance: '100px', interval: 100 });