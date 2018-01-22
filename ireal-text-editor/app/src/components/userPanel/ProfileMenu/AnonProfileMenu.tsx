import * as React from "react";
import { RaisedButton } from "material-ui";
import * as firebase from "firebase";

class AnonProfileMenu extends React.Component {
  loginHandle = () => {
    let thisComponent = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        // thisComponent.setState({ user: result.user });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.dir(error);
        thisComponent.setState({ user: undefined });
      });
  };

  render() {
    return (
      <div className={""}>
        <div>
          <RaisedButton
            label="I don't wanna be a stranger"
            onClick={this.loginHandle}
          />
        </div>
        <div>
          <img src={"/default/profile/avatar_not_logged.png"} />
        </div>
      </div>
    );
  }
}

export { AnonProfileMenu };