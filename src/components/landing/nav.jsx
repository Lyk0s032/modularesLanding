import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavPanel(){
    const navigation = useNavigate();

    window.addEventListener("scroll", function(){
        let nav = document.querySelector("#nav");
        nav.classList.toggle("navActive", window.scrollY>0);
    })
    const move = (y) => {
        document.querySelector('#'+y).scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <div className='navCosta' id="nav">
            <div className='containerNav'>
                <div className='icon' >
                    <h3 onClick={() => navigation('/')}>COSTA</h3>
                </div> 
                <div className='navSmallOptions'>
                    <nav>
                        <ul>
                            <li onClick={() => move('one')}>
                                <span>
                                    Inicio
                                </span>
                            </li>
                            <li onClick={() => move('two')}>
                                <span>Para ti</span>
                            </li>
                            <li onClick={() => move('three')}>
                                <span>
                                    Experiencia
                                </span>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className='action'>
                    <button onClick={() => {
                        window.open('https://modularescosta.co')
                    }}>
                        <span>Visitar tienda completa</span>
                    </button>
                </div>
            </div>
        </div>
    )
}