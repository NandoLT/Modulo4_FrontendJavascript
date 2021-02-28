export const productView = (product) => {    
    if(product == null) {
        return `<div class="notification is-info">
                    <strong class="title">Actualmente no tenemos productos en NODEPOP</strong>
                </div>`
    } else {
        let imgHTML = ''
        if(product.image) {
            imgHTML = `<figure class="image is-256x256">
                            <img class="image-product" src="${product.image}">
                        </figure>`
        } 
        return `<div class="card">
                <div class="card-image">
                ${imgHTML}
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-5">${product.name}</p>
                            <p class="title is-4">${product.price} €</p>
                            <p class="title  tag is-info">${product.type}</p>
                        </div>
                    </div>
                    <div class="content-tags">
                    </div>
                    <div class="btn-detail">
                        <a href="/product-detail.html?id=${product.id}" class="button is-info is-medium is-fullwidth">Ver Más</a>
                    </div>
                </div>
            </div>`
    }
    
}

export const tagsView = (tag) => {
    return `<span class="tag is-info is-light">${tag}</span>`
}