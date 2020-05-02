import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({robots: json})
        )
    }

    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
            return <h1>loading</h1>
        } else{
        return (
            <div className='tc'>
                <h1 className='f1'>ROBOSEARCH</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robot={filterRobots} />
                </Scroll>
            </div>
            );
        }
    }
}

export default App;
