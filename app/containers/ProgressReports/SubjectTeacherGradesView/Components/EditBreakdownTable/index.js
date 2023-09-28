import React from 'react';
import KenDrawer from '../../../../../global_components/KenDrawer/index';
import KenTabs from '../../../../../components/KenTabs';
import MaBreakdown from './components/maBreakdown';
import PpBreakdown from './components/ppBreakdown';

export default function EditBreakdownTable(props) {
  const {
    data,
    setOpenDrawerBreakdown,
    courseOfferingId,
    // term,
    setUpdateData,
    standard,
  } = props;

  console.log(data);

  const [breakdownData, setBreakdownData] = React.useState();
  const [breakData, setBreakdata] = React.useState(data);

  React.useEffect(() => {
    let arrOne = [
      {
        title: 'P&P (5M)',
        content: (
          <PpBreakdown
            data={breakData}
            setOpenDrawerBreakdown={setOpenDrawerBreakdown}
            courseOfferingId={courseOfferingId}
            setUpdateData={setUpdateData}
            setData={setBreakdata}
            type="two"
          />
        ),
      },
      {
        title: 'MA (5M)',
        content: (
          <MaBreakdown
            data={breakData}
            setOpenDrawerBreakdown={setOpenDrawerBreakdown}
            courseOfferingId={courseOfferingId}
            setUpdateData={setUpdateData}
            setData={setBreakdata}
            type="two"
          />
        ),
      },
    ];

    let arrTwo = [
      {
        title: 'P&P (5M)',
        content: (
          <PpBreakdown
            data={breakData}
            setOpenDrawerBreakdown={setOpenDrawerBreakdown}
            courseOfferingId={courseOfferingId}
            setUpdateData={setUpdateData}
            setData={setBreakdata}
            type="three"
          />
        ),
      },
      {
        title: 'MA (5M)',
        content: (
          <MaBreakdown
            data={breakData}
            setOpenDrawerBreakdown={setOpenDrawerBreakdown}
            courseOfferingId={courseOfferingId}
            setUpdateData={setUpdateData}
            setData={setBreakdata}
            type="three"
          />
        ),
      },
    ];

    if (data[0].term === 'Annual' && Object.keys(data[0]).length > 18) {
      setBreakdownData([
        {
          title: 'PERODIC ASSESMENT-2',
          content: <KenTabs data={arrOne} />,
        },
        {
          title: 'PERODIC ASSESMENT-3',
          content: <KenTabs data={arrTwo} />,
        },
      ]);
    } else {
      setBreakdownData([
        {
          title: 'P&P (5M)',
          content: (
            <PpBreakdown
              data={breakData}
              setOpenDrawerBreakdown={setOpenDrawerBreakdown}
              courseOfferingId={courseOfferingId}
              setUpdateData={setUpdateData}
              setData={setBreakdata}
              type="one"
            />
          ),
        },
        {
          title: 'MA (5M)',
          content: (
            <MaBreakdown
              data={breakData}
              setOpenDrawerBreakdown={setOpenDrawerBreakdown}
              courseOfferingId={courseOfferingId}
              setUpdateData={setUpdateData}
              setData={setBreakdata}
              type="one"
            />
          ),
        },
      ]);
    }
  }, [breakData]);
  return (
    <KenDrawer
      title="Periodic Assesment"
      onClose={() => {
        setOpenDrawerBreakdown(false);
      }}
    >
      <KenTabs data={breakdownData} />
    </KenDrawer>
  );
}
