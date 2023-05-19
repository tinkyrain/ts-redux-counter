import './Counter.css';
import { useSelector } from 'react-redux/es/exports';

const Counter = () => {
    let count = useSelector(state => state);
    console.log(count);
    
    return(
        <div className='counter'>0</div>
    );
}

export default Counter;