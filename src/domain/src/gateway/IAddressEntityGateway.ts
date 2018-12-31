// Layer 1 (yellow) local dependencies from domain
import { Address } from "../index";

// Lives in Layer 1 (yellow) in domain
export interface IAddressEntityGateway {
    addAddress(address : Address) : Promise<Address>
}