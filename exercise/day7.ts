/* 
Create a function to merge two array of student data and remove duplicate data
Student data : name & email
Example : 
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’  }
]
Result : 
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  },
{ name: ‘Student 3’, email : ‘student3@mail.com’  }
]
*/

function mergeRemoveDuplicate(Array1: any[], Array2: any[]) {
  const ArrayResult = [...Array1, ...Array2].reduce((unique, item) => {
    const found = unique.some(
      (student) => student.name === item.name && student.email === item.email
    );
    if (!found) {
      unique.push(item);
    }
    return unique;
  }, []);

  return ArrayResult;
}

const Array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const Array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeRemoveDuplicate(Array1, Array2));

interface Student{
    name: string;
    email: string;
}

const combineArray = (arr1:Student[],arr2:Student[]) => {
    // gabungin dulu
    const students =  [...arr1,...arr2];
    console.log (students)
    // di pilah
    const temp = [];

   students.forEach((student) =>{
    const existingStudent = temp.find((murid) => {
        return murid.email === student.email;
    } )

   });
}

combineArray(Array1,Array2);
/*

Create a function that can accept input as an array of objects and switch all values into property and property into value
Example : 
Input : [{ name: ‘David’, age: 20 }]
Output : [{ David: ‘name’, 20: ‘age’}] */

function findFactorial() {}

/*

Create a function to find a factorial number using recursion
Example
Input :  5
Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

*/
