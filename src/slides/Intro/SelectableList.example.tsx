import { useState } from "react";
import ListItem from "../../slidesComponents/SelectableList/ListItem";
import ListSelection from "../../slidesComponents/SelectableList/ListSelection";
import SelectableList from "../../slidesComponents/SelectableList/SelectableList";

const Avatar = ({ src }: { src: string }) => {
  return <img style={{ width: 36, height: 36, borderRadius: 18 }} src={src} />;
};

const SelectableListExample = () => {
  const [selectedIds, setSelectedIds] = useState(["dan-abramov"]);

  return (
    <div>
      <SelectableList
        selectedItems={selectedIds}
        onSelectionChange={setSelectedIds}
      >
        <ListItem id={"dan-abramov"}>
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
            }
          />
          Dan Abramov
        </ListItem>
        <ListItem id={"john-dalton"}>
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/1362836032698396675/KGOGS8dZ_400x400.jpg"
            }
          />
          John-David Dalton
        </ListItem>
        <ListItem id={"kent-c-dodds"}>
          <Avatar
            src={
              "https://pbs.twimg.com/profile_images/1444988463216922631/IDffhy4i_400x400.jpg"
            }
          />
          Kent C. Dodds
        </ListItem>
        <ListSelection />
      </SelectableList>
    </div>
  );
};

export default SelectableListExample;
