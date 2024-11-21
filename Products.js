export function Products(item) {
    const products_container = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('img')
    const data = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const button = document.createElement('button')

    a.href = "#"
    img.src = item.image
    img.alt = ""

    data.classList = "data"
    button.classList = "into_bucket"
    products_container.classList = "products_container"

    h2.innerHTML = item.title
    p.innerHTML = item.description
    button.innerHTML = "В изобранное"

    products_container.append(a,data)
    a.append(img)
    data.append(h2,p,button)
    
   
return products_container

}