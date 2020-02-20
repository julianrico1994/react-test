import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import './index.css'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import InputComponents from './components/InputComponents/InputComponents';
import VotingList from './components/VotingList/VotingList';
import RegisterForm from './components/RegisterForm/RegisterForm';
import YouAreIn from './components/RegisterForm/YouAreIn'

const App = () => {
    return (
        <Router>
            <div className='app container shadow p-3 mb-5 bg-white rounded'>
                <div className="row">
                    <Menu />
                    <Switch>
                        <Route path='/focusable-input' component={InputComponents} />
                        <Route path='/voting-list/:candidates' component={VotingList} />
                        <Route path='/register-form' component={RegisterForm} />
                        <Route path='/you-are-in' component={YouAreIn} />
                        <Route exact path="/" component={Home} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;