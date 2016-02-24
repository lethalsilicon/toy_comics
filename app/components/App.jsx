import React from 'react';
import Comic from './Comic.jsx';

var App = React.createClass({

  render: function() {
    return(
      <div className="container">
        <h1>Library</h1>
        <div className="row">
          <Comic />
        </div>
      </div>
    )
  }
});

module.exports = App;
