import React from 'react';
import './books.css'
// import Home from '../home_page/homepage';
import { Link } from 'react-router-dom'

/**
 * displays the books of respected branches in the form of list
 * @returns list of books available 
 */
function Books() {
    return (
        <>
            <div className="container_of_books">
                {/* <!-- header --> */}
                
                <nav>
                    <div className="countainer">
                        <ul className="pages">
                        <Link to="/">
                            <a href="a" className="link link1">
                                <li className="page page1">Home</li>
                            </a>
                            </Link>
                            <a href="a" className="link link2">
                                <li className="page page2">Add Book</li>
                            </a>
                            <a href="a" className="link link3">
                                <li className="page page3">Remove book</li>
                            </a>
                            <a href="a" className="link link4">
                                <li className="page page4">Edit book</li>
                            </a>
                        </ul>
                        <p className="search">
                            <input
                                className="search-box"
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search a Book.."
                            />
                        </p>
                        <p className="logo">BOOKS PAGE</p>
                    </div>
                </nav>
                {/* <!-- header --> */}
                <div className="content .flex-column">

                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="data">

                            <div className="img flex">
                                <img src="https://i.postimg.cc/HnQ9dCG3/two.png" alt="" />
                            </div>

                            <div className="text">
                                <p className="statue">Available</p>
                                <p>Book name </p>
                                <div className="info">
                                    <p>publisher : Amanda Sun</p>
                                    <p>in :web design</p>
                                    <p>date : 16.06.2016</p>
                                </div>

                            </div>

                        </div>

                        <div className="data">

                            <div className="city">
                                <p>ece row-3</p>
                            </div>

                            <div className="price">
                                <p>$ 200 - $ 340</p>
                                <button>Fetch</button>
                            </div>
                        </div>

                    </div>
                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="data">

                            <div className="img flex">
                                <img src="https://i.postimg.cc/J0w5fzFG/three.png" alt="" />
                            </div>

                            <div className="text">
                                <p className="statue">Available</p>
                                <p>Books name 2</p>

                                <div className="info">
                                    <p>publisher : bob sturan</p>
                                    <p>in : web Design</p>
                                    <p>date : 14.06.2016</p>
                                </div>

                            </div>

                        </div>

                        <div className="data">

                            <div className="city">
                                <p>Antalya</p>
                                <hr />
                                <p>CSE row 2</p>
                            </div>

                            <div className="price">
                                <p>$ 650/mo</p>
                                <button>Fetch</button>
                            </div>
                        </div>

                    </div>
                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="data">

                            <div className="img flex">
                                <img src="https://i.postimg.cc/VN6gMTML/four.png" alt="" />
                            </div>

                            <div className="text">
                                <p className="statue">Available soon</p>
                                <p>Books name 3</p>

                                <div className="info">
                                    <p>publisher : Eman mohamed</p>
                                    <p>in : web Design</p>
                                    <p>date : 13.06.2016</p>
                                </div>

                            </div>

                        </div>

                        <div className="data">

                            <div className="city">
                                <p>new york</p>
                                <hr />
                                <p>CIVIL ROW 1</p>
                            </div>

                            <div className="price">
                                <p>$ 1200/mo</p>
                                <button>FETCH</button>
                            </div>
                        </div>

                    </div>
                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="data">

                            <div className="img flex">
                                <img src="https://i.postimg.cc/BnNNjsjV/five.png" alt="" />
                            </div>

                            <div className="text">
                                <p className="statue">Available</p>
                                <p>book name 4</p>

                                <div className="info">
                                    <p>publisher : samah elsayed</p>
                                    <p>in : web Design</p>
                                    <p>date : 11.06.2016</p>
                                </div>

                            </div>

                        </div>

                        <div className="data">

                            <div className="city">
                                <p>alex</p>
                                <hr />
                                <p>ece row 5</p>
                            </div>

                            <div className="price">
                                <p>$ 56 - $ 90</p>
                                <button>Fetch</button>
                            </div>
                        </div>

                    </div>
                    {/* <!-- row --> */}
                    <div className="row">

                        <div className="data">

                            <div className="img flex">
                                <img src="https://i.postimg.cc/vHsvXD9K/six.png" alt="" />
                            </div>

                            <div className="text">
                                <p className="statue"> available</p>
                                <p>books name 5</p>

                                <div className="info">
                                    <p>publisher : john doe</p>
                                    <p>in : web Design</p>
                                    <p>date : 08.06.2016</p>
                                </div>

                            </div>

                        </div>

                        <div className="data">

                            <div className="city">
                                <p>Austin</p>
                                <hr />
                                <p>Cse row 9</p>
                            </div>

                            <div className="price">
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
