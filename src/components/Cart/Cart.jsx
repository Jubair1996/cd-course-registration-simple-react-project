/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({ selectCurse,totalPrice,creditHours,remainingHours }) => {
//   console.log(selectCurse);
  return (
    <div>
      <h1 className="text-xl font-semibold text-blue-400 ps-1">
        Credit Hour Remaining: {remainingHours} hr
      </h1>
      <hr className="w-[80%] border my-2 text-left ms-2" />
      <h1 className="text-2xl font-semibold text-black mt-4 ps-2">
        Course Name
      </h1>
     
        {selectCurse.map((course,index) => (
          <ol>
            <li>{index + 1} . {course.title}</li>
          </ol>
        ))}
      
      <hr className="w-[80%] border my-2 text-left mt-8 ms-2" />
      <h1 className="text-xl font-medium text-black mt-4 ps-1">
        Total Credit Hour: {creditHours} hr
      </h1>
      <hr className="w-[80%] border my-2 text-left mt-4 ms-2" />
      <h1 className="text-xl font-medium text-black mt-4 ps-2">
        Total Price : {totalPrice} USD
      </h1>
    </div>
  );
};

export default Cart;