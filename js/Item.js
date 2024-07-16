import {convertirDate} from './functions.js'
import {fetchAPI} from '../js/Category.js'
const urlString = window.location.href;
const url = new URL(urlString);
const params = new URLSearchParams(url.search);
const matricule_value = params.get('data');

let Item_pictures = document.querySelector('.Item_pictures');
let Main_Item_picture = document.querySelector('.Main_Item_picture');
let Item_Informations = document.querySelector('.Item_Informations');
let Item_container = document.querySelector('.Item_container');

let nom = document.querySelector('.name');
let creation = document.querySelector('.date');
let description = document.querySelector('.description');
let types = document.querySelector('.types');
let quantity = document.querySelector('.quantity input');
let prix = document.querySelector('.prix p:nth-child(2)');
let button = document.querySelector('.button');
let pictures = document.querySelectorAll('.img')
let mainPicture = document.querySelector('.Main_Item_picture img')
let options = document.querySelectorAll('.buttonOption')

/*

document.querySelector('.boutique').classList.add('active')

*/
fetch(`https://node-game-store-api-e25abde5221a.herokuapp.com/api/Item/${matricule_value}`)
    .then(response => response.json())
    .then(datas=>{
        let data = datas.data 
        nom.innerHTML = data.name
        creation.innerHTML = convertirDate(new Date(data.updatedAt).toLocaleDateString())
        description.innerHTML = data.description;
        data.category.forEach(type => {
            types.innerHTML += `<div class="${type}">${type}</div>`; 
        });
        quantity.max = data.quantity;
        prix.innerHTML = data.price;

        const updatePrixTotal = () => {
            let prixTotale = quantity.value * data.price;
            button.innerHTML = `acheter au total de ${prixTotale} FCFA`;
            button.setAttribute('href', `https://wa.me/70076829?text= ${data.name} ${data.price} ${quantity.value} ${prixTotale} `);
        };
        updatePrixTotal();
        quantity.addEventListener('input', updatePrixTotal);
        fetchAPI('category',data.category[0],'10',Item_container)
    })

pictures.forEach(picture => {
    picture.addEventListener('click', (e) => {
        // Supprimer la classe 'active' de tous les éléments
        pictures.forEach(p => p.classList.remove('active'));
        
        // Ajouter la classe 'active' à l'élément cliqué
        picture.classList.add('active');
        mainPicture.setAttribute('src', picture.getAttribute('src'))
    });
});

options.forEach(option =>{
    option.addEventListener('click', (e) =>{
        options.forEach(o =>o.classList.remove('active'))
        option.classList.toggle('active')
    })
})

