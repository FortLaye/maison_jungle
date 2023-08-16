import { useState } from 'react';
import '../styles/QuestionForm.css';

export default function QuestionForm() {

    const [inputValue, setInputValue] = useState("Posez votre question ici");

    function checkInputValue(value){
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea 
                value={inputValue}
                onChange={(e) => checkInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)} >Alertez moi 🔺</button>
        </div>
    )
}

