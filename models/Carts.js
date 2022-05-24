module.exports = (sequelize,DataTypes) => {
    const Carts = sequelize.define("Carts",{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalPrice:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
    },{
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Carts", // 테이블 이름 정의
        timestamps: true, // createAt, updateAt 활성화
        paranoid: true, // deleteAt 옵션
    });
    return Carts;
}