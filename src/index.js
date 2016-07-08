import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube api key
const API_KEY = 'AIzaSyB0Ig-vpxvTu2T209WZezq9Kg5_W-Ot78Q';

/*
    Below function uses the youtube api search module to send an object with the api key and search term
    then running a function to log the data (an array called myData) returned from the search to the console.
    YTSearch( {key:API_KEY, term:'canon 6d'}, function(myData){console.log(myData);} );
*/

/*
    Creating a new component. This component ought to generate some HTML.

    Take this component's generated HTML and render it to the page by entering it
    into the DOM.
*/

// const belongs to ES2016/ ES6. Constant/static.
// '() => {}' is ES6 syntax, same as function(){}.
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch(
            {key:API_KEY, term:'canon 6d'},
            (videos) => {
                this.setState({videos});
                //same as 'this.setState({videos:videos});'
            }
        );
    }
    /*
        You can't write html in javascript, so you can call this JSX. JSX looks
        like HTML but just a subscript of JS.
        The browser can't render JSX, so that's why we're using the webpack and
        babel modules to dynamically compile it into regular javascript/ HTML for the
        browser to read.
    */
    render(){
        return (
            <div>
                <div className="row">
                    <div className="small-1 large-3 columns hidebar">x</div>
                    <div className="small-10 large-6 columns">
                        <SearchBar/>
                    </div>
                    <div className="small-1 large-3 columns hidebar">x</div>
                </div>
                <div className="row">
                    <div className="small-1 large-3 columns hidebar">x</div>
                    <div className="small-10 large-6 columns">
                        <VideoDetail video={this.state.videos[0]} />
                    </div>
                    <div className="small-1 large-3 columns hidebar">x</div>
                </div>
                <div className="row">
                    <div className="small-1 large-3 columns hidebar">x</div>
                    <div className="small-10 large-6 columns">
                        <VideoList videos={this.state.videos}/>
                    </div>
                    <div className="small-1 large-3 columns hidebar">x</div>
                </div>
            </div>
        );
    }
}

/*
    Simply passing in 'App' isn't good enough. 'App' represents my class called 'App'.
    Instead, I'd need to pass in an instance of 'App'. I instantiate the class with
    <App />. Similarly in C++, I can't just pass in one of my classes as a parameter/argument,
    I need to create an object from that class, then pass in that object as a parameter
    or argument.

    Additionally, ReactDOM.render(<App />); alone isn't good enough. I'm right now passing
    in an instance of the 'App' class with <App />, but I also need to pass in a second
    argument telling ReactDOM what HTML element to send the data too. So ReactDOM knows
    it needs to render something, but it doesn't know where. So I pass in
    document.querySelector('.container') to tell ReactDOM to target the element with that
    class.
*/
ReactDOM.render(<App />, document.querySelector('.container'));
