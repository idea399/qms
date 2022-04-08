import { Table, Tag, Input, Space,  Row, Col, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Modified',
    dataIndex: 'modified',
    key: 'modified',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    title: 'Ball & GGC Valves	',
    created: '2022-04-05 05:45',
    modified: '2022-04-06 14:08',
  },
  {
    key: '2',
    title: 'Floating Ball Valve	',
    created: '2022-04-05 05:45',
    modified: '2022-04-06 14:08',
  },
  {
    key: '3',
    title: 'Turnnion Ball Valve	',
    created: '2022-04-05 05:45',
    modified: '2022-04-06 14:08',
  },
];

function ProductGroup() {

	const onSearch = value => console.log(value);

	return (
		<div>
			 <Row justify="space-between" className="py-4">
	      <Col span={12}>
					<Search placeholder="input search text" onSearch={onSearch} enterButton />
	      </Col>
	      <Col span={12}>
	      	<Button type="primary" shape="round" icon={<PlusOutlined />} size={'large'}>
	          Add
	        </Button>
	      </Col>
	    </Row>
			<Table columns={columns} dataSource={data} />
		</div>
	);
}

export default ProductGroup;