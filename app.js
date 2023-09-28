

var person = {
    name: "Michaelson",
    gender: "Male",
    age: 38,
    hobbies: ['Singing', 'Coding', 'Problem Solving'],
    role: [2, 'Author']
};


person.role.push(3, 'Adeshina');
console.log(person);
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
