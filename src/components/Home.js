import React from "react";

const Home = () => <div>


    {/* When added a story it gets inserted here as a card */}

    <div class="card" style={{ marginTop: 100, marginLeft: 50 }}>
        <div class="container" style={{ marginTop: 20 }}>
            <h4>USERS NAME</h4>
            <p></p>

            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>
        <button type="button" class="btn btn-light" link_to={'/Story'} >  View Story  </button>
    </div>

</div>

export default Home;
