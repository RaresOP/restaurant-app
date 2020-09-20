const courses = ["Starters", "Soup", "Fish", "Salad", "Main Course", "Dessert"];

function getCourseName(number) {
  return courses[number];
}

function getAllCourseNames() {
  return courses;
}

function getIndexOf(courseName) {
  return courses.indexOf(courseName);
}
export { getAllCourseNames, getCourseName, getIndexOf };
