const todos = [
  
  ];

const new_todos = [
  { task: "Wash the dishes", completed: false, priority: 3 },
  { task: "Write a blog post", completed: true, priority: 1 },
  { task: "Buy groceries", completed: false, priority: 2 },
  { task: "Study JavaScript", completed: true, priority: '' },
  { task: "Walk the dog", completed: false, priority: ""},];

//example 1
/*
function prints all the elements in an array
if the array is empty, throws an error msg.
else, prints each element in the array.
*/
function printArray(array) {
  try
  {
      if(array.length == 0)
        {
          throw new Error("The array is empty!!");
        }
        console.log("Names in the list:");
      for (let i = 0; i < array.length; i++) {
          console.log(array[i]);
      }
  }
  catch(err)
  {
      console.error("Error printing array:",err.message);
  }  
}

// Test for example 1
printArray([]);

//example 2
function calculateProduct(a, b) {
  if(isNaN(a) || isNaN(b))
    {
      throw new Error("Please enter a valid input.");
    }
    return a * b;
}

// Test for example 2
try
{
  calculateProduct('a','v');
}
catch(err)
{
  console.error("Error in calculating product:",err.message);
}

//example 3
function calculateProduct_new(c, d) {

    return c * d;
}

//example 4


try
{
  if(todos.length == 0)
    {
      throw new Error("The todos array is empty!!!")
    }
  const incompleteTasks = todos.filter((todo) => !todo.completed);
  console.log(incompleteTasks);
  
}
catch(error)
{
  console.error("Error filtering the array:",error.message);
}
//example 5
function sortArray(array_to_sort)
{
 
    let sortedArray = [];
    try
    {
      if(typeof(array_to_sort) == 'string')
        {
          throw new Error("Please pass an array as input!!");
        }
       sortedArray = array_to_sort.sort((a, b) => a.priority -
      b.priority);
    }
    catch(err){
      console.error("Error sorting the array:",err.message);
    }
    return sortedArray;
}

//Test for example 5

sortArray('sd');

/**
 * 
 * OUTPUT
 $ node pairpractice.js 
Error printing array: The array is empty!!
Error in calculating product: Please enter a valid input.
Error filtering the array: The todos array is empty!!!
Error sorting the array: Please pass an array as input!!

 */