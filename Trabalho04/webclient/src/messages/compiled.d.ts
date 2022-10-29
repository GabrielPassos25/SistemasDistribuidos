import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a GatewayLookupRequest. */
export interface IGatewayLookupRequest {
}

/** Represents a GatewayLookupRequest. */
export class GatewayLookupRequest implements IGatewayLookupRequest {

    /**
     * Constructs a new GatewayLookupRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGatewayLookupRequest);

    /**
     * Creates a new GatewayLookupRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GatewayLookupRequest instance
     */
    public static create(properties?: IGatewayLookupRequest): GatewayLookupRequest;

    /**
     * Encodes the specified GatewayLookupRequest message. Does not implicitly {@link GatewayLookupRequest.verify|verify} messages.
     * @param message GatewayLookupRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGatewayLookupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GatewayLookupRequest message, length delimited. Does not implicitly {@link GatewayLookupRequest.verify|verify} messages.
     * @param message GatewayLookupRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGatewayLookupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GatewayLookupRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GatewayLookupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GatewayLookupRequest;

    /**
     * Decodes a GatewayLookupRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GatewayLookupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GatewayLookupRequest;

    /**
     * Verifies a GatewayLookupRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GatewayLookupRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GatewayLookupRequest
     */
    public static fromObject(object: { [k: string]: any }): GatewayLookupRequest;

    /**
     * Creates a plain object from a GatewayLookupRequest message. Also converts values to other types if specified.
     * @param message GatewayLookupRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GatewayLookupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GatewayLookupRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GatewayLookupRequest
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

    /** SmartObjectDetails tv */
    tv?: (ITvDetails|null);

    /** SmartObjectDetails ac */
    ac?: (IAirConditionerDetails|null);

    /** SmartObjectDetails tempSensor */
    tempSensor?: (ITemperatureSensorDetails|null);
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

    /** SmartObjectDetails tv. */
    public tv?: (ITvDetails|null);

    /** SmartObjectDetails ac. */
    public ac?: (IAirConditionerDetails|null);

    /** SmartObjectDetails tempSensor. */
    public tempSensor?: (ITemperatureSensorDetails|null);

    /** SmartObjectDetails objectDetails. */
    public objectDetails?: ("light"|"tv"|"ac"|"tempSensor");

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

/** Properties of a TvDetails. */
export interface ITvDetails {

    /** TvDetails channel */
    channel?: (string|null);

    /** TvDetails volume */
    volume?: (number|null);
}

/** Represents a TvDetails. */
export class TvDetails implements ITvDetails {

    /**
     * Constructs a new TvDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITvDetails);

    /** TvDetails channel. */
    public channel: string;

    /** TvDetails volume. */
    public volume: number;

    /**
     * Creates a new TvDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TvDetails instance
     */
    public static create(properties?: ITvDetails): TvDetails;

    /**
     * Encodes the specified TvDetails message. Does not implicitly {@link TvDetails.verify|verify} messages.
     * @param message TvDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITvDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TvDetails message, length delimited. Does not implicitly {@link TvDetails.verify|verify} messages.
     * @param message TvDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITvDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TvDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TvDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TvDetails;

    /**
     * Decodes a TvDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TvDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TvDetails;

    /**
     * Verifies a TvDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TvDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TvDetails
     */
    public static fromObject(object: { [k: string]: any }): TvDetails;

    /**
     * Creates a plain object from a TvDetails message. Also converts values to other types if specified.
     * @param message TvDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TvDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TvDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TvDetails
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
