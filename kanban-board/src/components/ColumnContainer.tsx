import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types"

// interface Props so that i can defines the properties that are going to pass through the  column container, so  contains a column of type column
interface Props{
  column: Column;
  // the function takes an ID of type ID nothing
  deleteColumn: (id: Id) => void;
}


function ColumnContainer(props: Props) {
  //Destructuring; extract the column property from the props
  const {column, deleteColumn} = props;

  return (
    <div>
      
    </div>
  )
}

export default ColumnContainer
