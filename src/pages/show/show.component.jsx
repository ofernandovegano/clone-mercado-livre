import React from 'react';

import './show.styles.scss';

const Show = () => (
  <div className="show-page">
    <div className="item">
      <div className="image-description">
        {/* <div className='item-image'
          style={{
            backgroundImage: `url("https://http2.mlstatic.com/D_NQ_NP_${imageID}-O.webp")`
          }}>
        </div> */}
        <div className="description">
          <h3 className='description-title'>Descripción del producto</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptas, debitis explicabo repellendus culpa quaerat eum, non iusto quia delectus cumque assumenda animi qui? Dolores obcaecati expedita illo officiis eos?
          Quia possimus sunt voluptates, suscipit qui in nostrum et ipsa maxime consectetur incidunt expedita placeat eos soluta praesentium facere, eius quas deleniti officia voluptate fugit molestias velit explicabo. Ea, ex.</p>
        </div>
      </div>

      <div className="call-to-action">
        <p>Nuevo-234 vendidos</p>
        <h2>Deco Reverse Sombrero Oxford</h2>
        <div className="price">$ 1.980<span>00</span></div>
        <button>Comprar</button>
      </div>
    </div>
  </div>
);

export default Show;