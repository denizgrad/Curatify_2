import React, { Component } from "react";
import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";
import Info from "./Info";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Room from "./Room";
import {Grid, Button, ButtonGroup, Typography } from '@material-ui/core'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      roomCode : null,
    }
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  // Runs after the first render() lifecycle -- react feature
  async componentDidMount() {
    fetch('/api/user-in-room')
      .then((response)=> response.json())
      .then((data)=> {
          this.setState({
            roomCode: data.code
          })
      });
  }

  renderHomePage(){
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}   align="center">
          <Typography variant="h3" compact="h3"  >
            Curatify 2
          </Typography>
        </Grid>
        <Grid item xs={12}   align="center">
          <ButtonGroup disableElevation vairant="contained" color="primary">
            <Button color="primary" variant="contained" to="/join" component={Link}>
              Join a Room  
            </Button>
            <Button color="default" variant="contained" to="/info" component={Link}>
              Info 
            </Button>
            <Button color="secondary" variant="contained" to="/create" component={Link}>
              Create a Room  
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  clearRoomCode(){
    this.setState({
      roomCode: null,
    })
  }

  render() {
    return  (
        <Router>
            <Switch >
                <Route exact path="/" render={() => {
                  return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`}/>) : this.renderHomePage()
                }}>
                </Route>
                <Route path="/join" component={RoomJoinPage} />
                <Route path="/info" component={Info} />
                <Route path="/create" component={RoomCreatePage} />
                <Route path="/room/:roomCode" 
                  render={(props) => {
                    return <Room {...props} leaveRoomCallback={this.clearRoomCode}/>
                  }}
                  />
            </Switch >
        </Router>
    );
  }
}
