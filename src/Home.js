import React from "react";
import SVapi from "../axios/svapi";
import { Space, Table, Avatar, Button } from "antd";
import Update from "./Update";
import { Link } from "react-router-dom";
const { Column, ColumnGroup } = Table;

export default function Home() {
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [showGet, setShowGet] = React.useState(true);
  const [Sv, setSv] = React.useState();
  const [statusDel, setStatusDel] = React.useState(false);
  const handleUpdateClick = (record) => {
    setSv(record);
    setShowGet(false);
    setShowUpdate(true);
  };
  const handleDeleteClick = (record) => {
    if (window.confirm(`Xóa sinh viên ${record.LastName} ?! `)) {
      const Delete = async () => {
        const response = await SVapi.DeleteSv(record._id);
        setStatusDel(!statusDel);
      };
      Delete();
    }
  };
  const [posts, setPosts] = React.useState([{}]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await SVapi.getAll();
      setPosts(response);
    };
    fetchData();
  }, [showGet, showUpdate, statusDel]);

  return (
    <>
      {showGet && (
        <>
          <Table dataSource={posts}>
            <Column
              title="Avatar"
              dataIndex="Avatar"
              key="avatar"
              render={(avatar) => (
                <>
                  <Avatar src={avatar}></Avatar>
                </>
              )}
            />
            <ColumnGroup title="Name">
              <Column
                title="First Name"
                dataIndex="FirstName"
                key="firstName"
              />
              <Column title="Last Name" dataIndex="LastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="Age" key="age" />
            <Column title="Class" dataIndex="Class" key="class" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <Button onClick={() => handleUpdateClick(record)}>
                    Update {record.LastName}
                  </Button>
                  <Button onClick={() => handleDeleteClick(record)}>
                    Delete {record.LastName}
                  </Button>
                </Space>
              )}
            />
          </Table>
          <Link to="/add">Thêm Sinh Viên</Link>
        </>
      )}

      {!showGet && <Update props={Sv} setShowGet={setShowGet} />}
    </>
  );
}
