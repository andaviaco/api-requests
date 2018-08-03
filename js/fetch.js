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

function renderProducts(products) {
    let popularProductsNode = document.getElementById('popular-products');

    products.forEach((product) => {
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
        let brandNode = document.createElement('h3');
        let brandTextNode = document.createTextNode(product.brand);
        brandNode.appendChild(brandTextNode);

        // Descripcion
        let descriptionNode = document.createElement('p');
        descriptionNode.classList.add('caca');
        let descriptionTextNode = document.createTextNode(product.description);
        descriptionNode.appendChild(descriptionTextNode);

        // Reviews


        contentNode.appendChild(titleNode);
        contentNode.appendChild(brandNode);
        contentNode.appendChild(descriptionNode);
        articleNode.appendChild(imageNode);
        articleNode.appendChild(contentNode);

        popularProductsNode.appendChild(articleNode);
    });
}



let a = getPopularProducts();
console.log(a);
