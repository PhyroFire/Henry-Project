const {Games, Genres, Platforms, Tags } = require('../db')

const getVideoGamesDB = async () => {
    let gamesDB = await Games.findAll({
      include: [{
          model: Genres,
          attributes: [ 'name' ],
          through: { attributes: [] }
        },
        {
          model: Platforms,
          attributes: [ 'name' ],
          through: { attributes: [] }
        },
        {
          model: Tags,
          attributes: [ 'name' ],
          through: { attributes: [] }
        }
    ]
  })
  return gamesDB;
}


module.exports = {
    getVideoGamesDB
}