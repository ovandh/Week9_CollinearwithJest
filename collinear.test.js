const { collinear } = require("./collinear.js");

test('(1,1) , (3,3), (9,9) falls on a straight line', () => {

expect(collinear(1,1, 3, 3, 9, 9 )).toBe(true);


});

test('(0,12) , (3,3), (8,8) does not fall on a straight line', () => {

    
    expect(collinear(0,12, 3, 3, 8, 8 )).toBe(false);
    
    });

test('(-1, 7) , (3,0), (0,0) does not fall on a straight line', () => {

    
        expect(collinear(-1,7, 3, 0, 0, 0 )).toBe(false);
        
        });
