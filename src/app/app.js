import {render, h, Component, Fragment} from 'preact';
import {Router} from 'preact-router';
import {Home, Page1, Page2, NotFound, Header, Footer} from "./components";

/** @jsx h */

export default class App extends Component {

    handleRoute = (e) => {
        console.log(e);
    };

    render() {
        return (
            <Fragment>
                <Header/>
                <div id="toolbar">
                    <a href="/" title="Home" className="tw-bg-blue-500">
                        Home
                    </a>
                    <a href="/page1" title="Page 1" className="tw-bg-red-500">
                        Page 1
                    </a>
                    <a href="/page2" title="Page 2" className="tw-bg-green-500">
                        Page 2
                    </a>
                    <a href="/page3" title="Page 2" className="tw-bg-orange-500">
                        Page 3
                    </a>
                </div>
                <div id="main">
                    <Router onChange={this.handleRoute}>
                        <Home path="/"/>
                        <Page1 path="/page1"/>
                        <Page2 path="/page2"/>
                        <NotFound default/>
                    </Router>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

render(<App/>, document.body);
