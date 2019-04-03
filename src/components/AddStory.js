import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class AddStory extends Component {
    state = {
        formData: {
            title: null,
            author: null,
            body: null
        },
        err: null
    };

    // Add story 
    handleLoginRequest = story => {
        let url = `${apiUrl}/story`;

        const user = getUser()
        story.author = user.id

        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(story)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status > 299)
                    this.setState({ err: data.message });
                else {

                    this.props.changeActivePage("story");
                    this.props.setActiveStroy(data.story)

                }
            })
            .catch(e => console.log(e));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.handleLoginRequest(this.state.formData);
    };

    handleChange = ({ currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;

        console.log(currentTarget.name, currentTarget.value)
        this.setState({ formData });
    };



    render() {
        return (

            <div className="pt-5 mt-5">
                <h1>Add Story</h1>
                {this.state.err ? (
                    <div className="alert alert-warning"> {this.state.err} </div>
                ) : (
                        ""
                    )}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>title </label>
                        <input id="textArea"
                            name="title"
                            className="form-control"
                            onChange={this.handleChange}
                        />


                        <label>body</label>
                        <textarea id="textArea"
                            name="body"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>



                    <button type="submit" className="btn btn-primary"> Add </button>

                </form>
            </div>
        );
    }
}

export default AddStory;

// const AddStory = () => <div>
//     Author: <input type="text" name="fname" />
//     Story: <input type="text" name="lname" />
//     <input type="submit" value="Submit" />
// </div>
