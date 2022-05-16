// app file to build the structure of the program
// An app to add/read/list/delete students (name,ID,Marks)

const yargs = require ('yargs')     // required for command lines
const student = require('./Students')

// ADD
// node app.js add --sName="yara" --sID=17101960 --sMarks=50 50 50 --comment="GM Major"
// node app.js add --sName="yara" --sID=17101960 --comment="GM Major"
yargs.command({
    command:'add',
    describe:'Adding student',
    builder:{
        sName:{
            type: 'string',
            demandOption:true,
            describe:'Student name des. in add command',
        },
        sID:{
            type:'number',
            demandOption:true,
            describe:'student id in add command'
        },
        // sMarks:{
        //     type: 'array',
        //     demandOption:true,
        //     describe:'student mark in add command'
        // },
        // totalMarks:{
        //     type:'number',
        // },
        comment:{
            type:'string',
            describe:'Comment in the add command'
        }
    },
    handler:()=>{
        student.addStudent(yargs.argv.sName,yargs.argv.sID,yargs.argv.comment,yargs.argv.sMarks,yargs.argv.totalMarks)
    }
})

//Delete
yargs.command({
    command:'delete',
    describe:'deleteing student',
    builder:{
        sID:{
            type:'number',
            demandOption:true
        }
    },
    handler:()=>{
        student.deleteStudent(yargs.argv.sID)
    }

})

//Read
// reading with student id and returning name, marks total from students file
yargs.command({
    command:'read',
    describe:'Reading student',
    builder:{
        sID:{
            type:'number',
            demandOption:true
        },
    },
    handler:()=>{
        student.readStudent(yargs.argv.sID)
    }
})

//List
yargs.command({
    command:'list',
    describe:'Listing students',
    handler:()=>{
        student.listStudent()
    }
})


console.log(yargs.argv)