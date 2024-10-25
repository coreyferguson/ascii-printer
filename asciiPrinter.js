
const MAX_WIDTH = 10;
const MAX_HEIGHT = 6;

class AsciiPrinter {

    rectangles = [];

    drawRectangle(fillCharacter, leftX, topY, rightX, bottomY) {
        const rectangle = {
            anchor: { leftX, topY },
            data: Array.from({ length: rightX-leftX+1 }, () => Array(bottomY-topY+1).fill(fillCharacter))
        };
        this.rectangles.push(rectangle);
    }

    eraseArea(leftX, topY, rightX, bottomY) {
        let rectangle;
        for (let i=this.rectangles.length-1; i>=0; i--) {
            rectangle = this.rectangles[i];
            for (let x=leftX; x<=rightX; x++) {
                for (let y=topY; y<=bottomY; y++) {
                    const relativeX = x-rectangle.anchor.leftX;
                    const relativeY = y-rectangle.anchor.topY;
                    let isOnShape = 
                        relativeX >= 0 && relativeX < rectangle.data.length &&
                        relativeY >= 0 && relativeY < rectangle.data[0].length &&
                        rectangle.data[relativeX][relativeY] !== '';
                    if (!isOnShape) continue;
                    rectangle.data[relativeX][relativeY] = '';
                }
            }
        }
    }

    dragAndDrop(selectX, selectY, releaseX, releaseY) {
        let rectangle;
        for (let i=this.rectangles.length-1; i>=0; i--) {
            rectangle = this.rectangles[i];
            const relativeSelectX = selectX-rectangle.anchor.leftX;
            const relativeSelectY = selectY-rectangle.anchor.topY;
            let isOnShape = 
                relativeSelectX >= 0 && relativeSelectX < rectangle.data.length &&
                relativeSelectY >= 0 && relativeSelectY < rectangle.data[0].length &&
                rectangle.data[relativeSelectX][relativeSelectY] !== '';
            if (!isOnShape) continue;
            let shiftX = releaseX - selectX;
            let shiftY = releaseY - selectY;
            rectangle.anchor.leftX += shiftX;
            rectangle.anchor.topY += shiftY;
            break;
        }
    }

    bringToFront(selectX, selectY) {
    }

    printCanvas() {
        const res = Array.from({ length: MAX_WIDTH }, () => Array(MAX_HEIGHT).fill(''));
        for (let rectangle of this.rectangles) {
            for (let x=0; x<rectangle.data.length; x++) {
                for (let y=0; y<rectangle.data[x].length; y++) {
                    res[rectangle.anchor.leftX+x][rectangle.anchor.topY+y] = rectangle.data[x][y];
                }
            }
        }
        return res;
    }

}

module.exports = AsciiPrinter;
