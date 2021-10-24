import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items : [],
			DataisLoaded : false
		};
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((json) => {
		this.setState({
			items: json,
			DataisLoaded: true
		});
		})
	}
	
	render(){
		const {DataisLoaded, items} = this.state;
		if(!DataisLoaded){
			return <div>
			<p>Please wait some time...</p>
			</div>;
		}
	
	return (
	<div className = "App">
	<p>Fetching data from API in React App</p>
	{
		items.map((item) => (
		<div className="api">
		<ol key = {item.id} >
			User Name: {item.username},<br/>
			Full Name: {item.name},<br/>
			Email : {item.email}<br/>
			Phone : {item.phone}<br/>
			Website : {item.website}<br/>
			Address : {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}<br/>
			Geographic Location: {item.address.geo.lat} lattitude, {item.address.geo.lng} longitudte
		</ol>
		</div>
		))
	}
	</div>
	);
}
}

ReactDOM.render(<App/>, document.getElementById('api'));

export default App;
