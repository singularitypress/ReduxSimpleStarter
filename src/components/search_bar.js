// even if we're not directly mentioning React, we need to import it.
// needs import React so that the JSX can be translated at all.
// 'className' in JSX is translated into a regular HTML 'class'
// Importing 'React, {Component}' means import 'react' and the 'Component' method
// '{Component}' gets the Component method and stores it in a Component variable simulaneously.
import React, {Component} from 'react';

class SearchBar extends Component{
    render() {
        return (
            <input id="mysearch"/>
        );
    }
}

// To make the SearchBar class usable to any other components we need to export it.
export default SearchBar;
