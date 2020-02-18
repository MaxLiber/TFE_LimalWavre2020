// no more used

/*import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouteStateUrl
{
    url: string;
    params: Params;
    queryParams: Params;
}

export class CustomRouteSerializer implements RouterStateSerializer<RouteStateUrl>
{
    serialize(routerState: RouterStateSnapshot): RouteStateUrl
    {
        let route=routerState.root;
        while(route.firstChild)
        {
            route=route.firstChild;
        }
        const {url, root:{queryParams},}=route;
        const {params}=route;
        return {url, params, queryParams};
    }
}
*/
