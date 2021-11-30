
import React from 'react';
import { Alert, Stack } from "@mui/material";

interface propsType{
    severity: any;
}

const Message: React.FC<propsType> = ({ severity, children }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={severity}>{children}</Alert>
    </Stack>
  );
};

export default Message;
