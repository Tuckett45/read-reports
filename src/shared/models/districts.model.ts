import { Deserializable } from "./deserializable.model";

export class DistrictsModel implements Deserializable{
  district_id!: number
  district_name!: string
  region_id!: number
  password!: string
  district_manager!: string
  email!: string
  client_id!: number

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}