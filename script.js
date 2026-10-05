const students = [
    {
        name: "Sonal Ahmed",
        marks: 38,
        class: "3rd",
        address: "Delhi"
    },
    {
        name: "Riya Sharma",
        marks: 85,
        class: "10th",
        address: "ABC Colony, Delhi"
    },
    {
        name: "Rohan Patel",
        marks: 70,
        class: "12th",
        address: "456, XYZ Street, Mumbai"
    },
    {
        name: "Priya Singh",
        marks: 95,
        class: "8th",
        address: "78B, PG Nagar, Bangalore"
    },
    {
        name: "Amit Kumar",
        marks: 60,
        class: "9th",
        address: "101, Park Road, Kolkata"
    },
    {
        name: "Neha Verma",
        marks: 80,
        class: "8th",
        address: "222, DEF Avenue, Chennai"
    },
    {
        name: "Manoj Kumar",
        marks: 75,
        class: "10th",
        address: "333, GH Lane, Hyderabad"
    },
    {
        name: "Pooja Mishra",
        marks: 88,
        class: "12th",
        address: "444, SU Colony, Pune"
    },
    {
        name: "Rajesh Singhaniya",
        marks: 90,
        class: "9th",
        address: "555, VK Street, Jaipur"
    }
];

const studentContainer = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");

// Display students using map()
function displayStudents(studentList) {

    studentContainer.innerHTML = studentList.map(student => `
        <div class="student-card">
            <p><strong>Student Name:</strong> ${student.name}</p>
            <p><strong>Marks:</strong> ${student.marks}%</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");
}

// Filter students by name
function searchStudents() {

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().startsWith(searchText)
    );

    displayStudents(filteredStudents);
}

// Real-time search
searchInput.addEventListener("input", searchStudents);

// Display all students when page loads
displayStudents(students);