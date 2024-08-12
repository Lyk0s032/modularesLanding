import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Buy(){
    const [howMany, setHowMany] = useState(1);
    const [typeInformation, setType] = useState('description');

    const navigation = useNavigate();
    return (
        <div className="buy">
            <div className="containerBuy">
                <div className='topAlert'>
                    <div className='containerAlert'>
                        <h3>¡Tenlo en tus manos en menos de 24 horas!</h3>
                    </div>
                </div>
                <div className='divideBuy'>
                    <div className="wallpaper">
                        <img src="https://th.bing.com/th/id/R.c47378a69b44f2853ec6fbd9bb3ea46e?rik=5HZklpx48H9ZNA&riu=http%3a%2f%2fwww.officedepot.com.mx%2fmedias%2f85459.png-1200ftw%3fcontext%3dbWFzdGVyfHJvb3R8NzcwNDc3fGltYWdlL3BuZ3xoM2IvaDdlLzk3MjM0ODExNjE3NTgucG5nfDZlNjNjMjcyNjhmYTU2YTY2YWQ2M2Y5NzU5ODZjNGFlOTFiMzc1ODZmYmZhNzYzMmUxZjNiYzEwODM2MWM4NDk&ehk=0r7TUVNkvTNuheaifaPSFQpPnnyIazxq1hNLqkM3xlI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <div className='boxBuy'>
                        <div className='boxBuyContainer'>
                            <div className='nameAndPrice'>
                                <h1>Silla Shanghai 3-724</h1>
                                <h3>432.000 <span>COP</span></h3>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam dolores perspiciatis possimus perferendis quod modi aperiam minima, aliquid dicta, ut nostrum consectetur, debitis unde tenetur iusto itaque quia cumque.</span>
                            </div>

                            <div className="boxTopOptions">
                                <div className='containerTopOptions'>
                                    <div className='howMany'>
                                        <button className='action' onClick={() => {
                                            howMany > 1 ? setHowMany(howMany - 1) : null
                                        }}>
                                            <FaMinus className="icon" />
                                        </button>
                                        <button className='text'>
                                            <span>{howMany}</span>
                                        </button>
                                        <button className='action' onClick={() => {
                                            setHowMany(howMany + 1)
                                        }}>
                                            <FaPlus className="icon" />
                                        </button>
                                    </div>
                                    <div className='buyButton'>
                                        <button>
                                            <span>Comprar ahora</span>
                                        </button>
                                    </div>
                                </div>

                                
                            </div>
                            <div className='smallInfo'>

                                <button>
                                    <span>Ver todos los metodos de pago</span>
                                </button>

                                <h3>50 unidades disponibles actualmente</h3>
                            </div>

                            <div className='backToPage'>
                                <button onClick={() => navigation('/e/')}>
                                    <span>Ver presentación del producto</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fichaTecnica">
                    <div className='containerFichaTecnica'>
                        <div className="smallNav">
                            <nav>
                                <ul>
                                    <li className={typeInformation == 'description' ? 'Active' : null} onClick={() => setType('description')}>
                                        <span>Caracteristicas</span>
                                    </li>
                                    <li className={typeInformation == 'opinion' ? 'Active' : null} onClick={() => setType('opinion')}>
                                        <span>Opiniones</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className='informationType'>
                            <div className='containerInformation'>

                                {
                                    typeInformation == 'description' ? 
                                        <div className='caracteristicas'>
                                            <div className='containerCaracteristicas'>
                                                <div className='box'>
                                                    <h3>Descripcion</h3>
                                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus aperiam velit ea, debitis illum doloremque, provident reprehenderit non, praesentium consequatur perspiciatis totam dolorum! Eum consequuntur aliquid ab voluptatem quas?</span>
                                                </div>
                                                <div className='box'>
                                                    <h3>Especifico</h3>
                                                    <nav>
                                                        <ul>
                                                            <li>
                                                                <span>Peso máximo soportado: 100Kg</span>
                                                            </li>
                                                            <li>
                                                                <span>Giratoria</span>
                                                            </li>
                                                            <li>
                                                                <span>Apoyo de cabeza</span>
                                                            </li>
                                                            <li>
                                                                <span>Ruedas</span>
                                                            </li>
                                                            <li>
                                                                <span>Rango de inclinacion del respaldo de 90°x145°</span>
                                                            </li>
                                                            <li>
                                                                <span>Confortable y duradera</span>
                                                            </li>
                                                            <li>
                                                                <span>Altura miníma de 103 CM</span>
                                                            </li>
                                                            <li>
                                                                <span>Altura Máxima de 115 CM</span>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className='box'>
                                                    <h3>Garantia hasta por 3 meses</h3>
                                                </div>
                                                <div className='box'>
                                                    <h3>Devolución disponible</h3>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <div className='opinion'>
                                            <div className='containerOpinion'>
                                                <div className='boxOpinion'>
                                                    <div className='title'>
                                                        <h3>Kevin Andrés Bolaños Orrego</h3>
                                                        <span>
                                                            Soy fullstack Developer, y mi trabajo demanda estar sentado muchas horas al día. Desde que compre esta silla 
                                                            mi experiencia y productividad ha sido totalmente diferente. ¡Lo recomiendo!
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='boxOpinion'>
                                                    <div className='title'>
                                                        <h3>Elizabeth Ulloa</h3>
                                                        <span>
                                                            ¡Recomendadisima! En ocasiones paso largas jornadas de estudio, pero no siento malestar en mi cuerpo utilizando este producto.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='boxOpinion'>
                                                    <div className='title'>
                                                        <h3>Daniel Gomez</h3>
                                                        <span>
                                                            Llevaba muchos años buscando una silla, que hiciera justicia entre lo economico y lo saludable. ¡Por fin la encontre!
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className='wallpaperImg'>
                                <img src="https://img.aosomcdn.com/100/product/2022/02/22/Ogv1c417f21690ead.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}