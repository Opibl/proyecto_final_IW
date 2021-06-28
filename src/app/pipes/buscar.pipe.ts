import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(lista:any,args:String): any {

    const resultado:any = [];
    let texto:string;
    let categoria:string;
    lista.forEach((element:any) => {
      texto=element.nombre.toLowerCase();
      categoria = element.categoria.toLowerCase();
       if(texto.indexOf(args.toLowerCase())>-1 || categoria.indexOf(args.toLowerCase())>-1){
         resultado.push(element);
       }
        
    });
    //console.log(resultado);
    return resultado;
  }
 
}
