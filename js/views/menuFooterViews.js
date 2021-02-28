export const menu = (userid) => {
    return `<nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="./images/nodepop_logo.PNG" width="112" height="28">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
                <div id="navbarBasic" class="navbar-menu"> 
                <div class="navbar-end">
                    <div class="navbar-item">
                    <div class="buttons">
                        <span class="user-logged is-hidden">
                            <a href="/new-product.html" class="button is-warning">
                            New product
                            </a>
                            <a href="/my-nodepop.html?userId=${userid}" class="button is-primary">
                            <i class="fas fa-user"></i>&nbsp;
                            <strong>My nodepop</strong>
                            </a>
                            <button class="button is-dark">
                            <i class="fas fa-power-off"></i>&nbsp;
                            <strong>Log Out</strong>
                            </button>
                        </span>
                        <span class="user-notlogged is-hidden">
                            <a href='/register.html' class="button is-primary">
                            <strong>Sign up</strong>
                            </a>
                            <a href="/login.html" class="button is-success">
                            Log in
                            </a>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </nav>`
}

export const footer = () => {
    return `<div class="content has-text-centered">
                <p>
                    <strong>Nodepop</strong> por <a href="https://github.com/NandoLT/Modulo4_frontend_javascript">Fernando López <img  id="git-icon" src="./images/github-icon.png" alt="" srcset=""></a>
                </p>
            </div>`
}