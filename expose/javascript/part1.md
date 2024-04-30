1. `values added: 20`
2. `final result: 20`
3. `values added: 20`
4. There is an error. It says `result` in `console.log('final result: ', result);` is not defined. This is because `let result` is block scoped, so it is only defined within the `if{}` block. It can't be accesed in the `console.log('final result: ', result)` because it is out of scope. 
5. There is an error. `const result` is declared as `0`, meaning its value can't be changed. When you try to reassign the value `result = num1 + num2`, it raises an `assignment to constant variable error.`
6. There is an error. `const result` is declared as `0`, meaning its value can't be changed. When you try to reassign the value `result = num1 + num2`, it raises an `assignment to constant variable error.`