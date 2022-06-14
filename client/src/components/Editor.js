import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Immutable from "immutable";

const blockRenderMap = Immutable.Map({
  "header-one": {
    element: "h1",
  },
  "header-two": {
    element: "h2",
  },
  "header-three": {
    element: "h3",
  },
  "header-four": {
    element: "h4",
  },
  "header-five": {
    element: "h5",
  },
  "header-six": {
    element: "h6",
  },
  blockquote: {
    element: "blockquote",
  },
  "code-block": {
    element: "code-block",
  },
  atomic: {
    element: "figure",
  },
  unstyled: {
    element: "p",
  },
});

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

  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }

  _onUnderlineClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }

  _onCodeClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "CODE"));
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
        <Button onClick={this._onBoldClick.bind(this)}>Bold</Button>
        <Button onClick={this._onItalicClick.bind(this)}>Italic</Button>
        <Button onClick={this._onUnderlineClick.bind(this)}>Underline</Button>
        <Button onClick={this._onCodeClick.bind(this)}>Code</Button>
        <Divider sx={{ bgcolor: "black", my: 1 }} />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          blockRenderMap={blockRenderMap}
        />
      </Container>
    );
  }
}

export default MyEditor;
