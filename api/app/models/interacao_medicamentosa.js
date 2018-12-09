'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interacao_Medicamentosa = sequelize.define('Interacao_Medicamentosa', {
    Farmaco1: DataTypes.STRING,
    Farmaco2: DataTypes.STRING,
    Nome: DataTypes.STRING,
    Descricao: DataTypes.STRING
  }, {});
  Interacao_Medicamentosa.associate = function(models) {
    // associations can be defined here
  };
  return Interacao_Medicamentosa;
};