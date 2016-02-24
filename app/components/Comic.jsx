import React from 'react';
import Strip from './Strip.jsx';

var Comic = React.createClass({

  getInitialState: function() {
    return {
      Strips: []
    };
  },

  addStrip: function() {
      var newStrip = this.state.Strips;
      newStrip.push(<Strip />);
      this.setState({Strips: newStrip});
  },

  render: function() {
    return(
      <div>
        {this.state.Strips}
        <a onClick={this.addStrip} className={"waves-effect waves-light btn col s12"}>Add Strip</a> 
      </div>
    )
  }
});

module.exports = Comic;