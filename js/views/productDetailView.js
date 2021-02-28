export const detail = (product) => {
    if(product == null) {
        return `<div class="notification is-info">
                    <strong class="title">El producto que busca no existe</strong>
                </div>`
    } else {
        let deleteBtnHTML = ''
        let editBtnHTML = ''
        if(product.canBeDeleted && product.canBeEdit) {
            deleteBtnHTML = '<button class="button is-danger delete-btn">Delete Product</button>'
            editBtnHTML = `<a href="/edit-product.html?id=${product.id}" class="button is-warning edit-btn">Edit Product</a>`
        }

        return `<div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-5">
                            <figure class="image is-4by3">
                                <img src="${product.image}" alt="Description">
                            </figure>
                        </div>
                        <div class="column is-6 is-offset-1">
                            <h1 class="title is-2">
                                ${product.name}
                            </h1>
                            <button class="button is-info">
                            ${product.type}
                            </button>
                            <br>
                            <table class="table is-fullwidth">
                                <tbody>
                                <tr>
                                    <td><strong>Description</strong></td>
                                    <td>${product.description}</td>
                                </tr>
                                <tr>
                                    <td><strong>Price</strong></td>
                                    <td>${product.price}</td>
                                </tr>
                                </tbody>
                            </table>
                            ${deleteBtnHTML}
                            ${editBtnHTML}
                        </div>
                    </div>
                </div>`
    }
}

