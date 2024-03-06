// let state: any[] = [];
// let index = 0;

// export function useState<T>(initialState?: T | undefined) {
//   // Freeze the index, to make the 'setters'(setCount/setName) work
//   const localIndex = index;
//   if (typeof state[localIndex] === 'undefined')
//     state[localIndex] = initialState;

//   index++;
//   ReactDOM.render();
//   return [state[localIndex], (newState: T) => (state[localIndex] = newState)];
// }
