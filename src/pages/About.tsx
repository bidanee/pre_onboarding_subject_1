import RouteButton from "../common/Button";

const About = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className=" text-gray-800 text-8xl">About</div>
      <RouteButton path="/" children="Go home" />
    </div>
  );
};

export default About;
