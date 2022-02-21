const btn = document.querySelector('button')

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

btn.addEventListener('mouseenter', () => {
    console.log('Hover');
})