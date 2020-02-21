import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './index.css'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import InputComponents from './components/InputComponents/InputComponents';
import VotingList from './components/VotingList/VotingList';
import RegisterForm from './components/RegisterForm/RegisterForm';
import YouAreIn from './components/RegisterForm/presentationalComponents/YouAreIn'

const nameApp = '/react-test'

const App = () => {
    return (
        <Router>
            <div className='app container shadow p-3 mb-5 bg-white rounded'>
                <div className="row">
                    <Menu nameApp={nameApp} />
                    <Switch>
                        <Route path={`${nameApp}/focusable-input`} component={InputComponents} />
                        <Route path={`${nameApp}/voting-list/:candidates`} component={VotingList} />
                        <Route path={`${nameApp}/register-form`} component={RegisterForm} />
                        <Route path={`${nameApp}/you-are-in`} component={YouAreIn} />
                        <Route exact path={`${nameApp}/`} component={Home} />
                        {/* <Route component={NoMatch} /> */}
                        <Route component={
                            (props: any) =>
                                React.createElement(NoMatch, {...props , nameApp})}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;