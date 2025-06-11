import verticals from "/logos/the-verticals.svg";
import expand from "/logos/expand.svg";
import gitam from "/logos/gitam.svg";

const About = () => {
  return (
    <>
      <div className="skills bg-white p-4">
        <h5 className="text-xl font-bold text-center">About</h5>
        <p className="text-center mt-3 leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quas laborum ullam nihil mollitia placeat porro est suscipit nesciunt
          ipsa voluptatum corporis repudiandae, eveniet ad aspernatur voluptate.
          Rerum, odio. Dolores, officia ut! Consequatur labore ex, ipsum illum
          vero ullam
        </p>
      </div>
      <div className="mt-4 exp bg-white p-4">
        <h5 className="text-xl font-bold text-center">Experience</h5>
        <div>
          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                FEB 2018 - MAR 2020
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img
                  className="w-14 h-5"
                  src={verticals}
                  alt="Verticals"
                />
                The Verticals
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Find more detailed insctructions here.
              </p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                MAR 2020 - FEB 2022
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img
                  className="w-14 h-5"
                  src={expand}
                  alt="Expand"
                />
                Expand Software Solutions
              </h3>              
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Finally! You can check it out here.
              </p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                FEB 2022 - JUN 2025 
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img
                  className="w-14 h-5"
                  src={gitam}
                  alt="GITAM"
                />
                GITAM
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Finally! You can check it out here.
              </p>
            </div>
          </div>          
        </div>
      </div>
      <div className="projects bg-white mt-4 p-4">
        <h5 className="text-xl font-bold text-center">Projects</h5>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
            <h6 className="font-semibold text-lg">Projects 1</h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at dolorum alias eos mollitia. Hic assumenda et numquam nisi odio, quidem enim nihil nam optio eum autem, aliquid quo consequuntur, reprehenderit ratione sint quod commodi error fugit quas nobis nulla tenetur molestias veritatis! Provident illo id est nesciunt quod quo perspiciatis, odit quasi neque veniam. Architecto delectus mollitia quod numquam aperiam, dolorum officia eaque, esse dolor odit molestias temporibus earum!
        </div>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
            <h6 className="font-semibold text-lg">Projects 2</h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at dolorum alias eos mollitia. Hic assumenda et numquam nisi odio, quidem enim nihil nam optio eum autem, aliquid quo consequuntur, reprehenderit ratione sint quod commodi error fugit quas nobis nulla tenetur molestias veritatis! Provident illo id est nesciunt quod quo perspiciatis, odit quasi neque veniam. Architecto delectus mollitia quod numquam aperiam, dolorum officia eaque, esse dolor odit molestias temporibus earum!
        </div>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
            <h6 className="font-semibold text-lg">Projects 2</h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at dolorum alias eos mollitia. Hic assumenda et numquam nisi odio, quidem enim nihil nam optio eum autem, aliquid quo consequuntur, reprehenderit ratione sint quod commodi error fugit quas nobis nulla tenetur molestias veritatis! Provident illo id est nesciunt quod quo perspiciatis, odit quasi neque veniam. Architecto delectus mollitia quod numquam aperiam, dolorum officia eaque, esse dolor odit molestias temporibus earum!
        </div>
      </div>
    </>
  );
};

export default About;
