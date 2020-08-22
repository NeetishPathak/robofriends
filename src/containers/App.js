
import React, { Component } from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import Error from '../components/error'
import './App.css';


class App extends Component {
    constructor() {
        
        super();
        this.state = {
            robots:  [] ,
            searchString: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchString: event.target.value})
    }

    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users})
        })
    }

    render() {
        const {robots,searchString} = this.state;
        const filteredRobots = robots.filter(robot =>
        {
            return robot.name.toLowerCase().includes(searchString.toLowerCase());
        })

        return !robots.length ?
        <h1>Loading</h1>
        :
        ( 
                <div className = 'tc' >
                    <h1> Robofriends </h1>  
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Error>
                        <CardList robots = { filteredRobots }/>  
                        </Error>
                    </Scroll>
                </div>
        )
    }
}

export default App;