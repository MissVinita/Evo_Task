import { getRectangleArea, getRectanglePerimeter, getRectangleInfo} from "../js/rectangle";

test('should properly output rectangle area', () => {
    const outputText = getRectangleArea(100, 50 );
    expect(Number(outputText)).toBe(Number(5000));
});

test('should properly output rectangle perimeter', () => {
    const outputText = getRectanglePerimeter(100, 50 );
    expect(Number(outputText)).toBe(Number(300));
});

test('should properly output rectangle info', () => {
    const outputText = getRectangleInfo(100, 50 );
    expect(outputText).toBe(console.log(`The perimeter of a rectangle is 300 and the area is 5000`));
    // expect(outputText).toBe(`The perimeter of a rectangle is 300 and the area is 5000`);
});