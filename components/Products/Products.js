class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
            <div id="${id}" class="cards__items">

            <div class="cards__img">
                <img src='${img}' alt="foto">
            </div>
            <div class="cards__title">${name}</div>
            <div class="cards__subtitle"></div>
            <div class="cards__price">${price}р.</div>
            <div class="cards__buttons"></div>
            
            </div>
            `;
        });

        const html = `
           
                ${htmlCatalog}
                <div  class="cards__items cards__empty">  </div>
                            <div class="cards__items cards__empty">  </div>
                            <div class="cards__items cards__empty">  </div>
                            <div class="cards__items cards__empty">  </div>
            
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();

