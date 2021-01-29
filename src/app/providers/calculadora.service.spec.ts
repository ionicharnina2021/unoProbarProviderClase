import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  //ESto tambien funciona pero no debe hacerse así porque no usamos angular
  let otra=new CalculadoraService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(otra).toBeTruthy();
  });
  it('probando dimeAlgo',()=>{
    expect(service.dimeAlgo()).toEqual("corazon!")
  })
});
