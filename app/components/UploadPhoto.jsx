import React from 'react';

var UploadPhoto = React.createClass({

  render: function() {
    return(
      <div>
      <a href={"https://design.google.com/articles/material-design-awards/"} className={"btn-floating btn waves-effect waves-light blue left"}><i className={"material-icons"}>insert_photo</i></a>
      </div>
    )
  }
});

module.exports = UploadPhoto;