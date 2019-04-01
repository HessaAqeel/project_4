import React from "react";

class Home extends React.Component {


    render() {
        //    How Do i loop through my story table and show it down there 
        return (

            <div className="card" style={{ marginTop: 100, marginLeft: 50 }}>
                <div className="container" style={{ marginTop: 20 }}>
                    <h4> Title lies here </h4>


                    <p>  Body lies here </p>

                </div>
                <button type="button" className="btn btn-light" link_to={'/Story'} >  View Story  </button>
            </div>


        )
    }
}
export default Home;
