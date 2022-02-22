const btns = document.querySelectorAll('button')
      overlay = document.querySelector('.overlay')
// btn.onclick = () => {
//     alert('Под стук, под такт, это Click,  это Clack')
// }
// btn.onclick = () => {
//     alert('Под стук, под такт, это SECOND Click,  это SECOND Clack')
// }

// btn.addEventListener('click', () => {
//     alert('Под стук, под такт, это Click,  это Clack')
// })

// btn.addEventListener('click', () => {
//     alert('Под стук, под такт, это SECOND Click,  это SECOND Clack')
// })

// btn.addEventListener('mouseenter', (event) => {
//     console.log('Hover');
//     // console.log(event.target);
//     event.target.remove()
// })

// btn.addEventListener('click', (event) => {
//     event.target.remove()
// })

//let i = 0;
const deleteElement = (e) => {
   // e.target.remove();
   // console.log(e.target);
   console.log(e.currentTarget);
   console.log(e.type);
//    i++;
//    if (i == 3) {
//     btn.removeEventListener('click', deleteElement);
//    }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
})