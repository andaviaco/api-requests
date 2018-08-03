async function getPopularProducts(){
    // Enviar la informacion al API
    const reqProducts = new Request(
        'http://localhost:3000/products', // Cambiar por tu propia API
        {
            method: 'GET'
        }
    );

    let response = await fetch(reqProducts)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });

    return response;
}

async function renderProducts() {
    let products = await getPopularProducts();

    let popularProductsNode = document.getElementById('popular-products');
    let articleNode = document.querySelector('#popular-products article');
    articleNode.remove();

    products.forEach((product) => {
        let newArticle = articleNode.cloneNode(true);
        newArticle.children[0].src = 'img/' + product.photo;
        newArticle.children[1].children[0].innerText = product.name;
        newArticle.children[1].children[1].innerText = product.brand;
        newArticle.children[1].children[2].innerText = product.description;
        newArticle.children[1].children[4].innerText = product.price;

        popularProductsNode.appendChild(newArticle);
    });
}



renderProducts();
