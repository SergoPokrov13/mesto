export default class Section{

    constructor(renderer, ListCard) {
        this._renderer = renderer;
        this._container = ListCard;
    }

    renderedCards(cards) {
        cards.forEach(card => {
            this.addEl(card);
        });
    }

    addEl(data) {
        const card = this._renderer(data)
        this._container.prepend(card);
    }
}