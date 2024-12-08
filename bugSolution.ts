function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

//This is a subtle bug. In the following function, if you pass in a null or undefined value, the type checker will not complain, but you will get a runtime error.
function doSomething(value: string | null | undefined): string {
  return value.toUpperCase(); //Error if value is null or undefined
}

//How to fix this bug?

function doSomethingSafe(value: string | null | undefined): string {
  if (value === null || value === undefined) {
    return '';
  }
  return value.toUpperCase();
}
//Alternative solution using optional chaining and nullish coalescing
function doSomethingSafe2(value: string | null | undefined): string {
  return (value ?? '').toUpperCase();
}

//This is another example of a subtle bug.  If the value of 'user' is null or undefined, accessing user.name will throw an error.
//This can be fixed using optional chaining (?.)
interface User {
  name: string;
}
function greet(user: User | null | undefined) {
  console.log(user?.name);
}
//Or using nullish coalescing
function greet2(user: User | null | undefined) {
  console.log(user?.name ?? 'Guest');
} 
