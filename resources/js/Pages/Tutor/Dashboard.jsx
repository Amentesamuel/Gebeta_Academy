import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { TutorBanner1 } from '../../../../public/img';
import { FiHome, FiUsers, FiCalendar, FiSettings, FiBook } from 'react-icons/fi';
import { Link, usePage } from '@inertiajs/react';
import Mainlayout from '@/Layouts/Mainlayout';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Legend
);

const Dashboard = ({ children }) => {
    
    // Sample data for charts
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Students Progress',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const doughnutData = {
        labels: ['Complete', 'In Progress', 'Not Started'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
        }]
    };

    return (
        <Mainlayout>

        <div className="flex h-screen font-poppins p-1  bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white rounded-xl shadow-lg">
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800">Tutor Panel</h2>
                </div>
                <nav className="mt-4">
                    <Link href="profile" className="flex items-center px-4 py-3 text-gray-600 hover:bg-button hover:text-white rounded-md" >
                        <FiHome className="mr-3" /> Profile
                    </Link>
                    <Link href="/Tutordashboard/apply" className="flex items-center px-4 py-3 text-gray-600 hover:bg-button hover:text-white rounded-md" >
                        <FiUsers className="mr-3" /> Apply
                    </Link>
                    <Link href="/Tutordashboard/edit" className="flex items-center px-4 py-3 text-gray-600 hover:bg-button hover:text-white rounded-md" >
                        <FiCalendar className="mr-3" /> Edit CV
                    </Link>
                </nav>
            </div>
            <div className='flex-1 overflow-auto p-8'>
                {children}
                
            </div>
        </div>
        </Mainlayout>
    );
};

export default Dashboard;
