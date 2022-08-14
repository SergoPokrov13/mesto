export default class Section{
    constructor({items, renderer}, ListCard) {
        this._items = items;
        this._renderer = renderer;
        this._container = ListCard;

    }
    initRender() {
        this._items.forEach(item => {
            const element = this._renderer(item);
            this.addEl(element);
        });
    }

    addEl(element) {
        this._container.prepend(element);
    }
} 