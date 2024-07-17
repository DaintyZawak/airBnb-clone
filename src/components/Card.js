// import manImg from "../images/image 12.png";
// import star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="img--wrapper">
        <img src={`../images/${props.coverImg}`} className="card--image" alt="cardImg" />
      </div>
      <div className="card--stats">
        <img src="../images/star 1.png" className="card--star" alt="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

// export default function Card() {
//     return (
//       <>
//         {" "}
//       <div className="Card">
//           <div className="CardImg">
//             <div className="SoldOut"><p className="SoldOutTxt">SOLD OUT</p></div>
//             <div className="ImageWrapper">
//             <img src={manImg} alt="display image" className="DisplayImg" />
//             </div>
//           </div>
//           <div className="CaptionWrapper">
//             <div className="starLine">
//               <img src={star} className="star" alt="star" />
//               <span>5.0</span>
//               <span className="GreyTxt">(6).USA</span>
//               <span className="GreyTxt"></span>
//             </div>

//             <p className="caption">Life lessons with Katie Zaferes</p>
//             <p>
//               <span className="BoldTxt">From $136 </span>/ person
//             </p>
//           </div>
//       </div>
//       </>
//     );
//   }
