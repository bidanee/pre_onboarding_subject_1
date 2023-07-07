import RouteButton from "../common/Button";
import useRouter from "../hooks/useRouter";

const Root = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <div className="text-gray-800 text-8xl">Root</div>
      <RouteButton path="/about" children="About" />
    </div>
  );
};

export default Root;
