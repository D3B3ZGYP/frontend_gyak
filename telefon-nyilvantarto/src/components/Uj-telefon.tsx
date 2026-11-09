import {$} from "../App.tsx";

export function UjTelefon({onSubmit}){
    const submit = () => {
        onSubmit({
            tipus: ($("tipus") as HTMLInputElement).value,
            gyartasi_ev: Number.parseInt(($("gyartasi_ev") as HTMLInputElement).value),
            akkumulator_kapacitas: Number.parseInt(($("akkumulator_kapacitas") as HTMLInputElement).value)
        })
    }

    return(
        <form>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="tipus">Típus:</label></td>
                        <td><input type="text" id="tipus"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tipus">Gyártási év</label></td>
                        <td><input type="number" min={2000} step={1} max={2026} id="gyartasi_ev"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tipus">Akkumulátor kapacitás</label></td>
                        <td><input type="number" min={10} max={150} step={1} id="akkumulator_kapacitas"/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={() => {submit()}} type={"button"}>Mentés</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}