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
import { NAME_PROYECT } from './components/helpers/constants'

const App = () => {
    return (
        <Router>
            <div className='app container shadow p-3 mb-5 bg-white rounded'>
                <div className="row">
                    <Menu nameApp={NAME_PROYECT} />
                    <Switch>
                        <Route path={`${NAME_PROYECT}/focusable-input`} component={InputComponents} />
                        <Route path={`${NAME_PROYECT}/voting-list/:candidates`} component={VotingList} />
                        <Route path={`${NAME_PROYECT}/register-form`} component={RegisterForm} />
                        <Route path={`${NAME_PROYECT}/you-are-in`} component={YouAreIn} />
                        <Route exact path={`${NAME_PROYECT}/`} component={Home} />
                        <Route exact path={`/`} component={Home} />
                        {/* <Route component={NoMatch} /> */}
                        <Route component={
                            (props: any) =>
                                React.createElement(
                                    NoMatch,
                                    { ...props, nameApp: NAME_PROYECT }
                                )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;