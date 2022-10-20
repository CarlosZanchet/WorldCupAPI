
# ⚽ API World Cup 2022

Surgiu a necessidade de consumir os dados da copa do mundo Catar 2022 para uma aplicação que estava desenvolvendo.

Não encontrei nenhuma API que me entregasse o que precisava, então decidi elaborar eu mesmo minha propria API, e agora disponibilizar para uso aberto.


Os dados das fases finais do campeonato, serão alimentados conforme o andar da competição.

Pretendo adicionar novas informações e dados, e deixarei aqui toda a documentação das mudanças.


PS: Essa API foi desenvolvida para atender uma demanda minha, caso necessite de mais informações, será de tremenda alegria ajudar implementando.


## Estrutura dos Objetos

```http
  Team

  {
    id: string, // id da seleção
    name: string, // nome da seleção
    group: string, // grupo a que a seleção pertence
    urlFlag: string, // url imagem da bandeira da seleção
  }
```

```http
  Game

  {
    date: Date(), // data da competição
    stadium: string, // nome do estádio aonde ocorrerá o jogo
    group: string | null, // grupo de que o jogo faz parte, jogos das etapas finais nao possuim grupo
    homeTeam: Team | null, // time da casa, jogos de etapas futuras nao possuiem time ainda
    outsideTeam: Team | null, // time de fora, jogos de etapas futuras nao possuiem time ainda
    homeScore: number | null, // placar time casa
    outsideScore: number | null, // placar time fora
    step: string // etapa de que o jogo pertence
  }
```


## Documentação da API

Rotas de acesso a API:

DNS ipv4 público:  `ec2-15-228-99-56.sa-east-1.compute.amazonaws.com`
####
ipv4:  `15.228.99.56`
####
PORTA: 3333

Exemplo de conexao:
```http
  GET http://ec2-15-228-99-56.sa-east-1.compute.amazonaws.com:3333/teams
```

#
### Retorna todos os jogos da competição

```http
  GET /games
```

### Retorna os jogos por Grupo

Retorna os jogos separados pelo grupamento da competição, os grupos são:

`A`
`B`
`C`
`D`
`E`
`F`
`G`
`H`

```http
  GET /games-group/{group}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `group`      | `string` | **Obrigatório**. Grupo que deseja buscar |



### Retorna os jogos por etapa

Retorna os jogos separados pela etapa da competição, onde:

`1: Primeira Fase`
`2: Segunda Fase`
`3: Terceira Fase`
`4: Oitavas de Final`
`5: Quartas de Final`
`6: Semi Finais`
`7: Disputa de Terceiro e Quarto`
`8: Final`

```http
  GET /games-step/{step}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `step`      | `number` | **Obrigatório**. Número da etapa desejada. |



### Retorna todos os times

Retorna topas as seleções presentes na competição

```http
  GET /teams
```


### Retorna as seleções por id da seleção

Enviando o ``id`` da seleção, voce tem o retorno unificado dela, os ids disponíveis são:

`CATAR`
`EQUADOR`
`HOLANDA`
`SENEGAL`
`ESTADOS_UNIDOS`
`INGLATERRA`
`IRA`
`PAIS_DE_GALES`
`ARGENTINA`
`ARABIA_SAUDITA`
`MEXICO`
`POLONIA`
`AUSTRALIA`
`DINAMARCA`
`FRANCA`
`TUNISIA`
`ALEMANHA`
`COSTA_RICA`
`ESPANHA`
`JAPAO`
`BELGICA`
`CANADA`
`CROACIA`
`MARROCOS`
`BRASIL`
`SUICA`
`SERVIA`
`CORREIA_DO_SUL`
`GANA`
`PORTUGAL`
`URUGUAI`


```http
  GET /teams-id/{id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. id da seleção que deseja buscar. |



### Retorna times por grupo

Retorna as seleções que contém no grupo informado, os grupos disponíveis são:

`A`
`B`
`C`
`D`
`E`
`F`
`G`
`H`

```http
  GET /teams-group/{group}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `group`      | `string` | **Obrigatório**. Grupo que deseja buscar as seleções. |

