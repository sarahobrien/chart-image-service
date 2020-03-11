import React from 'react';
import { LineSeriesChart } from 'liveoptics.component.library';
import { ChartLegend } from 'liveoptics.component.library';

export const App = props => {
  const legendItems = [
    { color: '#27C595', label: 'Read' },
    { color: '#FFA800', label: 'Write' }
  ];
  const legend = <ChartLegend legendItems={legendItems} />;

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <LineSeriesChart
        title='SSR Line Series Chart'
        legend={legend}
        series={props.data}
      ></LineSeriesChart>
    </div>
  );
};

export default App;
