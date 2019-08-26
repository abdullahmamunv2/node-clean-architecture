export const TYPE_AUTHORIZATION = {
    AUTHORIZE       : Symbol.for('IAuthorization<U,V>'),
    SCOPE_GATEWAY   : Symbol.for('IScopeGateway'),
    SCOPE_VALIDAOR  : Symbol.for('IScopeValidator<T>'),
    TOKEN_VALIDATOR : Symbol.for('ITokenValidator<T>'),
    TOKEN_PARSER    : Symbol.for('ITokenParser<V>')
}

export const TYPE_INTERACTOR = {
    EXECUTOR          : Symbol.for('InteractorExecutor')
}

export const TYPE_IO_PORT = {
    INTERACTOR              : Symbol.for('Interactor<T>'),
    PRESENTER               : Symbol.for('IPresenter<T>')
}

export const TYPE_VALIDATOR = {
    PARSER : Symbol.for('IValidationErrorParser')
}

export const TYPE_MAPPER = {
    MAPPER : Symbol.for('IResponseMapper<T,V>')
}

export const TYPE_ERROR = {
    PARSER : Symbol.for('IErrorParser<T,V>'),

}

