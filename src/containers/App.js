import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import {robots} from './robots';
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component{
	constructor(){ 
		super()
		this.state={
		robots:robots,
		searchfield:''
	}
	}
	onSearchChange=(event) => {
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filteredRobots=this.state.robots.filter(robot=> {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		return (
			<div className='tc' style={{scroll:'no',overflow:'hidden', maxHeight:'100%', margin: '0'}}>
				<h1 className='f1'>Robots</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		 );
}
}

export default App;