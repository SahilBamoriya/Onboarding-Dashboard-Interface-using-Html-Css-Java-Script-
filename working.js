
  let currentStep = 0;
  const steps = document.querySelectorAll(".step");
  const backbtn = document.getElementById("backbtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressBar = document.getElementById("progressBar");

  function showStep(step) {
   steps.forEach((el, index) => {el.classList.toggle("active", index === step);});

   backbtn.disabled = step === 0;
   nextBtn.textContent = step === steps.length - 1 ? "Submit" : "Next";

   const progressPercent = ((step + 1) / steps.length) * 100;
   progressBar.style.width = progressPercent + "%";
  }

function validateForm() {
  const inputs = steps[currentStep].querySelectorAll("input,select");
  for (let input of inputs) {
    if (!input.checkValidity()) {
    input.reportValidity();
    return false;}}
    return true;}

function nextPrev(n) {
  if (n === 1 && !validateForm()) return;

    currentStep += n;

  if (currentStep >= steps.length) {
      submitForm();
      return;}

  showStep(currentStep);}

function submitForm() {
  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("emailid").value,
    gender: document.getElementById("gender").value,
    company: document.getElementById("businessname").value,
    industry: document.getElementById("industrytype").value,
    size: document.getElementById("companysize").value,
    theme: document.getElementById("theme").value,
    layout: document.getElementById("dashboardlayout").value,};

    showDashboard(userData);
  }

function showDashboard(data) {
  document.querySelector(".container").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.querySelector(".user-info").innerHTML = `
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Gender:</strong> ${data.gender}</p>
  <p><strong>Company:</strong> ${data.company}</p>
  <p><strong>Industry:</strong> ${data.industry}</p>
  <p><strong>Company Size:</strong> ${data.size}</p>
  <p><strong>Theme:</strong> ${data.theme}</p>
  <p><strong>Dashboard Layout:</strong> ${data.layout}</p>
    `;}

