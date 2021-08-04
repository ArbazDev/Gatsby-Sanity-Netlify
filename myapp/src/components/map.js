import React from "react";
import "../pages/global.css";
import Mapif from "../images/map.png"
import img1 from "../images/imge.png"


const Map = () => {
    return (
        <div>
            <div className="mx-auto">
                <img src={Mapif} />
            </div>
            <div className="mx-auto lg:flex lg:w-3/5 h-56 sm:flex-row ">
                <img className="mt-8 shadow-lg sm:w-44 h-44 mx-auto" src={img1} />
                <p className="text-center m-8">
                    <b>Poznaj naszą firmę</b><br />
                    Jesteśmy rodziną firma. Siedziba znajduję się w miejscowości Jaktorów gm. Grodzisk Mazowiecki woj Mazowieckie. Zajmujemy się kompleksową obsługa dużych firm jak i osób indywidualnych.
                    Charakteryzujemy się elastycznością , doświadczeniem , zlecenia wykonujemy terminowo co niejednokrotnie zostało docenione przez kontrahentów. Oferujemy usługi na sprzęcie wysokiej jakości. Gwarantujemy atrakcyjne ceny. Do każdego klienta podchodzimy indywidualnie. Realizacja potrzeb i zadowolenie klienta jest dla nas najważniejsze.
                </p>
                {/* <img className="mt-8 shadow-lg sm:w-16 h-16" src={img1}/> */}
            </div>
        </div>
    )
}

export default Map;