//Object Example
var person = {
    name: 'Nischal',
    age: 24,
    nickname: 'Nash'
};
console.log(person.nickname);
//Array Example
var persons = {
    name: 'Nischal',
    age: 24,
    nickname: 'Nash',
    hobbies: ['Soccer', 'Football']
};
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(persons.name);
for (var _i = 0, _a = persons.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
