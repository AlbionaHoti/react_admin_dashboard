import React, { Component } from "react";
import { Popup, Icon } from "semantic-ui-react";
import NotificationContent from "./NotificationContent";

export default class Notification extends Component {
  state = {};

  render() {
    return (
      <Popup
        hoverable
        trigger={<Icon size="large" name="mail outline" color="grey" />}
        position='bottom right'
        verticalOffset={18}
        size="small"
        
      >
        <NotificationContent />
        
      </Popup>
    );
  }
}
