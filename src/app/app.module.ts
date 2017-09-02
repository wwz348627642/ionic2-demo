import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JobPage } from '../pages/job/job';
import { QuestionPage } from '../pages/question/question';
import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { ArticlePage } from '../pages/article/article';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { UserPage } from '../pages/user/user';
import { AboutPage } from '../pages/about/about';
import { WritePage } from '../pages/write/write';

@NgModule({
  declarations: [
    MyApp,
    JobPage,
    QuestionPage,
    HomePage,
    SettingPage,
    TabsPage,
    ArticlePage,
    LoginPage,
    MessagePage,
    UserPage,
    AboutPage,
    WritePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JobPage,
    QuestionPage,
    HomePage,
    SettingPage,
    TabsPage,
    ArticlePage,
    LoginPage,
    MessagePage,
    UserPage,
    AboutPage,
    WritePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
