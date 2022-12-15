// import imagetest from "//via.placeholder.com/200"
import React from 'react'
function Books(){
	return(
		<>
		<div className="doctor-card">
		<div className="info">
			<div className="avatar">
				{/* <img src={imagetest} alt="doc name"/> */}
			</div>
      <div className="details">
          <div className="name">Some Popular Name</div>
          <div className="meta-info">
            <span className="sp">Actor-Director</span>
            <span className="prac-area"> Lorem ipsum dolor sit amet.</span>
            <span className="exp-yr">10 years exp.</span>
          </div>
      </div>
		</div>
		<div className="actions">
			<div className="ratings">
				<span className="rating-control">
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star-half-o"></i>
					<i className="fa fa-star-o"></i>
					<i className="fa fa-star-o"></i>
				</span>
				<span className="rating-count">000 Ratings</span>
			</div>
			<div className="comments">
				<span className="comment-count"><strong>340</strong> Comments</span>
			</div>
			<div className="consultation">
				<span className="fee"><strong>34K</strong>Followers</span>
			</div>
			<div className="appo">
				<a href="a" className="btn">Book Now</a>
			</div>
		</div>
		
		<div className="locations">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
	</div>
		</>
	)
}
export default  Books;