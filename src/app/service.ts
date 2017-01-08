import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService{

    constructor(private http: Http){ }

    getData(){
    	let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        const token = 'Bearer AAAAAAAAAAAAAAAAAAAAALuzygAAAAAAJjhIRVCNYPm%2FWF6%2BsLYaaVqPhaE%3DQZ9dPVXv3NkaNJwPPH1XDxuLv3ORmd8J3BRqCD1I2uEjYqPxr5';

    	headers.append('Authorization', token);
    	headers.append('Access-Control-Allow-Origin','*');

	    var url = "http://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=twitterapi";

	    return this.http.get(url, options);

	}
}


