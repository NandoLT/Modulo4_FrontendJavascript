export const editForm = (product) => {
    let tags = ''
    let src = ''
    if(product.image !== null){
        src = product.image
    }
    if(product.tags.length !== 0) {
        let tagID = 0
        product.tags.forEach( item => {
            tags += `<p class="control tagId${tagID}">
                        <input class="input tags" type="text" placeholder="tag" name="tags" value="${item}" required>
                            <button class="button is-dark delete-tag-btn" id="tagId${tagID}"><i class="fas fa-trash-alt"></i></button>
                    </p>`
                    tagID++
        })
    }
    return `<form " class="column  new-product-form is-half is-offset-one-quarter" novalidate>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input product-name" type="text" placeholder="Product Name" name="name" value="${product.name}" required>
                        <span class="icon is-small is-left">
                            <i class="fas fa-gifts"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-right">
                        <textarea class="textarea has-fixed-size" name="description" required>${product.description}
                        </textarea>
                    </p>
                </div>
                <div class="field tags-field-edit">
                ${tags}
                </div>
                <div class="field">
                    <button type="button" class="button is-info is-medium is-fullwidth buttonAddTag"><i class="fas fa-tags"></i>  &nbsp;&nbsp;&nbsp;Añadir Tag</button>
                </div>
                <div class="select is-hidden">
                    <select class="type-option" name="optionsType" required>
                        <option value="">Select Option</option>
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                    </select>
                </div>
                <div class="file has-name is-hidden">
                    <label class="file-label">
                        <input class="file-input" type="file" name="image" accept="image/*">
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Seleccionar Archivo…
                        </span>
                        </span>
                        <span class="file-name"></span>
                        </label>
                </div>
                <div class="price-edit">
                    <label><strong>Price:</strong> </label>
                        <p class="control has-icons-left">
                            <input class="input product-price-edit" type="number" step="any" placeholder="Price" name="price" value="${product.price}" required>
                            <span class="icon is-small is-left">
                            <i class="fas fa-euro-sign"></i>
                            </span>
                        </p>
                </div>

                

                <div class="field btn-submit submit-edit-product">
                    <button class="button is-info button-submit">
                    Actualizar Producto
                    </button>   
                </div>
            </form>
            <!-- current data -->
                <div class="current-data">
                    <div class="product-type"> 
                    <label> <strong>Product Type:</strong></label>                  
                        <button class="button is-info">${product.type}</button>
                        <button class="button is-dark delete-type-btn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="currentImage">
                    <label><strong>Product Image:</strong></label>
                    <img src="${src}" width="10%"/><button class="button is-dark delete-img-btn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <!-- End Current data -->`
}

export const novalid = () => {
    return `<div class="notification is-info">
                <strong class="title">Ha accedido al area de edición de producto sin <br>
                seleccionar producto.</strong>
            </div>`
}