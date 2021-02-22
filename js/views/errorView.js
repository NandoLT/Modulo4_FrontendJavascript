export const errorView = (error) => {
    return `<article class="message is-danger">
                <div class="message-header">
                    <p>Notificación de Error</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    ${error}
                </div>
            </article>`
}