import { Injectable } from '@angular/core';
import { CalculadoraService } from './calculadora.service';

@Injectable({
  providedIn: 'root'
})
export class CompuestoService {

  constructor(public calculadora: CalculadoraService) { 
   
  }
  public pedirAlgo():string{
    return this.calculadora.dimeAlgo();
  }
}
