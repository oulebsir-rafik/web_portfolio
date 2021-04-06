import React , { useState } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Card from './Card';

//function that delete an element in an array
function deleteElement(arr, id) {
	var new_arr = [];
	for (var i = 0; i < arr.length; i++){
		if (i !== id){
			new_arr.push(arr[i])
		}
	}
	return new_arr;
}


// list class component
class List extends React.Component {

// initiate the states of the list component
	constructor(props){
		super(props);
		this.state = {people : props.birthdays};
		// create an function to modify the state of the app
		this.clearOneRecord = this.clearOneRecord.bind(this)
	}

//function to clear all the birthdays
	clearAllRecord() {
		this.setState({
			people :  [],
		}, () => {
			console.log(this.state.birth_list)
		}
	);
	}

//function to clear just one birthday from the List
	clearOneRecord(id){
		this.setState(birthday_list =>({
			people: deleteElement(birthday_list.people, birthday_list.people.findIndex((i) => i.id === id))
}))
}

	render(){
	//create a mini nav bar to display the number of birthday and the button to clear all birthdays
	return (
	<div>
		<div className="level">
			<div className="level-left">
				<p className="level-item"><h2 className="is-size-4">{this.state.people.length} birthdays today</h2></p>
			</div>
			<div className="level-right">
				<p className="level-item"><button className="button is-success" onClick={()=>this.clearAllRecord()}>Clear all</button></p>
			</div>
		</div>
	{/* map over prop "people" and display only the names in any way you like*/}
		{this.state.people.map((item) => {
		return (
      <div className="column is-half is-offset-one-quarter">
				<Card person = {item} clearThisCard= {this.clearOneRecord}/>
      </div>
		)})}
	</div>
    );
	}
}

export default List
