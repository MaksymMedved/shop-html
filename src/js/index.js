import {trends_mock, best_sellers_mock, actual_shopping_items_mock} from './mock_data.js'

function init () {
    let trends_container = document.querySelector('section.trends .cards-container')
    let best_sellers_container = document.querySelector('section.best-sellers .cards-container')
    let actual_shopping_items_container = document.querySelector('section.actual-items .cards-container')
    trends_mock.forEach(el => render(trends_container, 'beforeend', createTrendCard(el)))
    best_sellers_mock.forEach(el => render(best_sellers_container, 'beforeend', createBestSellersCard(el)))
    actual_shopping_items_mock.forEach(el => render(actual_shopping_items_container, 'beforeend', createActualShoppingItemsCard(el)))
}
function render (parent, position = 'beforeend', el) {
    parent.insertAdjacentHTML(position, el)
}

function createTrendCard (card) {
    return `
        <div class="trends-card">
            <a href="${card.url}">
                <div class="card-img cover-img" style="background-image: url(${card.img_src});"></div>
                <h2 class="card-title">${card.title}</h2>
            </a>
        </div>
    `
};

function createBestSellersCard (card) {
    return `
        <div class="card">
            <a href="${card.url}">
                <div class="card-image cover-img" style="background-image: url(${card.img_src});"></div>
                <div class="card-description">
                    <h2 class="title">${card.title}</h2>
                    <p>${card.description}</p>
                    <h2 class="card-price">${card.price} руб.</h2>
                </div>
            </a>
        </div>
    `
};

function createActualShoppingItemsCard (card) {
    return `
        <div class="card">
            <a href="${card.url}">
                <div class="card-image cover-img" style="background-image: url(${card.img_src});"></div>
                <div class="card-description">
                    <p>${card.title}</p>
                </div>
            </a>
        </div>
    `
}



document.addEventListener('DOMContentLoaded', init)