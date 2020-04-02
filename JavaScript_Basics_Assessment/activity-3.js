const studentNames = ['Billy' , 'Chris' , 'Amy'];

for (let i = studentNames.length; i < 6; i++) {
    let newName = prompt ('What is the next student name?');
    studentNames.push (newName);
}

for (let i = 0; i < studentNames.length; i++) {
    console.log (studentNames[i]);
}