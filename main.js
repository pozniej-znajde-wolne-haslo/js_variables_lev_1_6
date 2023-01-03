// === GLOBAL, FUNCTIONAL, BLOCK SCOPE

let x = 34;

x = 67;
console.log(x);

/* const y = 34;

y = 67;
console.log(y); */



/*  https://www.w3schools.com/jS/js_let.asp 


=== let / const === introduced in ES6 (2015)

===== LET =====
--- Variables defined with let cannot be Redeclared (=== VAR can):
'let x = "John Doe";
let x = 0;' === SyntaxError

--- Variables defined with let must be Declared before use.

--- Can be reassigned.

--- Variables defined with let have Block Scope.

===== CONST =====

--- Variables defined with const cannot be Redeclared.

--- Variables defined with const cannot be Reassigned.

--- Variables defined with const have Block Scope.

--- !!! Must be assigned a value when they are declared!!

=====================================
===== before ES6 (2015):

--- JavaScript had only Global Scope and Function Scope

--- LET / CONST provide === Block Scope ===

--- Variables declared inside a { } block cannot be accessed from outside the block: 
'{
  let x = 2;
}'
== x can NOT be used here ==

== Redeclaring a variable inside a block will also redeclare the variable outside the block: ==

'let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}'
*/

