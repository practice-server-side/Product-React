import * as React from "react";
import { Table } from "antd";

import useMyMallListQuery from "../query/useMyMallListQuery";

export const MyMallList = () => {
  const { data } = useMyMallListQuery();

  return (
    <>
      <Table dataSource={data?.malls}>
        <Table.Column title="몰 아이디" dataIndex="mallId" />
        <Table.Column title="몰 이름" dataIndex="mallName" />
      </Table>
    </>
  );
};

export default MyMallList;
