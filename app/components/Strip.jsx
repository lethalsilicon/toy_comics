import React from 'react';
import Panel from './Panel.jsx';

var Strip = React.createClass({

  getInitialState: function() {
    return {
      Panels: []
    };
  },

  addPanel: function() {
      var newPanel = this.state.Panels;
      newPanel.push(<Panel deletePanel={this.deletePanel} columns={4} title={"Example Title"} />);
      this.setState({Strips: newPanel});
  },

  btnstyle: {
    clear: 'both',
    display: 'block'
  },

  deletePanel: function(e) {
    var target=e.target.parent;
    var newPanel = this.state.Panels;
    var index = newPanel.indexOf(target);
    newPanel.splice(index, 1);
    this.setState({Panels: newPanel});
  },

  render: function() {
    return(
      <div className="col card-panel pink lighten-2 s12" style={{'padding': '.75em'}}>
        {this.state.Strips}
        <a onClick={this.addPanel} className={"col s2 offset-s5 btn waves-effect waves-light teal"} style={this.btnstyle}><i className={"material-icons"}>add</i></a>
      </div>
      
      )
  }
});

module.exports = Strip;