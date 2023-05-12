import React from "react";

const EditButton = React.forwardRef((props, ref) => {
  return (
    <div className="edit-input">
      <input type="text" placeholder={props.placeholder} ref={ref} />
    </div>
  );
});

export default EditButton;
