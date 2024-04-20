import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin/BaseTaskCheckerPlugin';

export class StubTaskCheckerPlugin extends BaseTaskCheckerPlugin {
  check(): boolean {
    return false;
  }
}
