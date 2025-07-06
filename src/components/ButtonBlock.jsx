// rafceと入力後タブキーを押してください🤗

import React from "react";
// mui(cssフレームワーク=予め部品などのスタイルが適用されているものの総称🤗)
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const ButtonBlock = ({ title, ookisa, iro, text }) => {
  return (
    <>
      <AccessAlarmIcon />
      <h1>{title}</h1>
      <div>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </div>
      {/*  */}
      <Button variant="contained" color={iro} size={ookisa}>
        {text}
      </Button>
    </>
  );
};

export default ButtonBlock;
