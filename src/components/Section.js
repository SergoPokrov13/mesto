export default class Section{

    constructor(item,renderer, container) {
        this._item = item;
        this._renderer = renderer;
        this._container = container;
    }

    // renderCards(cards) {
    //     cards.reverse().forEach(card => {
    //         this.addEl(card);
    //     });
    // }

    addEl() {
        const element = this._renderer(this._item);
        this._container.prepend(element);
    }
}