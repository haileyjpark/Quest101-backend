import React, { useEffect, useState } from 'react';

const usePathValid = pathname => {
  const [isNavPathVaild, setIsNavPathVaild] = useState(false);
  const [isCreatorNavPathVaild, setIsCreatorNavPathVaild] = useState(false);

  useEffect(() => {
    const isNavPath = !pathname.match(/\/login/);
    const isCreatorNavPath = pathname.match(/\/creator+/);
    setIsNavPathVaild(isNavPath && !isCreatorNavPath);
    setIsCreatorNavPathVaild(isCreatorNavPath);
  }, [pathname]);

  return [isNavPathVaild, isCreatorNavPathVaild];
};
export default usePathValid;
