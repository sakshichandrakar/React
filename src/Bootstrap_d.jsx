import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Bootstrap_d = () =>
{
	return(
        <>
          <h1 className="text-center text-danger text-capitalize my-5">Sakshi Chandrakar</h1>
          <div className="container">
			  <div className="row">
			    <div className="col-sm">
			      <div className="card" >
					  <img className="card-img-top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMM7fXF136ZZdEdO4kg3VtXSsxc522AketvQ&usqp=CAU" alt="Card image cap" height="200px" />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
			    </div>
			    <div className="col-sm">
			         <div className="card" >
					  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9sh8gF9ce2XkWGIPev77FkIKaPtTVw3nTg&usqp=CAU" alt="Card image cap" height="200px" />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
			    </div>
			    <div className="col-sm">
					<div className="card" >
					  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMM7fXF136ZZdEdO4kg3VtXSsxc522AketvQ&usqp=CAU" alt="Card image cap" height="200px" />
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="#" className="btn btn-primary">Go somewhere</a>
					  </div>
					</div>
			    </div>
			  </div>
		</div>
        </>
		)
}

export default Bootstrap_d;