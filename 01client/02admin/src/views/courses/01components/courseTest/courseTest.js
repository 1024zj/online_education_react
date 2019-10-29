import React from "react";
import "./courseTest.css";
import { Icon, Button, Radio, Table, Upload, message } from "antd";
import net from "../../../../utils/net";
import CourseCreate from "../courseCreate/courseCreate";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const columns = [
  {
    title: "名称",
    dataIndex: "name",
    render: text => <a>{text}</a>
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '题目统计',
    dataIndex: 'subject',
  },
  {
    title: '更新人/时间',
    dataIndex: 'adminTime',
  },
  {
    title: '操作',
    dataIndex: 'action',
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  }
];
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
export default class CourseInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
  }
  // componentDidMount() {
  //   console.log(this.props.match.path)
  // };
  showImportBox() {
    this.refs.importBox.style.display = "block";
  }
  closeImportBox() {
    this.refs.importBox.style.display = "none";
  }

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };
    return (
      <div className="courseTestBox">
        <div className="testHeader">
          <h1 className="testTitle">课程试卷</h1>
          <div className="btnBox">
            <Link to={`/home/courses/add/created`} style={{ color: "white" }}>
              <Button
                style={{
                  backgroundColor: "#278BF5",
                  color: "white",
                  width: 100,
                  fontSize: "12px"
                }}
              >
                <Icon type="plus" />
                <span>创建试卷</span>
              </Button>
            </Link>
          </div>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          style={{ width: "98.5%", margin: "0 auto", margin: "10px" }}
          pagination={{ pageSize: 12, position: "right" }}
        />
        <Button style={{ backgroundColor: "#ECECEC" }}>删除</Button>
      </div>
    );
  }
}
