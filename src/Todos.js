import React from "react";

const Todos = (props) => {
  
  function remove(array, element) {
    return array.filter((e) => e !== element);
  }

  const Delete = () => {
    for (var i = 0; i <= props.list.length; i++) {
      if (props.to === props.list[i]) {
        props.set(remove(props.list, props.to));
      }
    }
  };

  return (
    <div class="flex mt-8 items-center justify-center">
      <div class="bg-white rounded-3xl border w-72 shadow-xl p-2 md:w-96 break-words">
        <h1 className="font-semibold text-xl text-gray-700">{props.to}</h1>
      </div>
      <div className="mx-2">
        <button onClick={Delete} className="flex flex-row" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-red-600 h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todos;
