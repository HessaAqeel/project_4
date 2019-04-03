import React from "react";
// import Story from "./Story";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class Home extends React.Component {
    state = {
        stories: [],
        activePage: "home"
    };


    changeActivePage = activePage => {
        this.setState({ activePage });
    };

    setViewActiveStroy = activeStroy => {
        this.setState({ activeStroy });
    };
    // Get all stories
    handleGetRequest() {
        const user = getUser();
        const url = `${apiUrl}/stories`;

        fetch(url, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => {
                // console.log(response.body);
                return response.json()
            })

            .then(data => {

                const stories = [...data.stories]
                this.setState({ stories })

                console.log(data);
                this.props.changeActivePage("story")
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        this.handleGetRequest();
    }

    render() {

        // loop through my story table and show it down there 

        const stories = this.state.stories.map(stories => {
            return (
                <div className="card" >
                    <div className="container" style={{ marginTop: 20 }}>

                        <h4> Title: {stories.title} </h4>
                        <h4>  {stories.body} </h4>
                    </div>

                    <button type="button" class="btn btn-light" onClick={() => this.props.changeActivePage("story")} >View Post</button>

                </div>

            );
        });

        return (

            <div >
                {stories}
            </div>

        )
    }
}
export default Home;
