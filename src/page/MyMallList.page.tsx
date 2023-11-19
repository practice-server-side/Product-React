import * as React from "react";
import useMyMallListQuery from "../query/useMyMallListQuery";

export const MyMallList = () => {
  const { data } = useMyMallListQuery();

  return (
    <>
      {data?.malls.map((m, i) => (
        <tr key={i}>
          <td>{m.mallId}</td>
          <td>{m.mallName}</td>
        </tr>
      ))}
    </>
  );
};

export default MyMallList;
