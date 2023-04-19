import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom"

function Spaces(){
    const [space, setspace] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/spaces')
          .then(response => response.json())
          .then(data => setspace(data));
      }, []);
      
      return (
        <div>
          <h2>Spaces</h2>
          <div className="row">
            {space.map(spaces => (
              <div className="col-sm-6 mb-3 mb-sm-0" key={spaces.id}>
                <div className="card">
                  <img src={spaces.image_url} alt={spaces.name}></img>
                  <div className="card-body">
                    <h5 className="card-title">{spaces.name}</h5>
                    <p>{spaces.description}</p>
                    <p>{spaces.hourly_rate}</p>
                    <p>{spaces.daily_rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
export default Spaces;