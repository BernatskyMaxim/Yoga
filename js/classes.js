'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; 
                    background-color:${this.bg}; font-size:${this.fontSize}px;
                    text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }
}

const ITEM = new Options(150, 150, 'blue', 15, 'center');

ITEM.createDiv();