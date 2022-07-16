# JavaScript Functions Currying 

### JavaScript Functions Currying
- Functions Currying is same as funtions clousers in javascript.
- In Functions currying we are always passing argument to the fuction and it will returning the function.
  By using that innerfunction will return output.

### Example (1)

```bash

  function sumFn(a){
      return (b)=>{
          return a+b;
      }
  }

  const sum = sumFn(1);
  console.log(sum(6));

```


### Example (2)

```bash

  function sumFn2(a){
      return (b)=>{
          return a+b;
      }
  }

  console.log(sumFn2(2)(3))

```

### Example (3) (Arrow Functions)

```bash

  const sumFn3 = a => b => a+b;
  console.log(sumFn3(7)(3))

```