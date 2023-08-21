import { useState } from 'react';
import '../styles/Footer.css';

export default function Footer() {

    const {inputValue, setInputvalue} = useState('');
    
    function handleInput(e) {
        setInputvalue(e.target.value)
    }

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
        }
    }

    
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                placeholder='Entrez votre email'
                onChange={handleInput}
                onBlur={handleBlur}
             />
        </footer>
    )
}

