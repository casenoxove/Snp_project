document.addEventListener('DOMContentLoaded', function() {
    const gnbItems = document.querySelectorAll('.gnb > li');

    gnbItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const subMenu = this.querySelector('.sub');
            if (subMenu) {
                subMenu.style.display = 'block';
            }
        });
        item.addEventListener('mouseleave', function() {
            const subMenu = this.querySelector('.sub');
            if (subMenu) {
                subMenu.style.display = 'none';
            }
        });
    });
});

const visual_s = new Swiper('.swiper-container',{
    autoplay: {delay:4000},
    loop: true,
})