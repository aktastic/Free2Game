import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import "./Details.scss";

const Details = () => {
  return (
    <>
    <section className="details_wrapper">
      {/* Platzhalter Header */}
      <section className="header_details">
      </section>

      {/* Details */}
      
      <article className="details_left">
      <h2>Hier kommen die Main Details</h2>
        <img src="https://unsplash.it/491/281" alt="" />
        <h3>Plattform: --Windows-- (Client)</h3>
        <ButtonOutline name="Action" />
        <ButtonFilled name="Play Now"/>
      </article>

      <article  className="details_right">
      <h3>About</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus quis totam veniam vel rerum sit fuga modi provident pariatur placeat doloribus, vero voluptate excepturi, tenetur unde at assumenda. Ut labore fuga totam accusamus quos cupiditate perferendis perspiciatis odio reprehenderit assumenda autem, praesentium officiis iste architecto explicabo? Repellendus non tempora corporis, atque fugiat, doloremque hic ut inventore nostrum dolore illo consequuntur aperiam. Asperiores omnis nostrum facilis pariatur ut delectus natus facere odio modi. Natus error quia expedita quos cum asperiores, nesciunt vero, delectus nihil a animi architecto eos aliquam, impedit tenetur consequatur aspernatur ipsam earum. Deserunt sunt repellendus debitis vero consequatur odit earum. Laudantium reiciendis nam ex repellat quo aspernatur reprehenderit nemo pariatur totam ad quam placeat doloribus quia ipsa vel autem debitis quisquam ab voluptatem saepe eum cumque veniam, repudiandae deserunt. Saepe reprehenderit, ducimus odit molestiae delectus est, nostrum molestias rem nulla dolor harum ea voluptatibus? Doloribus repellat eaque quisquam! Officia placeat dolore, nobis sequi commodi, omnis laboriosam nihil debitis odio corrupti error nostrum laborum officiis. Rem non consequatur repudiandae nisi dolorem natus hic obcaecati maxime magni consequuntur quia repellat blanditiis doloribus officia saepe amet possimus perferendis suscipit, iusto eveniet consectetur quae exercitationem! Accusamus rerum vitae deserunt ex necessitatibus.</p>
      </article>


      
      {/* Beispielbilder */}
      <article className="details_pictures">
        <img src="https://unsplash.it/594/356" alt="Bild Platzhalter" />
        <img src="https://unsplash.it/594/356?" alt="Bild Platzhalter" />
      </article>

      {/* Additional Info */}
      <article className="additional_info_container">
        <h3>Additional Information</h3>
        {/*   */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa reprehenderit iure aut. Soluta id porro in ab qui consequatur.</p>
        <div className="additional_info">
          <h4>Developer</h4>
          <p>Lorem</p>

          <h4>Publisher</h4>
          <p>Lorem</p>

          <h4>Release Date</h4>
          <p>Lorem ipsum dolor sit. </p>
        </div>
      </article>  

      {/* System Requirements */}
      <article className="system_requirements_container">
        {/* bei "Plattform" props einfügen! */}
          <h3>Minimum System Requirements (Plattform)</h3>
          <div className="system_requirements_grid">
            <div>
              <h4>OS</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            
            <div>
              <h4>Memory</h4>
              <p>Lorem ipsum</p>
            </div>

            <div>
              <h4>Storage</h4>
              <p>Lorem ipsum </p>
            </div>

            <div>
              <h4>Processor</h4>
              <p>Lorem ipsum</p>
            </div>

            <div>
              <h4>Graphics</h4>
              <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
            </div>

            <div>
              <h4>Additional Notes</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

          </div>
        
        </article>
    </section>
      
    </>
  );
};

export default Details;
