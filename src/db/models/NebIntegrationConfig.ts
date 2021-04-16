import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";
import NebIntegration from "./NebIntegration";

@Table({
    tableName: "dimension_neb_integration_config",
    underscored: false,
    timestamps: false,
})
export default class NebIntegrationConfig extends Model<NebIntegrationConfig> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    @ForeignKey(() => NebIntegration)
    integrationId: string;

    @Column
    roomId: string;

    @Column(dataType: DataType.TEXT)
    jsonContent: string;
}
