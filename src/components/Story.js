import React from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";


class Story extends React.Component {

    state = {
        formData: {
            old: null,
            new: null
        },
        err: null
    };

    handleEditRequest = stories => {
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
            body: JSON.stringify({ story: getUser().title, story: getUser().body })
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

    render() {
        return (

            <div className="storyBorder">

                <h3> Title: {this.props.story ? this.props.story.title : ""}</h3>
                <h3> Story: {this.props.story ? this.props.story.body : ""}</h3>

                <butto type="button" className="btn btn-light" > Back </butto>
                <butto type="button" className="btn btn-light" onClick={this.handleEditRequest}> Edit </butto>
                <butto type="button" className="btn btn-light"> Delete </butto>

            </div >
        )
    }
}
export default Story;
