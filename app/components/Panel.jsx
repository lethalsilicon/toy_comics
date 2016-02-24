import React from 'react';
import DeletePanel from './DeletePanel.jsx';
import UploadPhoto from './UploadPhoto.jsx';


var Panel = React.createClass({

  style: {
    height: '100px',
    margin: '0 0 10px 0'
  },

  render: function() {
    var columns = "s"+this.props.columns;
    return(
      <div className={"col hoverable teal lighten-2 " + columns} style={this.style}>
        {this.props.title}
        <UploadPhoto />
        <DeletePanel deletePanel={this.props.deletePanel} />
      </div>
    )
  }
});

module.exports = Panel;