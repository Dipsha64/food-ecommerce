import Navbar from "./Navbar";
import styled from "styled-components";
import bgimg from "../images/bg_2.jpg"

function Home() {
    return ( 
        <>
        <FormContainer>
            <Navbar></Navbar>
            <div class="hero-wrap">
                <img src={bgimg} className="back-image-section"/>
                <div class="detail-box">
                    <h3>Best Quality</h3>
                </div>
            </div>
        </FormContainer>
        </>
     );
}

const FormContainer = styled.div`
    .back-image-section {
        height: 1062px;
        width: 100%;
    }
    .detail-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .detail-box h3{
        color: #fff;
        line-height: 1;
        font-family: "Dancing Script", cursive;
        font-size: 8vw;
        font-weight: 400;
        margin-bottom: 40px;
    }
`


export default Home;