import './cards.css';
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md"
const Cards = ({img,title,body,id}) => {
    const navigate = useNavigate();
  // Handler to go to the details page
    const goToDetails = (id, title) => {
        navigate(`/project/${title}`, { state: { id } });
        console.log(id)
    };

    return ( 
        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="card">
            <img src={img} alt="" className="cardImg" />
            <p className="cardTitle">{title}</p>
            <p className="cardBody">{body}</p>
            <button onClick={()=>goToDetails(id, title)} className='cardBtn'>Open Case Study <MdArrowOutward className='arrow' size={20} /> </button>
        </div>
    );
}
 
export default Cards;