import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counter';

function App() {
  // to read state
  const count = useSelector((state) => state.counter);
  // to dispatch action
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
    </>
  );
}

export default App;
