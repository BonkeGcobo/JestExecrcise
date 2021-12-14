const {stringLength,revString, calculator, capitalize} = require('./index');

test("Counts characters of string", ()=>{
    expect(stringLength("ice")).toBe(3);
});

test("Counts characters of string", ()=>{
    expect(stringLength("icevjoenonev00000")).toBe("Can't run");
});

test("Counts characters of string", ()=>{
    expect(revString("ice")).toBe("eci");
});

test("Returns a capitalized string",()=>{
  expect(capitalize("break")).toBe("Break");
});

describe( 'calculator',() =>{
    test("Adding 1+1", ()=>{
        expect(calculator.add(1,1)).toBe(2);
    });

    test("Adding 3+2", ()=>{
        expect(calculator.add(3,2)).toBe(5);
    });
    
    test("Adding 7+2", ()=>{
        expect(calculator.add(7,2)).toBe(9);
    });

    test("Subtracting 7-2", ()=>{
        expect(calculator.subtract(7,2)).toBe(5);
    });

    test("Subtracting 3-2", ()=>{
        expect(calculator.subtract(3,2)).toBe(1);
    });

    
    test("Subtracting 10-11", ()=>{
        expect(calculator.subtract(10,11)).toBe(-1);
    });

    test("multiply 10*2", ()=>{
        expect(calculator.multiply(10,2)).toBe(20);
    });

    test("multiply 5*4", ()=>{
        expect(calculator.multiply(5,4)).toBe(20);
    });

    test("divide 3*2", ()=>{
        expect(calculator.multiply(3,2)).not.toBe(9);
    });

    test("divide 10 and 2", ()=>{
        expect(calculator.divide(10,2)).toBe(5);
    });

    test("divide 100  and 25", ()=>{
        expect(calculator.divide(100,25)).toBe(4);
    });

    test("divide 12 and 3", ()=>{
        expect(calculator.divide(12,3)).not.toBe(9);
    });
  
}); 