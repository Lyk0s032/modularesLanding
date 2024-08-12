import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigation = useNavigate();
    return (
        <div className="home">
            <div className='firstHome' id="one">
                <div className='textAndWallpaper'>
                    <div className='img'>
                        <img src="https://img.freepik.com/premium-photo/3d-rendering-modern-luxury-house_1068144-280.jpg" alt="" />
                    </div>
                    <div className='textDesc'>
                        <h1>Ábrele la puerta de tu espacio, a la comodidad.</h1>
                        <h3>
                            Comienza a convertir tus tiempos de trabajo y/o estudio, en momentos gobernados por la elegancia, seguridad, confort y el poder del minimalismo.
                        </h3>
                        <button>
                            <span>Ver catalogo rápido</span>
                        </button>
                    </div>
                </div>
            </div> 
            <div className='topProducts' id="two">
                <div className='topsContainer'>
                    <div className='title'>
                        <h1>Imprescindibles en tu oficina</h1>
                    </div> 

                    <div className='divideContainerWhite'>
                        <div className='divideContainer'>
                            <div className='box' onClick={() => navigation('/e/')}>
                                <div className='fastDesc'>
                                    <button className='new'>
                                        <span>Nuevo</span>
                                    </button>
                                    <h1>Silla Shanghai 3-724</h1>
                                    <span>Ideal para largas jornadas de trabajo</span>
                                    <br />
                                    <button className='moreInfo'>
                                        <span>
                                            Mas información
                                        </span>
                                        <FaChevronRight className='icon' />
                                    </button>
                                </div>
                                <div className='img'>
                                    <img src="https://th.bing.com/th/id/R.d0209c527e2fdc9043b94fd263e9d898?rik=yB%2b0Gd5JRgcYTA&pid=ImgRaw&r=0" alt="" />
                                </div>
                            
                            </div>
                            <div className='box Two' onClick={() => navigation('/e/')}>
                                <div className='fastDesc'>
                                    <button className='new'>
                                        <span>Nuevo</span>
                                    </button>
                                    <h1>Silla Shanghai 3-724</h1>
                                    <span>Ideal para largas jornadas de trabajo</span>
                                    <br />
                                    <button className='moreInfo'>
                                        <span>
                                            Mas información
                                        </span>
                                        <FaChevronRight className='icon' />
                                    </button>
                                </div>
                                <div className='img'>
                                    <img src="https://th.bing.com/th/id/R.d0209c527e2fdc9043b94fd263e9d898?rik=yB%2b0Gd5JRgcYTA&pid=ImgRaw&r=0" alt="" />
                                </div>
                            
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="whiteProduct">
                <div className='whiteProductContainer'>
                    <div className="divideProduct">
                        <div className='wallpaperImg'>
                            <img src="https://th.bing.com/th/id/R.d0209c527e2fdc9043b94fd263e9d898?rik=yB%2b0Gd5JRgcYTA&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className="descImg">
                            <div className="containerDescImg">
                                <h1>Silla Shanghai 3-724</h1>
                                <span className='descriptionText'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ducimus beatae at quo quod cumque deserunt magni doloribus earum voluptatum! Facilis veritatis, libero facere fugiat atque esse enim officia et.
                                </span>
                                <br />

                                <div className="options">
                                    <h3>430.000 <span>COP</span></h3>
                                    <button className='info' onClick={() => navigation('/e/')}>
                                        <span>Ver producto</span>
                                    </button><br />
                                    <button className='comprar' onClick={() => navigation('/buy/product')}>
                                        <span>¡Lo quiero!</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whiteProduct">
                <div className='whiteProductContainer'>
                    <div className="divideProduct Reverse">
                        <div className='wallpaperImg'>
                            <img src="https://th.bing.com/th/id/R.d0209c527e2fdc9043b94fd263e9d898?rik=yB%2b0Gd5JRgcYTA&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className="descImg">
                            <div className="containerDescImg">
                                <h1>Silla Shanghai 3-724</h1>
                                <span className='descriptionText'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ducimus beatae at quo quod cumque deserunt magni doloribus earum voluptatum! Facilis veritatis, libero facere fugiat atque esse enim officia et.
                                </span>
                                <br />

                                <div className="options">
                                    <h3>430.000 <span>COP</span></h3>
                                    <button className='info' onClick={() => navigation('/e/')}>
                                        <span>Ver producto</span>
                                    </button><br />
                                    <button className='comprar' onClick={() => navigation('/buy/product')}>
                                        <span>¡Lo quiero!</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='ourExperience' id="three">
                <div className='containerOurExperience'>
                    <div className='divideExperience'>
                        <div className='wallpaper'>
                            <img src="https://static.vecteezy.com/system/resources/previews/000/664/649/original/group-of-young-business-people-working-together-vector.jpg" alt="" />
                        </div>
                        <div className='containerOur'>
                            <div className='desc'>
                                <div className='title'>
                                    <h3>¡Nuestra experiencia!</h3>
                                    <h1>Mas de 25+ años, brindando calidad, y satisfacción a nuestros clientes.</h1>
                                
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos ullam cupiditate quisquam totam maxime cum dicta iure distinctio. Sed natus aliquam fugit, repellendus quam culpa! Consectetur, recusandae sunt. Aspernatur?
                                    </span><br /><br />

                                    <button>
                                        <span>Conoce más sobre nosotros</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}