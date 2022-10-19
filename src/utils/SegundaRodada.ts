import { Game } from "../entities/Game";
import { getSelecaoById } from "./PrimeiraRodada";

export const segundaRodada: Game[] = [
  new Game(
    new Date('2022-11-25 10:00:00'),
    'Thumama',
   'A',
    getSelecaoById('CATAR'),
     getSelecaoById('SENEGAL'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-25 13:00:00'),
    'Internacional Khalifa',
   'A',
    getSelecaoById('HOLANDA'),
     getSelecaoById('EQUADOR'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-25 07:00:00'),
    'Ahmad Bin Ali',
   'B',
    getSelecaoById('PAIS_DE_GALES'),
     getSelecaoById('IRA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-25 16:00:00'),
    'Al Bayt',
   'B',
    getSelecaoById('INGLATERRA'),
     getSelecaoById('ESTADOS_UNIDOS'),
    null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-11-27 10:00:00'),
    'Cidade da Educação',
   'C',
    getSelecaoById('POLONIA'),
     getSelecaoById('ARABIA_SAUDITA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-26 16:00:00'),
    'Lusail',
   'C',
    getSelecaoById('ARGENTINA'),
     getSelecaoById('MEXICO'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-26 07:00:00'),
    'Al Janoub',
   'D',
    getSelecaoById('TUNISIA'),
     getSelecaoById('AUSTRALIA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-26 13:00:00'),
    'Estádio 974',
   'D',
    getSelecaoById('FRANCA'),
     getSelecaoById('DINAMARCA'),
    null,
    null,
  ).toJson(),




  new Game(
    new Date('2022-11-27 07:00:00'),
    'Ahmad Bin Ali',
   'E',
    getSelecaoById('JAPAO'),
     getSelecaoById('COSTA_RICA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-27 16:00:00'),
    'Al Bayt',
   'E',
    getSelecaoById('ESPANHA'),
     getSelecaoById('ALEMANHA'),
    null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-11-27 10:00:00'),
    'Al Thumama',
   'F',
    getSelecaoById('BELGICA'),
     getSelecaoById('MARROCOS'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-27 13:00:00'),
    'Internacional Khalifa',
   'F',
    getSelecaoById('CROACIA'),
     getSelecaoById('CANADA'),
    null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-28 07:00:00'),
    'Al Janoub',
   'G',
    getSelecaoById('CAMAROES'),
     getSelecaoById('SERVIA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-28 13:00:00'),
    'Estádio 974',
   'G',
    getSelecaoById('BRASIL'),
     getSelecaoById('SUICA'),
    null,
    null,
  ).toJson(),




  new Game(
    new Date('2022-11-28 10:00:00'),
    'Cidade da Educação',
   'H',
    getSelecaoById('CORREIA_DO_SUL'),
     getSelecaoById('GANA'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-28 16:00:00'),
    'Lusail',
   'H',
    getSelecaoById('PORTUGAL'),
     getSelecaoById('URUGUAI'),
    null,
    null,
  ).toJson(),

]