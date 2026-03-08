export class InProgress {
    handle() {
        console.log("Task is in progress");
    }
}
export class ReadyForReview {
    handle() {
        console.log("Task is ready for review");
    }
}
export class Done {
    handle() {
        console.log("Task is completed");
    }
}