<h1 align="center">
  CI CD Sandbox Frontend
</h1>
<h3 align="center"></h3>

[![React](https://img.shields.io/badge/react-17.0.1-lightgrey.svg)](https://github.com/facebook/react)

## 📦 Table of Contents

1. [Rules](#📜-rules)
2. [Requirements](#-requirements)
3. [Installation](#-installation)
4. [Running the Project](#-running-the-project)
5. [Project Structure](#-project-structure)
6. [Development Tools](#-development-tools)
7. [Wikihow](#-wikihow)
8. [Code Review Process](#-code-review-process)
9. [Building for Production](#-building-for-production)
10. [Troubleshooting & FAQ](#-troubleshooting-&-faq)

### 🌐 How to use `Tabs` component?

Import `Tabs` from `components/BasicComponents/Tabs`

```typescript
  ...
 const [currentTab, setCurrentTab] = useState<string | undefined>('1') // tab's key to use current tab;

  const onChangeTab = (tab: string) => {
    setCurrentTab(tab);
  };
  const tabsInfo = [
    {
      value: '1', // tab's key
      label: 'Tab Demo 1', // use locale
      component: <>Tab demo 1</>, // component to render
    },
    {
      value: '2',
      label: 'Tab Demo 2',
      component: <>Tab demo 2</>,
    },
  ];
  ...
  
  return (
    <>
    ... 
      <Tabs
        currentTab={currentTab}
        tabsInfo={tabsInfo}
        onChange={onChangeTab}
        renderTabPane={(tab) => <Box key={tab.value}>{tab.component}</Box>}
      />
      ...
    </>
  )
```
