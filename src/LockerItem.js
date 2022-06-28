import React from "react";
import LockerDialog from "./Dialog";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function LockerItem(props) {
  const { height, title, index, status } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState({});

  const handleClickOpen = (values) => {
    setSelectedValue(values)
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const defineColor = (status) => {
    if (index === 7) return "transparent";
    else {
      if (status === "pending") return "red";
      else if (status === "open") return "grey";
      else if (status === "closed") return "yellow";
    }
  };
  return (
    <>
      <div
        className="item-container"
        onClick={() => handleClickOpen(props)}
        style={{
          height: height,
          width: 190,
          backgroundColor: defineColor(status),
          alignContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {title} {index}
        </div>
      </div>
      <LockerDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
