import { role, step } from './store.js';

export function resetApp() {
  role.set(null);
  step.set(1);
}
