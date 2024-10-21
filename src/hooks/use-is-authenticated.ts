import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { userActions } from "../data-services/user-dux";

export const useIsAuthenticated = () => {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = !!user.data;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(userActions.loadCurrentUser());
    }
  }, []);

  return { isAuthenticated, isLoading: user.loading };
};
