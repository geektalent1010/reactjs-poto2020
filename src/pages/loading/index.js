import React, { Component } from 'react';
import '../loading/style.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3500);
    ReactGA.initialize("UA-154721739-1");
    ReactGA.pageview('Loading Screen');
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div className="Loading-header">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Motasim Foad</title>
                <link rel="canonical" href="http://motasimfoad.com/" />
                <meta name="description" content="Motasim Foad - Product Manager | Project Manager | Software Engineer" />
           </Helmet>
          <Loader
          type="Triangle"
          color="#ffffff"
          height={200}
          width={200}
          timeout={3500} //3.5 secs
          />
          <p className="Loading-text">Loading</p>
        </div>
  }
}

export default Loading;
