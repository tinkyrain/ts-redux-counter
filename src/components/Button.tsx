import './Button.css'

export interface ButtonProps{
    text?:string,
    color?:string,
    bg?:string,
    borderColor?:string,
} 

const Button = ({ text = 'Button', color='white', bg='#6161fc', borderColor='#2929fa' }:ButtonProps) => {
    return(
        <div>
            <button 
                style={{
                    color: color, 
                    backgroundColor: bg, 
                    border: `2px solid ${borderColor}`
                }}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;