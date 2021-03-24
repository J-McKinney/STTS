import React, { Component } from "react";
import styles from "./SinglePlayer.module.css";

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

class SinglePlayer extends Component {
  state = {
    interimTranscript: "",
    finalTranscript: "",
  };

  componentDidMount() {
    // var SpeechRecognition =
    //   window.SpeechRecognition || window.webkitSpeechRecognition;
    // var recognition = new SpeechRecognition();
    // recognition.continuous = true;
    // recognition.maxAlternatives = 10;
    // recognition.interimResults = true;
    // recognition.lang = "en-US";
    // recognition.onaudioend = null;
    // recognition.onaudiostart = null;
    // recognition.onend = null;
    // recognition.onerror = null;
    // recognition.onnomatch = null;
    // recognition.onresult = null;
    // recognition.onsoundend = null;
    // recognition.onsoundstart = true;
    // recognition.onspeechend = null;
    // recognition.onspeechstart = null;
    // recognition.onstart = null;
    // console.log(recognition);
  }

  componentDidUpdate() {}

  startRec() {
    recognition.start()
    console.log("Listening");
  }

  stopRec() {
    recognition.stop()
    console.log("Not Listening");
  }

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <button onClick={this.startRec}>Listen Up!!!</button>
          <br />
          <br />
          <button onClick={this.stopRec}>Not Listening!!!</button>
        </div>
      </>
    );
  }
}

export default SinglePlayer;
