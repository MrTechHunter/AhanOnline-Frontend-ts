import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { Layout, Menu, Table, Button, Space } from "antd";

// Ant Design
const { Header, Content, Footer } = Layout;

const columns = [
  {
    title: "teamid",
    dataIndex: "teamid",
    key: "teamid",
  },
  {
    title: "organizationid",
    dataIndex: "organizationid",
    key: "organizationid",
  },
  {
    title: "businessunitid",
    dataIndex: "businessunitid",
    key: "businessunitid",
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "createdon",
    dataIndex: "createdon",
    key: "createdon",
  },
  {
    title: "modifiedon",
    dataIndex: "modifiedon",
    key: "modifiedon",
  },
  {
    title: "createdby",
    dataIndex: "createdby",
    key: "createdby",
  },
  {
    title: "modifiedby",
    dataIndex: "modifiedby",
    key: "modifiedby",
  },
  {
    title: "isdefault",
    dataIndex: "isdefault",
    key: "isdefault",
  },
  {
    title: "administratorid",
    dataIndex: "administratorid",
    key: "administratorid",
  },
  //   {
  //     title: "Edit",
  //     dataIndex: "",
  //     key: "x",
  //     render: () => <a href="#">Edit</a>,
  //   },
  //   {
  //     title: "Edit",
  //     dataIndex: "",
  //     key: "x",
  //     render: () => <a href="#">Delete</a>,
  //   },
];

export interface IValues {
  teamid: string;
  organizationid: string;
  businessunitid: string;
  name: string;
  description: string;
  createdon: string;
  modifiedon: string;
  createdby: string;
  modifiedby: string;
  isdefault: boolean;
  administratorid: string;
}

export default function Home() {
  const [data, setData] = useState([] as IValues[]);
  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const teams = await axios.get(`http://127.0.0.1:8000/teams/`);
    setData(teams.data);
    console.log(teams);
  };

  //   const deleteTeam = async (event: any, id: number) => {
  //     event.persist();
  //     await axios.delete(`http://127.0.0.1:8000/teams/${id}`).then((data_) => {
  //       getTeams();
  //     });

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={"teams"}>Teams</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: "25px 0", padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Space>
                <Link to={"team/add"}>
                  <Button style={{ marginBottom: 15 }}>Add Team</Button>
                </Link>
                <Link to={"/"}>
                  <Button type="primary" style={{ marginBottom: 15 }}>
                    Hide
                  </Button>
                </Link>
              </Space>
              <Outlet />
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 100 }}
                scroll={{ y: 540 }}
              />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          AhanOnline ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </>
  );
}
