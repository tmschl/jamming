import React from "react";
import {TrackList} from "../TrackList/TrackList";

import './Playlist.css';


export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render () {
    return (
      <div className="Playlist">
        <input  defaultValue={'New Playlist'}
                onChange={this.handleNameChange} />
          <TrackList tracks={this.props.playlistTracks} 
                      onRemove={this.props.onRemove} 
                      isRemoval={true}/>
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>

    )
  }
}