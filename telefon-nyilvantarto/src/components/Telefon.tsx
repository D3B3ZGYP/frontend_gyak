export function Telefon({telefon, onDelete}){
    return(
        <div className={"telefon"}>
            <p>{telefon.tipus}</p>
            <p>{telefon.gyartasi_ev}</p>
            <p>{telefon.akkumulator_kapacitas}</p>
            <button type={"button"} onClick={onDelete}>Törlés</button>
        </div>
    )
}