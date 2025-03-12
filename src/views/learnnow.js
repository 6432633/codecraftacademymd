import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";

const LearnNow = () => {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [lessons, setLessons] = useState([])

    // Mock data for lessons
    const manualTesting = [
        {name: 'Lesson 1 Manual Testing part 1', url: "https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Manual%20Testing%20Lesson%201.mp4"},
        {name: 'Lesson 1 Manual Testing part 2', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Manual%20Testing%20Lesson%202.mp4'},
        {name: 'Lesson 2 SQL basics part 1', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/SQL%20Lesson%201.mp4'},
        {name: 'Lesson 2 SQL basics part 2', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/SQL%20queries.mp4'},
    ]
    const javaCourse = [
        {name: 'Install Java on MAC', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20Java%20on%20mac.mp4'},
        {name: 'Install GIT on MAC', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20Git%20on%20MAC.mp4'},
        {name: 'Install MAVEN on MAC', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Download%20and%20Install%20Maven%20on%20macOS.mp4'},
        {name: 'Install Java on Windows', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/How%20to%20Install%20Java%20on%20Windows%2011%20%5B%20JDK%20Installation%20&%20Verify%20%5D.mp4'},
        {name: 'Install GIT on Windows', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20git%20on%20windows.mp4'},
        {name: 'Install MAVEN on Windows', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20maven%20on%20windows.mp4'},
        {name: 'Lesson 1 First Java Program', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%201%20First%20Java%20Program.mp4'},
        {name: 'Lesson 2 Data types and variables', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%202%20Data%20types%20and%20variables.mp4'},
        {name: 'Lesson 3 Arithmetic Operators', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%203%20Arithmetic%20Operators.mp4'},
        {name: 'Lesson 4 Logical Operators and if block', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%204%20Logical%20Operators%20and%20if%20block.mp4'},
        {name: 'Lesson 5 Switch case', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%205%20Switch%20case.mp4'},
        {name: 'Lesson 6 Strings', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%206%20Strings.mp4'},
        {name: 'Lesson 7 Arrays', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%207%20Arrays.mp4'},
        {name: 'Lesson 8 Loops', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%208%20Loops.mp4'},
        {name: 'Lesson 9 Classes and objects', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%209%20Classes%20and%20objects.mp4'},
        {name: 'Lesson 10 Abstract Classes', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2010%20Abstract%20Classes.mp4'},
        {name: 'Lesson 11 Interfaces', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2011%20Interfaces.mp4'},
        {name: 'Lesson 12 Inheritance and Overrinding', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2012%20Inheritance%20and%20Overrinding.mp4'},
        {name: 'Lesson 13 Polymoprhism and Overloading', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2013%20Polymoprhism%20and%20Overloading.mp4'},
        {name: 'Lesson 14 Exceptions', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2014%20Exceptions.mp4'},
        {name: 'Lesson 15 Generics', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2015%20Generics.mp4'},
        {name: 'Lesson 16 Collections', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2016%20Collections.mp4'},
        {name: 'Lesson 17 Locators in Selenium', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2017%20Locators%20in%20Selenium.mp4'},
        {name: 'Lesson 18 First test part 1', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/First%20Cucumber%20test%20part%201%20-%20Realizat%20cu%20Clipchamp.mp4'},
        {name: 'Lesson 18 First test part 2', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/First%20Cucumber%20test%20part%202%20-%20Realizat%20cu%20Clipchamp.mp4'},
        {name: 'Lesson 18 First test part 3', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/First%20Cucumber%20test%20part%203%20-%20Realizat%20cu%20Clipchamp.mp4'},
        {name: 'Lesson 18 First test part 4', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/First%20Cucumber%20test%20part%204%20-%20Realizat%20cu%20Clipchamp.mp4'},
        {name: 'Lesson 19 Manual Testing part 1', url: 'https://github.com/6432633/manual-testing/raw/refs/heads/main/Manual%20Testing%20Lesson%201.mp4'},
        {name: 'Lesson 19 Manual Testing part 2', url: 'https://github.com/6432633/manual-testing/raw/refs/heads/main/Manual%20Testing%20Lesson%202.mp4'},
        {name: 'Lesson 20 SQL basics part 1', url: 'https://github.com/6432633/manual-testing/raw/refs/heads/main/SQL%20Lesson%201.mp4'},
        {name: 'Lesson 20 SQL basics part 2', url: 'https://github.com/6432633/manual-testing/raw/refs/heads/main/SQL%20queries.mp4'}
    ]
    const cypressCourse = [
        {name: 'Install Node jS on MAC', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20node%20js%20on%20mac.mp4'},
        {name: 'Install GIT on MAC', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20Git%20on%20MAC.mp4'},
        {name: 'Install Node jS on Windows', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/How%20to%20Install%20Node.js%20on%20Window%2011.mp4'},
        {name: 'Install GIT on Windows', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20git%20on%20windows.mp4'},
        {name: 'Lesson 1 Install and Setup Cypress', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Install%20and%20setup%20cypress.mp4'},
        {name: 'Lesson 2 CSS locators', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Lesson%202%20CSS%20selectors.mp4'},
        {name: 'Lesson 3 First test in Cypress part 1', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/First%20Test%20part1.mp4'},
        {name: 'Lesson 3 First test in Cypress part 2', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/First%20test%20part%202.mp4'},
        {name: 'Lesson 4 Manual Testing part 1', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Manual%20Testing%20Lesson%201.mp4'},
        {name: 'Lesson 4 Manual Testing part 2', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/Manual%20Testing%20Lesson%202.mp4'},
        {name: 'Lesson 5 SQL Basics part 1', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/SQL%20Lesson%201.mp4'},
        {name: 'Lesson 5 SQL Basics part 2', url: 'https://github.com/6432633/software-testing-cypress/raw/refs/heads/main/SQL%20queries.mp4'}
        
    ]

    // Handle password submission
    const handleAuthorize = async () => {
        try {
            const authCourse = await fetch(`https://api.code-craft.academy/api/payment/authorize/${password}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!authCourse.ok) {
                alert("Incorrect password"); 
                throw new Error('Network response was not ok');
            }
            
            if (authCourse.status == 200) {
                console.log('wetgwethwe')
                const authRes = await authCourse.json();
                const courseId = authRes.courseId;
                setIsAuthorized(true); 
                if (courseId == 1 || courseId == 4) {
                    setLessons(manualTesting);
                } else if(courseId == 2 || courseId == 5) {
                    setLessons(javaCourse)
                } else if (courseId == 3 || courseId == 6) {setLessons(cypressCourse)} else alert("Unavailable Course")
            } else {
                alert("Incorrect password"); 
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    };

    // Handle lesson selection
    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    return (
        <div>
            <Helmet>
        <title>Pricing - Best Prices In The Industry</title>
        <meta
          property="og:title"
          content="Learn Now<"
        />
      </Helmet>
            <Navbar41
                link1={
                    <Fragment>
                        <span className="contact1-text10">Home</span>
                    </Fragment>
                }

                link2={
                    <Fragment>
                        <span className="contact1-text13">Courses</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="contact1-text15">Pricing</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="contact1-text11">Contact Us</span>
                    </Fragment>
                }
                link5={
                    <Fragment>
                        <span className="contact1-text11">Learn Now</span>
                    </Fragment>
                }

            ></Navbar41>
            <div style={{ alignItems: "center", textAlign: "center", display: "flex", justifyContent: "center" }}>
                {!isAuthorized ? (
                    // Authorization Form
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: "10px", padding: "5px" , border:"3px solid", borderRadius:"5px"}}
                        />
                        <br />
                        <button onClick={handleAuthorize} className="pricing-button14 thq-button-outline thq-button-animated">
                            Authorize
                        </button>
                        <br />
                        <span>Authorize with password</span>
                    </div>
                ) : (
                    // Lessons and Video Player
                    <div style={{ display: "flex", width: "80%", margin: "20px auto" }}>
                        {/* Lessons List */}
                        <div style={{ width: "35%", borderRight: "1px solid #ccc", paddingRight: "10px", justifyItems:"left" }}>
                            <h3 style={{marginBottom:"15px"}}>Lessons</h3>
                            {lessons.map((lesson, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleLessonClick(lesson)}
                                    style={{ cursor: "pointer", marginBottom: "10px" }}
                                >
                                    {lesson.name}
                                </div>
                            ))}
                        </div>

                        {/* Video Player */}
                        <div style={{ width: "65%", paddingLeft: "10px" }}>
                            
                            {selectedLesson ? (
                                <video controls src={selectedLesson.url} style={{ width: "100%" }} />
                            ) : (
                                <p>Select a lesson to play</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    )
}
export default LearnNow