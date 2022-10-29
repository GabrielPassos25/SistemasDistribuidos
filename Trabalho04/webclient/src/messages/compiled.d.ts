import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a FindGatewayRequest. */
export interface IFindGatewayRequest {
}

/** Represents a FindGatewayRequest. */
export class FindGatewayRequest implements IFindGatewayRequest {

    /**
     * Constructs a new FindGatewayRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFindGatewayRequest);

    /**
     * Creates a new FindGatewayRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FindGatewayRequest instance
     */
    public static create(properties?: IFindGatewayRequest): FindGatewayRequest;

    /**
     * Encodes the specified FindGatewayRequest message. Does not implicitly {@link FindGatewayRequest.verify|verify} messages.
     * @param message FindGatewayRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFindGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FindGatewayRequest message, length delimited. Does not implicitly {@link FindGatewayRequest.verify|verify} messages.
     * @param message FindGatewayRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFindGatewayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FindGatewayRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FindGatewayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FindGatewayRequest;

    /**
     * Decodes a FindGatewayRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FindGatewayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FindGatewayRequest;

    /**
     * Verifies a FindGatewayRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FindGatewayRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FindGatewayRequest
     */
    public static fromObject(object: { [k: string]: any }): FindGatewayRequest;

    /**
     * Creates a plain object from a FindGatewayRequest message. Also converts values to other types if specified.
     * @param message FindGatewayRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FindGatewayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FindGatewayRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FindGatewayRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FindGatewayResponse. */
export interface IFindGatewayResponse {

    /** FindGatewayResponse ip */
    ip?: (string|null);

    /** FindGatewayResponse port */
    port?: (number|null);
}

/** Represents a FindGatewayResponse. */
export class FindGatewayResponse implements IFindGatewayResponse {

    /**
     * Constructs a new FindGatewayResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFindGatewayResponse);

    /** FindGatewayResponse ip. */
    public ip: string;

    /** FindGatewayResponse port. */
    public port: number;

    /**
     * Creates a new FindGatewayResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FindGatewayResponse instance
     */
    public static create(properties?: IFindGatewayResponse): FindGatewayResponse;

    /**
     * Encodes the specified FindGatewayResponse message. Does not implicitly {@link FindGatewayResponse.verify|verify} messages.
     * @param message FindGatewayResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFindGatewayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FindGatewayResponse message, length delimited. Does not implicitly {@link FindGatewayResponse.verify|verify} messages.
     * @param message FindGatewayResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFindGatewayResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FindGatewayResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FindGatewayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FindGatewayResponse;

    /**
     * Decodes a FindGatewayResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FindGatewayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FindGatewayResponse;

    /**
     * Verifies a FindGatewayResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FindGatewayResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FindGatewayResponse
     */
    public static fromObject(object: { [k: string]: any }): FindGatewayResponse;

    /**
     * Creates a plain object from a FindGatewayResponse message. Also converts values to other types if specified.
     * @param message FindGatewayResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FindGatewayResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FindGatewayResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FindGatewayResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SmartObjectUpdate */
export class SmartObjectUpdate extends $protobuf.rpc.Service {

    /**
     * Constructs a new SmartObjectUpdate service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new SmartObjectUpdate service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SmartObjectUpdate;

    /**
     * Calls UpdateObject.
     * @param request SmartObjectDetails message or plain object
     * @param callback Node-style callback called with the error, if any, and UpdateObjectReply
     */
    public updateObject(request: ISmartObjectDetails, callback: SmartObjectUpdate.UpdateObjectCallback): void;

    /**
     * Calls UpdateObject.
     * @param request SmartObjectDetails message or plain object
     * @returns Promise
     */
    public updateObject(request: ISmartObjectDetails): Promise<UpdateObjectReply>;
}

export namespace SmartObjectUpdate {

    /**
     * Callback as used by {@link SmartObjectUpdate#updateObject}.
     * @param error Error, if any
     * @param [response] UpdateObjectReply
     */
    type UpdateObjectCallback = (error: (Error|null), response?: UpdateObjectReply) => void;
}

/** Properties of an UpdateObjectReply. */
export interface IUpdateObjectReply {

    /** UpdateObjectReply success */
    success?: (boolean|null);
}

/** Represents an UpdateObjectReply. */
export class UpdateObjectReply implements IUpdateObjectReply {

    /**
     * Constructs a new UpdateObjectReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateObjectReply);

    /** UpdateObjectReply success. */
    public success: boolean;

    /**
     * Creates a new UpdateObjectReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateObjectReply instance
     */
    public static create(properties?: IUpdateObjectReply): UpdateObjectReply;

