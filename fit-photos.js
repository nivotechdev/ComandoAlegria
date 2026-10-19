// Destaques: a foto fica direto no card, então é envolvida em um bloco próprio
// para preencher a moldura igual às outras seções.
(function () {
    document.querySelectorAll('.carousel-card > img').forEach(function (img) {
        var wrapper = document.createElement('div');
        wrapper.className = 'carousel-photo';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
    });

    document.querySelectorAll(
        '.service-img-box, .character-img-box, .gallery-img-box, .carousel-photo'
    ).forEach(function (box) {
        box.classList.add('fit-box');
    });
})();
