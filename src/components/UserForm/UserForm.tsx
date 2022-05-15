import { UserOutlined } from "@ant-design/icons";
import { Avatar, Descriptions } from "antd";



const Home = () => {
  return (
    <Descriptions title="User Info" bordered={true} column={1} size="middle" labelStyle={{fontSize: 16, fontWeight: 800}}>
      <Descriptions.Item label="Avatar">
        <Avatar
          size={64}
          icon={<UserOutlined style={{ fontSize: "40px" }} />}
          style={{ fontSize: "10px" }}
        />
      </Descriptions.Item>
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Email">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Password">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Home;
