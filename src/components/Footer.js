import { useState } from 'react';
import '../styles/Footer.css';

export default function Footer() {

    const {inputValue, setInputvalue} = useState('');
    
    
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                type="text"
                onChange= {(e) => setInputvalue(e.target.value)}
             />
             <button >Voir la log</button>
        </footer>
    )
}

