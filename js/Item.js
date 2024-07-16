import {convertirDate,updatePrixTotal} from './functions.js'
const urlString = window.location.href;
const url = new URL(urlString);
const params = new URLSearchParams(url.search);
const matricule_value = params.get('data');

let Item_pictures = document.querySelector('.Item_pictures');
let Main_Item_picture = document.querySelector('.Main_Item_picture');
let Item_Informations = document.querySelector('.Item_Informations');
let Other_Items = document.querySelector('.Other_Items');

let nom = document.querySelector('.name');
let creation = document.querySelector('.date');
let description = document.querySelector('.description');
let types = document.querySelector('.types');
let quantity = document.querySelector('.quantite input');
let prix = document.querySelector('.prix p:nth-child(2)');
let button = document.querySelector('.button');
/*






let alltypes = ''
let options = document.querySelectorAll('.buttonOption')
document.querySelector('.boutique').classList.add('active')
let pictures = document.querySelectorAll('.img')
let mainPicture = document.querySelector('.image img')
*/
fetch(`https://node-game-store-api-e25abde5221a.herokuapp.com/api/Item/${matricule_value}`)
    .then(response => response.json())
    .then(datas=>{
        let data = datas.data 
        nom.innerHTML = data.name
        creation.innerHTML = convertirDate(new Date(data.updatedAt).toLocaleDateString())
        description.innerHTML = data.description;
        data.category.forEach(type => {
            console.log(type);
            types.innerHTML += `<div class="${type}">${type}</div>`; 
        });
        quantity.max = data.quantity;
        prix.innerHTML = data.price;
        let prix_total = updatePrixTotal(quantity.value,data.price)
        button.innerHTML = `acheter au total de ${prix_total} FCFA`;
    })

