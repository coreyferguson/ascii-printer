
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
        let rectangle;
        for (let i=this.rectangles.length-1; i>=0; i--) {
            rectangle = this.rectangles[i];
            const isInBounds = selectX >= rectangle.leftX && selectX <= rectangle.rightX && selectY >= rectangle.topY && selectY <= rectangle.bottomY;
            if (!isInBounds) continue;
            let shiftX = releaseX - selectX;
            let shiftY = releaseY - selectY;
            rectangle.leftX += shiftX;
            rectangle.rightX += shiftX;
            rectangle.topY += shiftY;
            rectangle.bottomY += shiftY;
            break;
        }
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
