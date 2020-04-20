const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
           sequelize
        })

        
    }

    
}




module.exports = Users;