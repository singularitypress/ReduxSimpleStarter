// even if we're not directly mentioning React, we need to import it.
// needs import React so that the JSX can be translated at all.
// 'className' in JSX is translated into a regular HTML 'class'
// Importing 'React, {Component}' means import 'react' and the 'Component' method
// '{Component}' gets the Component method and stores it in a Component variable simulaneously.
/*
    Classes have a state which can be stored in an object and be referenced to. You create
    the constructor method and pass in 'props', then in constructor you execute 'super()'
    and pass in 'props' (think of super for overriding methods in objective-c). Then you
    define this.state as an object with whatever key/value pairs you want.
*/
/*
    So, for <input id="mysearch" onChange={this.onMyInputChange}/> what I'm doing is
    referring to the onMyInputChange method I defined in this class and I'm running
    it whenever there's an onChange (a regular JS event/method) on my input element.
*/
import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    id="mysearch"
                    onChange={(event) => this.setState({term:event.target.value})} />
            </div>
        );
    }

    /*
        Event handler for the input. 'event' could be named anything. Treated as an
        event object regardless. Could have called it 'e' or something. When assigning
        this method to onChange, it'll get treated as an event object no matter what.
        'event.target.value' denotes the input's onChange event targeting the value
        of the input element. So log the value of the input onChange.
    */
}

// To make the SearchBar class usable to any other components we need to export it.
export default SearchBar;
