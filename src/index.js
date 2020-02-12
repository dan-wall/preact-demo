import './index.scss';
import {Fragment, render, h} from 'preact';
import {Router, Link} from 'preact-router';

/** @jsx h */

const Home = () => {
    return (
        <h1>Home</h1>
    )
};

const Page1 = () => {
    return (
        <h1>Page 1</h1>
    )
};

const Page2 = () => {
    return (
        <h1>Page 2</h1>
    )
};

const TheRouter = () => {
    return (
        <Router>
            <Home path="/"/>
            <Page1 path="/page1"/>
            <Page2 path="/page2"/>
        </Router>
    )
};

const Toolbar = () => {
    return (
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
        </div>
    )
};


const Header = () => {
    return (
        <div id="header">
            &nbsp;
        </div>
    )
};

const Footer = () => {
    return (
        <div id="footer">
            &nbsp;
        </div>
    )
};

const Main = () => {
    return (
        <div id="main">
            <TheRouter/>
        </div>
    )
};

const Body = () => {
    return (
        <Fragment>
            <Header/>
            <Toolbar/>
            <Main/>
            <Footer/>
        </Fragment>
    )
};

render(<Body/>, document.body);
