import useMyInfoQuery from "../query/useMyInfoQuery";

export const myInfoHook = () => {
  const myInfoData = useMyInfoQuery();

  return {
    myInfoData
  };
};

export default myInfoHook;
