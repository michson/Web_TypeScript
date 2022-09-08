const person: {
  name: string;
  gender: string;
  age: number;
  hobbies: string[];
  role: [number,string];
} = {
  name: "Michaelson",
  gender: "Male",
  age: 38,
  hobbies: ['Singing', 'Coding', 'Problem Solving'],
  role: [2,'Author']
};

person.role.push(3,'Adeshina')
console.log(person);
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}