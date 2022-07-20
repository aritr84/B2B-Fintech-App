import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField, IconButton } from "@mui/material";
import { popup } from "./Popup";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import Predict from "./Forms/predict";

//--- icons --
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

// ------------

const Buttons = ({
  searchText,
  setSearchText,
  selectedRowIds,
  selectedRows,
  data,
  setData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popuptype, setpopuptype] = useState("");
  const [editbtn, setEditbtn] = useState(true);

  const togglePopup = (name) => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setpopuptype("");
    } else {
      setIsOpen(!isOpen);
      setpopuptype(name);
    }
  };

  useEffect(() => enableEditBtn(selectedRowIds), [selectedRowIds]);

  const enableEditBtn = (selected) => {
    const x = selected.size === 1 ? false : true;
    setEditbtn(x);
  };

  const handleSearch = () => {
    setData(data.filter((row) => row.cust_number.includes(searchText)));
  };

  return (
    <div className="button">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          id="predictbtn"
          variant="contained"
          disabled={!selectedRowIds.size}
          style={{ border: "1px solid " }}
          onClick={() => Predict({ selectedRows, data, setData })}
        >
          <TimelineOutlinedIcon style={{ marginRight: "10px" }} />
          PREDICT
        </Button>
        <Button style={{ border: "1px solid" }}>
          <AnalyticsOutlinedIcon
            style={{ marginRight: "10px", color: "whitesmoke" }}
          />
          ANALYTICS VIEW
        </Button>
        <Button
          onClick={() => togglePopup("ADVANCESEARCH")}
          style={{ border: "1px solid" }}
        >
          <PersonSearchOutlinedIcon
            style={{ marginRight: "10px", color: "whitesmoke" }}
          />
          ADVANCE SEARCH
        </Button>
        <Button
          onClick={() => window.location.reload(false)}
          style={{ border: "1px solid" }}
        >
          {" "}
          <RefreshIcon className="refresh"></RefreshIcon>{" "}
        </Button>
      </ButtonGroup>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <TextField
          id="outlined-basic"
          label="Search Customer ID"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon onClick={() => handleSearch()} />
              </IconButton>
            ),
          }}
          value={searchText}
        />
      </div>

      {popup(
        isOpen,
        togglePopup,
        popuptype,
        selectedRowIds,
        selectedRows,
        data,
        setData
      )}

      <ButtonGroup
        className="button-right"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          id="addbtn"
          onClick={() => togglePopup("ADD")}
          style={{ padding: "5px 20px", border: "1px solid" }}
        >
          <AddOutlinedIcon style={{ marginRight: "10px", color: "white" }} />
          ADD
        </Button>
        <Button
          id="editbtn"
          onClick={() => togglePopup("EDIT")}
          style={{ padding: "5px 40px", border: "1px solid" }}
          disabled={editbtn}
        >
          <ModeEditOutlineOutlinedIcon
            style={{ marginRight: "10px", color: "yellow" }}
          />
          EDIT
        </Button>
        <Button
          id="deletebtn"
          onClick={() => togglePopup("DELETE")}
          style={{ padding: "5px 40px", border: "1px solid" }}
          disabled={!selectedRowIds.size}
        >
          <DeleteOutlinedIcon style={{ marginRight: "10px", color: "red" }} />
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
