import React from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";


class Story extends React.Component {

    // Delete: 

    handleDeleteRequest = (story) => {
        // api req deleted by id
        const user = getUser();
        const url = `${apiUrl}/story/${story.id}`;
        fetch(url, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => {
                console.log(response.body);
                return response.json()
            })

            .then(data => {
                console.log(data);

                this.props.changeActivePage("home")
            })
            .catch(e => console.log(e));
    }

    render() {
        return (

            <div className="storyBorder">

                <h3> Title: {this.props.story ? this.props.story.title : ""}</h3>
                <h3> Story: {this.props.story ? this.props.story.body : ""}</h3>

                <button type="button" className="btn btn-light" > Back </button>
                <button type="button" className="btn btn-light" onClick={this.handleEditRequest}> Edit </button>
                <button type="button" className="btn btn-light" onClick={() => this.handleDeleteRequest(this.props.story)}> Delete </button>

            </div >
        )
    }
}
export default Story;
