// import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// // Register chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const Dashboard = ({ users, orders, products }) => {
//   // Data for the bar chart
//   const barData = {
//     labels: ['Users', 'Orders', 'Products'],
//     datasets: [
//       {
//         label: 'Statistics',
//         data: [users, orders, products], // Adjust data based on actual values
//         backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
//         borderColor: ['#388E3C', '#1976D2', '#F57C00'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for the pie chart
//   const pieData = {
//     labels: ['Users', 'Orders', 'Products'],
//     datasets: [
//       {
//         label: 'Statistics',
//         data: [users, orders, products],
//         backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
//         borderColor: ['#388E3C', '#1976D2', '#F57C00'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Admin Dashboard Statistics',
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Sidebar could be added here if needed */}
      
//       {/* Content area */}
//       <div className="flex-1 p-6">
//         <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        
//         {/* Bar Chart */}
//         <div className="mb-8">
//           <h2 className="text-lg font-semibold mb-4">Overall Statistics (Bar Chart)</h2>
//           <div className="p-4 bg-white rounded-lg shadow-md">
//             <Bar data={barData} options={options} />
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="mb-8">
//           <h2 className="text-lg font-semibold mb-4">Overall Statistics (Pie Chart)</h2>
//           <div className="p-4 bg-white rounded-lg shadow-md">
//             <Pie data={pieData} options={options} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ users, orders, products }) => {
  // Data for the bar chart
  const barData = {
    labels: ['Users', 'Orders', 'Products'],
    datasets: [
      {
        label: 'Statistics',
        data: [users, orders, products], // Adjust data based on actual values
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
        borderColor: ['#388E3C', '#1976D2', '#F57C00'],
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ['Users', 'Orders', 'Products'],
    datasets: [
      {
        label: 'Statistics',
        data: [users, orders, products],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
        borderColor: ['#388E3C', '#1976D2', '#F57C00'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow manual size control
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Admin Dashboard Statistics',
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Content area */}
      <div className="flex-1 p-6">
        {/* <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> */}
        
        {/* Bar Chart */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Overall Statistics (Kenzy chart)</h2>
          <div className="p-4 bg-white rounded-lg shadow-md">
            {/* Set max width/height for desktop and allow flexible size for mobile */}
            <div className="relative" style={{ height: '400px', maxWidth: '800px', margin: '0 auto' }}>
              <Bar data={barData} options={options} />
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Overall Statistics (Pie Chart)</h2>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="relative" style={{ height: '400px', maxWidth: '400px', margin: '0 auto' }}>
              <Pie data={pieData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
