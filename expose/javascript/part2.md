1. 3 will be console logged
2. 150 will be console logged 
3. 150 will be console logged
4. Returns an array of discounted prices [50,100,150]. All the variables were able to be accessed within the function due to the `var` keyword. The body within the `for` loop correctly executes the code logic, to create a discounted array based on the passed in `discount` value and original `prices` array.
5. Raises an error, `i is not defined`. this is because `i` is declared with type`let`, meaning it can only be accessed with in the `for loop`. It tries to access `i` value in line 12, outside of the `for loop` block. 
6. Raises an error, `discountedPrice is not defined`. this is because `discountedPrice` is declared with type`let`, meaning it can only be accessed with in the `for loop`. It tries to access `discountedPrice` value in line 12, outside of the `for loop` block.
7. `150`. `finalPrice` is using `let` type, but is defined in the general function scope. It is also accessed within the general function scope on line 8 with the calculation, and on 14 with the console log, so there will be no errors. 
8. `[ 50, 100, 150 ]`. `discounted` is using `let` type, but is defined in the general function scope. It is also accessed within the general function scope on line 9 when they append `finalPrice`, and on 16 with return, so there will be no errors. 
9. Raises an error, `i is not defined`. this is because `i` is declared with type`let`, meaning it can only be accessed with in the `for loop`. It tries to access `i` value in line 12, outside of the `for loop` block. 
10. `3`. `length` is declared with `const` type, which is block scope. However, it is declared within the general function scope so it can be accesed in line 12 with `console.log(length)`. 
11. `[ 50, 100, 150 ]`. You can still push to `discounted` array, because in JavaScript, when you declare an array usnig `const`, you can't reassign to a different array but you can still modify the array by deleting or pushing elements. Each time the for loop iterates, `discountedPrice` is declared for the first time, so it's not violating any `const` properties. `discounted` and `length` are delcared technically within the function and not any specific block, so they can be accessed wherever in the function. The code runs as expected and returns the correct values. 
12. 
    1. (12a): student.name
    2. (12b): student["Grad Year"]
    3. (13c): student.greeting();
    4. (13d): console.log(student['Favorite Teacher'].name)
    5. (13e): student.courseLoad[0]
13. Arithmeic
    1.  (A): `'32'`. This is because integers map to their exact string representation
    2.  (B): `1`. When you use subtraction operator, javascript attemps to convert the other operand into a number if one of the operands is already a number. 
    3.  (C): `3`. null is converted to 0, so 3 + 0 = 3
    4.  (D): `'3null'`. Whenever there is `+` operation, and one operand is a string. it converts other operand to a string and concats them
    5.  (E): `4`. `true` is treated as `1` number value. so 3 + 1(true) = 4. 
    6.  (F): `0`. Null is converted to 0, false is converted to 0, 0+0 = 0.
    7.  (G): `'3undefined'`. Whenever there is `+` operation, and one operand is a string. it converts other operand to a string and concats them
    8.  (H): NaN`. 3 is converted to number because of `-` operation properties. Attempt to convert `undefined` to number, but it can't be converted to number, so the entire operation returns `NaN`. 
14. Comparison
    1. (a): `true`. `'2'` is changed to a number, and 2 > 1. 
    2. (b): `false`. When passed both strings, javascript compares them char by char, so `'2'` is considered greater than `'1'`, so returns false. 
    3. (c): `true`. Javascript changes `'2'` into a number before comparison, and `2==2`, so returns true. 
    4. (d): `false`. `===` is the strict operator, and doesn't change any types. It checks for valuea and type, so a `string` is not equal to a `number`. 
    5. (e): `false`. `true` is converted to 1, and 1 does not equal 2. 
    6. (f): `Boolean()` used to convert value to boolean. If you pass any non-empty or non-zero value, it will return true. so `Boolean(2)` returns `true` and `true` equals `true`, so true. 
 15. `==` compares values, and may perform type conversion whereas `===` is the strict operator and doesn't perform type conversion and checks whether values **and** types are the same. 
 16. [part2-question16.js](./part2-question16.js)
 17. `[2,4,6]`. `callback` is passed in as a parameter to `modifyArray()`. It is like a variable that can be called whenever it is accessed. It is called in `newArray.push(callback(array[i]));` and passed in the value `array[i]`, and returns the incoming value by 2. As `modifyArray` iterates over the given array, it calls `doSomething()` on each element (multiply by 2), and appends that to `newArr`. Finally, it returns `newArr` which is an array that contains values of the original array times 2. 
 18. [part2-question18.js](./part2-question18.js)
 19. `1 4 3 2`
