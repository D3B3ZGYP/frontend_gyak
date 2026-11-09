export interface ITelefon{
    id: number,
    tipus: string,
    gyartasi_ev: number,
    akkumulator_kapacitas: number
}

class Telefon implements ITelefon{
    static numberOf: number = 0
    #id: number
    #tipus: string
    #gyartasi_ev: number
    #akkumulator_kapacitas: number

    constructor(tipus: string, gyartasi_ev: number, akkumulator_kapacitas: number) {
        this.#id = Telefon.numberOf++
        this.#tipus = tipus
        this.#gyartasi_ev = gyartasi_ev
        this.#akkumulator_kapacitas = akkumulator_kapacitas
    }

    get id(): number{
        return this.#id
    }
    get tipus(): string{
        return this.#tipus
    }
    get gyartasi_ev(): number{
        return this.#gyartasi_ev
    }
    get akkumulator_kapacitas(): number{
        return this.#akkumulator_kapacitas
    }
}

let TELEFONS = [
    new Telefon("Samsung", 2008, 13),
    new Telefon("IPhone", 2012, 110),
    new Telefon("Samsung", 2018, 134)
]

export function listazz(){
    return TELEFONS
}
export function felvesz(ujTelefon: ITelefon){
    TELEFONS = [...TELEFONS, new Telefon(ujTelefon.tipus, ujTelefon.gyartasi_ev, ujTelefon.akkumulator_kapacitas)]
}
export function torol(id: number){
    TELEFONS = TELEFONS.filter(t => t.id != id)
}