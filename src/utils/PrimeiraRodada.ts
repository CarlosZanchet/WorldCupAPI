import { Game } from "../entities/Game";
import { Team } from "../entities/Team";
import { selecoes } from "./Selecoes";


export function getSelecaoById(selecao: string): Team | null {
  const s = selecoes.find(s => s.id === selecao);
  return s ? s : null;
}

export const primeiraRodada: Game[] = [
  new Game(
    new Date('2022-11-20 13:00:00'),
    'Al Bayt',
    'A',
    getSelecaoById('CATAR'),
    getSelecaoById('EQUADOR'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-21 10:00:00'),
    'Al Thumama',
    'A',
    getSelecaoById('SENGAL'),
    getSelecaoById('HOLANDA'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-21 10:00:00'),
    'Internacional Khalifa',
    'B',
    getSelecaoById('INGLATERRA'),
     getSelecaoById('IRA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-21 16:00:00'),
    'Ahmad Bin Ali',
    'B',
    getSelecaoById('ESTADOS_UNIDOS'),
     getSelecaoById('PAIS_DE_GALES'),
    null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-11-22 07:00:00'),
    'Lusail',
    'C',
    getSelecaoById('ARGENTINA'),
     getSelecaoById('ARABIA_SAUDITA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-22 13:00:00'),
    'Estádio 974',
    'C',
    getSelecaoById('MEXICO'),
     getSelecaoById('POLONIA'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-22 10:00:00'),
    'Cidade da Educação',
    'D',
    getSelecaoById('DINAMARCA'),
     getSelecaoById('TUNISIA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-22 16:00:00'),
    'Al Janoub',
    'D',
    getSelecaoById('FRANCA'),
     getSelecaoById('AUSTRALIA'),
    null,
    null,
  ).toJson(),




  new Game(
    new Date('2022-11-23 10:00:00'),
    'Internacional Khalifa',
    'E',
    getSelecaoById('ALEMANHA'),
     getSelecaoById('JAPAO'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-23 13:00:00'),
    'Al Thumama',
    'E',
    getSelecaoById('ESPANHA'),
     getSelecaoById('COSTA_RICA'),
    null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-11-23 07:00:00'),
    'Al Bayt',
    'F',
    getSelecaoById('MARROCOS'),
     getSelecaoById('CROACIA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-23 16:00:00'),
    'Al Thumama',
    'F',
    getSelecaoById('BELGICA'),
     getSelecaoById('CANADA'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-24 07:00:00'),
    'Al Janoub',
    'G',
    getSelecaoById('SUICA'),
     getSelecaoById('CAMAROES'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-24 16:00:00'),
    'Lusail',
    'G',
    getSelecaoById('BRASIL'),
     getSelecaoById('SERVIA'),
    null,
    null,
  ).toJson(),



  new Game(
     new Date('2022-11-24 10:00:00'),
     'Cidade da Educação',
     'H',
     getSelecaoById('URUGUAI'),
      getSelecaoById('CORREIA_DO_SUL'),
     null,
     null,
  ).toJson(),
  new Game(
    new Date('2022-11-24 13:00:00'),
    'Estádio 974',
    'H',
    getSelecaoById('PORTUGAL'),
     getSelecaoById('GANA'),
    null,
    null,
  ).toJson()

]