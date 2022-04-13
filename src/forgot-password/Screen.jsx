/** @jsx jsx */
import React from "react";
import Form from "./Form";
import Toast from "../app/common/Toast";
import * as service from "./service";
import { toast } from "react-toastify";
import { jsx } from "@emotion/core";
import { wrapper } from "./Screen.styles";

const Screen = () => {
  const onSendEmadil = email => {
    service
      .sendEmail(email)
      .then(response =>
        toast.success(<Toast type="success" msg={response.data.message} />, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        })
      )
      .catch(err => {
        toast.error(<Toast type="error" msg={err.response.data.message} />, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        });
      });
  };

  return (
    <div css={wrapper}>
      <Form onSendEmail={onSendEmadil} />
    </div>
  );
};

export default Screen;
