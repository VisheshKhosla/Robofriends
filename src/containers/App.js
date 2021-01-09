// App is our parent component and is going to have CardList as it's child. 
import React,{Component} from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/Scroll.js';
import './App.css'
class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchField:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').
		then(response=>response.json())
		.then(users=>{
			this.setState({robots:users})
		});
	}
	searchChanges=(event)=>{
		this.setState({searchField:event.target.value});
		console.log(event.target.value);
	}
	render(){
		const filtered_robots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.length==0){
			return(
				<div className='tc'>
					<h1>Loading</h1>
				</div>
			);
		}
		return(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<Searchbox searchChange={this.searchChanges}/>
				<Scroll>
					<Cardlist robots={filtered_robots}/>
				</Scroll>
			</div>
		);
	}

};
export default App;