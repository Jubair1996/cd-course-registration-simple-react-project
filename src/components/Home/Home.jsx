/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectCurse, setSelectCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [creditHours, setCreditHours] = useState(0);
  const [remainingHours, setRemainingHours] = useState(20);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  // console.log(courses);
  const handleSelectCourse = (course) => {
    const isExist = selectCurse.find((item) => item.id === course.id);
    let count = course.price;
    let creditHours = course.time;
    if (isExist) {
      return Swal.fire({
        text: "Opps id is booked can't add again",
        icon: "error",
        confirmButtonText: "Close",
      });
    } else {
      selectCurse.forEach((item) => {
        count = count + item.price;
        creditHours = creditHours + item.time;
      });
      const remainingHours = 20 - creditHours;
      if (remainingHours < 0) {
        return Swal.fire({
          text: "Opps Credit is Over",
          icon: "error",
          confirmButtonText: "Close",
        });
      } else {
        setRemainingHours(remainingHours);
        setCreditHours(creditHours);
        setTotalPrice(count);
        const newSelectCourse = [...selectCurse, course];
        setSelectCourse(newSelectCourse);
      }
    }
  };
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl text-black text-center my-6 font-semibold">Course Registration</h1>
      <div className="flex flex-col lg:flex-row px-4 gap-4">
        <div className="w-[100%] md:w-[100%] lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={course.cover}
                  alt="Courses"
                  className="w-full rounded-sm"
                />
              </figure>
              <div className="px-4 py-2 space-y-4">
                <h2 className="text-base font-bold">{course.title}</h2>
                <p>{course.details}</p>
                <div className="flex justify-between items-center">
                  <h4>$ Price: {course.price}</h4>
                  <p>Credit:{course.time} hr</p>
                </div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="btn btn-primary w-full"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] shadow-lg md:w-[100%] lg:w-[25%] bg-slate-50 px-3 py-2 rounded h-2/3">
          <Cart
            selectCurse={selectCurse}
            totalPrice={totalPrice}
            creditHours={creditHours}
            remainingHours={remainingHours}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
