#Qus-1:  What is the use of enums in TypeScript? Provide an example of a numeric and string enum.<br /><br />
Ans: In typescript enum are immutable once it decleared.  it is a special class that represent the value that can not change later.<br /><br />
example of a numeric - [ By default, enum initialized with 0 and increase 1 for each value ]<br />

enum statusCode  {<br />
    createStatus = 201,<br />
    successStatus = 200,<br />
    ErrorStatus =  400,<br />
}<br />
console.log("status-",statusCode.successStatus)<br /><br />

example of a string - <br />
enum Status{<br />
    createStatus = "createStatus",<br />
    successStatus = "successStatus",<br />
    ErrorStatus =  "ErrorStatus",<br />
}
console.log("status-",Status.successStatus)<br /><br /><br />

#Qus-2: Provide an example of using union and intersection types in TypeScript.<br /><br />
Ans: <br /><br />
------> Example using union types<br />
type User = {<br />
  name: string;<br />
  roll: number;<br />
  bloodGrp: "A+" | "B+" | "O+";<br />
};<br /><br />
const user: User = {<br />
  name: "nafis",<br />
  roll: 5,<br />
  bloodGrp: "A+",<br />
};<br />
console.log("User Info:", user);<br />

------> Example using intersection types<br /><br />
type Frontend = {
        skills: string[];
        designation1: "FrontendDeveloper" | "juniorDeveloper";
    }
    type Backend = {
        skills: string[];
        designation2: "BackendDeveloper" | "midlevelDeveloper";
    }

    type FullStack = Frontend & Backend;

    const fullstack : FullStack  = {
        skills: ["HTML", "CSS", "JavaScript"],
        designation1:  "juniorDeveloper",
        designation2: "BackendDeveloper",
    }
    console.log(fullstack)
