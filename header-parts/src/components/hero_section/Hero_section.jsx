import React from 'react'
import { Link } from 'react-router-dom';
import style from './Hero_section.module.css';


const Hero_section = (props) => {
    return (
        <>
            <div className={style.hero_section_main}>
                <div className={style.hero_section_content}>
                    Cut down your hiring time <br />
                    to less than half !
                </div>
                <p className={style.hero_section_content2}>
                    With the most advanced generative AI engine behind the scenes, writing JD's and filtering candidates is a breeze !
                </p>


                {/* button section */}
                <div className={style.hero_section_button_section}>

                    <Link to='/demo'>
                        <div className={style.get_started}>Get Started</div>
                    </Link>

                    <div
                        className={style.watch_video}
                        onClick={() => props.setShowVideo(!props.showVideo)}>

                        Watch Video

                        {/* <i className="fa-solid fa-play"
                            
                            style={{
                                textAlign: "center",
                                color: "yellow",
                                // backgroundColor: "white",
                                // borderRadius: "50%",
                            }}
                        ></i> */}


                        <i className="fa fa-circle-play"
                            style={{
                                fontSize: "15px",
                                faPrimaryColor: "#dbbe00",
                                marginLeft: "10px",
                                faSecondaryColor: "#ffffff"
                            }}
                        >
                        </i>


                    </div>

                </div>

                {/* <Curve /> */}
            </div >
        </>
    )
}

export default Hero_section