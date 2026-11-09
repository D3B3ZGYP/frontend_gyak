import { useState } from 'react'
import {Telefonok} from "./components/Telefonok.tsx";
import {UjTelefon} from "./components/Uj-telefon.tsx";
import {felvesz, listazz, torol} from "./main.ts";

export const $ = (id) => document.getElementById(id)

function App() {
    const [telefons, setTelefons] = useState(listazz())
    const deletes = (id) => {
        torol(id)
        setTelefons(listazz())
    }
    const newTelefon = (ujTelefon) => {
        felvesz(ujTelefon)
        setTelefons(listazz())
    }

    return (
        <>
            <Telefonok telefonsArray={telefons} onDeletes={deletes}/>
            <UjTelefon onSubmit={newTelefon}/>
        </>
    )
}

export default App
