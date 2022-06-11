import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    return (
      <Container>
        <div style={styles.editor} onClick={this.focusEditor}>
          <Container sx={{ p: 1 }}>
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          </Container>
          <Divider sx={{ bgcolor: "black", m: 1 }} />
          <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </Container>
    );
  }
}

const styles = {
  editor: {
    border: "1px solid black",
    minHeight: "6em",
    background: "white",
  },
};

export default MyEditor;
