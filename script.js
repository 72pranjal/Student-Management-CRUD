let students = [];
let countID = 1
let editedIndex = -1
function addStudents() {
    let stName = document.getElementById("name").value;
    let stEmail = document.getElementById("email").value;
    let stGrade = document.getElementById("gpa").value;
    let stAge = document.getElementById("age").value;
    let stDegree = document.getElementById("degree").value;
    let stObj = {
        ID: countID++,
        name: stName,
        age: stAge,
        grade: stGrade,
        degree: stDegree,
        email: stEmail,
    };
    students.push(stObj)
    showStudents()
    clearForm()
}
function showStudents() {
    let table = document.getElementById('studentsTable')
    table.innerHTML = ''
    students.forEach((st, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
      <td>${st.ID}</td><td>${st.name}</td><td>${st.email}</td>
      <td>${st.age}</td><td>${st.grade}</td><td>${st.degree}
      <img class="delete" onclick="removeSt(${st.ID})" src="delete.png" width="20" height="20">
      <img class="edit" onclick="editSt(${st.ID})" src="edit-icon.png" width="20" height="20">
      `
        table.append(row)
    })

}
function removeSt(id) {
    let index = students.findIndex(st => st.ID === id)
    students.splice(index, 1)
    showStudents()
}
function clearForm() {
    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    document.getElementById("gpa").value = ''
    document.getElementById("age").value = ''
    document.getElementById("degree").value = ''
}
function editSt(id) {
    let addBtn = document.querySelector('.add-st')
    let editBtn = document.querySelector('.edit-st')

    let index = students.findIndex(st => st.ID === id)
    editedIndex = index
    let { name, email, age, grade, degree } = students[index]
    document.getElementById("name").value = name
    document.getElementById("email").value = email
    document.getElementById("gpa").value = grade
    document.getElementById("age").value = age
    document.getElementById("degree").value = degree

    addBtn.classList.remove('active')
    editBtn.classList.add('active')
}
function editStudents() {
    let addBtn = document.querySelector('.add-st')
    let editBtn = document.querySelector('.edit-st')

    let stName = document.getElementById("name").value;
    let stEmail = document.getElementById("email").value;
    let stGrade = document.getElementById("gpa").value;
    let stAge = document.getElementById("age").value;
    let stDegree = document.getElementById("degree").value;
    let stObj = {
        ID: editedIndex + 1,
        name: stName,
        age: stAge,
        grade: stGrade,
        degree: stDegree,
        email: stEmail,
    };
    students[editedIndex] = stObj;
    showStudents()
    clearForm()
    addBtn.classList.add('active')
    editBtn.classList.remove('active')
}
function updateTable() {
    let query = document.getElementById("searchbox").value.toLowerCase()
    const filteredStudents = students.filter(st => st.name.toLowerCase().includes(query) ||
        st.email.toLowerCase().includes(query) || st.degree.toLowerCase().includes(query))

    let table = document.getElementById('studentsTable')
    table.innerHTML = ''
    filteredStudents.forEach((st, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
      <td>${st.ID}</td><td>${st.name}</td><td>${st.email}</td>
      <td>${st.age}</td><td>${st.grade}</td><td>${st.degree}
      <img class="delete" onclick="removeSt(${st.ID})" src="delete.png" width="20" height="20">
      <img class="edit" onclick="editSt(${st.ID})" src="edit-icon.png" width="20" height="20">
      `
        table.append(row)
    })
}