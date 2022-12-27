// =====Layout для Increment/Decrement===================

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../redux/myValue/slice";

// export const Layout = () => {
//     const dispatch = useDispatch()
//     const value = useSelector(state => state.myValue)
//     return (
//         <div>
//             <button onClick={() => dispatch(decrement(100))}>Decrement</button>
//             {value}
//             <button onClick={() => dispatch(increment(100))}>Increment</button>
//         </div>
//     )
// }

// =====Layout для Login===================

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
