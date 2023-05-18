import Button from "./Button";
import './ButtonSection.css'

const ButtonSection = () => {
    return(
        <section className='ButtonSection'>
            <Button 
                text={'Plus'} 
                bg={'#53d848'} 
                borderColor={'#37a42e'}
            />

            <Button 
                text={'Zero'}
            />

            <Button 
                text={'Plus'} 
                bg={'#e84444'} 
                borderColor={'#b91919'}
            />
        </section>
    );
}

export default ButtonSection;