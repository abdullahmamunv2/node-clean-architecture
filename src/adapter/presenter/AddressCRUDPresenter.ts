
import { AddressViewModel}    from '@adapter/viewmodel'
import {ResModel} from '@core/RRmodel'
import {OutputPort} from '@core/io.port'

export class AddressCRUDPresenter implements OutputPort.IAddressCRUD{

    viewModel : AddressViewModel.IAddressCRUDViewModel;
    constructor(viewModel : AddressViewModel.IAddressCRUDViewModel){
        this.viewModel = viewModel;
    }
    presentCreateAddress(response: ResModel.BaseResponse): void {
        throw new Error("Method not implemented.");
    }
    presentUpdateAddress(response: ResModel.BaseResponse): void {
        throw new Error("Method not implemented.");
    }
    presentDeleteAddress(response: ResModel.BaseResponse): void {
        throw new Error("Method not implemented.");
    }
    presentReadAddress(response: ResModel.BaseResponse): void {
        this.viewModel.readAddress(response);
    }
    presentReadAllAddress(response: ResModel.BaseResponse): void {
        throw new Error("Method not implemented.");
    }

    


}