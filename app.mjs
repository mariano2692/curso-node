
import { crearArchivoTabla} from "./helpers/multiplicas.mjs";
import { argv } from "./config/yargs.mjs";
import color from 'colors'





// const base = 3

console.log(process.argv)
console.log(argv)


crearArchivoTabla(argv.b, argv.l, argv.h)
  .then(resp => console.log(resp.rainbow,'creado!!!'))
  .catch(err => console.log(err))



