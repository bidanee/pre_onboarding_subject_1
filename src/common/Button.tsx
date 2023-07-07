import useRouter from "../hooks/useRouter";

interface RouteBtnProps {
  path: string;
  children: string;
}
const RouteButton = ({ path, children }: RouteBtnProps) => {
  const { push } = useRouter();
  return (
    <button className="btn btn-neutral mt-10" onClick={() => push(path)}>
      {children}
    </button>
  );
};
export default RouteButton;
