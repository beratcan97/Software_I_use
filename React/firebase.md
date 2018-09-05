  ##### Varje gÃ¥ng vÃ¥rt interface uppdateras
  > componentDidMount() {
    firebase.database().ref(`messages`).on('value', (snapshot) => {
      this.setState({ messages: snapshot.val() });
    });
  }

  ##### lÃ¤gg till Message
  > pushMessage = () => {
    firebase.database().ref(`messages`).push("Hampus was here!");
    console.log("Added message!");
  }

  ##### Ta bort Message
  > removeMessage = (item) => {
    firebase.database().ref(`messages/${item}`).remove();
    console.log("Removed message!");
  }
