import * as React from "react";
import { SongEditor, SongEditorProps } from "./SongEditor";
import { RootState, SongData } from "@ireal-text-editor/models";
import { fetchSongs, saveSong } from "@ireal-text-editor/redux-actions";
import { DispatchProp, connect, Dispatch } from "react-redux";
import { uuidv4 } from "@ireal-text-editor/lib";

const getDefaultSongValue = () => {
  return {
    title: "New song",
    composer: "Unknown Composer",
    style: "Medium Swing",
    keySignature: "C",
    transpostion: "n",
    measure: "4/4",
    id: uuidv4(),
    song:
      "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"
  };
};

function mapStateToProps(state: RootState) {
  return {
    defaultValue: state.songList[0] || getDefaultSongValue()
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onChange: saveSong(dispatch),
    onSave: saveSong(dispatch)
  };
}

export const SongEditorContainer  = connect(mapStateToProps, mapDispatchToProps)(SongEditor);