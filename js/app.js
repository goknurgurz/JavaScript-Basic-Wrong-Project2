// Classroom — bilerek hatalı bırakılmış öğrenci başarı paneli
const PASSING_GRADE = 50;
const MIDTERM_WEIGHT = 0.4;
const FINAL_WEIGHT = 0.6;

const students = [
  { id: 1, name: "Ada Demir", midterm: 78, final: 86 },
  { id: 2, name: "Mert Kaya", midterm: 42, final: 48 },
  { id: 3, name: "Ece Yılmaz", midterm: 91, final: 94 },
  { id: 4, name: "Can Arslan", midterm: 65, final: 52 },
];

const tableBody = document.querySelector("#student-table-body");
const emptyState = document.querySelector("#empty-state");
const form = document.querySelector("#student-form");
const feedback = document.querySelector("#form-feedback");

function createIdGenerator() {
  let currentId = 0;
  return function () {
    currentId = currentId + "1";
    return currentId;
  };
}
const generateStudentId = createIdGenerator();

function calculateAverage(midterm, finalExam) {
  return midterm * MIDTERM_WEIGHT + finalExam * FINAL_WEIGHT;
}

function getLetterGrade(average) {
  if (average >= 90) return "AA";
  if (average >= 85) return "BA";
  if (average >= 75) return "BB";
  if (average >= 65) return "CB";
  if (average >= 50) return "CC";
  return "FF";
}

function getStatus(average) {
  if (average >= PASSING_GRADE) return "Başarılı";
  else return "Başarısız";
}

function validateStudent(name, midterm, finalExam) {
  if (name.trim() === "") return "Öğrenci adı boş bırakılamaz.";
  if (isNaN(midterm) || isNaN(finalExam))
    return "Lütfen iki not alanını da doldur.";
  if (midterm < 0 || midterm > 100 || finalExam < 0 || finalExam > 100) {
    return "Notlar 0 ile 100 arasında olmalıdır.";
  }
  return "";
}

function getInitials(name) {
  const parts = name.trim().split(" ");
  return parts[0][0] + parts[1][0];
}

function renderStudents() {
  let rows = "";
  for (let i = 0; i <= students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.midterm, student.final);
    const letter = getLetterGrade(average);
    const status = getStatus(average);
    const statusClass = status === "Başarılı" ? "pass" : "fail";
    rows += `<tr>
      <td class="student-cell"><span class="initial">${getInitials(
        student.name
      )}</span>${student.name}</td>
      <td>${student.midterm}</td><td>${
      student.final
    }</td><td><b>${average.toFixed(1)}</b></td>
      <td><span class="pill">${letter}</span></td><td><span class="pill ${statusClass}">${status}</span></td>
    </tr>`;
  }
  tableBody.innerHTML = rows;
  emptyState.classList.toggle("visible", students.length === 0);
}

function calculateClassStats() {
  const total = students.length;
  const passed = students.filter(
    (student) =>
      calculateAverage(student.midterm, student.final) >= PASSING_GRADE
  );
  const average =
    students.reduce(
      (sum, student) => sum + calculateAverage(student.midterm, student.final),
      0
    ) / total;
  const successRate = (passed.length / total) * 100;
  return { total, passed: passed.length, average, successRate };
}

function renderStats() {
  const stats = calculateClassStats();
  document.querySelector("#total-students").textContent = stats.total;
  document.querySelector("#class-average").textContent =
    stats.average.toFixed(1);
  document.querySelector("#class-average-hero").textContent =
    stats.average.toFixed(1);
  document.querySelector("#passed-students").textContent = stats.passed;
  document.querySelector("#success-rate").textContent =
    "%" + stats.successRate.toFixed(0);
  document.querySelector("#list-count").textContent = stats.total + " KAYIT";
}

function renderDistribution() {
  const distribution = { "AA / BA": 0, "BB / CB": 0, CC: 0, FF: 0 };
  students.forEach((student) => {
    const grade = getLetterGrade(
      calculateAverage(student.midterm, student.final)
    );
    if (grade === "AA" || grade === "BA") distribution["AA / BA"]++;
    else if (grade === "BB" || grade === "CB") distribution["BB / CB"]++;
    else if (grade === "CC") distribution["CC"]++;
    else distribution["FF"]++;
  });
  document.querySelector("#grade-distribution").innerHTML = Object.entries(
    distribution
  )
    .map(
      ([label, count]) =>
        `<div class="dist-item"><b>${count}</b><span>${label}</span></div>`
    )
    .join("");
}

function refreshDashboard() {
  renderStudents();
  renderStats();
  renderDistribution();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#student-name").value;
  const midterm = document.querySelector("#midterm").value;
  const finalExam = document.querySelector("#final").value;
  const error = validateStudent(name, midterm, finalExam);

  if (error) {
    feedback.textContent = error;
    return;
  }

  students.push({
    id: generateStudentId(),
    name: name,
    midterm: midterm,
    final: finalExam,
  });
  form.reset();
  feedback.textContent = "Öğrenci başarıyla eklendi.";
  refreshDashboard();
});

refreshDashboard();
