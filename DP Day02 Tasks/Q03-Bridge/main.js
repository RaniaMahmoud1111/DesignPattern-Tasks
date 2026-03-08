import { Controller,AdvController } from "./Controller.js";
import { TV,Speaker } from "./Devices.js";

const contrl=new Controller(new TV());
contrl.increase()
contrl.decrease();

const advContrl=new AdvController(new Speaker());
advContrl.increase();
advContrl.decrease();
advContrl.mute();