    /**
     * Encodes the specified UpdateObjectReply message. Does not implicitly {@link UpdateObjectReply.verify|verify} messages.
     * @param message UpdateObjectReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateObjectReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateObjectReply message, length delimited. Does not implicitly {@link UpdateObjectReply.verify|verify} messages.
     * @param message UpdateObjectReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateObjectReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateObjectReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateObjectReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateObjectReply;

    /**
     * Decodes an UpdateObjectReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateObjectReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateObjectReply;

    /**
     * Verifies an UpdateObjectReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateObjectReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateObjectReply
     */
    public static fromObject(object: { [k: string]: any }): UpdateObjectReply;

    /**
     * Creates a plain object from an UpdateObjectReply message. Also converts values to other types if specified.
     * @param message UpdateObjectReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateObjectReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateObjectReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateObjectReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SmartObjectsList. */
export interface ISmartObjectsList {

    /** SmartObjectsList objects */
    objects?: (ISmartObjectDetails[]|null);
}

/** Represents a SmartObjectsList. */
export class SmartObjectsList implements ISmartObjectsList {

    /**
     * Constructs a new SmartObjectsList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISmartObjectsList);

    /** SmartObjectsList objects. */
    public objects: ISmartObjectDetails[];

    /**
     * Creates a new SmartObjectsList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SmartObjectsList instance
     */
    public static create(properties?: ISmartObjectsList): SmartObjectsList;

    /**
     * Encodes the specified SmartObjectsList message. Does not implicitly {@link SmartObjectsList.verify|verify} messages.
     * @param message SmartObjectsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISmartObjectsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SmartObjectsList message, length delimited. Does not implicitly {@link SmartObjectsList.verify|verify} messages.
     * @param message SmartObjectsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISmartObjectsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SmartObjectsList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SmartObjectsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SmartObjectsList;

    /**
     * Decodes a SmartObjectsList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SmartObjectsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SmartObjectsList;

    /**
     * Verifies a SmartObjectsList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SmartObjectsList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SmartObjectsList
     */
    public static fromObject(object: { [k: string]: any }): SmartObjectsList;

    /**
     * Creates a plain object from a SmartObjectsList message. Also converts values to other types if specified.
     * @param message SmartObjectsList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SmartObjectsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SmartObjectsList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SmartObjectsList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SmartObjectDetails. */
export interface ISmartObjectDetails {

    /** SmartObjectDetails status */
    status?: (boolean|null);

    /** SmartObjectDetails ip */
    ip?: (string|null);

    /** SmartObjectDetails port */
    port?: (number|null);

    /** SmartObjectDetails id */
    id?: (string|null);

    /** SmartObjectDetails light */
    light?: (ILightDetails|null);

    /** SmartObjectDetails luminositySensor */
    luminositySensor?: (ILuminositySensor|null);

    /** SmartObjectDetails ac */
    ac?: (IAirConditionerDetails|null);

    /** SmartObjectDetails tempSensor */
    tempSensor?: (ITemperatureSensorDetails|null);

    /** SmartObjectDetails smokeSensor */
    smokeSensor?: (ISmokeSensor|null);

    /** SmartObjectDetails sprinkler */
    sprinkler?: (ISprinkler|null);
}

/** Represents a SmartObjectDetails. */
export class SmartObjectDetails implements ISmartObjectDetails {

    /**
     * Constructs a new SmartObjectDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISmartObjectDetails);

    /** SmartObjectDetails status. */
    public status: boolean;

    /** SmartObjectDetails ip. */
    public ip: string;

    /** SmartObjectDetails port. */
    public port: number;

    /** SmartObjectDetails id. */
    public id: string;

    /** SmartObjectDetails light. */
    public light?: (ILightDetails|null);

    /** SmartObjectDetails luminositySensor. */
    public luminositySensor?: (ILuminositySensor|null);

    /** SmartObjectDetails ac. */
    public ac?: (IAirConditionerDetails|null);

    /** SmartObjectDetails tempSensor. */
    public tempSensor?: (ITemperatureSensorDetails|null);

    /** SmartObjectDetails smokeSensor. */
    public smokeSensor?: (ISmokeSensor|null);

    /** SmartObjectDetails sprinkler. */
    public sprinkler?: (ISprinkler|null);

    /** SmartObjectDetails objectDetails. */
    public objectDetails?: ("light"|"luminositySensor"|"ac"|"tempSensor"|"smokeSensor"|"sprinkler");

