const AsciiPrinter = require("./asciiPrinter");

describe("ascii printer", () => {
  test('an empty result has all empty strings at max size', () => {
    const printer = new AsciiPrinter();
    const result = printer.printCanvas();
    expect(result[0][0]).toBe('');
    expect(result[1][1]).toBe('');
    expect(result[9][5]).toBe('');
    expect(result.length).toBe(10);
    expect(result[0].length).toBe(6);
  });

  test("test case 1, L and R rectangles", () => {
    const printer = new AsciiPrinter();
    printer.drawRectangle('L', 1, 1, 4, 4);
    printer.drawRectangle('R', 6, 1, 8, 3);
    const result = printer.printCanvas();
    expect(result[1][1]).toBe('L');
    expect(result[4][4]).toBe('L');
    expect(result[6][1]).toBe('R');
    expect(result[8][3]).toBe('R');
  });
});
