import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (isPending){
            return <h1>loading</h1>
        } else{
        return (
            <div className='tc'>
                <h1 className='f1'>ROBOSEARCH</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robot={filterRobots} />
                </Scroll>
            </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);