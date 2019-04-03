import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class EditStory extends Component {
    state = {
        formData: {
            title: this.props.story.title,
            body: this.props.story.body
        },
        err: null
    };

    // Edit Story   
    handleEditRequest = (story) => {
        const user = getUser();
        const url = `${apiUrl}/story/${story.id}`;
        fetch(url, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ story: story })
        })
            .then(res => res.json())
            .then(data => {
                this.props.changeActivePage("home");
            })
            .catch(e => console.log(e));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.handleEditRequest(this.state.formData);
    };

    handleChange = ({ currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;
        this.setState({ formData });
    };



    render() {

        // console.log("\n\\nn\n\n\n\n ********", this.props.story)
        return (
            <div className="pt-5 mt-5">
                <h1>EDIT Story</h1>
                {this.state.err ? (
                    <div className="alert alert-warning"> {this.state.err} </div>
                ) : (
                        ""
                    )}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>title </label>
                        <input
                            name="title"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.formData.title}

                        />

                        <label>body</label>
                        <textarea
                            name="body"
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.formData.body}


                        />
                    </div>

                    <button type="submit" className="btn btn-primary"> submit </button>

                </form>
            </div>
        );
    }
}

export default EditStory;

