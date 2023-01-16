import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "../types/getFeedResponse.interface";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullApi ='https://conduit.productionready.io/api/' + url

    return this.http.get<GetFeedResponseInterface>(fullApi)
  }
}
