export default class Section{

    constructor(renderer, container) {
        this._renderer = renderer;
        this._container = container;
    }

    renderCards(cards) { 
        cards.reverse().forEach(card => { 
            const element = this._renderer(card);
            this.addEl(element);
        }); 
   } 

   addEl(element) { 
    this._container.prepend(element); 
} 
}