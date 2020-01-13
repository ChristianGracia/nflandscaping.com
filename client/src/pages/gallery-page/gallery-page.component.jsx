import React from "react";
import pic1 from "../../assets/ba1.jpg"
import pic2 from "../../assets/ba2.jpg"
import pic3 from "../../assets/ba3.jpg"
import pic4 from "../../assets/ba4.jpg"
import pic5 from "../../assets/ba5.jpg"
import pic6 from "../../assets/ba6.jpg"
import pic7 from "../../assets/ba7.jpg"
import pic8 from "../../assets/ba8.jpg"
import pic9 from "../../assets/ba9.jpg"
import Fade from "react-reveal/Fade"
import LazyLoad from "react-lazyload"
import Spinner from "../../components/common/spinner/spinner.component"

import "./gallery-page.styles.scss"



const GalleryPage = () => (

    <div>
        <Fade left>
            <p className="ba-title">Before & After</p>
        </Fade>
        <div className="ba-container" >

            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic1} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic2} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic3} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic4} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic5} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic6} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic7} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic8} className="ba-pics" />
            </LazyLoad>
            <LazyLoad height={200} placeholder={<Spinner />} offset={100}>
                <img src={pic9} className="ba-pics" />

            </LazyLoad>
        </div>

    </div>
);
export default GalleryPage;