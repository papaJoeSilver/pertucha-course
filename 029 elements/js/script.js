'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneheart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      

/* box.style.backgroundColor = 'blue'
box.style.width = '500px'
 */
box.style.cssText = 'background-color: blue; width: 500px'
/* let num = 300
box.style.cssText = `background-color: blue; width: ${num}px` */

btns[1].style.borderRadius = '40%'
circles[0].style.backgroundColor = 'red'

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'purple'
}

hearts[2].style.backgroundColor = 'green'

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow'
})

const div = document.createElement('div')
// const text = document.createTextNode('Тут был Вася')

div.classList.add('black')

document.body.append(div) /* {
    width: 300px
} */
// div.width = '500px'
// wrapper.append(div)
// wrapper.appendChild(div) // старый щит
// wrapper.prepend(div)

// hearts[1].before(div)
// hearts[1].after(div)

// wrapper.insertBefore(div, hearts[2]) // старый щит

// circles[2].remove()
// wrapper.removeChild(hearts[1]) // старый щит

// hearts[2].replaceWith(circles[0])
// wrapper.replaceChild(circles[0], hearts[1]) // старый щит

div.innerHTML = '<h1>Хойль ПапаДжойль! Завтра шею качаем? </h1>'