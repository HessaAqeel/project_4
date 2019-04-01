import React from "react";


class Story extends React.Component {

    render() {
        return (

            <div className="storyBorder">
                <h3> Title: {this.props.story ? this.props.story.title : ""}</h3>
                <h3> Story: {this.props.story ? this.props.story.body : ""}</h3>

                <butto type="button" className="btn btn-light"> Back </butto>
                <butto type="button" className="btn btn-light"> Edit </butto>
                <butto type="button" className="btn btn-light"> Delete </butto>
            </div >
        )
    }
}
export default Story;
