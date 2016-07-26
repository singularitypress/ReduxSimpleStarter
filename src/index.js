import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash'; //so that we can use a function that delays the dynamic search (checks onChange every 3 seconds rather than instantly)
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

        this.state = {
            videos: [],
            selectedVideo: null
        };

        // initialize default searchterm when the site loads so it's not empty
        this.videoSearch('the division');
    }

    videoSearch(term) {
        YTSearch(
            {key:API_KEY, term: term},
            (videos) => {
                this.setState({videos: videos, selectedVideo: videos[0]});
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
        // this videoSearch method only exists within the context of render(){}, doesn't clash with videoSearch(term){}
        const videoSearch = _.debounce( (term)=>{this.videoSearch(term)}, 300 );

        return (
            <div>
                <div className="row">
                    <div className="small-12 large-12 columns">
                        <SearchBar onSearchTermChange={videoSearch} />
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 large-8 columns">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="small-12 large-4 columns">
                        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

/*
    onVideoSelect={selectedVideo => this.setState({selectedVideo})} is the same as
    doing:
    (function (selectedVideo) {
        return undefined.setState({ selectedVideo: selectedVideo });
    });
*/

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
