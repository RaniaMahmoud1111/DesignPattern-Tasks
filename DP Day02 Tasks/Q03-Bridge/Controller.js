export class Controller {
    constructor(device) {
        this.device = device;
    }

    increase() {
        this.device.increaseVolume();
    }
    decrease() {
        this.device.decreaseVolume();
    }
}
export class AdvController extends Controller {
    mute() {
        if (this.device.mute) {
            this.device.mute();
        }
    }

}