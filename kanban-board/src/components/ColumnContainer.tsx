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
    <div className="bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">

      {/* column title */}
      <div className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between">

        <div className="flex gap-2">
            {/* item count badge */}
            <div className="flex justify-center items-center bg-columnBackgroundColor
                px-2 py-1 text-sm rounded-full"
                >0
            </div>

            {column.title}
        </div>

          {/* <button>Delete</button> */}
        <button 
          onClick={() => {
            // Delete column based on ID
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rouned px-1 py-2"><TrashIcon /></button>
      </div>

      {/* column task container */}
      <div className="flex flex-grow">Content</div>

      {/* column footer */}
      <div>Footer</div>
    </div>
  )
}

export default ColumnContainer
