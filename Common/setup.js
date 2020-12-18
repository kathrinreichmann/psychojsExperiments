import { PsychoJS } from '../lib/core-2020.1.js';
import { Scheduler } from '../lib/util-2020.1.js';

// init psychoJS:
export const psychoJS = new PsychoJS({
  debug: false,
});

export const expScheduler = new Scheduler(psychoJS);
export const dialogCancelScheduler = new Scheduler(psychoJS);

export function quitPsychoJS() {
    return function () {
        psychoJS._scheduler.stop();
    };
}

dialogCancelScheduler.add(quitPsychoJS, '', false);

export function subjectInfo(demographics) {
    let startDlg = psychoJS.gui.DlgFromDict({
        title: "Click 'OK' to start. Browser will enter full screen mode!",
        dictionary: demographics,
    },);
    return startDlg ;
}
