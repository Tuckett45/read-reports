import { Deserializable } from "./deserializable.model";

export class UserModel implements Deserializable{
    ClientId!: number;
    ClientName!: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}