import React from 'react';

var DeletePanel = React.createClass({

  render: function() {
    return(
      <div>
      <a onClick={this.props.deletePanel} className={"btn-floating btn waves-effect waves-light red"}><i className={"material-icons"}>delete</i></a>
      </div>
    )
  }
});

module.exports = DeletePanel;
