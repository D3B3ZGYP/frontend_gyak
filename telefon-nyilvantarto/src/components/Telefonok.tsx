import {Telefon} from "./Telefon.tsx";

export function Telefonok({telefonsArray, onDeletes}){

    return(
        <div id={"telefonok"}>
            {telefonsArray.map(t => <Telefon key={t.id} telefon={t} onDelete={() => {onDeletes(t.id)}}/>)}
        </div>
    )
}