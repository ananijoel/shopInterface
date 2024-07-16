export function fetchAPI(field,value,limit,Htmlelement){
    fetch(`https://node-game-store-api-e25abde5221a.herokuapp.com/api/Items/${field}/${value}/${limit}`,{
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }})
    .then(response => response.json())
    .then(data =>{
        data.data.forEach(element => {
            let Item = document.createElement('div')
            Item.className = `Item ${element.matricule}`
            console.log(Item.className)
            Htmlelement.appendChild(Item)
            
            let Item_picture = document.createElement('div')
            Item_picture.className = 'Item_picture'

            let Item_picture_img = document.createElement('img')
            Item_picture_img.setAttribute('src','https://i.pinimg.com/564x/60/3d/53/603d538e4ae9bee0ef34db79409303e2.jpg')
            let Item_name = document.createElement('div')
            Item_name.className = 'Item_name'
            Item_name.innerText = element.name

            let Item_category = document.createElement('div')
            Item_category.className = 'Item_category'
            Item_category.innerText = element.category[1]

            let hr = document.createElement('hr')

            let Item_price = document.createElement('div')
            Item_price.className = 'Item_price'
            Item_price.innerText = element.price+' FCFA'

            let Item_buy = document.createElement('a')
            Item_buy.className = 'Item_buy'
            Item_buy.innerText = 'acheter'
            Item_buy.setAttribute('href', `/html/Item.html?data=${element.id}`)

            Item.appendChild(Item_picture)
            Item_picture.appendChild(Item_picture_img)
            Item.appendChild(Item_name)
            Item.appendChild(Item_category)
            Item.appendChild(hr)
            Item.appendChild(Item_price)
            Item.appendChild(Item_buy)
            
        });
    })
}