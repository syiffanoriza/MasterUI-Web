const container1 = [...document.querySelectorAll('#JSone')];
const next1 = [...document.querySelectorAll('#NextOne')];
const prev1 = [...document.querySelectorAll('#PrevOne')];

container1.forEach((item, i) => {
    let container1Dimensions = item.getBoundingClientRect();
    let container1Width = container1Dimensions.width;

    next1[i].addEventListener('click', () => {
        item.scrollLeft -= container1Width;
    })

    prev1[i].addEventListener('click', () => {
        item.scrollLeft += container1Width;
    })
})

const container2 = [...document.querySelectorAll('#JStwo')];
const next2 = [...document.querySelectorAll('#NextTwo')];
const prev2 = [...document.querySelectorAll('#PrevTwo')];

container2.forEach((item, i) => {
    let container2Dimensions = item.getBoundingClientRect();
    let container2Width = container2Dimensions.width;

    next2[i].addEventListener('click', () => {
        item.scrollLeft -= container2Width;
    })

    prev2[i].addEventListener('click', () => {
        item.scrollLeft += container2Width;
    })
})