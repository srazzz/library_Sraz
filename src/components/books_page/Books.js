import React from 'react';
import './books.css'
/**
 * displays the books of respected branches in the form of list
 * @returns list of books available 
 */
function Books(){
	return(
		<>
		<div class="container_of_books">
            {/* <!-- header --> */}
            <div class="header">
                <h1 >Books</h1>
            </div>
            {/* <!-- header --> */}
            <div class="content .flex-column">
               
                {/* <!-- row --> */}
                <div class="row">
                     
                    <div class="data">
                         
                        <div class="img flex">
                            <img src="https://i.postimg.cc/HnQ9dCG3/two.png" alt=""/>
                        </div>
                         
                        <div class="text">
                            <p class="statue">Available</p>
                            <p>Book name </p> 
                            <div class="info">
                                <p>publisher : Amanda Sun</p>
                                <p>in :web design</p>
                                <p>date : 16.06.2016</p>
                            </div>
                             
                        </div>
                         
                    </div>
                     
                    <div class="data">
                         
                        <div class="city">
                            <p>ece row-3</p>
                        </div>
                         
                        <div class="price">
                            <p>$ 200 - $ 340</p>
                            <button>Fetch</button>
                        </div>
                    </div>
                     
                </div>
                {/* <!-- row --> */}
                <div class="row">
                     
                    <div class="data">
                         
                        <div class="img flex">
                            <img src="https://i.postimg.cc/J0w5fzFG/three.png" alt=""/>
                        </div>
                         
                        <div class="text">
                            <p class="statue">Available</p>
                            <p>Books name 2</p>
                             
                            <div class="info">
                                <p>publisher : bob sturan</p>
                                <p>in : web Design</p>
                                <p>date : 14.06.2016</p>
                            </div>
                             
                        </div>
                         
                    </div>
                     
                    <div class="data">
                         
                        <div class="city">
                            <p>Antalya</p>
                            <hr/>
                            <p>CSE row 2</p>
                        </div>
                         
                        <div class="price">
                            <p>$ 650/mo</p>
                            <button>Fetch</button>
                        </div>
                    </div>
                     
                </div>
                {/* <!-- row --> */}
                <div class="row">
                     
                    <div class="data">
                         
                        <div class="img flex">
                            <img src="https://i.postimg.cc/VN6gMTML/four.png" alt=""/>
                        </div>
                         
                        <div class="text">
                            <p class="statue">Available soon</p>
                            <p>Books name 3</p>
                             
                            <div class="info">
                                <p>publisher : Eman mohamed</p>
                                <p>in : web Design</p>
                                <p>date : 13.06.2016</p>
                            </div>
                             
                        </div>
                         
                    </div>
                     
                    <div class="data">
                         
                        <div class="city">
                            <p>new york</p>
                            <hr/>
                            <p>CIVIL ROW 1</p>
                        </div>
                         
                        <div class="price">
                            <p>$ 1200/mo</p>
                            <button>FETCH</button>
                        </div>
                    </div>
                     
                </div>
                {/* <!-- row --> */}
                <div class="row">
                     
                    <div class="data">
                         
                        <div class="img flex">
                            <img src="https://i.postimg.cc/BnNNjsjV/five.png" alt=""/>
                        </div>
                         
                        <div class="text">
                            <p class="statue">Available</p>
                            <p>book name 4</p>
                             
                            <div class="info">
                                <p>publisher : samah elsayed</p>
                                <p>in : web Design</p>
                                <p>date : 11.06.2016</p>
                            </div>
                             
                        </div>
                         
                    </div>
                     
                    <div class="data">
                         
                        <div class="city">
                            <p>alex</p>
                            <hr/>
                            <p>ece row 5</p>
                        </div>
                         
                        <div class="price">
                            <p>$ 56 - $ 90</p>
                            <button>Fetch</button>
                        </div>
                    </div>
                     
                </div>
                {/* <!-- row --> */}
                <div class="row">
                     
                    <div class="data">
                         
                        <div class="img flex">
                            <img src="https://i.postimg.cc/vHsvXD9K/six.png" alt=""/>
                        </div>
                        
                        <div class="text">
                            <p class="statue"> available</p>
                            <p>books name 5</p>
                        
                            <div class="info">
                                <p>publisher : john doe</p>
                                <p>in : web Design</p>
                                <p>date : 08.06.2016</p>
                            </div>
                            
                        </div>
                       
                    </div>
                    
                    <div class="data">
                        
                        <div class="city">
                            <p>Austin</p>
                            <hr/>
                            <p>Cse row 9</p>
                        </div>
                        
                        <div class="price">
                            <p>-</p>
                            <button>Fetch</button>
                        </div>
                    </div>
                    
                </div>
                {/* row */}
            </div>
            <span>load more page...</span>
        </div>
		</>
	)
}

export default Books;
