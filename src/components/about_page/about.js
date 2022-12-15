import './about.css';
import React from 'react';
import imgthis from '../images/building.jpg'
/**
 * this function displays the details of RGUKT college (about RGUKT)
 * @returns about page
 */
function About() {
    return (
        <>
            <section className="about-details section-padding">
                <div className="container1">
                            <img className="img-responsive" src={imgthis} alt="a" />
                </div>

                <div className="row">

                    <div className="single_about_details">
                        <h3>About RGUKT</h3>
                        <span></span>
                        <p className="mb20">FOUNDATION</p>
                        <p>
                            <ul>
                                <li>The idea to create IIITs in Andhra Pradesh came in April 2007, at the request of the
                                    Chief Minister of Andhra Pradesh. He was dissatisfied with the opportunities
                                    available to the rural youth and wanted to set up at least three IIITs in the three
                                    regions of Andhra Pradesh which would ensure better opportunities for rural
                                    students.</li>
                                <li>
                                    A Task Force was created under the Chairmanship of Prof. K.C. Reddy. This Task Force
                                    produced a report to the government recommending the structure and functioning of
                                    the proposed institutions.</li>

                                <li>In March of 2008, the AP Government created RGUKT by an act of the Legislature as a
                                    full-fledged university which would initially admit roughly the top 1% of the rural
                                    students into the three residential campuses.</li>
                                <li>
                                    The first batch of about 6,500 tenth class graduates was admitted into a six year
                                    integrated program in August of 2008. The initial selection was based on the local
                                    best model where students receiving the top marks in every subject were selected</li>.</ul></p>
                        <p className="mb20">WHY RGUKT?</p>
                        <p>
                            <ul>
                                <li>At RGUKT, a a “Lowest Best Model” is used to select students from a small community
                                    like a Mandal which had a few hundred students graduating each year in comparison to
                                    selecting students based on a state wide or nationwide ranking system based on marks
                                    or entrance tests. Such a practice overcomes the disparity in the selection process
                                    between the urban and rural environments. Therefore, the better performance of
                                    students in an urban Mandal doesn't have an impact on the selection process of
                                    students in a neighboring rural Mandal.
                                </li>
                                <li>
                                    The other issue RGUKT is attempting to tackle is the issue of "Early
                                    Specialization". In most cases, once a student goes into a Junior College for a
                                    pre-university program, he gets routed through coaching factories that drill them to
                                    get the top ranks in entrance tests which will enable him to secure a seat in a good
                                    college or university. This kind of intensive coaching makes students
                                    uni-dimensional with very little understanding of anything other than what they have
                                    been coached in.
                                </li>
                                <li>
                                    Education at RGUKT is based on the intensive use of Information Technology. Every
                                    student has access to a laptop and education uses the latest advances in Learning
                                    Sciences such as Learning by Example, Learning by Doing and Problem-based Learning.
                                    Online lectures are provided and lectures are followed by problem solving sessions
                                    that reinforce what has been covered in each lecture.
                                </li>
                                .</ul></p>
                        <p>
                            <ul>
                                <li>The primary objective of establishing RGUKT was to provide high quality educational
                                    opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that
                                    at least the top 1 % of the rural graduates would be given the opportunity to study
                                    at RGUKT.
                                </li>
                                <li>
                                    The top 1% of rural graduates is around 6,000 to 7,000 per year. Thus, the three
                                    campuses would need residential accommodation for about 36,000 students for the six
                                    year integrated program.
                                </li>
                                <li>
                                    The assumption is that ICT (Information and Communication Technologies), will permit
                                    the scaling of the learning environments by one to two orders of magnitude is
                                    currently possible.
                                </li>
                                <li>
                                    Phrases such as "Learning by Example", "Learning by Doing", "Problem-Based
                                    Learning", "Self-Paced Learning", etc become facilitated when every student can be
                                    assured to have a personal computer that does not have to be shared with anyone
                                    else.
                                </li>
                                .</ul></p>
                    </div>
                </div>

            </section>

        </>
    )
}
export default About;