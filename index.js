const listaDeAutos = [
    {
        marca: 'Peugeot',
        modelo: '206',
        puertas: '4',
        precio: parseFloat('200000,00'),
    },
    {
        marca: 'Honda',
        modelo: 'Titan',
        pilindrada: '125c',
        precio: parseFloat('60000,00'),
    },
    {
        marca: 'Peugeot',
        modelo: '208',
        puertas: '5',
        precio: parseFloat('250000,00'),
    },
    {
        marca: 'Yamaha',
        modelo: 'YBR',
        pilindrada: '160c',
        precio: parseFloat('80500,50'),
    }
]

const masCaro = listaDeAutos[2];
const { marca:Mcaro, modelo:ModCaro } = masCaro;

const masBarato = listaDeAutos[1];
const { marca:Mbarato, modelo:ModBarato } = masBarato;

const modeloLetraY = listaDeAutos[3]
const { marca:MY, modelo:ModY } = modeloLetraY;


console.log(`El vehiculo mas caro es: ${Mcaro} - ${ModCaro}
El vehiculo mas barato es: ${Mbarato} - ${ModBarato}
Modelo que contiene la letra Y: ${MY} - ${ModY}`)

const ordenado = listaDeAutos.sort(((a, b) => b.precio - a.precio))

console.log('Ordenado de mayor a menor precio:')
ordenado.map((ord) => (
    console.log(`${ord.marca} - ${ord.modelo}`)
))


