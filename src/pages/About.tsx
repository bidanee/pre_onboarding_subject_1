import useRouter from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <>
      <div>About</div>
      <button onClick={() => push("/")}>go main</button>
    </>
  );
};

export default About;
