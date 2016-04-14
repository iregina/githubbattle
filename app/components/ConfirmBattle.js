var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj){
	return <pre>{JSON.stringify(obj, null, '')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
	? <p> Loading! </p> : 
	<div> Confirm Battle: {puke(props)} </div>
		// <div> Confirm Battle </div>

	
}
ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired
}

module.exports = ConfirmBattle;