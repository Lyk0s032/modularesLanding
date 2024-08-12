import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product(){
    const navigation = useNavigate();
    return (
        <div className='product'>
            <div className='containerProduct'>
                <div className='wallpaper'>
                    <div className='containerWallpaper'>
                        <div className='infoDesc'>
                            <div className='big'>
                                <h1>SILLA PARA OFICINA</h1>
                                <h3>Ideal para armonizar tu espacio</h3>
                                <span>432.000 COP</span>
                            </div>
                            <div className='actionGo'>
                                <button onClick={() => navigation('/buy/product')}>
                                    <span>¡La quiero!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='two'>
                    <div className='darkWallpaper'>
                        <div className='containerDark'>
                            <div className='box'>
                                <img src="https://th.bing.com/th/id/R.c47378a69b44f2853ec6fbd9bb3ea46e?rik=5HZklpx48H9ZNA&riu=http%3a%2f%2fwww.officedepot.com.mx%2fmedias%2f85459.png-1200ftw%3fcontext%3dbWFzdGVyfHJvb3R8NzcwNDc3fGltYWdlL3BuZ3xoM2IvaDdlLzk3MjM0ODExNjE3NTgucG5nfDZlNjNjMjcyNjhmYTU2YTY2YWQ2M2Y5NzU5ODZjNGFlOTFiMzc1ODZmYmZhNzYzMmUxZjNiYzEwODM2MWM4NDk&ehk=0r7TUVNkvTNuheaifaPSFQpPnnyIazxq1hNLqkM3xlI%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </div>
                            <div className='box'>
                                    <div className="bigText">
                                        <h1>
                                            Comodidad, elegancia y productividad, en un mismo lugar.
                                        </h1>

                                        <button className='btnWhite' onClick={() => navigation('/buy/product')}>
                                            <span>¡Vamos por ello!</span>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='three'>
                    <div className='containerThree'>
                        <div className='titleBig'>
                            <h1>Una experiencia completa en tu espacio</h1>
                        </div>
                        <div className="reference">
                            <div className='box'>
                                <div className="containerBox">
                                    <div className='lateral Left'>
                                        <div className='titleAndDesc'>
                                            <h1>Salud en tu postura</h1>
                                            <span>Pequeña descripcion aqui para describir esto. Lo que va a indicar un buen mensaje para el usuario</span>
                                        </div>

                                        <div className='titleAndDesc'>
                                            <h1>Salud en tu postura</h1>
                                            <span>Pequeña descripcion aqui para describir esto. Lo que va a indicar un buen mensaje para el usuario</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box Wallpaper'>
                                <div className='containerBox'>
                                    <div className='img'>
                                        <img src="https://img.aosomcdn.com/100/product/2022/02/22/Ogv1c417f21690ead.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="containerBox">
                                    <div className='lateral'>
                                        <div className='titleAndDesc'>
                                            <h1>Salud en tu postura</h1>
                                            <span>Pequeña descripcion aqui para describir esto. Lo que va a indicar un buen mensaje para el usuario</span>
                                        </div>
                                        <div className='titleAndDesc'>
                                            <h1>Salud en tu postura</h1>
                                            <span>Pequeña descripcion aqui para describir esto. Lo que va a indicar un buen mensaje para el usuario</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='two'>
                    <div className='darkWallpaper Other'>
                        <div className='containerDark Reverse'>
                            <div className='box'>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_918731-MLU70158737878_062023-O.webp" alt="" />
                            </div>
                            <div className='box'>
                                    <div className="bigText">
                                        <h1>
                                            Rápidez, agilidad, y armonia en el movimiento
                                        </h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='two'>
                    <div className='darkWallpaper Nothing'>
                        <div className='containerDark'>
                            <div className='box'>
                                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_720069-MLA52216609412_102022-F.webp" alt="" />
                            </div>
                            <div className='box'>
                                    <div className="bigText">
                                        <h1>
                                            Fuerza, precision y presencia en los detalles
                                        </h1>

                                        <button className='btnDark' onClick={() => navigation('/buy/product')}>
                                            <span>¡La quiero!</span>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='four'>
                    <div className='fourContainer'>
                        <div className='bigTitle'>
                            <h1>Los pequeños detalles, engrandecen la experiencia</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero dolorem harum id ab sint tempora porro perspiciatis nisi nobis. Ab reiciendis optio laborum quo et, aperiam saepe inventore odio?
                            </span>
                        </div>

                        <div className='smallImages'>
                            <div className='flexImages'>
                                <div className='images'>
                                    <div className='wallpapera'>
                                        <img src="https://http2.mlstatic.com/D_NQ_NP_825880-MLU70158463566_062023-O.webp" alt="" />
                                    </div>
                                    <div className='smallDescription Left'>
                                        <h1>Libera la tención de tu cuello</h1>
                                    </div>
                                </div>
                                <div className='images'>
                                    <div className='wallpapera'>
                                        <img src="https://http2.mlstatic.com/D_NQ_NP_704869-MLU70158463564_062023-O.webp" alt="" />
                                    </div>
                                    <div className='smallDescription'>
                                        <h1>¡Mejora tu postura!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wallpaper'>
                    <div className='containerWallpaper'>
                        <div className='infoDesc'>
                            <div className='big'>
                                <h1>SILLA PARA OFICINA</h1>
                                <h3>Ideal para armonizar tu espacio</h3>

                                <span>432.000 COP</span>
                            </div>
                            <div className='actionGo'>
                                <button onClick={() => navigation('/buy/product')}>
                                    <span>¡La quiero!</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
