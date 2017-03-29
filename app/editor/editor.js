import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';

export React.createClass({
	getInitialState: function() {
		return {
			code: "// Code",
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
	},
	render: function() {
		var options = {
			lineNumbers: true,
      mode:'javascript',
      theme:'ambiance'
		};
		return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
	}
});

//ReactDOM.render(<App />, document.getElementById('app'));