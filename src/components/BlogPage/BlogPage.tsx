/* eslint-disable jsx-a11y/alt-text */
import "./blog.scss";

export const BlogPage = () => {
  return (
    <section className="blog">
      <h1 className="page__title_medium blog__title">Blog</h1>
      <div className="blog-container">
        <div
          // src='images/blog-main-img.png'
          className="blog__main-img"
        />
        <div className="blog-container-about">
          <div>
            <h1 className="page__title_medium blog__title blog__title_medium">
              About me
            </h1>
            <p className="blog__subtitle">
              Hi! I'm excited to help you gain confidence and conquer all fears
              of public speaking.
            </p>
          </div>
          <div>
            <h2 className="blog__subtitle blog__subtitle-list">Facts about me:</h2>
            <ul className="blog__list">
              <li className="blog__item">Speaker at over 15+ conferences</li>
              <li className="blog__item">
                Creator of a public speaking course attended by 150-200
                participants
              </li>
              <li className="blog__item">
                Annually increase my income by at least 45% due to my lack of
                fear in public speaking (this year I've signed contracts with
                Big Bus Tours, Hard Rock Cafe, and Madame Tussauds in Los
                Angeles)
              </li>
              <li className="blog__item">
                Achieved top results at the Italian university UNIMC and KNU
                thanks to successful project presentations
              </li>
              <li className="blog__item">
                Successfully passed the interview and won one of only two
                available funded PhD positions with a scholarship in Italy
              </li>
            </ul>
          </div>
          <p className="blog__caption">
            Let's unleash your potential together!
          </p>
        </div>
      </div>
      <div className="blog-container-topic">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="images/camera-img-desktop.png"
          />
          <source
            media="(min-width: 640px)"
            srcSet="images/camera-img-tablet.png"
          />
          <img src="images/camera-img.svg" className="blog-img" />
        </picture>
        <div className="blog-container-paragraph">
          <h1 className="page__title_medium blog__title blog__title_medium">
            Topic
          </h1>
          <p className="blog__paragraph">
            My name is Sarah, and I used to be terrified of speaking in public.
            Every time I stood in front of a crowd, my heart would race, my
            palms would sweat, and my mind would go blank. But I refused to let
            fear hold me back from my dreams. <br /> <br />
            That's why I decided to enroll in a public speaking course. It was
            one of the most challenging decisions I've ever made, but also one
            of the most rewarding. Week after week, I pushed myself to confront
            my fears head-on, guided by an amazing instructor and supported by a
            group of fellow learners who quickly became my cheerleaders.
            <br /> <br />
            With each speech I delivered, I felt a little more confident, a
            little more assured. I learned techniques to control my nerves,
            project my voice, and connect with my audience. But more than that,
            I discovered a strength within myself that I never knew existed.{" "}
            <br /> <br />
            <span className="blog__paragraph-addition">
              And then, the day of our graduation arrived. As I stood on that
              stage, looking out at the sea of faces before me, I felt a surge
              of adrenaline unlike anything I'd ever experienced. But this time,
              it wasn't fear coursing through my veins – it was excitement,
              anticipation, sheer exhilaration. <br /> <br />
              With trembling hands but a steady voice, I delivered my final
              speech. And as the applause washed over me, I knew that I had done
              it. I had conquered my fear of public speaking. But even more
              importantly, I had found my voice – and I was ready to use it to
              chase my dreams and make a difference in the world.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
