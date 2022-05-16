const fs = require('fs')
// const student = loadStudent()

// Add
const addStudent =(sName,sID,comment,sMarks,totalMarks) =>{ //sMarks,totalMarks

    const student = loadStudent()
    totalMarks = 0 

    const duplicateID = student.find((el)=>{
        return el.sID === sID
    })
    // console.log(duplicateID)

    sMarks.forEach((mark)=>{
        return totalMarks = totalMarks + mark
    })

if (!duplicateID){
    student.push({
        sName,
        sID,
        sMarks,
        totalMarks,
        comment
    })
    saveStudent(student)
    console.log('Student info saved successfully')
}
else{
      console.log('Error duplicate student ID')  
}
}

//Delete
const deleteStudent =(sID)=>{

    const student = loadStudent()
    const studToKeep = student.filter((obj)=>{
        return obj.sID !== sID
    })

    if(student.length!==studToKeep.length){
        saveStudent(studToKeep)
        console.log('Student removed')
    }
    else{
        console.log('Not found')
    }
}
    
//Read
const readStudent =(sID) =>{
    const student = loadStudent()
    const stud = student.find((el)=>{
        return el.sID === sID
    })
    if(stud){
        console.log(stud.sName,stud.sID,stud.comment,stud.totalMarks) // mark total still missing ,stud.totalMarks
    }
    else{
        console.log('No exsisting ID/Student')
    }
}

//List
const listStudent = ()=>{
    const student = loadStudent()
    student.forEach((el)=>{
        console.log(el.sName)
    })
}

//Load student
const loadStudent = () =>{
    
    try{
        const data = fs.readFileSync('Students.json').toString()
        return JSON.parse(data) // returning Object
    }
    catch(e){
        return[]
    }
}

//Save student
const saveStudent = (student) =>{

    const saveData = JSON.stringify(student) 
    fs.writeFileSync('Students.json',saveData)

}

module.exports={
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
}

