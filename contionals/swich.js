function findSchoolYear(age) {
  switch (age) {
    case 5:
      return "Year 1 (Kindergarten)";
    case 6:
      return "Year 2 (Grade 1)";
    case 7:
      return "Year 3 (Grade 2)";
    case 8:
      return "Year 4 (Grade 3)";
    case 9:
      return "Year 5 (Grade 4)";
    case 10:
      return "Year 6 (Grade 5)";
    case 11:
      return "Year 7 (Grade 6)";
    case 12:
      return "Year 8 (Grade 7)";
    case 13:
      return "Year 9 (Grade 8)";
    case 14:
      return "Year 10 (Grade 9 - Freshman High School)";
    case 15:
      return "Year 11 (Grade 10 - Sophomore)";
    case 16:
      return "Year 12 (Grade 11 - Junior)";
    case 17:
      return "Year 13 (Grade 12 - Senior)";
    default:
      if (age >= 18 && age <= 22) {
        return "🎓 University Student";
      } else if (age > 22) {
        return "👨‍🎓 Graduate Studies or Working";
      } else {
        return "Too young for school!";
      }
  }
}

// 🔹 Examples
let age = 12;
console.log(findSchoolYear(age));   // Year 1 (Kindergarten)
let age1 = 7;
console.log(findSchoolYear(age1));   // Year 3 (Grade 2)
let age2 = 14;
console.log(findSchoolYear(age2));  // Year 10 (High School Freshman)

console.log(findSchoolYear(19));  // University Student

