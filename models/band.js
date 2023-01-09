'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Band.hasOne(models.Manager, { foreignKey: 'BandId', as: 'Alternate' })
      // Band.hasMany(models.Song, { foreignKey: 'BandId' })
    }
  }
  Band.init({
    name: DataTypes.STRING,
    debutYear: DataTypes.INTEGER,
    domisili: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};