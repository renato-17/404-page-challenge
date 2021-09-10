const scroll = ScrollReveal();

var slideUp = {
    duration: 3000,
    origin: 'bottom',
    distance: '100px'
};

var slideRight = {
    duration: 3000,
    origin: 'left',
    distance: '100px'
}

scroll.reveal('.content', slideUp);
scroll.reveal('.created-by',slideUp);
scroll.reveal('.not-found',slideRight);

