import './cards.css';

import { MdArrowOutward } from "react-icons/md";
const Cards = ({img,title,body,id}) => {
    return ( 
        <div className="card">
            <img src={img} alt="" className="cardImg" />
            <p className="cardTitle">{title}</p>
            <p className="cardBody">{body}</p>
            <button className='cardBtn'>Open Case Study <MdArrowOutward className='arrow' size={20} /> </button>
        </div>
    );
}
 
export default Cards;