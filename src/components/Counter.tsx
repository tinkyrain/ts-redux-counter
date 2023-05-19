import { useTypedSelector } from '../hooks/useTypedSelector';
import './Counter.css';

const Counter = () => {
    let { count } = useTypedSelector(state => state.count)
    
    
    return(
        <div className='counter'>{count}</div>
    );
}

export default Counter;