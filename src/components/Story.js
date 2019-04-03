import React from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import swal from 'sweetalert';


class Story extends React.Component {

    // Delete a post: 
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

        swal("Story has been deleted")
            .then(data => {
                console.log(data);
                this.props.changeActivePage("home")

            })
            .catch(e => console.log(e));
    }

    render() {
        return (

            <div className="storyBorder">
                <div class="card">
                    <div class="container">

                        <h4 id="homeH4title"> {this.props.story ? this.props.story.title : ""}</h4>
                        <p id="homeH4">  {this.props.story ? this.props.story.body : ""} </p>


                        <button type="button" id="buttonStyle" className="btn btn-light" onClick={() => this.props.changeActivePage("home")}> Back </button>
                        {/* <button type="button" className="btn btn-light" onClick={() => this.props.changeActivePage("edit-story")}> Edit </button> */}
                        <button type="button" id="buttonStyle" className="btn btn-light" onClick={() => this.props.changeActivePage("edit-story")}> Edit </button>
                        <button type="button" id="buttonStyle" className="btn btn-light" onClick={() => this.handleDeleteRequest(this.props.story)} > Delete </button>
                    </div>
                </div>

            </div >
        )
    }
}
export default Story;
