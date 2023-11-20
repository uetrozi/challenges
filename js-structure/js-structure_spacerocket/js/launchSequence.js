// Implement the launch sequence function here and export it as the default export.

import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { rocket } from "./core/rocket.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  if ((rocket.fuel = true)) {
    for (let counter = 0; counter < rocket.requiredCountdown; counter++) {
      countdown();
    }
  }
  if ((rocket.countdown = rocket.requiredCountdown)) {
    liftoff();
  }
  if ((rocket.liftoff = true)) {
    deployPayload();
  }
}
