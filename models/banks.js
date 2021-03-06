const {
    DataTypes
} = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        ogr_fid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: null,
            comment: null,
            primaryKey: true,
            field: "ogr_fid",
            autoIncrement: true
        },
        full_id: {
            type: DataTypes.CHAR(254),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "full_id",
            autoIncrement: false
        },
        osm_id: {
            type: DataTypes.CHAR(254),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "osm_id",
            autoIncrement: false
        },
        amenity: {
            type: DataTypes.CHAR(254),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "amenity",
            autoIncrement: false
        },
        atm: {
            type: DataTypes.CHAR(254),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "atm",
            autoIncrement: false
        },
        name: {
            type: DataTypes.CHAR(254),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "name",
            autoIncrement: false
        },
        wkb_geometry: {
            type: DataTypes.GEOMETRY('POINT', 4326),
            allowNull: false,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "wkb_geometry",
            autoIncrement: false
        }
    };
    const options = {
        tableName: "banks",
        comment: "",
        indexes: [{
            name: "banks_wkb_geometry_geom_idx",
            unique: false,
            fields: ["wkb_geometry"]
        }]
    };
    const BanksModel = sequelize.define("banks_model", attributes, options);
    return BanksModel;
};