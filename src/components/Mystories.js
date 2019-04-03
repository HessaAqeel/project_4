import React from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class Mystories extends React.Component {
    state = {
        stories: []
    };

    // Get stories that belongs to certain user  
    handleGetRequest() {
        const user = getUser();
        const url = `${apiUrl}/user/${user.id}/stories`;
        console.log(" USER ID =  ", user.id);

        fetch(url, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                const stories = [...data.stories]
                this.setState({ stories })
                console.log(data);
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

                <div className="card">
                    <div className="container" >

                        <h4> title: {stories.title} </h4>
                        <h4>  {stories.body} </h4>
                    </div>

                    <button type="button" className="btn btn-light" >  View Post  </button>
                    {/* <button type="button" className="btn btn-light" onClick={() => this.handleDeleteRequest(this.props.story)}> Delete </button> */}

                </div>

            );
        });


        return (

            <div>
                {stories}
            </div>

        )
    }
}
export default Mystories;
