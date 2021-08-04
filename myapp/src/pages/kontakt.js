import * as React from "react";
import "../components/header.css";
import ph1 from "../images/ph1.png";
import Header from "../components/header";
import facebook from "../images/fb.png";
import Google from "../images/google.png";
import close from "../images/close.png";
import g6 from "../images/g6.png";
import g7 from "../images/g7.png";
import g8 from "../images/g8.png";
import ing from "../images/in.png";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";


function kontakt() {
    return (
        <div>
            <Header></Header>

            <div>
                <img src={ph1}></img>
            </div>
            <section className="mx-auto w-3/5 rounded-2xl shadow-2xl h-full sm:w-full sm:h-full sm:mx-auto">
                <h1 className="m-2 text-3xl px-16 text-center p-10">
                    <b>KONTAKT</b>
                </h1>
                <p className="px-16">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </p>
                <div className="lg:flex lg:space-x-32 lg:mx-16 sm:space-y-28 sm:text-center sm:h-full sm:mx-auto">
                    <div>
                        <img className="sm:mx-auto" src={f1}></img>
                        <h1><b>OUR ADRESS</b></h1>
                        <p>Polskiego Związku Ludowego 15<br />
                            96-313 Chylice-Kolonia</p>
                    </div>
                    <div>
                        <img className="sm:mx-auto" src={f2}></img>
                        <h1><b>TIME TO</b></h1>
                        <p>8-18</p>
                    </div>
                    <div>
                        <img className="sm:mx-auto" src={f3}></img>
                        <h1><b>Masz pytania?
                            Zadzwoń do nas</b>
                        </h1>
                        <p>+48 660 419 693</p>
                    </div>
                </div>
            </section>

            <div className="mx-auto bg-gray-100 border-2 mt-60">
                <section className="lg:hidden cards m-36">
                    <img src={ing}></img>
                    <h1></h1>
                </section>
                <div className="justify-center flex m-8">
                    <img className="m-4 border-2 border-gray-400 rounded-3xl" src={facebook} />
                    <img className="m-4 border-2 border-gray-400 rounded-3xl" src={Google} />
                </div>
                <div className="mt-24 lg:ml-44 text-center">
                    <input className="lg:w-96 h-12 sm: w-52 rounded-3xl mx-auto text-center" type="text" placeholder="By using this site you agree to our Cookie Policy" ></input>
                    <button className="p-1 rounded-full bg-gray-100"><img src={close}></img></button>
                    <p className="float-right m-3">@Copyright 2021</p>
                </div>
                <hr className="mt-14 ml-44 mr-44 text-black border-gray-800"></hr>
                <div className="lg:flex m-5 justify-center">
                    <section className="card flex mt-28 m-5">
                        <img className="w-5 h-8 mr-4" src={g6}></img>
                        <h1><b>ul. Polskiego Związku Ludowego 15<br />
                            96-313 Chylice-Kolonia</b></h1>
                    </section>
                    <section className="sm:hidden card m-5 ">
                        <img src={ing}></img>
                        <h1></h1>
                    </section>
                    <section className="card flex mt-28 m-5">
                        <img className="w-5 h-8 mr-4" src={g7}></img>
                        <h1><b>8-18 Poniedziałek  Piątek </b></h1>
                    </section>
                    <section className="card flex mt-28 m-5">
                        <img className="w-5 h-8 mr-4" src={g8}></img>
                        <h1><b>+48 660 419 693</b></h1>
                    </section>
                </div>
            </div>

        </div >
    );
};

export default kontakt;