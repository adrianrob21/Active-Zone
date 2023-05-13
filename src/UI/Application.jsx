import { Mock } from "Assets/images";
import { NavBar, PhotoCard } from "Components";

const Application = () => {
  return (
    <>
      <NavBar />
      <PhotoCard
        className={"h-80 w-80 mt-32 ml-32"}
        source={Mock}
        alt={"mock"}
      />
    </>
  );
};

export default Application;
