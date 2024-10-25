const AsciiPrinter = require("./asciiPrinter");

describe("ascii printer", () => {

  const printer = new AsciiPrinter();

  test('an empty result has all empty strings at max size', () => {
    const result = printer.printCanvas();
    expect(result[0][0]).toBe('');
    expect(result[1][1]).toBe('');
    expect(result[9][5]).toBe('');
    expect(result.length).toBe(10);
    expect(result[0].length).toBe(6);
  });

  test("test case 1, L and R rectangles", () => {
    printer.drawRectangle('L', 1, 1, 4, 4);
    printer.drawRectangle('R', 6, 1, 8, 3);
    const result = printer.printCanvas();
    expect(result[1][1]).toBe('L');
    expect(result[4][4]).toBe('L');
    expect(result[6][1]).toBe('R');
    expect(result[8][3]).toBe('R');
  });

  test('test case 2, dragging preserves existing draw order', () => {
    printer.dragAndDrop(2, 3, 5, 3);
    const result = printer.printCanvas();
    expect(result[3][1]).toBe('');
    expect(result[4][1]).toBe('L');
    expect(result[5][1]).toBe('L');
    expect(result[6][1]).toBe('R');
    expect(result[6][3]).toBe('R');
    expect(result[6][4]).toBe('L');
    expect(result[7][4]).toBe('L');
    expect(result[8][4]).toBe('');
  });
});
