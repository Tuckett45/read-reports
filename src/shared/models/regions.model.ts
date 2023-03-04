import { Deserializable } from "./deserializable.model";

export class RegionsModel implements Deserializable{
  region_id!: number
  region_name!: string
  password!: string
  region_manager!: string
  email!: string
  client_id!: number

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}