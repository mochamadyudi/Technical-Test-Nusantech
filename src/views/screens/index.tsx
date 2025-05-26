import React from 'react';
import { Button, Typography } from "antd";
import { Link } from 'react-router-dom'

export default function Page(){

  return (
    <React.Fragment>
      <Typography.Title level={1}>Home</Typography.Title>
      <Link to={"/auth/login"}>
        <Button>Login</Button>
      </Link>
    </React.Fragment>
  )
}
