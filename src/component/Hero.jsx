import { Link } from "react-router-dom"
import headphonePhoto from "../assets/headphone-photo.avif"


const Hero = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={headphonePhoto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="800" height="600" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Innovate Your Lifestyle with E-Store Where Exceptional Products Take Center Stage</h1>
                    <p className="lead">Unleash the extraordinary in your everyday. At E-Store we're not just selling products; we're crafting experiences that redefine the way you live, work, and play. Step into a world where innovation meets elegance, and where each product tells a story of quality and purpose.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={"/about"}>
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="dc623p">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

