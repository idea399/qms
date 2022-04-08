<<<<<<< HEAD
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

=======
import { Breadcrumb } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

function BasicSetting() {
  const location = useLocation();
  console.log(location);
>>>>>>> 6e6df55245913dab111fb935b9c46597842e1574
  return (
    <>
      <Breadcrumb className="mx-4 my-2">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
        <Breadcrumb.Item>Basic Settings</Breadcrumb.Item>
      </Breadcrumb>

<<<<<<< HEAD
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
=======
      <div className="bg-white border-t border-b border-gray-200 p-3">
        <div className="p-2 mb-3 border border-gray-200">
          <Link
            to={`/settings/basic/product-group`}
            className={`ant-btn ${
              location.pathname.indexOf(`/settings/basic/product-group`) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Product Group
          </Link>
          <Link
            to={`/settings/basic/plant`}
            className={`ml-2 ant-btn ${
              location.pathname.indexOf(`/settings/basic/plant`) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Plant
          </Link>
          <Link
            to={`/settings/basic/department`}
            className={`ml-2 ant-btn ${
              location.pathname.indexOf(`/settings/basic/department`) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Department
          </Link>
          <Link
            to={`/settings/basic/employee`}
            className={`ml-2 ant-btn ${
              location.pathname.indexOf(`/settings/basic/employee`) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Employee
          </Link>
          <Link
            to={`/settings/basic/management-rep`}
            className={`ml-2 ant-btn ${
              location.pathname.indexOf(`/settings/basic/management-rep`) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Management Rep
          </Link>
          <Link
            to={`/settings/basic/customer-complaint-rep`}
            className={`ml-2 ant-btn ${
              location.pathname.indexOf(
                `/settings/basic/customer-complaint-rep`
              ) === 0
                ? "ant-btn-primary"
                : ""
            }`}
          >
            Customer Complaint Rep
          </Link>
        </div>

        <div className="border border-gray-200 p-2">
          <Outlet />
        </div>
>>>>>>> 6e6df55245913dab111fb935b9c46597842e1574
      </div>
    </>
  );
}

export default BasicSetting;
