import { Deserializable } from "./deserializable.model";

export class StoresModel implements Deserializable{
  store_id!: number
  store_no!: string
  store_name!: string
  store_address1!: string
  store_address2!: string
  store_city!: string
  store_state!: string
  store_postal!: string
  ship_phone!: string
  district_id!: number
  is_active!: boolean
  password!: string
  email!: string
  store_manager!: string
  client_id!: number

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}