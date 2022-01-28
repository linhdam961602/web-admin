import Table from 'components/MUIComponent/Table';
import { mockData, headData } from './mockData';

const Dashboard = () => (
  <>
    <h2>DASHBOARD</h2>
    <Table columns={headData} rows={mockData} isShowFooter={false} />
  </>
);

export default Dashboard;
