import { useCallback, useMemo } from "react";
import shortid from "shortid";

const gen = (componentName: string): string => {
  return `${componentName}-${shortid.generate()}`;
};

const useClassName = (componentName: string, omitId?: boolean) => {
  const baseName = useMemo(() => {
    if (omitId) {
      return componentName;
    }
    return gen(componentName);
  }, [componentName, omitId]);

  const pfx = useCallback(
    (className: string) => {
      return `${baseName}-${className}`;
    },
    [baseName]
  );

  return {
    baseName,
    pfx,
  };
};

export default useClassName;
