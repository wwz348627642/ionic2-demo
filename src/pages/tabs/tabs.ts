import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { JobPage } from '../job/job';
import { SettingPage } from '../setting/setting';
import { QuestionPage } from '../question/question';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = QuestionPage;
  tab3Root: any = JobPage;
  tab4Root: any = SettingPage;

  constructor() {

  }
}
