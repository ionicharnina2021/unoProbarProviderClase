import { TestBed } from "@angular/core/testing";
import { CalculadoraService } from "./calculadora.service";

import { CompuestoService } from "./compuesto.service";

describe("CompuestoService", () => {
  let service: CompuestoService;
  //Esto funciona pero no dejamos a TestBed que gestiona las inyecciones
  let otro:CompuestoService=new CompuestoService(new CalculadoraService());

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompuestoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("porbando pedir ", () => {
    expect(service.pedirAlgo()).toEqual("corazon!");
    expect(otro.pedirAlgo()).toEqual("corazon!")
  });
});
