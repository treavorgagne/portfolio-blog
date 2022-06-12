import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  render() {
    return (
      <Container
        sx={{
          border: "1px solid black",
          minHeight: "15em",
          background: "white",
          borderRadius: "5px",
          mr: 3,
          py: 1,
        }}
      >
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Divider sx={{ bgcolor: "black", my: 1 }} />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </Container>
    );
  }
}

export default MyEditor;
