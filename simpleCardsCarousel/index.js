function initSlider(){
    let cards_container = document.querySelector('.cards_container');
    let all_cards = document.querySelectorAll('.card');
    let prev_btn = document.querySelector('.fa-arrow-left');
    let next_btn = document.querySelector('.fa-arrow-right');
    let singleCardWidth = all_cards[0].clientWidth;

    next_btn.addEventListener('click', function(){
        cards_container.scrollBy({
            left: singleCardWidth + 40,
            behavior: 'smooth'
        })
        console.log();
    })

    prev_btn.addEventListener('click', function(){
        cards_container.scrollBy({
            left: (singleCardWidth + 40)* -1,
            behavior: 'smooth'
        })
        console.log();
    })
}

window.addEventListener("load", initSlider);