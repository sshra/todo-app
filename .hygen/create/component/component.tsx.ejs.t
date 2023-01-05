---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';
// import s from './<%= component_name %>.module.scss';

interface IProps {}

export const <%= component_name %> = (props: IProps): React.ReactElement => {
  console.log('<%= component_name %>');
  return (
    <div><%= component_name %></div>
  );
};