    /**
     * Creates a new SmartObjectDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SmartObjectDetails instance
     */
    public static create(properties?: ISmartObjectDetails): SmartObjectDetails;

    /**
     * Encodes the specified SmartObjectDetails message. Does not implicitly {@link SmartObjectDetails.verify|verify} messages.
     * @param message SmartObjectDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISmartObjectDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SmartObjectDetails message, length delimited. Does not implicitly {@link SmartObjectDetails.verify|verify} messages.
     * @param message SmartObjectDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISmartObjectDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SmartObjectDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SmartObjectDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SmartObjectDetails;

    /**
     * Decodes a SmartObjectDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SmartObjectDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SmartObjectDetails;

    /**
     * Verifies a SmartObjectDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SmartObjectDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SmartObjectDetails
     */
    public static fromObject(object: { [k: string]: any }): SmartObjectDetails;

    /**
     * Creates a plain object from a SmartObjectDetails message. Also converts values to other types if specified.
     * @param message SmartObjectDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SmartObjectDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SmartObjectDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SmartObjectDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LightDetails. */
export interface ILightDetails {

    /** LightDetails name */
    name?: (string|null);

    /** LightDetails color */
    color?: (string|null);
}

/** Represents a LightDetails. */
export class LightDetails implements ILightDetails {

    /**
     * Constructs a new LightDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILightDetails);

    /** LightDetails name. */
    public name: string;

    /** LightDetails color. */
    public color: string;

    /**
     * Creates a new LightDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LightDetails instance
     */
    public static create(properties?: ILightDetails): LightDetails;

    /**
     * Encodes the specified LightDetails message. Does not implicitly {@link LightDetails.verify|verify} messages.
     * @param message LightDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILightDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LightDetails message, length delimited. Does not implicitly {@link LightDetails.verify|verify} messages.
     * @param message LightDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILightDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LightDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LightDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LightDetails;

    /**
     * Decodes a LightDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LightDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LightDetails;

    /**
     * Verifies a LightDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LightDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LightDetails
     */
    public static fromObject(object: { [k: string]: any }): LightDetails;

    /**
     * Creates a plain object from a LightDetails message. Also converts values to other types if specified.
     * @param message LightDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LightDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LightDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LightDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LuminositySensor. */
export interface ILuminositySensor {

    /** LuminositySensor name */
    name?: (string|null);

    /** LuminositySensor reading */
    reading?: (number|null);
}

/** Represents a LuminositySensor. */
export class LuminositySensor implements ILuminositySensor {

    /**
     * Constructs a new LuminositySensor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILuminositySensor);

    /** LuminositySensor name. */
    public name: string;

    /** LuminositySensor reading. */
    public reading: number;

    /**
     * Creates a new LuminositySensor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LuminositySensor instance
     */
    public static create(properties?: ILuminositySensor): LuminositySensor;

    /**
     * Encodes the specified LuminositySensor message. Does not implicitly {@link LuminositySensor.verify|verify} messages.
     * @param message LuminositySensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILuminositySensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LuminositySensor message, length delimited. Does not implicitly {@link LuminositySensor.verify|verify} messages.
     * @param message LuminositySensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILuminositySensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LuminositySensor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LuminositySensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LuminositySensor;

    /**
     * Decodes a LuminositySensor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LuminositySensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LuminositySensor;

    /**
     * Verifies a LuminositySensor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LuminositySensor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LuminositySensor
     */
    public static fromObject(object: { [k: string]: any }): LuminositySensor;

    /**
     * Creates a plain object from a LuminositySensor message. Also converts values to other types if specified.
     * @param message LuminositySensor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LuminositySensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LuminositySensor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LuminositySensor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SmokeSensor. */
export interface ISmokeSensor {

    /** SmokeSensor name */
    name?: (string|null);

    /** SmokeSensor reading */
    reading?: (number|null);
}

/** Represents a SmokeSensor. */
export class SmokeSensor implements ISmokeSensor {

    /**
     * Constructs a new SmokeSensor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISmokeSensor);

    /** SmokeSensor name. */
    public name: string;

    /** SmokeSensor reading. */
    public reading: number;

    /**
     * Creates a new SmokeSensor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SmokeSensor instance
     */
    public static create(properties?: ISmokeSensor): SmokeSensor;

    /**
     * Encodes the specified SmokeSensor message. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @param message SmokeSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISmokeSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SmokeSensor message, length delimited. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @param message SmokeSensor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISmokeSensor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SmokeSensor;

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SmokeSensor;

    /**
     * Verifies a SmokeSensor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SmokeSensor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SmokeSensor
     */
    public static fromObject(object: { [k: string]: any }): SmokeSensor;

