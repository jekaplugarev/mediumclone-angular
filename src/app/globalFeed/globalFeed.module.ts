import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FeedComponent} from "../shared/modules/feed/components/feed.component";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {GlobalFeedComponent} from "./components/globalFeed.component";

const routes = [
  {
    path: '',
    component: FeedComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent]
})

export class GlobalFeedModule {

}
