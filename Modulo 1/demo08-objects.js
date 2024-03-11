 const hero = {
  name: "Flash",
  age: 150,
  power: "Velocity",
  color: "Red",
  gender: "Male"
 }

//  console.log("Name: ", hero.name);
//  console.log("Age: ", hero['age']);
//  console.log("Gender: ", hero.gender);

 hero.id = 1

//  console.log(Object.keys(hero));

 const newFeature = {
  height: "210cm"
 }


 const newObj = Object.assign(hero, newFeature)
 
 
 delete newObj.name
 console.log(newObj);