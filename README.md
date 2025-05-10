#Qus-1:  What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Ans: In typescript enum are immutable once it decleared.  it is a special class that represent the value that can not change later.
example of a numeric - [ By default, enum initialized with 0 and increase 1 for each value ]

enum statusCode  {
    createStatus = 201,
    successStatus = 200,
    ErrorStatus =  400,
}
console.log("status-",statusCode.successStatus)

example of a string - enum Status{
    createStatus = "createStatus",
    successStatus = "successStatus",
    ErrorStatus =  "ErrorStatus",
}
console.log("status-",Status.successStatus)

#Qus-2: Provide an example of using union and intersection types in TypeScript.
Ans: 
------> Example using union types
type User = {
  name: string;
  roll: number;
  bloodGrp: "A+" | "B+" | "O+";
};
const user: User = {
  name: "nafis",
  roll: 5,
  bloodGrp: "A+",
};
console.log("User Info:", user);

------> Example using intersection types
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
