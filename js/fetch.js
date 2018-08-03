async function getPopularProducts(){
    // Enviar la informacion al API
    const myRequest = new Request(
        'http://localhost:3000/products',
        {
            method: 'GET'
        }
    );

    let response = await fetch(myRequest)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then((response) => {
        return response;
    }).catch(error => {
        console.error(error);
    });

    return response;
}

async function renderProducts(){
    let products = await getPopularProducts();
    console.log(products);

    products.forEach((product) => {
        console.log(product);
        let popularProductsNode = document.getElementById('popular-products');
        let articleNode = document.createElement('article');
        let contentNode = document.createElement('div');

        // Foto
        let imageNode = document.createElement('img');
        imageNode.src = 'img/' + product.photo;
        imageNode.alt = product.name;

        // Nombre
        let titleNode = document.createElement('h2');
        let textNode = document.createTextNode(product.name);
        titleNode.appendChild(textNode);

        // Marca
        let brandNode = document.createElement('p');
        let brandTextNode = document.createTextNode(product.brand);
        brandNode.appendChild(brandTextNode);

        contentNode.appendChild(titleNode);
        articleNode.appendChild(imageNode);
        articleNode.appendChild(contentNode);

        popularProductsNode.appendChild(articleNode);
    });
}



renderProducts();
