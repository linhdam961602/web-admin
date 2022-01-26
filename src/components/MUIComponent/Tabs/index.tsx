import React, { forwardRef } from 'react';

// material
import MTabs from '@mui/material/Tabs';
import MTab from '@mui/material/Tab';
// component
import Box from 'components/MUIComponent/Box';

interface TabInfo {
  value?: string;
  label?: string;
  icon?: React.ReactElement;
  component: React.ReactElement;
  disabled?: boolean;
}

interface MTabsProps {
  currentTab?: any;
  tabsInfo: TabInfo[];
  onChange?: (value: any) => void;
  renderTabPane?: (tab: TabInfo) => React.ReactElement;
}

const Tabs = forwardRef<HTMLDivElement, MTabsProps>(
  ({ currentTab, tabsInfo, onChange, renderTabPane }) => {
    const handleChangeTab = (_e: React.SyntheticEvent, newValue: string) => {
      !!onChange && onChange(newValue);
    };

    return (
      <>
        <MTabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
        >
          {tabsInfo.map((tab) => (
            <MTab
              disableRipple
              key={tab.value}
              label={tab.label || tab.value}
              icon={tab.icon}
              value={tab.value}
              disabled={tab.disabled}
            />
          ))}
        </MTabs>

        {tabsInfo.map((tab) => {
          const isMatched = tab.value === currentTab;
          return (
            isMatched &&
            (renderTabPane ? (
              renderTabPane(tab)
            ) : (
              <Box sx={{ mt: 5 }} key={tab.value}>
                {tab.component}
              </Box>
            ))
          );
        })}
      </>
    );
  },
);

Tabs.displayName = 'Tabs';

export default Tabs;
