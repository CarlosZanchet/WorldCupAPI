import { Game } from "../entities/Game";
import { getSelecaoById } from "./PrimeiraRodada";

export const terceiraRodada: Game[] = [
  new Game(
    new Date('2022-11-29 12:00:00'),
    'Al Bayt',
    'A',
    getSelecaoById('HOLANDA'),
    getSelecaoById('CATAR'),
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-29 12:00:00'),
    'Internacional Khalifa',
    'A',
    getSelecaoById('EQUADOR'),
    getSelecaoById('SENEGAL'),
   null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-29 16:00:00'),
    'Al Thumama',
    'B',
    getSelecaoById('IRA'),
    getSelecaoById('ESTADOS_UNIDOS'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-29 16:00:00'),
    'Ahmad Bin Ali',
    'B',
    getSelecaoById('PAIS_DE_GALES'),
    getSelecaoById('INGLATERRA'),
   null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-11-30 16:00:00'),
    'Estádio 974',
    'C',
    getSelecaoById('POLONIA'),
    getSelecaoById('ARGENTINA'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-30 16:00:00'),
    'Lusail',
    'C',
    getSelecaoById('ARABIA_SAUDITA'),
    getSelecaoById('MEXICO'),
   null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-11-30 12:00:00'),
    'Cidade da Educação',
    'D',
    getSelecaoById('TUNISIA'),
    getSelecaoById('FRANCA'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-11-30 12:00:00'),
    'Al Janoub',
    'D',
    getSelecaoById('AUSTRALIA'),
    getSelecaoById('DINAMARCA'),
   null,
    null,
  ).toJson(),




  new Game(
    new Date('2022-12-01 16:00:00'),
    'Internacional Khalifa',
    'E',
    getSelecaoById('JAPAO'),
    getSelecaoById('ESPANHA'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-12-01 16:00:00'),
    'Al Bayt',
    'E',
    getSelecaoById('COSTA_RICA'),
    getSelecaoById('ALEMANHA'),
   null,
    null,
  ).toJson(),


  new Game(
    new Date('2022-12-01 12:00:00'),
    'Ahmad Bin Ali',
    'F',
    getSelecaoById('CROACIA'),
    getSelecaoById('BELGICA'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-12-01 12:00:00'),
    'Al Thumama',
    'F',
    getSelecaoById('CANADA'),
    getSelecaoById('MARROCOS'),
   null,
    null,
  ).toJson(),



  new Game(
    new Date('2022-12-02 16:00:00'),
    'Lusail',
    'G',
    getSelecaoById('CAMAROES'),
    getSelecaoById('BRASIL'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-12-02 16:00:00'),
    'Estádio 974',
    'G',
    getSelecaoById('SERVIA'),
    getSelecaoById('SUICA'),
   null,
    null,
  ).toJson(),




  new Game(
    new Date('2022-12-02 12:00:00'),
    'Cidade da Educação',
    'H',
    getSelecaoById('CORREIA_DO_SUL'),
    getSelecaoById('PORTUGAL'),
   null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-12-02 12:00:00'),
    'Al Janoub',
    'H',
    getSelecaoById('GANA'),
    getSelecaoById('URUGUAI'),
   null,
    null,
  ).toJson()

]