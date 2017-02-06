import React, {Component, PropTypes} from 'react';

import MainSearchBoard from './MainSearchBoard';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        
    }
    

    render() {
        return (
            <div>
                <MainSearchBoard />
            </div>
        );
    }
}

MainPage.propTypes = {

};

export default MainPage;