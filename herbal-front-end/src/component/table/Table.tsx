// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// import type { TableProps } from 'antd';
// import './table.css';


// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
//   img:string;
// }

// const columns: TableProps<DataType>['columns'] = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//     img:'q'
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//      img:'w'
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//      img:'ww'
//   },
// ];

// const TableCom: React.FC = () =>  <Table columns={columns} dataSource={data} className="custom-table-header" />;

// export default TableCom;
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import './table.css';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  img: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name & Image',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={record.img} 
          alt={record.name} 
          // style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }}
        />
        <a>{record.name}</a>
      </div>
    ),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    img: 'https://via.placeholder.com/30', // Replace with actual image URL
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    img: 'https://via.placeholder.com/30', // Replace with actual image URL
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    img: 'https://via.placeholder.com/30', // Replace with actual image URL
  },
];

const TableCom: React.FC = () => <Table columns={columns} dataSource={data} className="custom-table-header" />;

export default TableCom;
