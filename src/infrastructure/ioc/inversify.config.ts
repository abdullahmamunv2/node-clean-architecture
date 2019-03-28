import { Container } from "inversify";
import TYPES from './types'
import * as I from './interfaces'
import * as E from './entities'


const IOContainer = new Container();

IOContainer.bind<I.IReadAddressGateWay>(TYPES.ReadAddressGateway).to(E.ReadAddressGateWay);
IOContainer.bind<I.IReadAddressInteractor>(TYPES.ReadAddressInteractor).to(E.ReadAddressInteractor);
IOContainer.bind<E.ReadAddressController>(TYPES.ReadAddressController).to(E.ReadAddressController);
IOContainer.bind<I.IReadAddressPresenter>(TYPES.ReadAddressPresenter).to(E.ReadAddressPresenter);
IOContainer.bind<I.IReadValidatorGateway>(TYPES.ReadValidatorGateway).to(E.ReadValidatorGateway);
IOContainer.bind<I.IValidationErrorParser<any,E.ValidationError>>(TYPES.ValidationErrorParser).to(E.JoiErrorParser);
IOContainer.bind<I.IReadAdddressResposeMapper>(TYPES.ReadAdddressResposeMapper).to(E.ReadAddressResponseMapper);


export default IOContainer;