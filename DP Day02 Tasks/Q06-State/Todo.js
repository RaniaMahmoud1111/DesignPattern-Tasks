export class Todo{
    constructor(state){
        this.state=state;
    }

    setState(state){
        this.state=state;
    }
    request(){
        this.state.handle();
    }
}