// Must import underyling ethereum types at top-level for
// typechecking to pass all the way through.
import { AbiItem } from "web3-utils";
import { Log } from "web3-core";
import { SolidityTypes } from "ethereum-types";

export interface AbiDecoder {
    getABIs(): AbiItem[];
    addABI(abi: AbiItem[]): void;
    getMethodIDs(): Types.MethodIds;
    decodeMethod(input: string): Types.DecodedMethodInput | void;
    decodeLogs(logs: Log[]): Types.DecodedLog[];
    removeABI(abi: AbiItem[]): void;
}

export namespace Types {
    export type DecodedParam = {
        name: string;
        value: string;
        type: SolidityTypes;
    };

    export type DecodedMethodInput = {
        name: string;
        params: DecodedParam[];
    };

    export type DecodedLog = {
        name: string;
        address: string;
        events: DecodedParam[];
    };

    export type MethodIds = {
        [hexMethodName: string]: AbiItem;
    };
}

declare const AbiDecoder: AbiDecoder;

export default AbiDecoder;
