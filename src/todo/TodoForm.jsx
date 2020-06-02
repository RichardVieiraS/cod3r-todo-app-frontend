import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/IconButton";

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Aciciona uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        ></input>
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
          hide={false}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={props.handleSearch}
          hide={false}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={props.handleClear}
          hide={false}
        ></IconButton>
      </Grid>
    </div>
  );
};
