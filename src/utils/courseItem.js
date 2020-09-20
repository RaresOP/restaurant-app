export default function getCourseItems(courseItems, courseType = -1) {
  if (courseType === -1) return courseItems;
  let items = courseItems.filter(res => {
    return res.courseType.includes(courseType);
  });
  return items;
}
