import { useCallback, useState } from "react";
import List from "../../slidesComponents/List/List";
import ListItem from "../../slidesComponents/List/ListItem";

const Avatar = ({src}: { src: string }) => {
  return <img style={ {width: 36, height: 36, borderRadius: 18} } src={ src }/>;
};

const ListExample = () => {
  const [ selectedIds, setSelectedIds ] = useState<Set<string>>(new Set([ "dan-abramov" ]));

  const toggleIdSelection = useCallback((id: string) => {
    setSelectedIds(prevState => {
      const cp = new Set(prevState);
      if (cp.has(id)) {
        cp.delete(id);
        return cp;
      }

      cp.add(id);
      return cp;
    })
  }, []);

  return (<div>
      <List>
        <ListItem isSelected={ selectedIds.has("dan-abramov") } onClick={ () => {
          toggleIdSelection("dan-abramov")
        } }>
          <Avatar
            src={ "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg" }
          />
          Dan Abramov
        </ListItem>
        <ListItem isSelected={ selectedIds.has("john-dalton") } onClick={ () => {
          toggleIdSelection("john-dalton")
        } }>
          <Avatar
            src={ "https://pbs.twimg.com/profile_images/1362836032698396675/KGOGS8dZ_400x400.jpg" }
          />
          John-David Dalton
        </ListItem>
        <ListItem isSelected={ selectedIds.has("kent-c-dodds") } onClick={ () => {
          toggleIdSelection("kent-c-dodds")
        } }>
          <Avatar
            src={ "https://pbs.twimg.com/profile_images/1444988463216922631/IDffhy4i_400x400.jpg" }
          />
          Kent C. Dodds
        </ListItem>
      </List>
    </div>);
};

export default ListExample;
