export const CourseCard = ({ course }) => {
  return (
    <div className=" overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="py-2">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-gray-600 text-sm">{course.duration}</p>
      </div>
    </div>
  );
};
