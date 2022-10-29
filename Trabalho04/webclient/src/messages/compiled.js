/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const FindGatewayRequest = $root.FindGatewayRequest = (() => {

    /**
     * Properties of a FindGatewayRequest.
     * @exports IFindGatewayRequest
     * @interface IFindGatewayRequest
     */

    /**
     * Constructs a new FindGatewayRequest.
     * @exports FindGatewayRequest
     * @classdesc Represents a FindGatewayRequest.
     * @implements IFindGatewayRequest
     * @constructor
     * @param {IFindGatewayRequest=} [properties] Properties to set
     */
    function FindGatewayRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FindGatewayRequest instance using the specified properties.
     * @function create
     * @memberof FindGatewayRequest
     * @static
     * @param {IFindGatewayRequest=} [properties] Properties to set
     * @returns {FindGatewayRequest} FindGatewayRequest instance
     */
    FindGatewayRequest.create = function create(properties) {
        return new FindGatewayRequest(properties);
    };

    /**
     * Encodes the specified FindGatewayRequest message. Does not implicitly {@link FindGatewayRequest.verify|verify} messages.
     * @function encode
     * @memberof FindGatewayRequest
     * @static
     * @param {IFindGatewayRequest} message FindGatewayRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindGatewayRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified FindGatewayRequest message, length delimited. Does not implicitly {@link FindGatewayRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FindGatewayRequest
     * @static
     * @param {IFindGatewayRequest} message FindGatewayRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindGatewayRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FindGatewayRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FindGatewayRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FindGatewayRequest} FindGatewayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindGatewayRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FindGatewayRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FindGatewayRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FindGatewayRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FindGatewayRequest} FindGatewayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindGatewayRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FindGatewayRequest message.
     * @function verify
     * @memberof FindGatewayRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindGatewayRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a FindGatewayRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FindGatewayRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FindGatewayRequest} FindGatewayRequest
     */
    FindGatewayRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FindGatewayRequest)
            return object;
        return new $root.FindGatewayRequest();
    };

    /**
     * Creates a plain object from a FindGatewayRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FindGatewayRequest
     * @static
     * @param {FindGatewayRequest} message FindGatewayRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindGatewayRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this FindGatewayRequest to JSON.
     * @function toJSON
     * @memberof FindGatewayRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindGatewayRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FindGatewayRequest
     * @function getTypeUrl
     * @memberof FindGatewayRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FindGatewayRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FindGatewayRequest";
    };

    return FindGatewayRequest;
})();

export const FindGatewayResponse = $root.FindGatewayResponse = (() => {

    /**
     * Properties of a FindGatewayResponse.
     * @exports IFindGatewayResponse
     * @interface IFindGatewayResponse
     * @property {string|null} [ip] FindGatewayResponse ip
     * @property {number|null} [port] FindGatewayResponse port
     */

    /**
     * Constructs a new FindGatewayResponse.
     * @exports FindGatewayResponse
     * @classdesc Represents a FindGatewayResponse.
     * @implements IFindGatewayResponse
     * @constructor
     * @param {IFindGatewayResponse=} [properties] Properties to set
     */
    function FindGatewayResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FindGatewayResponse ip.
     * @member {string} ip
     * @memberof FindGatewayResponse
     * @instance
     */
    FindGatewayResponse.prototype.ip = "";

    /**
     * FindGatewayResponse port.
     * @member {number} port
     * @memberof FindGatewayResponse
     * @instance
     */
    FindGatewayResponse.prototype.port = 0;

    /**
     * Creates a new FindGatewayResponse instance using the specified properties.
     * @function create
     * @memberof FindGatewayResponse
     * @static
     * @param {IFindGatewayResponse=} [properties] Properties to set
     * @returns {FindGatewayResponse} FindGatewayResponse instance
     */
    FindGatewayResponse.create = function create(properties) {
        return new FindGatewayResponse(properties);
    };

    /**
     * Encodes the specified FindGatewayResponse message. Does not implicitly {@link FindGatewayResponse.verify|verify} messages.
     * @function encode
     * @memberof FindGatewayResponse
     * @static
     * @param {IFindGatewayResponse} message FindGatewayResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindGatewayResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
        return writer;
    };

    /**
     * Encodes the specified FindGatewayResponse message, length delimited. Does not implicitly {@link FindGatewayResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FindGatewayResponse
     * @static
     * @param {IFindGatewayResponse} message FindGatewayResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindGatewayResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FindGatewayResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FindGatewayResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FindGatewayResponse} FindGatewayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindGatewayResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FindGatewayResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.ip = reader.string();
                    break;
                }
            case 2: {
                    message.port = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FindGatewayResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FindGatewayResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FindGatewayResponse} FindGatewayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindGatewayResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FindGatewayResponse message.
     * @function verify
     * @memberof FindGatewayResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindGatewayResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        return null;
    };

    /**
     * Creates a FindGatewayResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FindGatewayResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FindGatewayResponse} FindGatewayResponse
     */
    FindGatewayResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FindGatewayResponse)
            return object;
        let message = new $root.FindGatewayResponse();
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.port != null)
            message.port = object.port | 0;
        return message;
    };

    /**
     * Creates a plain object from a FindGatewayResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FindGatewayResponse
     * @static
     * @param {FindGatewayResponse} message FindGatewayResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindGatewayResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.ip = "";
            object.port = 0;
        }
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        return object;
    };

    /**
     * Converts this FindGatewayResponse to JSON.
     * @function toJSON
     * @memberof FindGatewayResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindGatewayResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FindGatewayResponse
     * @function getTypeUrl
     * @memberof FindGatewayResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FindGatewayResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FindGatewayResponse";
    };

    return FindGatewayResponse;
})();

export const SmartObjectUpdate = $root.SmartObjectUpdate = (() => {

    /**
     * Constructs a new SmartObjectUpdate service.
     * @exports SmartObjectUpdate
     * @classdesc Represents a SmartObjectUpdate
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function SmartObjectUpdate(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (SmartObjectUpdate.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SmartObjectUpdate;

    /**
     * Creates new SmartObjectUpdate service using the specified rpc implementation.
     * @function create
     * @memberof SmartObjectUpdate
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {SmartObjectUpdate} RPC service. Useful where requests and/or responses are streamed.
     */
    SmartObjectUpdate.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link SmartObjectUpdate#updateObject}.
     * @memberof SmartObjectUpdate
     * @typedef UpdateObjectCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UpdateObjectReply} [response] UpdateObjectReply
     */

    /**
     * Calls UpdateObject.
     * @function updateObject
     * @memberof SmartObjectUpdate
     * @instance
     * @param {ISmartObjectDetails} request SmartObjectDetails message or plain object
     * @param {SmartObjectUpdate.UpdateObjectCallback} callback Node-style callback called with the error, if any, and UpdateObjectReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(SmartObjectUpdate.prototype.updateObject = function updateObject(request, callback) {
        return this.rpcCall(updateObject, $root.SmartObjectDetails, $root.UpdateObjectReply, request, callback);
    }, "name", { value: "UpdateObject" });

    /**
     * Calls UpdateObject.
     * @function updateObject
     * @memberof SmartObjectUpdate
     * @instance
     * @param {ISmartObjectDetails} request SmartObjectDetails message or plain object
     * @returns {Promise<UpdateObjectReply>} Promise
     * @variation 2
     */

    return SmartObjectUpdate;
})();

