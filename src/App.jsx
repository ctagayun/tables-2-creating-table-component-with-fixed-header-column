import * as React from 'react';
import './App.css'
import { useTheme } from '@table-library/react-table-library/theme';

/*
  Task: We will enable users to have their header sticky to the top
        You can now scroll the rows of the table in a vertical 
        direction while the header remains sticky at the top of the 
        table.
*/


//Import stuff from React Table Library
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,

} from '@table-library/react-table-library/table';

const list = [
  {
    id: "1",
    name: "VSCode",
    deadline: new Date(2020, 1, 17),
    type: "SETUP",
    isComplete: true,
  },
  {
    id: "2",
    name: "JavaScript",
    deadline: new Date(2020, 2, 28),
    type: "LEARN",
    isComplete: true,
  },
  {
    id: "3",
    name: "React",
    deadline: new Date(2020, 3, 8),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "4",
    name: "JSX",
    deadline: new Date(2020, 4, 10),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "5",
    name: "Hooks",
    deadline: new Date(2020, 5, 12),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "6",
    name: "Components",
    deadline: new Date(2020, 6, 14),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "7",
    name: "HTML",
    deadline: new Date(2020, 7, 17),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "8",
    name: "CSS",
    deadline: new Date(2020, 8, 28),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "9",
    name: "Classes",
    deadline: new Date(2020, 9, 18),
    type: "LEARN",
    isComplete: false,
  },
  {
    id: "10",
    name: "Functions",
    deadline: new Date(2020, 10, 5),
    type: "LEARN",
    isComplete: false,
  },
];
const THEME = {
  BaseRow: `
    font-size: 14px;
  `,
  HeaderRow: `
    background-color: #eaf5fd;
  `,
  Row: `
    &:nth-child(odd) {
      background-color: #d2e9fb;
    }

    &:nth-child(even) {
      background-color: #eaf5fd;
    }
  `,
};
const App = () => {
  //list is renamed to "nodes". Nodes is a property of data
  //Nodes are the items in our list. In this example
  //"data" is prop to the Table component.
  const data = { nodes: list }; 

  //Using theme
  const theme = useTheme({
    Table: `
      height: 100%;
    `,
  });

  /*Table component accepts {data} object as prop with
      "nodes property". Theme is another prop.
  */ 
  return (
    <div style={{ //a container div is all that is needed to keep the header in place when scrolling
      height: '150px',
      }}
    > 
      <Table data={data} theme={theme}> 
        {(tableList) => (
          <> 
            <Header>
              <HeaderRow>                      
                <HeaderCell>Task</HeaderCell>
                <HeaderCell>Deadline</HeaderCell>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Complete</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                    <Cell>{item.name}</Cell>
                    <Cell>
                      {item.deadline.toLocaleDateString('en-US',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }
                        )}
                    </Cell>
                    <Cell>{item.type}</Cell>
                    <Cell> 
                      {item.isComplete.toString()} 
                    </Cell>
                </Row>

              ))}
          </Body>
       </> //EOF Fragment
      )}

    </Table> 
    </div>
     );
};


export default App
