import useMyInfoQuery from "../query/useMyInfoQuery";

export const myInfoHook = () => {
  const myInfoData = useMyInfoQuery();
  //TODO : 왜자꾸 요청보내지는지 확인 필요함

  return {
    myInfoData
  };
};

export default myInfoHook;
