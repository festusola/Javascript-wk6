let name = "Festus";
let about = " I am a studuent and I'm very much interested in programming, I should be startting my personal projet soon"

function myfunction() {
    document.getElementById("demo"). innerHTML = name;
    document.getElementById("dm1"). innerHTML = about;

    console.log("Working")
} 

myfunction();

const def = {
    Name : "david",
    age : 13,
    occupation : "I am a stuudent of Olabisi onabanjo University"
}
document.getElementById ("dm2"). innerHTML = def.Name + " " + def.age + " " + def.occupation
