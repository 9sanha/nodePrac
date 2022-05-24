

module.exports = (sequelize, DataTypes) => {
    const Carts = require("./Carts")(sequelize,DataTypes);
    const Users = sequelize.define("Users", {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Users", // 테이블 이름 정의
        timestamps: true, // createAt, updateAt 활성화
        paranoid: true, // deleteAt 옵션
    });  
    Users.hasMany(Carts,{
        foreignKey: 'user',
        sourceKey: 'id',
        onDelete: 'CASCADE'
    })
    return Users;
};