    /**
     * Creates a plain object from a SmokeSensor message. Also converts values to other types if specified.
     * @param message SmokeSensor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SmokeSensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SmokeSensor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SmokeSensor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Sprinkler. */
export interface ISprinkler {

    /** Sprinkler name */
    name?: (string|null);
}

/** Represents a Sprinkler. */
export class Sprinkler implements ISprinkler {

    /**
     * Constructs a new Sprinkler.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISprinkler);

    /** Sprinkler name. */
    public name: string;

    /**
     * Creates a new Sprinkler instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Sprinkler instance
     */
    public static create(properties?: ISprinkler): Sprinkler;

    /**
     * Encodes the specified Sprinkler message. Does not implicitly {@link Sprinkler.verify|verify} messages.
     * @param message Sprinkler message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISprinkler, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Sprinkler message, length delimited. Does not implicitly {@link Sprinkler.verify|verify} messages.
     * @param message Sprinkler message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISprinkler, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Sprinkler message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Sprinkler
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Sprinkler;

    /**
     * Decodes a Sprinkler message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Sprinkler
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Sprinkler;

    /**
     * Verifies a Sprinkler message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Sprinkler message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Sprinkler
     */
    public static fromObject(object: { [k: string]: any }): Sprinkler;

    /**
     * Creates a plain object from a Sprinkler message. Also converts values to other types if specified.
     * @param message Sprinkler
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Sprinkler, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Sprinkler to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Sprinkler
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** AirConditionerMode enum. */
export enum AirConditionerMode {
    FAN_MODE = 0,
    SILENT_MODE = 1,
    EXTREME_CHILL = 2
}

/** Represents an AirConditionerDetails. */
export class AirConditionerDetails implements IAirConditionerDetails {

    /**
     * Constructs a new AirConditionerDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAirConditionerDetails);

    /** AirConditionerDetails temperature. */
    public temperature: number;

    /** AirConditionerDetails mode. */
    public mode: AirConditionerMode;

    /**
     * Creates a new AirConditionerDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AirConditionerDetails instance
     */
    public static create(properties?: IAirConditionerDetails): AirConditionerDetails;

    /**
     * Encodes the specified AirConditionerDetails message. Does not implicitly {@link AirConditionerDetails.verify|verify} messages.
     * @param message AirConditionerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAirConditionerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AirConditionerDetails message, length delimited. Does not implicitly {@link AirConditionerDetails.verify|verify} messages.
     * @param message AirConditionerDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAirConditionerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AirConditionerDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AirConditionerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AirConditionerDetails;

    /**
     * Decodes an AirConditionerDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AirConditionerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AirConditionerDetails;

    /**
     * Verifies an AirConditionerDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AirConditionerDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AirConditionerDetails
     */
    public static fromObject(object: { [k: string]: any }): AirConditionerDetails;

    /**
     * Creates a plain object from an AirConditionerDetails message. Also converts values to other types if specified.
     * @param message AirConditionerDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AirConditionerDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AirConditionerDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AirConditionerDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TemperatureSensorDetails. */
export class TemperatureSensorDetails implements ITemperatureSensorDetails {

    /**
     * Constructs a new TemperatureSensorDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemperatureSensorDetails);

    /** TemperatureSensorDetails temperature. */
    public temperature: number;

    /**
     * Creates a new TemperatureSensorDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TemperatureSensorDetails instance
     */
    public static create(properties?: ITemperatureSensorDetails): TemperatureSensorDetails;

    /**
     * Encodes the specified TemperatureSensorDetails message. Does not implicitly {@link TemperatureSensorDetails.verify|verify} messages.
     * @param message TemperatureSensorDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITemperatureSensorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TemperatureSensorDetails message, length delimited. Does not implicitly {@link TemperatureSensorDetails.verify|verify} messages.
     * @param message TemperatureSensorDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITemperatureSensorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TemperatureSensorDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TemperatureSensorDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TemperatureSensorDetails;

    /**
     * Decodes a TemperatureSensorDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TemperatureSensorDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TemperatureSensorDetails;

    /**
     * Verifies a TemperatureSensorDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TemperatureSensorDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TemperatureSensorDetails
     */
    public static fromObject(object: { [k: string]: any }): TemperatureSensorDetails;

    /**
     * Creates a plain object from a TemperatureSensorDetails message. Also converts values to other types if specified.
     * @param message TemperatureSensorDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TemperatureSensorDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TemperatureSensorDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TemperatureSensorDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
