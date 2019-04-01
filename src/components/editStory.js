import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class editStory extends Component {
    state = {
        formData: {
            new: null,
            old: null,

        },
        err: null
    };

    // Edit Story 

    handleLoginRequest = passwords => {
        // /change-password` --> this is a route 
        let url = `${apiUrl}/story/:id`;
        // apiUrl --> apiConfig.js --> two links are tjere for the heroku phase and the localhost
        // console.log({ email: getUser().email, passwords });
        // console.log(url);
        fetch(url, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: getUser().email, passwords })
        })
            .then(res => res.json())
            .then(data => {
                this.props.changeActivePage("home");
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
        this.setState({ formData });
    };


    // Delete a story: 

    // Edit a story:

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
                        <input
                            name="title"
                            className="form-control"
                            onChange={this.handleChange}
                        />

                        <label>body</label>
                        <input
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

export default editStory;

