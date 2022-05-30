import * as fs from 'fs';
import color from 'colors'


export const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) => {
     try {
        
        let salida = '';
        let consola = '';


        for(let i = 1; i<=hasta; i++){
            salida+= `${base} x ${i} = ${base*i}\n`
            consola+=`${base} ${'x'.green} ${i} ${"=".green} ${base*i}\n`
        }

        if(listar){
            console.log(consola)
        }
    
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
        

        return `tabla-${base}.txt creado`
        
         
     } catch (error) {

        
         throw error
     }

  

}

