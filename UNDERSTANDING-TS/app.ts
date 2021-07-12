//Object Example
const person: {
    name: string
    age: number
    nickname: string
} = {
    name: 'Nischal',
    age: 24,
    nickname: 'Nash'

}
console.log(person.nickname)

//Array Example
const persons ={
    name: 'Nischal',
    age: 24,
    nickname: 'Nash',
    hobbies: ['Soccer', 'Football']
}

let favoriteActivities: string[]
favoriteActivities= ['sports']

console.log(persons.name)

for (const hobby of persons.hobbies) {
    console.log(hobby.toUpperCase())
    
}

//Tuple Example
const person1 ={
    name: 'Nischal',
    age: 24,
    nickname: 'Nash',
    hobbies: ['Soccer', 'Football'],
    role: [1, 'author']
}

person1.role.push('admin')
person1.role
 

let favoriteActivities1: string[]
favoriteActivities1= ['sports']

console.log(person1.name)

for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase())
    
}