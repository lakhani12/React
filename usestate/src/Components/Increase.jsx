import { useState } from "react";

const Increase = () => {
  const [Number, setNumber] = useState(0);
  // Number (first variable ) ==> Redy Only Value (you can't this variabe value)
  // steNumber (second variable) ==> write only value (if you want to change variable's value use setNumber)

  function IncreaseNum() {
    setNumber(Number + 1);
  }

  function DecreaseNum() {
    if (Number > 0) return setNumber(Number - 1);
  }
  function FiveIncreaseNum() {
    setNumber(Number + 5);
  }

  function FiveDecreaseNum() {
    if (Number >= 5) return setNumber(Number - 5);
  }
  function Reset() {
    setNumber(0);
  }
  return (
    <>
      <section>
        <h1 className="text-center text-5xl font-extrabold mt-10">
          Usestate: Change data(variable define karva mate and value change
          karva mate )
        </h1>
        <p className="text-center mt-5 font-bold">
          Increase And Decrease Number
        </p>
        <div className="w-72 h-72 text-6xl px-4 py-2 bg-[#222] rounded-2xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>
        <div className="flex items-center justify-center gap-10 mt-10">
          <button
            className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-100 active:bg-blue-500"
            onClick={IncreaseNum}
          >
            Increase
          </button>
          <button
            className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-100 active:bg-blue-500"
            onClick={DecreaseNum}
          >
            Decrease
          </button>

          <button
            className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-100 active:bg-blue-500"
            onClick={FiveIncreaseNum}
          >
            5+
          </button>
          <button
            className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-100 active:bg-blue-500"
            onClick={FiveDecreaseNum}
          >
            5-
          </button>
          <button
            className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-100 active:bg-blue-500"
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
};
export default Increase;
