if (
  localStorage.getItem("isLoggedIn") !== "true" ||
  localStorage.getItem("role") !== "admin"
) {
  window.location.href = "Home.html";
}
function logout() {
  localStorage.clear();
  window.location.href = "Login.html";
}

let projects = JSON.parse(localStorage.getItem("projects")) || [];
let editIndex = null;

const addProjectBtn = document.querySelector("#addProjectBtn");
const projectNameInput = document.querySelector("#ProjectName");
const clientNameInput = document.querySelector("#ClientName");
const supervisorNameInput = document.querySelector("#SupervisorName");
const startDateInput = document.querySelector("#Date");
const categoryInput = document.querySelector("#Category");
const statusInput = document.querySelector("#Status");
const addBtn = document.querySelector("#addProjectBtn");
renderProjects();
addBtn.addEventListener("click", function () {
  if (
    projectNameInput.value === "" ||
    clientNameInput.value === "" ||
    supervisorNameInput.value === "" ||
    startDateInput.value === "" ||
    categoryInput.value === "" ||
    statusInput.value === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }
  const project = {
    name: projectNameInput.value,
    client: clientNameInput.value,
    supervisor: supervisorNameInput.value,
    startDate: startDateInput.value,
    category: categoryInput.value,
    status: statusInput.value,
  };

  if (editIndex === null) {
    projects.push(project);
  } else {
    projects[editIndex] = project;
    editIndex = null;
  }
  SaveProjects();
  renderProjects();
  projectNameInput.value = "";
  clientNameInput.value = "";
  supervisorNameInput.value = "";
  startDateInput.value = "";
  categoryInput.value = "";
  statusInput.value = "";
});

function renderProjects() {
  const table = document.querySelector("#projectTable");
  table.innerHTML = "";

  projects.forEach((project, index) => {
    let statusBadge = "";

    if (project.status === "Completed") {
      statusBadge = `<span class="badge bg-success  text-dark">${project.status}</span>`;
    } else if (project.status === "In Progress") {
      statusBadge = `<span class="badge bg-warning text-dark">${project.status}</span>`;
    } else if (project.status === "On Hold") {
      statusBadge = `<span class="badge bg-secondary text-dark">${project.status}</span>`;
    } else {
      statusBadge = `<span class="badge bg-danger  text-dark">${project.status}</span>`;
    }

    table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>${project.client}</td>
                <td>${project.supervisor}</td>
                <td>${project.startDate}</td>
                <td>${project.category}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteProject(${index})">Delete</button>
                    <button class="btn btn-warning btn-sm" onclick="editProject(${index})">Edit</button>
                </td>
            </tr>
        `;
  });
  updateDashboard();
}
function SaveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
function deleteProject(index) {
  if (confirm("Are you sure you want to delete this project?")) {
    projects.splice(index, 1);
  }
  SaveProjects();
  renderProjects();
}
function editProject(index) {
  const project = projects[index];

  projectNameInput.value = project.name;
  clientNameInput.value = project.client;
  supervisorNameInput.value = project.supervisor;
  startDateInput.value = project.startDate;
  categoryInput.value = project.category;
  statusInput.value = project.status;

  editIndex = index;
}

function updateDashboard() {

    document.getElementById("totalProjects").textContent = projects.length;

    const completed = projects.filter(project => project.status === "Completed").length;

    const progress = projects.filter(project => project.status === "In Progress").length;

    const hold = projects.filter(project => project.status === "On Hold").length;

    document.getElementById("completedProjects").textContent = completed;

    document.getElementById("progressProjects").textContent = progress;

    document.getElementById("holdProjects").textContent = hold;
}