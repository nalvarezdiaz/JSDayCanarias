import { useContext } from "react";
import { SelectContext } from "./SelectProvider";

const useSelect = () => useContext(SelectContext);

export default useSelect;
