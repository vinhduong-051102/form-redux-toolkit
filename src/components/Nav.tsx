import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeFilled, FormOutlined } from "@ant-design/icons";
const Nav = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "item-2",
      icon: <HomeFilled style={{ transform: "translate(-20%,-30%)" }} />,
    },
    {
      label: <Link to="/register">Register Form</Link>,
      key: "item-1",
      icon: <FormOutlined style={{ transform: "translate(-20%,-20%)" }} />,
    },
  ];
  return <Menu items={items} mode="horizontal" theme="dark" />;
};

export default Nav;
