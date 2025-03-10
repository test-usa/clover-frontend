import { useDispatch, useSelector } from "react-redux";
import CommonWrapper from "../common/CommonWrapper";
import type { RootState, AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  reset,
  setCount,
} from "@/store/Slices/counterSlice/counterSlice";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <CommonWrapper>
      <div className="h-screen bg-website-color-lightGreen">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-2xl font-bold mb-4">Home Page</h1>
          <h2 className="text-xl font-bold">Counter: {count}</h2>
          <div className="mt-4 space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(setCount(10))}
            >
              Set to 10
            </button>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Home;
