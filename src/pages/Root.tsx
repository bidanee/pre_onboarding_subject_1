import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  return (
    <div className="w-11/12 flex justify-center items-center">
      <div className="text-red-600">Root</div>
      <button onClick={() => push("/about")}>Go to About</button>
    </div>
  );
};

export default Root;
