import './Button.css'
import { ZERO_COUNT } from '../store/actions/counterActions';
import { useDispatch } from 'react-redux';
import { ButtonProps } from '../types/type';

const Button = ({ text = 'Button', color='white', bg='#6161fc', borderColor='#2929fa',actionBtn=ZERO_COUNT}:ButtonProps) => {
    const dispatch = useDispatch();
    return(
        <div>
            <button 
                style={{
                    color: color, 
                    backgroundColor: bg, 
                    border: `2px solid ${borderColor}`
                }}
                onClick={() => dispatch({type: actionBtn})}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;