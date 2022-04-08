import React, {useState} from 'react';
import { Breadcrumb, Menu } from "antd";
import { GroupOutlined, BankOutlined, ClusterOutlined, TeamOutlined, SolutionOutlined, ReadOutlined } from '@ant-design/icons';
import ProductGroup from './ProductGroup';

const { SubMenu } = Menu;

function BasicSetting() {
  const [current, setCurrent] = useState('product-group');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Breadcrumb className="mx-4 my-4">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
        <Breadcrumb.Item>Plants</Breadcrumb.Item>
      </Breadcrumb>

      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="product-group" icon={<GroupOutlined />}>
          Product Group
        </Menu.Item>
        <Menu.Item key="plant" icon={<BankOutlined />}>
          Plant
        </Menu.Item>
        <Menu.Item key="department" icon={<ClusterOutlined  />}>
          Department
        </Menu.Item>
        <Menu.Item key="employee" icon={<TeamOutlined  />}>
          Employee
        </Menu.Item>
        <Menu.Item key="menagement-rep" icon={<SolutionOutlined  />}>
          Management Rep
        </Menu.Item>
        <Menu.Item key="customer-complaint-rep" icon={<ReadOutlined />}>
          Customer Complaint Rep
        </Menu.Item>
      </Menu>

      <div className="bg-white" style={{ minHeight: 360 }}>
        <ProductGroup />
      </div>
    </>
  );
}

export default BasicSetting;
