import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <Fragment> */}
                    {/* <Header Link={Link} useHistory={useHistory} /> */}
                    {/* <PrivateRoute Link={Link} exact path="/" component={index} />
                    <PrivateRoute path="/auction/new" component={NewAuction} />
                    <PrivateRoute path="/auction/room/:act_id" component={RoomAuction} /> */}



                    {/* <PrivateRoute Link={Link} exact path="/" component="index" /> */}
                    {/* <PrivateRoute poth="/login" component={Login} />
                </Fragment> */}
                
            </Switch>
        </BrowserRouter>
    );
}