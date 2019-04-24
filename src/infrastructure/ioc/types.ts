
const TYPES = {
    ReadAddressGateway          : Symbol.for('ReadAddressGateway'),
    ReadAddressInteractor       : Symbol.for('ReadAddressInteractor'),
    ReadAddressPresenter        : Symbol.for('ReadAddressPresenter'),
    ReadValidatorGateway        : Symbol.for('ReadValidatorGateway'),
    ReadAdddressResposeMapper   : Symbol.for('ReadAdddressResposeMapper'),
    JoiValidationErrorParser      : Symbol.for('JoiValidationErrorParser'),
    JsonSchemaValidationErrorParser      : Symbol.for('JsonSchemaValidationErrorParser'),
    ReadAddressController       : Symbol.for('ReadAddressController'),
    JoiValidatorGateway           : Symbol.for('JoiValidatorGateway'),
    JsonSchemaValidatorGateway           : Symbol.for('JsonSchemaValidatorGateway'),
    MongoErrorParser            : Symbol.for('MongoErrorParser')
}

export default TYPES;
