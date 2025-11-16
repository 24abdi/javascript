function findSchoolYear(age) {
  if (age === 5) {
    return "Year 1 (Kindergarten)";
  } else if (age === 6) {
    return "Year 2 (Grade 1)";
  } else if (age === 7) {
    return "Year 3 (Grade 2)";
  } else if (age === 8) {
    return "Year 4 (Grade 3)";
  } else if (age === 9) {
    return "Year 5 (Grade 4)";
  } else if (age === 10) {
    return "Year 6 (Grade 5)";
  } else if (age === 11) {
    return "Year 7 (Grade 6)";
  } else if (age === 12) {
    return "Year 8 (Grade 7)";
  } else if (age === 13) {
    return "Year 9 (Grade 8)";
  } else if (age === 14) {
    return "Year 10 (Grade 9 - Freshman High School)";
  } else if (age === 15) {
    return "Year 11 (Grade 10 - Sophomore)";
  } else if (age === 16) {
    return "Year 12 (Grade 11 - Junior)";
  } else if (age === 17) {
    return "Year 13 (Grade 12 - Senior)";
  } else if (age >= 18 && age <= 22) {
    return "🎓 University Student";
  } else if (age > 22) {
    return "👨‍🎓 Graduate Studies or Working";
  } else {
    return "Too young for school!";
  }
}

// Function triggered by button
function checkYear() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = findSchoolYear(age);
  document.getElementById("result").textContent = result;
}
