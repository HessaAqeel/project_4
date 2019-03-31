// import React from "react";



// const AddStory = () => <div>

//     <h3> Add your Story here  </h3>

// </div >

// export default AddStory;import React from 'react';

import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}

ReactDOM.render(
    <MyEditor />,
    document.getElementById('container')
);
export default AddStory; import React from 'react';