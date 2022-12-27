
// // 1. Сделали action creator
// const deposit = amount => {
//     // возвращаем action
//   return {
//     type: 'deposit',
//     payload: { amount },
//   };
// };

// deposit(100);


// // 2. Cделали reducer чтобы обрабатывать асtion
// function fundsReducer(state = 0, action) {
//   switch (action.type) {
//     case 'deposit':
//       return state + action.payload.amount;

//       default:
//       return state;
//   }
// }

// 3. Cделали store что-бы все зарегистрировать и инициализировать
// const store = createStore(fundsReducer);

// 4. Привязали к компоненту и отправляем action
// {/* <button onClick={REDUX.dispatch(deposit(100))}></button> */}


