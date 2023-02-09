import React from "react";
import LockerDialog from "./Dialog";

export default function LockerItem(props) {
  const { 
      taskGid,
      customerCode,
      customerBranchCode,
      lockerId,
      parcelId,
      parcelNumber,
      lockerSize,
      lockerUid,
      depth,
      width,
      height,
      lockerStatus,
      lockerState
   } = props;
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

  const defineColor = (lockerState) => {
    if (lockerState === 7) return "transparent";
    else {
      if (lockerState === "Γεμάτο") return "#ff5252";
      else if (lockerState === "Άδειο") return "#66bb6a";
      else if (lockerState === "Δεσμευμένο") return "#c0ca33";
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
          backgroundColor: defineColor(lockerState),
          alignContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {parcelId} {parcelNumber}
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
