export const productView = (product) => {
    return `<div class="product">
                <strong class="name-product">${product.name}</strong>
                <p class="price-product">${product.price} €</p>
                <p class="type-product">${product.type}</p>
                <ul class="tags">
                    <li class="tag">${product.tags[0]}</li>
                    <li class="tag">${product.tags[1]}</li>
                    <li class="tag">${product.tags[2]}</li>
                </ul>
                <hr>
            </div>`
}