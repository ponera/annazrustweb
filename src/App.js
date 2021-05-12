import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error"

import Home from "./pages/Home";
import Travel from "./pages/Travel"
import Cooking from "./pages/Cooking";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageNameChange = this.handlePageNameChange.bind(this);
        this.state = {
            theme: 1,
            page: 'home',
            pageName: 'Hello.'
        };
    }

    handleThemeChange(theme) {
        this.setState({theme})
    }

    handlePageChange(page) {
        this.setState({page})
    }

    handlePageNameChange(pageName) {
        this.setState({pageName})
    }

    render() {
        return (
            <div className={'theme-' + this.state.theme + ' ' + this.state.page}>
                <Header pageName={this.state.pageName} />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={props => (
                            <Home {...props}
                                  onThemeChange={this.handleThemeChange}
                                  onPageChange={this.handlePageChange}
                                  onPageNameChange={this.handlePageNameChange}
                            />
                        )}
                    />
                    <Route
                        path="/travel"
                        exact
                        render={props => (
                            <Travel {...props}
                                  onThemeChange={this.handleThemeChange}
                                  onPageChange={this.handlePageChange}
                                  onPageNameChange={this.handlePageNameChange}
                            />
                        )}
                    />
                    <Route
                        path="/cooking"
                        exact
                        render={props => (
                            <Cooking {...props}
                                    onThemeChange={this.handleThemeChange}
                                    onPageChange={this.handlePageChange}
                                    onPageNameChange={this.handlePageNameChange}
                            />
                        )}
                    />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default App;
