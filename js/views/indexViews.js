export const productView = (product) => {
    return `<div class="card">
                <div class="card-image">
                <figure class="image is-256x256">
                    <img class="image-product" src="https://bulma.io/images/placeholders/256x256.png">
                </figure>
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
                </div>
            </div>`
}

export const tagsView = (tag) => {
    return `<span class="tag is-info is-light">${tag}</span>`
}