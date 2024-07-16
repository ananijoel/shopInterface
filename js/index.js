let Video_games_Item_container = document.querySelector('.Video_games .Item_container')
let Consoles_Item_container = document.querySelector('.Consoles .Item_container')
let Accessories_Item_container = document.querySelector('.Accessories .Item_container')
let PC_Smartphones = document.querySelector('.PC_Smartphones .Item_container')
let nav = document.querySelector('.navOpen')
nav.addEventListener('click', (e)=>{
    document.querySelector('.navs').classList.toggle('active')
})

import {fetchAPI} from '../js/Category.js'
fetchAPI('category','jeu','10',Video_games_Item_container)
fetchAPI('category','console','4',Consoles_Item_container)
fetchAPI('category','accessories','4',Accessories_Item_container)
fetchAPI('category','PC','4',PC_Smartphones)

