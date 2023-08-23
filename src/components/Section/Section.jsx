import Testimonial from "./Testimonial";
import "./Section.css";

function Section() {
  return (
    <>
      <div className="row" id="team">
        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude. Since makingg the switch our team has become a well-olled collaboration machine."
          name="Satish Patel"
          ocupation="Founder & Ceo. Huddle"
          img="images/profile-1.jpg"
        />

        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude. Since makingg the switch our team has become a well-olled collaboration machine."
          name="Bruce McKenzie"
          ocupation="Founder & Ceo. Huddle"
          img="images/profile-2.jpg"
        />

        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude. Since makingg the switch our team has become a well-olled collaboration machine."
          name="Iva Boyd"
          ocupation="Founder & Ceo. Huddle"
          img="images/profile-3.jpg"
        />
      </div>
    </>
  );
}

export default Section;
