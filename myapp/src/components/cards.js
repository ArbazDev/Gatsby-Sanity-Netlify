import React from "react"
import "../pages/global.css"
import ph1 from "../images/ph1.png"
import o1 from "../images/o1.png"
import o2 from "../images/o2.png"
import o3 from "../images/o3.png"
import o4 from "../images/o4.png"
import o5 from "../images/o5.png"
import o6 from "../images/o6.png"



const Cards = () => {
    return (
        <div className="mx-auto w-1/2 ">
            <div className="m-16 text-center text-3xl w-full">
                <h1 className="sm:-ml-28 text-lg"><b>ZOBACZ W CZYM SIĘ SPECJALIZUJEMY</b></h1>
            </div>
            <div className="lg:grid grid-cols-3 sm:-ml-9">
                <section className="col-span-1 border-2 p-10 m-2 h-96 w-60 rounded-xl  hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img src={o1}></img>
                    <h1 className="m-2">
                        <b>TRANSPORT MATERIALOW</b>
                    </h1>
                    <p>
                        - Wywrotki 3 i 4 osiowe<br />
                        - Naczepy<br />
                        - Wywrotki
                    </p>
                    <button className="border-2 border-yellow-500 hover:bg-gray-700 p-2 mt-6 rounded-full ">Zobacz Więcej</button>
                </section>
                <section className="border-2 p-10 m-2 h-96 w-60 rounded-xl hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img className="h-28" src={o2}></img>
                    <h1 className="m-2">
                        <b>KOPALNIA
                            PIASKU</b>
                    </h1>

                    <button className="border-2 border-yellow-500 hover:bg-gray-700 p-2 mt-24 rounded-full ">Zobacz Więcej</button>
                </section>
                <section className="border-2 p-10 m-2 h-96 w-60 rounded-xl hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img className="h-28" src={o3}></img>
                    <h1>
                        <b>USŁUGI
                            SPRZĘTEM BUDOWLANYM</b>
                    </h1>
                    <p>
                        - Koparka gąsienicowa<br />
                        - Koparka kołowa<br />
                        - Ładowarka
                    </p>
                    <button className="border-2 border-yellow-500 hover:bg-gray-700 p-2 mt-3 rounded-full ">Zobacz Więcej</button>
                </section>
            </div>
            <div className="lg:grid grid-cols-3">
                <section className="border-2 p-10 m-2 h-96 w-60 rounded-xl hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img className="h-28" src={o4}></img>
                    <h1 className="m-2">
                        <b>SPRZEDAŻ
                            TRANSPORT KRUSZYW</b>
                    </h1>

                    <button className="border-2 border-yellow-500 hover:bg-gray-700 p-2 mt-20 rounded-full ">Zobacz Więcej</button>
                </section>
                <section className="border-2 p-10 m-2 h-96 w-60 rounded-xl hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img className="h-28" src={o5}></img>
                    <h1 className="m-2">
                        <b>ROBOTY
                            ZIEMNE</b>
                    </h1>
                    <p>
                        - Wywrotki 3 i 4 osiowe<br />
                        - Naczepy<br />
                        - Wywrotki

                    </p>
                    <button className="border-2 border-yellow-500 hover:bg-gray-700 p-2 mt-7 rounded-full">Zobacz Więcej</button>
                </section>
                <section className="border-2 p-10 m-2 h-96 w-60 rounded-xl hover:border-yellow-900 hover:bg-gray-900 hover:text-white shadow-2xl">
                    <img className="h-28" src={o6}></img>
                    <h1 className="m-2">
                        <b>SZYBKI
                            KONTAKT</b>
                    </h1>
                    <button className="border-2 border-gray-500 hover:bg-yellow-500 p-2 mt-28 rounded-full ">Zadzwoń do nas</button>
                </section>
            </div>
        </div>
    )
}
export default Cards;