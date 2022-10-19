import { Game } from "../entities/Game"

export const semiFinais: Game[] = [
  new Game(
    new Date('2022-12-13 16:00:00'),
    'Lusail',
    null,
    null,
    null,
    null,
    null,
  ).toJson(),
  new Game(
    new Date('2022-12-14 16:00:00'),
    'Al Bayt',
    null,
    null,
    null,
    null,
    null,
  )
]


export const disputaTerceiroQuarto: Game = 
  new Game(
    new Date('2022-12-17 12:00:00'),
    'Internacional Khalifa',
    null,
    null,
    null,
    null,
    null,
  )


export const final: Game = 
  new Game(
    new Date('2022-12-18 12:00:00'),
    'Lusail',
    null,
    null,
    null,
    null,
    null,
)