export const UpdateObjectReply = $root.UpdateObjectReply = (() => {

    /**
     * Properties of an UpdateObjectReply.
     * @exports IUpdateObjectReply
     * @interface IUpdateObjectReply
     * @property {boolean|null} [success] UpdateObjectReply success
     */

    /**
     * Constructs a new UpdateObjectReply.
     * @exports UpdateObjectReply
     * @classdesc Represents an UpdateObjectReply.
     * @implements IUpdateObjectReply
     * @constructor
     * @param {IUpdateObjectReply=} [properties] Properties to set
     */
    function UpdateObjectReply(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateObjectReply success.
     * @member {boolean} success
     * @memberof UpdateObjectReply
     * @instance
     */
    UpdateObjectReply.prototype.success = false;

    /**
     * Creates a new UpdateObjectReply instance using the specified properties.
     * @function create
     * @memberof UpdateObjectReply
     * @static
     * @param {IUpdateObjectReply=} [properties] Properties to set
     * @returns {UpdateObjectReply} UpdateObjectReply instance
     */
    UpdateObjectReply.create = function create(properties) {
        return new UpdateObjectReply(properties);
    };

    /**
     * Encodes the specified UpdateObjectReply message. Does not implicitly {@link UpdateObjectReply.verify|verify} messages.
     * @function encode
     * @memberof UpdateObjectReply
     * @static
     * @param {IUpdateObjectReply} message UpdateObjectReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateObjectReply.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        return writer;
    };

    /**
     * Encodes the specified UpdateObjectReply message, length delimited. Does not implicitly {@link UpdateObjectReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateObjectReply
     * @static
     * @param {IUpdateObjectReply} message UpdateObjectReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateObjectReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateObjectReply message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateObjectReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateObjectReply} UpdateObjectReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateObjectReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateObjectReply();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateObjectReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateObjectReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateObjectReply} UpdateObjectReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateObjectReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateObjectReply message.
     * @function verify
     * @memberof UpdateObjectReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateObjectReply.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        return null;
    };

    /**
     * Creates an UpdateObjectReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateObjectReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateObjectReply} UpdateObjectReply
     */
    UpdateObjectReply.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateObjectReply)
            return object;
        let message = new $root.UpdateObjectReply();
        if (object.success != null)
            message.success = Boolean(object.success);
        return message;
    };

    /**
     * Creates a plain object from an UpdateObjectReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateObjectReply
     * @static
     * @param {UpdateObjectReply} message UpdateObjectReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateObjectReply.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.success = false;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        return object;
    };

    /**
     * Converts this UpdateObjectReply to JSON.
     * @function toJSON
     * @memberof UpdateObjectReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateObjectReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UpdateObjectReply
     * @function getTypeUrl
     * @memberof UpdateObjectReply
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UpdateObjectReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateObjectReply";
    };

    return UpdateObjectReply;
})();

export const SmartObjectsList = $root.SmartObjectsList = (() => {

    /**
     * Properties of a SmartObjectsList.
     * @exports ISmartObjectsList
     * @interface ISmartObjectsList
     * @property {Array.<ISmartObjectDetails>|null} [objects] SmartObjectsList objects
     */

    /**
     * Constructs a new SmartObjectsList.
     * @exports SmartObjectsList
     * @classdesc Represents a SmartObjectsList.
     * @implements ISmartObjectsList
     * @constructor
     * @param {ISmartObjectsList=} [properties] Properties to set
     */
    function SmartObjectsList(properties) {
        this.objects = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SmartObjectsList objects.
     * @member {Array.<ISmartObjectDetails>} objects
     * @memberof SmartObjectsList
     * @instance
     */
    SmartObjectsList.prototype.objects = $util.emptyArray;

    /**
     * Creates a new SmartObjectsList instance using the specified properties.
     * @function create
     * @memberof SmartObjectsList
     * @static
     * @param {ISmartObjectsList=} [properties] Properties to set
     * @returns {SmartObjectsList} SmartObjectsList instance
     */
    SmartObjectsList.create = function create(properties) {
        return new SmartObjectsList(properties);
    };

    /**
     * Encodes the specified SmartObjectsList message. Does not implicitly {@link SmartObjectsList.verify|verify} messages.
     * @function encode
     * @memberof SmartObjectsList
     * @static
     * @param {ISmartObjectsList} message SmartObjectsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmartObjectsList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.objects != null && message.objects.length)
            for (let i = 0; i < message.objects.length; ++i)
                $root.SmartObjectDetails.encode(message.objects[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SmartObjectsList message, length delimited. Does not implicitly {@link SmartObjectsList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SmartObjectsList
     * @static
     * @param {ISmartObjectsList} message SmartObjectsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmartObjectsList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SmartObjectsList message from the specified reader or buffer.
     * @function decode
     * @memberof SmartObjectsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SmartObjectsList} SmartObjectsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmartObjectsList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SmartObjectsList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.objects && message.objects.length))
                        message.objects = [];
                    message.objects.push($root.SmartObjectDetails.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SmartObjectsList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SmartObjectsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SmartObjectsList} SmartObjectsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmartObjectsList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SmartObjectsList message.
     * @function verify
     * @memberof SmartObjectsList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SmartObjectsList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.objects != null && message.hasOwnProperty("objects")) {
            if (!Array.isArray(message.objects))
                return "objects: array expected";
            for (let i = 0; i < message.objects.length; ++i) {
                let error = $root.SmartObjectDetails.verify(message.objects[i]);
                if (error)
                    return "objects." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SmartObjectsList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SmartObjectsList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SmartObjectsList} SmartObjectsList
     */
    SmartObjectsList.fromObject = function fromObject(object) {
        if (object instanceof $root.SmartObjectsList)
            return object;
        let message = new $root.SmartObjectsList();
        if (object.objects) {
            if (!Array.isArray(object.objects))
                throw TypeError(".SmartObjectsList.objects: array expected");
            message.objects = [];
            for (let i = 0; i < object.objects.length; ++i) {
                if (typeof object.objects[i] !== "object")
                    throw TypeError(".SmartObjectsList.objects: object expected");
                message.objects[i] = $root.SmartObjectDetails.fromObject(object.objects[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SmartObjectsList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SmartObjectsList
     * @static
     * @param {SmartObjectsList} message SmartObjectsList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SmartObjectsList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.objects = [];
        if (message.objects && message.objects.length) {
            object.objects = [];
            for (let j = 0; j < message.objects.length; ++j)
                object.objects[j] = $root.SmartObjectDetails.toObject(message.objects[j], options);
        }
        return object;
    };

    /**
     * Converts this SmartObjectsList to JSON.
     * @function toJSON
     * @memberof SmartObjectsList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SmartObjectsList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SmartObjectsList
     * @function getTypeUrl
     * @memberof SmartObjectsList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SmartObjectsList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SmartObjectsList";
    };

    return SmartObjectsList;
})();

export const SmartObjectDetails = $root.SmartObjectDetails = (() => {

    /**
     * Properties of a SmartObjectDetails.
     * @exports ISmartObjectDetails
     * @interface ISmartObjectDetails
     * @property {boolean|null} [status] SmartObjectDetails status
     * @property {string|null} [ip] SmartObjectDetails ip
     * @property {number|null} [port] SmartObjectDetails port
     * @property {string|null} [id] SmartObjectDetails id
     * @property {ILightDetails|null} [light] SmartObjectDetails light
     * @property {ILuminositySensor|null} [luminositySensor] SmartObjectDetails luminositySensor
     * @property {IAirConditionerDetails|null} [ac] SmartObjectDetails ac
     * @property {ITemperatureSensorDetails|null} [tempSensor] SmartObjectDetails tempSensor
     * @property {ISmokeSensor|null} [smokeSensor] SmartObjectDetails smokeSensor
     * @property {ISprinkler|null} [sprinkler] SmartObjectDetails sprinkler
     */

    /**
     * Constructs a new SmartObjectDetails.
     * @exports SmartObjectDetails
     * @classdesc Represents a SmartObjectDetails.
     * @implements ISmartObjectDetails
     * @constructor
     * @param {ISmartObjectDetails=} [properties] Properties to set
     */
    function SmartObjectDetails(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SmartObjectDetails status.
     * @member {boolean} status
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.status = false;

    /**
     * SmartObjectDetails ip.
     * @member {string} ip
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.ip = "";

    /**
     * SmartObjectDetails port.
     * @member {number} port
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.port = 0;

    /**
     * SmartObjectDetails id.
     * @member {string} id
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.id = "";

    /**
     * SmartObjectDetails light.
     * @member {ILightDetails|null|undefined} light
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.light = null;

    /**
     * SmartObjectDetails luminositySensor.
     * @member {ILuminositySensor|null|undefined} luminositySensor
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.luminositySensor = null;

    /**
     * SmartObjectDetails ac.
     * @member {IAirConditionerDetails|null|undefined} ac
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.ac = null;

    /**
     * SmartObjectDetails tempSensor.
     * @member {ITemperatureSensorDetails|null|undefined} tempSensor
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.tempSensor = null;

    /**
     * SmartObjectDetails smokeSensor.
     * @member {ISmokeSensor|null|undefined} smokeSensor
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.smokeSensor = null;

    /**
     * SmartObjectDetails sprinkler.
     * @member {ISprinkler|null|undefined} sprinkler
     * @memberof SmartObjectDetails
     * @instance
     */
    SmartObjectDetails.prototype.sprinkler = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * SmartObjectDetails objectDetails.
     * @member {"light"|"luminositySensor"|"ac"|"tempSensor"|"smokeSensor"|"sprinkler"|undefined} objectDetails
     * @memberof SmartObjectDetails
     * @instance
     */
    Object.defineProperty(SmartObjectDetails.prototype, "objectDetails", {
        get: $util.oneOfGetter($oneOfFields = ["light", "luminositySensor", "ac", "tempSensor", "smokeSensor", "sprinkler"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SmartObjectDetails instance using the specified properties.
     * @function create
     * @memberof SmartObjectDetails
     * @static
     * @param {ISmartObjectDetails=} [properties] Properties to set
     * @returns {SmartObjectDetails} SmartObjectDetails instance
     */
    SmartObjectDetails.create = function create(properties) {
        return new SmartObjectDetails(properties);
    };

    /**
     * Encodes the specified SmartObjectDetails message. Does not implicitly {@link SmartObjectDetails.verify|verify} messages.
     * @function encode
     * @memberof SmartObjectDetails
     * @static
     * @param {ISmartObjectDetails} message SmartObjectDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmartObjectDetails.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
        if (message.light != null && Object.hasOwnProperty.call(message, "light"))
            $root.LightDetails.encode(message.light, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.luminositySensor != null && Object.hasOwnProperty.call(message, "luminositySensor"))
            $root.LuminositySensor.encode(message.luminositySensor, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.ac != null && Object.hasOwnProperty.call(message, "ac"))
            $root.AirConditionerDetails.encode(message.ac, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.tempSensor != null && Object.hasOwnProperty.call(message, "tempSensor"))
            $root.TemperatureSensorDetails.encode(message.tempSensor, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.id);
        if (message.sprinkler != null && Object.hasOwnProperty.call(message, "sprinkler"))
            $root.Sprinkler.encode(message.sprinkler, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.smokeSensor != null && Object.hasOwnProperty.call(message, "smokeSensor"))
            $root.SmokeSensor.encode(message.smokeSensor, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SmartObjectDetails message, length delimited. Does not implicitly {@link SmartObjectDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SmartObjectDetails
     * @static
     * @param {ISmartObjectDetails} message SmartObjectDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmartObjectDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SmartObjectDetails message from the specified reader or buffer.
     * @function decode
     * @memberof SmartObjectDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SmartObjectDetails} SmartObjectDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmartObjectDetails.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SmartObjectDetails();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.bool();
                    break;
                }
            case 2: {
                    message.ip = reader.string();
                    break;
                }
            case 3: {
                    message.port = reader.int32();
                    break;
                }
            case 8: {
                    message.id = reader.string();
                    break;
                }
            case 4: {
                    message.light = $root.LightDetails.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.luminositySensor = $root.LuminositySensor.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.ac = $root.AirConditionerDetails.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.tempSensor = $root.TemperatureSensorDetails.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.smokeSensor = $root.SmokeSensor.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.sprinkler = $root.Sprinkler.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SmartObjectDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SmartObjectDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SmartObjectDetails} SmartObjectDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmartObjectDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SmartObjectDetails message.
     * @function verify
     * @memberof SmartObjectDetails
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SmartObjectDetails.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status !== "boolean")
                return "status: boolean expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.light != null && message.hasOwnProperty("light")) {
            properties.objectDetails = 1;
            {
                let error = $root.LightDetails.verify(message.light);
                if (error)
                    return "light." + error;
            }
        }
        if (message.luminositySensor != null && message.hasOwnProperty("luminositySensor")) {
            if (properties.objectDetails === 1)
                return "objectDetails: multiple values";
            properties.objectDetails = 1;
            {
                let error = $root.LuminositySensor.verify(message.luminositySensor);
                if (error)
                    return "luminositySensor." + error;
            }
        }
        if (message.ac != null && message.hasOwnProperty("ac")) {
            if (properties.objectDetails === 1)
                return "objectDetails: multiple values";
            properties.objectDetails = 1;
            {
                let error = $root.AirConditionerDetails.verify(message.ac);
                if (error)
                    return "ac." + error;
            }
        }
        if (message.tempSensor != null && message.hasOwnProperty("tempSensor")) {
            if (properties.objectDetails === 1)
                return "objectDetails: multiple values";
            properties.objectDetails = 1;
            {
                let error = $root.TemperatureSensorDetails.verify(message.tempSensor);
                if (error)
                    return "tempSensor." + error;
            }
        }
        if (message.smokeSensor != null && message.hasOwnProperty("smokeSensor")) {
            if (properties.objectDetails === 1)
                return "objectDetails: multiple values";
            properties.objectDetails = 1;
            {
                let error = $root.SmokeSensor.verify(message.smokeSensor);
                if (error)
                    return "smokeSensor." + error;
            }
        }
        if (message.sprinkler != null && message.hasOwnProperty("sprinkler")) {
            if (properties.objectDetails === 1)
                return "objectDetails: multiple values";
            properties.objectDetails = 1;
            {
                let error = $root.Sprinkler.verify(message.sprinkler);
                if (error)
                    return "sprinkler." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SmartObjectDetails message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SmartObjectDetails
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SmartObjectDetails} SmartObjectDetails
     */
    SmartObjectDetails.fromObject = function fromObject(object) {
        if (object instanceof $root.SmartObjectDetails)
            return object;
        let message = new $root.SmartObjectDetails();
        if (object.status != null)
            message.status = Boolean(object.status);
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.port != null)
            message.port = object.port | 0;
        if (object.id != null)
            message.id = String(object.id);
        if (object.light != null) {
            if (typeof object.light !== "object")
                throw TypeError(".SmartObjectDetails.light: object expected");
            message.light = $root.LightDetails.fromObject(object.light);
        }
        if (object.luminositySensor != null) {
            if (typeof object.luminositySensor !== "object")
                throw TypeError(".SmartObjectDetails.luminositySensor: object expected");
            message.luminositySensor = $root.LuminositySensor.fromObject(object.luminositySensor);
        }
        if (object.ac != null) {
            if (typeof object.ac !== "object")
                throw TypeError(".SmartObjectDetails.ac: object expected");
            message.ac = $root.AirConditionerDetails.fromObject(object.ac);
        }
        if (object.tempSensor != null) {
            if (typeof object.tempSensor !== "object")
                throw TypeError(".SmartObjectDetails.tempSensor: object expected");
            message.tempSensor = $root.TemperatureSensorDetails.fromObject(object.tempSensor);
        }
        if (object.smokeSensor != null) {
            if (typeof object.smokeSensor !== "object")
                throw TypeError(".SmartObjectDetails.smokeSensor: object expected");
            message.smokeSensor = $root.SmokeSensor.fromObject(object.smokeSensor);
        }
        if (object.sprinkler != null) {
            if (typeof object.sprinkler !== "object")
                throw TypeError(".SmartObjectDetails.sprinkler: object expected");
            message.sprinkler = $root.Sprinkler.fromObject(object.sprinkler);
        }
        return message;
    };

    /**
     * Creates a plain object from a SmartObjectDetails message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SmartObjectDetails
     * @static
     * @param {SmartObjectDetails} message SmartObjectDetails
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SmartObjectDetails.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.status = false;
            object.ip = "";
            object.port = 0;
            object.id = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        if (message.light != null && message.hasOwnProperty("light")) {
            object.light = $root.LightDetails.toObject(message.light, options);
            if (options.oneofs)
                object.objectDetails = "light";
        }
        if (message.luminositySensor != null && message.hasOwnProperty("luminositySensor")) {
            object.luminositySensor = $root.LuminositySensor.toObject(message.luminositySensor, options);
            if (options.oneofs)
                object.objectDetails = "luminositySensor";
        }
        if (message.ac != null && message.hasOwnProperty("ac")) {
            object.ac = $root.AirConditionerDetails.toObject(message.ac, options);
            if (options.oneofs)
                object.objectDetails = "ac";
        }
        if (message.tempSensor != null && message.hasOwnProperty("tempSensor")) {
            object.tempSensor = $root.TemperatureSensorDetails.toObject(message.tempSensor, options);
            if (options.oneofs)
                object.objectDetails = "tempSensor";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.sprinkler != null && message.hasOwnProperty("sprinkler")) {
            object.sprinkler = $root.Sprinkler.toObject(message.sprinkler, options);
            if (options.oneofs)
                object.objectDetails = "sprinkler";
        }
        if (message.smokeSensor != null && message.hasOwnProperty("smokeSensor")) {
            object.smokeSensor = $root.SmokeSensor.toObject(message.smokeSensor, options);
            if (options.oneofs)
                object.objectDetails = "smokeSensor";
        }
        return object;
    };

    /**
     * Converts this SmartObjectDetails to JSON.
     * @function toJSON
     * @memberof SmartObjectDetails
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SmartObjectDetails.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SmartObjectDetails
     * @function getTypeUrl
     * @memberof SmartObjectDetails
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SmartObjectDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SmartObjectDetails";
    };

    return SmartObjectDetails;
})();

export const LightDetails = $root.LightDetails = (() => {

    /**
     * Properties of a LightDetails.
     * @exports ILightDetails
     * @interface ILightDetails
     * @property {string|null} [name] LightDetails name
     * @property {string|null} [color] LightDetails color
     */

    /**
     * Constructs a new LightDetails.
     * @exports LightDetails
     * @classdesc Represents a LightDetails.
     * @implements ILightDetails
     * @constructor
     * @param {ILightDetails=} [properties] Properties to set
     */
    function LightDetails(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LightDetails name.
     * @member {string} name
     * @memberof LightDetails
     * @instance
     */
    LightDetails.prototype.name = "";

    /**
     * LightDetails color.
     * @member {string} color
     * @memberof LightDetails
     * @instance
     */
    LightDetails.prototype.color = "";

    /**
     * Creates a new LightDetails instance using the specified properties.
     * @function create
     * @memberof LightDetails
     * @static
     * @param {ILightDetails=} [properties] Properties to set
     * @returns {LightDetails} LightDetails instance
     */
    LightDetails.create = function create(properties) {
        return new LightDetails(properties);
    };

    /**
     * Encodes the specified LightDetails message. Does not implicitly {@link LightDetails.verify|verify} messages.
     * @function encode
     * @memberof LightDetails
     * @static
     * @param {ILightDetails} message LightDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LightDetails.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
        return writer;
    };

    /**
     * Encodes the specified LightDetails message, length delimited. Does not implicitly {@link LightDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LightDetails
     * @static
     * @param {ILightDetails} message LightDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LightDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LightDetails message from the specified reader or buffer.
     * @function decode
     * @memberof LightDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LightDetails} LightDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LightDetails.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LightDetails();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.color = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LightDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LightDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LightDetails} LightDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LightDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LightDetails message.
     * @function verify
     * @memberof LightDetails
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LightDetails.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isString(message.color))
                return "color: string expected";
        return null;
    };

    /**
     * Creates a LightDetails message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LightDetails
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LightDetails} LightDetails
     */
    LightDetails.fromObject = function fromObject(object) {
        if (object instanceof $root.LightDetails)
            return object;
        let message = new $root.LightDetails();
        if (object.name != null)
            message.name = String(object.name);
        if (object.color != null)
            message.color = String(object.color);
        return message;
    };

    /**
     * Creates a plain object from a LightDetails message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LightDetails
     * @static
     * @param {LightDetails} message LightDetails
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LightDetails.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.color = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        return object;
    };

    /**
     * Converts this LightDetails to JSON.
     * @function toJSON
     * @memberof LightDetails
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LightDetails.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LightDetails
     * @function getTypeUrl
     * @memberof LightDetails
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LightDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LightDetails";
    };

    return LightDetails;
})();

export const LuminositySensor = $root.LuminositySensor = (() => {

    /**
     * Properties of a LuminositySensor.
     * @exports ILuminositySensor
     * @interface ILuminositySensor
     * @property {string|null} [name] LuminositySensor name
     * @property {number|null} [reading] LuminositySensor reading
     */

    /**
     * Constructs a new LuminositySensor.
     * @exports LuminositySensor
     * @classdesc Represents a LuminositySensor.
     * @implements ILuminositySensor
     * @constructor
     * @param {ILuminositySensor=} [properties] Properties to set
     */
    function LuminositySensor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LuminositySensor name.
     * @member {string} name
     * @memberof LuminositySensor
     * @instance
     */
    LuminositySensor.prototype.name = "";

    /**
     * LuminositySensor reading.
     * @member {number} reading
     * @memberof LuminositySensor
     * @instance
     */
    LuminositySensor.prototype.reading = 0;

    /**
     * Creates a new LuminositySensor instance using the specified properties.
     * @function create
     * @memberof LuminositySensor
     * @static
     * @param {ILuminositySensor=} [properties] Properties to set
     * @returns {LuminositySensor} LuminositySensor instance
     */
    LuminositySensor.create = function create(properties) {
        return new LuminositySensor(properties);
    };

    /**
     * Encodes the specified LuminositySensor message. Does not implicitly {@link LuminositySensor.verify|verify} messages.
     * @function encode
     * @memberof LuminositySensor
     * @static
     * @param {ILuminositySensor} message LuminositySensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuminositySensor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.reading != null && Object.hasOwnProperty.call(message, "reading"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.reading);
        return writer;
    };

    /**
     * Encodes the specified LuminositySensor message, length delimited. Does not implicitly {@link LuminositySensor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LuminositySensor
     * @static
     * @param {ILuminositySensor} message LuminositySensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LuminositySensor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LuminositySensor message from the specified reader or buffer.
     * @function decode
     * @memberof LuminositySensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LuminositySensor} LuminositySensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuminositySensor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LuminositySensor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.reading = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LuminositySensor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LuminositySensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LuminositySensor} LuminositySensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LuminositySensor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LuminositySensor message.
     * @function verify
     * @memberof LuminositySensor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LuminositySensor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.reading != null && message.hasOwnProperty("reading"))
            if (typeof message.reading !== "number")
                return "reading: number expected";
        return null;
    };

    /**
     * Creates a LuminositySensor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LuminositySensor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LuminositySensor} LuminositySensor
     */
    LuminositySensor.fromObject = function fromObject(object) {
        if (object instanceof $root.LuminositySensor)
            return object;
        let message = new $root.LuminositySensor();
        if (object.name != null)
            message.name = String(object.name);
        if (object.reading != null)
            message.reading = Number(object.reading);
        return message;
    };

    /**
     * Creates a plain object from a LuminositySensor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LuminositySensor
     * @static
     * @param {LuminositySensor} message LuminositySensor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LuminositySensor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.reading = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.reading != null && message.hasOwnProperty("reading"))
            object.reading = options.json && !isFinite(message.reading) ? String(message.reading) : message.reading;
        return object;
    };

    /**
     * Converts this LuminositySensor to JSON.
     * @function toJSON
     * @memberof LuminositySensor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LuminositySensor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LuminositySensor
     * @function getTypeUrl
     * @memberof LuminositySensor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LuminositySensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LuminositySensor";
    };

    return LuminositySensor;
})();

export const SmokeSensor = $root.SmokeSensor = (() => {

    /**
     * Properties of a SmokeSensor.
     * @exports ISmokeSensor
     * @interface ISmokeSensor
     * @property {string|null} [name] SmokeSensor name
     * @property {number|null} [reading] SmokeSensor reading
     */

    /**
     * Constructs a new SmokeSensor.
     * @exports SmokeSensor
     * @classdesc Represents a SmokeSensor.
     * @implements ISmokeSensor
     * @constructor
     * @param {ISmokeSensor=} [properties] Properties to set
     */
    function SmokeSensor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SmokeSensor name.
     * @member {string} name
     * @memberof SmokeSensor
     * @instance
     */
    SmokeSensor.prototype.name = "";

    /**
     * SmokeSensor reading.
     * @member {number} reading
     * @memberof SmokeSensor
     * @instance
     */
    SmokeSensor.prototype.reading = 0;

    /**
     * Creates a new SmokeSensor instance using the specified properties.
     * @function create
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor=} [properties] Properties to set
     * @returns {SmokeSensor} SmokeSensor instance
     */
    SmokeSensor.create = function create(properties) {
        return new SmokeSensor(properties);
    };

    /**
     * Encodes the specified SmokeSensor message. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @function encode
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor} message SmokeSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmokeSensor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.reading != null && Object.hasOwnProperty.call(message, "reading"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.reading);
        return writer;
    };

    /**
     * Encodes the specified SmokeSensor message, length delimited. Does not implicitly {@link SmokeSensor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SmokeSensor
     * @static
     * @param {ISmokeSensor} message SmokeSensor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SmokeSensor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer.
     * @function decode
     * @memberof SmokeSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SmokeSensor} SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmokeSensor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SmokeSensor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.reading = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SmokeSensor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SmokeSensor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SmokeSensor} SmokeSensor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SmokeSensor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SmokeSensor message.
     * @function verify
     * @memberof SmokeSensor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SmokeSensor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.reading != null && message.hasOwnProperty("reading"))
            if (typeof message.reading !== "number")
                return "reading: number expected";
        return null;
    };

    /**
     * Creates a SmokeSensor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SmokeSensor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SmokeSensor} SmokeSensor
     */
    SmokeSensor.fromObject = function fromObject(object) {
        if (object instanceof $root.SmokeSensor)
            return object;
        let message = new $root.SmokeSensor();
        if (object.name != null)
            message.name = String(object.name);
        if (object.reading != null)
            message.reading = Number(object.reading);
        return message;
    };

    /**
     * Creates a plain object from a SmokeSensor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SmokeSensor
     * @static
     * @param {SmokeSensor} message SmokeSensor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SmokeSensor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.reading = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.reading != null && message.hasOwnProperty("reading"))
            object.reading = options.json && !isFinite(message.reading) ? String(message.reading) : message.reading;
        return object;
    };

    /**
     * Converts this SmokeSensor to JSON.
     * @function toJSON
     * @memberof SmokeSensor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SmokeSensor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SmokeSensor
     * @function getTypeUrl
     * @memberof SmokeSensor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SmokeSensor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SmokeSensor";
    };

    return SmokeSensor;
})();

export const Sprinkler = $root.Sprinkler = (() => {

    /**
     * Properties of a Sprinkler.
     * @exports ISprinkler
     * @interface ISprinkler
     * @property {string|null} [name] Sprinkler name
     */

    /**
     * Constructs a new Sprinkler.
     * @exports Sprinkler
     * @classdesc Represents a Sprinkler.
     * @implements ISprinkler
     * @constructor
     * @param {ISprinkler=} [properties] Properties to set
     */
    function Sprinkler(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Sprinkler name.
     * @member {string} name
     * @memberof Sprinkler
     * @instance
     */
    Sprinkler.prototype.name = "";

    /**
     * Creates a new Sprinkler instance using the specified properties.
     * @function create
     * @memberof Sprinkler
     * @static
     * @param {ISprinkler=} [properties] Properties to set
     * @returns {Sprinkler} Sprinkler instance
     */
    Sprinkler.create = function create(properties) {
        return new Sprinkler(properties);
    };

    /**
     * Encodes the specified Sprinkler message. Does not implicitly {@link Sprinkler.verify|verify} messages.
     * @function encode
     * @memberof Sprinkler
     * @static
     * @param {ISprinkler} message Sprinkler message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sprinkler.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Sprinkler message, length delimited. Does not implicitly {@link Sprinkler.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Sprinkler
     * @static
     * @param {ISprinkler} message Sprinkler message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sprinkler.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Sprinkler message from the specified reader or buffer.
     * @function decode
     * @memberof Sprinkler
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Sprinkler} Sprinkler
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sprinkler.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sprinkler();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Sprinkler message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Sprinkler
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Sprinkler} Sprinkler
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sprinkler.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Sprinkler message.
     * @function verify
     * @memberof Sprinkler
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Sprinkler.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a Sprinkler message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Sprinkler
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Sprinkler} Sprinkler
     */
    Sprinkler.fromObject = function fromObject(object) {
        if (object instanceof $root.Sprinkler)
            return object;
        let message = new $root.Sprinkler();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a Sprinkler message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Sprinkler
     * @static
     * @param {Sprinkler} message Sprinkler
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Sprinkler.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Sprinkler to JSON.
     * @function toJSON
     * @memberof Sprinkler
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Sprinkler.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Sprinkler
     * @function getTypeUrl
     * @memberof Sprinkler
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Sprinkler.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Sprinkler";
    };

    return Sprinkler;
})();

/**
 * AirConditionerMode enum.
 * @exports AirConditionerMode
 * @enum {number}
 * @property {number} FAN_MODE=0 FAN_MODE value
 * @property {number} SILENT_MODE=1 SILENT_MODE value
 * @property {number} EXTREME_CHILL=2 EXTREME_CHILL value
 */
export const AirConditionerMode = $root.AirConditionerMode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FAN_MODE"] = 0;
    values[valuesById[1] = "SILENT_MODE"] = 1;
    values[valuesById[2] = "EXTREME_CHILL"] = 2;
    return values;
})();

export const AirConditionerDetails = $root.AirConditionerDetails = (() => {

    /**
     * Properties of an AirConditionerDetails.
     * @exports IAirConditionerDetails
     * @interface IAirConditionerDetails
     * @property {number|null} [temperature] AirConditionerDetails temperature
     * @property {AirConditionerMode|null} [mode] AirConditionerDetails mode
     */

    /**
     * Constructs a new AirConditionerDetails.
     * @exports AirConditionerDetails
     * @classdesc Represents an AirConditionerDetails.
     * @implements IAirConditionerDetails
     * @constructor
     * @param {IAirConditionerDetails=} [properties] Properties to set
     */
    function AirConditionerDetails(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AirConditionerDetails temperature.
     * @member {number} temperature
     * @memberof AirConditionerDetails
     * @instance
     */
    AirConditionerDetails.prototype.temperature = 0;

    /**
     * AirConditionerDetails mode.
     * @member {AirConditionerMode} mode
     * @memberof AirConditionerDetails
     * @instance
     */
    AirConditionerDetails.prototype.mode = 0;

    /**
     * Creates a new AirConditionerDetails instance using the specified properties.
     * @function create
     * @memberof AirConditionerDetails
     * @static
     * @param {IAirConditionerDetails=} [properties] Properties to set
     * @returns {AirConditionerDetails} AirConditionerDetails instance
     */
    AirConditionerDetails.create = function create(properties) {
        return new AirConditionerDetails(properties);
    };

    /**
     * Encodes the specified AirConditionerDetails message. Does not implicitly {@link AirConditionerDetails.verify|verify} messages.
     * @function encode
     * @memberof AirConditionerDetails
     * @static
     * @param {IAirConditionerDetails} message AirConditionerDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AirConditionerDetails.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperature);
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
        return writer;
    };

    /**
     * Encodes the specified AirConditionerDetails message, length delimited. Does not implicitly {@link AirConditionerDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AirConditionerDetails
     * @static
     * @param {IAirConditionerDetails} message AirConditionerDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AirConditionerDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AirConditionerDetails message from the specified reader or buffer.
     * @function decode
     * @memberof AirConditionerDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AirConditionerDetails} AirConditionerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AirConditionerDetails.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AirConditionerDetails();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.int32();
                    break;
                }
            case 2: {
                    message.mode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AirConditionerDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AirConditionerDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AirConditionerDetails} AirConditionerDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AirConditionerDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AirConditionerDetails message.
     * @function verify
     * @memberof AirConditionerDetails
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AirConditionerDetails.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            switch (message.mode) {
            default:
                return "mode: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates an AirConditionerDetails message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AirConditionerDetails
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AirConditionerDetails} AirConditionerDetails
     */
    AirConditionerDetails.fromObject = function fromObject(object) {
        if (object instanceof $root.AirConditionerDetails)
            return object;
        let message = new $root.AirConditionerDetails();
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        switch (object.mode) {
        default:
            if (typeof object.mode === "number") {
                message.mode = object.mode;
                break;
            }
            break;
        case "FAN_MODE":
        case 0:
            message.mode = 0;
            break;
        case "SILENT_MODE":
        case 1:
            message.mode = 1;
            break;
        case "EXTREME_CHILL":
        case 2:
            message.mode = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from an AirConditionerDetails message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AirConditionerDetails
     * @static
     * @param {AirConditionerDetails} message AirConditionerDetails
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AirConditionerDetails.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.temperature = 0;
            object.mode = options.enums === String ? "FAN_MODE" : 0;
        }
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = options.enums === String ? $root.AirConditionerMode[message.mode] === undefined ? message.mode : $root.AirConditionerMode[message.mode] : message.mode;
        return object;
    };

    /**
     * Converts this AirConditionerDetails to JSON.
     * @function toJSON
     * @memberof AirConditionerDetails
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AirConditionerDetails.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AirConditionerDetails
     * @function getTypeUrl
     * @memberof AirConditionerDetails
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AirConditionerDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AirConditionerDetails";
    };

    return AirConditionerDetails;
})();

export const TemperatureSensorDetails = $root.TemperatureSensorDetails = (() => {

    /**
     * Properties of a TemperatureSensorDetails.
     * @exports ITemperatureSensorDetails
     * @interface ITemperatureSensorDetails
     * @property {number|null} [temperature] TemperatureSensorDetails temperature
     */

    /**
     * Constructs a new TemperatureSensorDetails.
     * @exports TemperatureSensorDetails
     * @classdesc Represents a TemperatureSensorDetails.
     * @implements ITemperatureSensorDetails
     * @constructor
     * @param {ITemperatureSensorDetails=} [properties] Properties to set
     */
    function TemperatureSensorDetails(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TemperatureSensorDetails temperature.
     * @member {number} temperature
     * @memberof TemperatureSensorDetails
     * @instance
     */
    TemperatureSensorDetails.prototype.temperature = 0;

    /**
     * Creates a new TemperatureSensorDetails instance using the specified properties.
     * @function create
     * @memberof TemperatureSensorDetails
     * @static
     * @param {ITemperatureSensorDetails=} [properties] Properties to set
     * @returns {TemperatureSensorDetails} TemperatureSensorDetails instance
     */
    TemperatureSensorDetails.create = function create(properties) {
        return new TemperatureSensorDetails(properties);
    };

    /**
     * Encodes the specified TemperatureSensorDetails message. Does not implicitly {@link TemperatureSensorDetails.verify|verify} messages.
     * @function encode
     * @memberof TemperatureSensorDetails
     * @static
     * @param {ITemperatureSensorDetails} message TemperatureSensorDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensorDetails.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified TemperatureSensorDetails message, length delimited. Does not implicitly {@link TemperatureSensorDetails.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TemperatureSensorDetails
     * @static
     * @param {ITemperatureSensorDetails} message TemperatureSensorDetails message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TemperatureSensorDetails.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TemperatureSensorDetails message from the specified reader or buffer.
     * @function decode
     * @memberof TemperatureSensorDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TemperatureSensorDetails} TemperatureSensorDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensorDetails.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TemperatureSensorDetails();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.temperature = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TemperatureSensorDetails message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TemperatureSensorDetails
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TemperatureSensorDetails} TemperatureSensorDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TemperatureSensorDetails.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TemperatureSensorDetails message.
     * @function verify
     * @memberof TemperatureSensorDetails
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TemperatureSensorDetails.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        return null;
    };

    /**
     * Creates a TemperatureSensorDetails message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TemperatureSensorDetails
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TemperatureSensorDetails} TemperatureSensorDetails
     */
    TemperatureSensorDetails.fromObject = function fromObject(object) {
        if (object instanceof $root.TemperatureSensorDetails)
            return object;
        let message = new $root.TemperatureSensorDetails();
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        return message;
    };

    /**
     * Creates a plain object from a TemperatureSensorDetails message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TemperatureSensorDetails
     * @static
     * @param {TemperatureSensorDetails} message TemperatureSensorDetails
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TemperatureSensorDetails.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.temperature = 0;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        return object;
    };

    /**
     * Converts this TemperatureSensorDetails to JSON.
     * @function toJSON
     * @memberof TemperatureSensorDetails
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TemperatureSensorDetails.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TemperatureSensorDetails
     * @function getTypeUrl
     * @memberof TemperatureSensorDetails
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TemperatureSensorDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TemperatureSensorDetails";
    };

    return TemperatureSensorDetails;
})();

export { $root as default };
