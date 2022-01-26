import Table from 'components/MUIComponent/Table';
import { mockData, headData } from './mockData';
import SideBar from 'components/LayoutComponents/SideBar';

const Dashboard = () => (
  <>
    <SideBar />
    <h2>DASHBOARD</h2>
    <Table columns={headData} rows={mockData} isShowFooter={false} />
  </>
);

export default Dashboard;
