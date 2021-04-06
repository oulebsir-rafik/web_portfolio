import React , { useState } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

//functional component
function Card(props) {
  return(
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img class="avatar_image" src={props.person.image} alt="Placeholder image"/>
              </figure>
            </div>
            <div class="media-content">
              <p key={props.person.id} class="title is-4">{props.person.name}</p>
              <p class="subtitle is-5">Age : {props.person.age}</p>
              {/* send item id to parent component to use it in clearOneRecord function*/}
              <button class="button is-success" onClick={() => props.clearThisCard(props.person.id)}>Clear</button>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Card;
