import React from "react";
import "./blog.css";
import { Article } from "../../components";
import blog01 from "../../assets/spec.png";
import blog02 from "../../assets/no-noise.jpg";
import blog03 from "../../assets/podcast.jpg";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Register Today & <br /> start Denoising your videos.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            style={{ width: "100px" }}
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="Speech Enhancement with real Spectrum Approximation"
            url="https://www.researchgate.net/publication/332791296_Supervised_Speech_Enhancement_with_Real_Spectrum_Approximation"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="Denoising with Deep Learning"
            url="https://www.analyticsvidhya.com/blog/2022/03/audio-denoiser-a-speech-enhancement-deep-learning-model/"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="Expensive Tools used for Podcasts"
            url="https://www.musicradar.com/news/best-podcasting-microphones"
          />
          {/* <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="Significance of Hajj (Pilgrimage) in Quran & Sunnah- The Fifth Pillar of Islam"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="Facts About Prophet Muhammad (SAW) Muslims Should Spread"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
