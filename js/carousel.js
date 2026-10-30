document.addEventListener("DOMContentLoaded", () => {

    const space = document.querySelector("#space");

    if (!space) return;

    const container = space.querySelector(".container");
    const [leftBtn, rightBtn] = container.querySelectorAll("ul li");

    const carousel = container.querySelector(".carousel");
    const items = carousel.querySelectorAll("ol li");

    let currentIndex = 0;

    const visibleItems = Math.floor(
        carousel.clientWidth / items[0].offsetWidth
    );

    const lastIndex = items.length - visibleItems;

    function updateButtons() {

        leftBtn.classList.toggle(
            "disable",
            currentIndex <= 0
        );

        rightBtn.classList.toggle(
            "disable",
            currentIndex >= lastIndex
        );

    }

    function moveCarousel() {

        carousel.scrollTo({
            left: items[currentIndex].offsetLeft,
            behavior: "smooth"
        });

        updateButtons();

    }

    leftBtn.addEventListener("click", () => {

        if (currentIndex <= 0) return;

        currentIndex--;

        moveCarousel();

    });

    rightBtn.addEventListener("click", () => {

        if (currentIndex >= lastIndex) return;

        currentIndex++;

        moveCarousel();

    });

    updateButtons();

});