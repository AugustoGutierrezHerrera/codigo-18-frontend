import { Children } from 'react';

export default function AboutMi({children}) {
  return (
    <>
      <div>
        <hr className="border border-custom-484848" />
      </div>
      <div className="flex gap-20 pt-20">
        <div className="w-1/2">
          <h2 className="text-white font-bebasNeue text-7xl ">Acerca de mí</h2>
        </div>
        <div className="w-10/12">
          <h4 className="text-white font-manrope text-2xl pb-5">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </h4>
          <p className="text-custom-C7C7C7 text-base pb-10">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
          {children}
        </div>
            
      </div>
    </>
  );
}
