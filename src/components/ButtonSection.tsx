import { useDispatch } from "react-redux";
import { PLUS_COUNT, MINUS_COUNT, ZERO_COUNT } from "../store/actions/counterActions";
import Button from "./Button";
import './ButtonSection.css'

const ButtonSection = () => {
    return(
        <section className='ButtonSection'>
            <Button 
                text={'Plus'} 
                bg={'#53d848'} 
                borderColor={'#37a42e'}
                actionBtn={PLUS_COUNT}
            />

            <Button 
                text={'Zero'}
                actionBtn={ZERO_COUNT}
            />

            <Button 
                text={'Minus'} 
                bg={'#e84444'} 
                borderColor={'#b91919'}
                actionBtn={MINUS_COUNT}
            />
        </section>
    );
}

export default ButtonSection;