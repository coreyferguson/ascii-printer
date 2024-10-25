
const MAX_WIDTH = 10;
const MAX_HEIGHT = 6;

class AsciiPrinter {

    rectangles = [];

    drawRectangle(fillCharacter, leftX, topY, rightX, bottomY) {
        this.rectangles.push({ fillCharacter, leftX, topY, rightX, bottomY });
    }

    eraseArea(leftX, topY, rightX, bottomY) {
    }

    dragAndDrop(selectX, selectY, releaseX, releaseY) {
    }

    bringToFront(selectX, selectY) {
    }

    printCanvas() {
        const res = Array.from({ length: MAX_WIDTH }, () => Array(MAX_HEIGHT).fill(''));
        for (let rectangle of this.rectangles) {
            for (let y=rectangle.topY; y<=rectangle.bottomY; y++) {
                for (let x=rectangle.leftX; x<=rectangle.rightX; x++) {
                    res[x][y] = rectangle.fillCharacter;
                }
            }
        }
        return res;
    }

}

module.exports = AsciiPrinter;
