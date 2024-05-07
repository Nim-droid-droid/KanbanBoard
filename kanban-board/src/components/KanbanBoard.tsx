// import React from 'react'

import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";

function KanbanBoard() {
  // Anything that is passed into columns has to match the shape of type Column interface -> so whatever is passed into columns var has to be an obj that HAS data type str or num that will be stored into the id prop & a str that can be stored into the title prop of the of Column obj??
    // This obj is then saved to useState columns
  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <div>

    </div>
    )
}

export default KanbanBoard